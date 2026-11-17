-- =====================================================================
-- Curiosamente · banco de dados inicial (etapa 5 do roteiro)
--
-- Regra de ouro: cada pessoa só lê e escreve as PRÓPRIAS linhas (RLS).
-- O XP nunca é alterado direto pelo navegador: só pela função conceder_xp.
-- Rode este arquivo uma vez no "SQL Editor" do painel do Supabase.
-- =====================================================================


-- ---------------------------------------------------------------------
-- perfis: dados de cada usuário (criado sozinho quando a conta nasce)
-- ---------------------------------------------------------------------
create table public.perfis (
  id                uuid primary key references auth.users (id) on delete cascade,
  nome              text not null default 'Explorador' check (char_length(nome) between 1 and 60),
  avatar            text not null default 'lente' check (char_length(avatar) <= 40),
  area_favorita     text check (area_favorita in ('matematica', 'computacao')),
  xp_total          integer not null default 0 check (xp_total >= 0),
  nivel             integer not null default 1,
  sequencia_atual   integer not null default 0,
  maior_sequencia   integer not null default 0,
  ultimo_dia_estudo date,
  criado_em         timestamptz not null default now()
);

alter table public.perfis enable row level security;

create policy "ler o próprio perfil" on public.perfis
  for select using (auth.uid() = id);

create policy "editar o próprio perfil" on public.perfis
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- O navegador só pode mudar nome, avatar e área favorita. XP, nível e sequência, não.
revoke insert, update, delete on public.perfis from anon, authenticated;
grant update (nome, avatar, area_favorita) on public.perfis to authenticated;


-- ---------------------------------------------------------------------
-- progresso_capsulas: onde a pessoa parou em cada cápsula
-- ---------------------------------------------------------------------
create table public.progresso_capsulas (
  usuario_id        uuid not null default auth.uid() references auth.users (id) on delete cascade,
  capsula_id        text not null check (char_length(capsula_id) <= 80),
  etapa_atual       smallint not null default 0 check (etapa_atual between 0 and 7),
  etapas_concluidas text[] not null default '{}',
  concluida         boolean not null default false,
  camada_max        smallint not null default 1 check (camada_max between 1 and 3),
  melhor_pontuacao  smallint,
  palpites          jsonb not null default '{}',
  concluida_em      timestamptz,
  atualizado_em     timestamptz not null default now(),
  primary key (usuario_id, capsula_id)
);

alter table public.progresso_capsulas enable row level security;

create policy "ler o próprio progresso" on public.progresso_capsulas
  for select using (auth.uid() = usuario_id);
create policy "criar o próprio progresso" on public.progresso_capsulas
  for insert with check (auth.uid() = usuario_id);
create policy "atualizar o próprio progresso" on public.progresso_capsulas
  for update using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);
create policy "apagar o próprio progresso" on public.progresso_capsulas
  for delete using (auth.uid() = usuario_id);


-- ---------------------------------------------------------------------
-- eventos_xp: histórico "o que a pessoa já fez" (só a função conceder_xp escreve)
-- ---------------------------------------------------------------------
create table public.eventos_xp (
  id          bigint generated always as identity primary key,
  usuario_id  uuid not null references auth.users (id) on delete cascade,
  tipo        text not null check (tipo in
                ('etapa', 'previsao_certa', 'previsao_errada', 'capsula', 'aprofundar', 'revisao', 'sequencia')),
  capsula_id  text,
  -- O que gerou o XP (ex.: "monty-hall:gancho"). Cada referência rende XP uma vez só: não dá para "farmar".
  referencia  text not null check (char_length(referencia) <= 120),
  xp          integer not null check (xp >= 0),
  criado_em   timestamptz not null default now()
);

create unique index eventos_xp_uma_vez on public.eventos_xp (usuario_id, tipo, referencia);
create index eventos_xp_linha_do_tempo on public.eventos_xp (usuario_id, criado_em desc);

alter table public.eventos_xp enable row level security;

create policy "ler o próprio histórico" on public.eventos_xp
  for select using (auth.uid() = usuario_id);

revoke insert, update, delete on public.eventos_xp from anon, authenticated;


-- ---------------------------------------------------------------------
-- conquistas_usuario: medalhas ganhas (preenchida na etapa 6)
-- ---------------------------------------------------------------------
create table public.conquistas_usuario (
  usuario_id    uuid not null references auth.users (id) on delete cascade,
  conquista_id  text not null check (char_length(conquista_id) <= 60),
  obtida_em     timestamptz not null default now(),
  primary key (usuario_id, conquista_id)
);

alter table public.conquistas_usuario enable row level security;

create policy "ler as próprias conquistas" on public.conquistas_usuario
  for select using (auth.uid() = usuario_id);

revoke insert, update, delete on public.conquistas_usuario from anon, authenticated;


-- ---------------------------------------------------------------------
-- anotacoes: caderno pessoal (usado na etapa 10)
-- ---------------------------------------------------------------------
create table public.anotacoes (
  id          bigint generated always as identity primary key,
  usuario_id  uuid not null default auth.uid() references auth.users (id) on delete cascade,
  capsula_id  text,
  texto       text not null check (char_length(texto) <= 5000),
  criado_em   timestamptz not null default now()
);

alter table public.anotacoes enable row level security;

create policy "anotações: só as minhas" on public.anotacoes
  for all using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);


-- ---------------------------------------------------------------------
-- revisoes: revisão espaçada (usada na etapa 10)
-- ---------------------------------------------------------------------
create table public.revisoes (
  usuario_id       uuid not null default auth.uid() references auth.users (id) on delete cascade,
  cartao_id        text not null check (char_length(cartao_id) <= 120),
  proxima_revisao  date not null default current_date,
  intervalo_dias   integer not null default 1 check (intervalo_dias >= 0),
  facilidade       numeric(4, 2) not null default 2.5,
  primary key (usuario_id, cartao_id)
);

alter table public.revisoes enable row level security;

create policy "revisões: só as minhas" on public.revisoes
  for all using (auth.uid() = usuario_id) with check (auth.uid() = usuario_id);


-- ---------------------------------------------------------------------
-- Cria o perfil automaticamente quando alguém cria conta
-- ---------------------------------------------------------------------
create function public.criar_perfil()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.perfis (id, nome)
  values (
    new.id,
    left(coalesce(
      nullif(trim(new.raw_user_meta_data ->> 'nome'), ''),
      nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''),
      split_part(new.email, '@', 1),
      'Explorador'
    ), 60)
  );
  return new;
end;
$$;

create trigger ao_criar_usuario
  after insert on auth.users
  for each row execute function public.criar_perfil();


-- ---------------------------------------------------------------------
-- conceder_xp: o ÚNICO jeito de ganhar XP.
--
-- O navegador diz O QUE a pessoa fez; quem decide QUANTO XP vale é o banco.
-- Os valores abaixo espelham src/lib/xp.ts. Se mudar lá, mude aqui (e vice-versa).
-- Também atualiza a sequência de dias (fuso de Brasília) e o nível.
-- Devolve quanto XP foi ganho (0 se aquilo já tinha rendido XP antes).
-- ---------------------------------------------------------------------
create function public.conceder_xp(
  p_tipo        text,
  p_referencia  text,
  p_capsula_id  text default null,
  p_xp_capsula  integer default null
)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_usuario uuid := auth.uid();
  v_hoje    date := (now() at time zone 'America/Sao_Paulo')::date;
  v_xp      integer;
  v_ganho   integer := 0;
  v_bonus   integer := 0;
  v_ultimo  date;
  v_seq     integer;
begin
  if v_usuario is null then
    raise exception 'É preciso estar logado para ganhar XP';
  end if;

  v_xp := case p_tipo
    when 'etapa'           then 10
    when 'previsao_certa'  then 15
    when 'previsao_errada' then 5
    when 'aprofundar'      then 30
    when 'revisao'         then 5
    -- XP da cápsula vem do meta.ts; o limite evita valores absurdos vindos do navegador
    when 'capsula'         then least(greatest(coalesce(p_xp_capsula, 0), 0), 200)
    else null
  end;

  if v_xp is null then
    raise exception 'Tipo de XP desconhecido: %', p_tipo;
  end if;

  -- Previsão certa e errada são o MESMO evento: quem errou não pode voltar e ganhar de novo acertando
  if p_tipo in ('previsao_certa', 'previsao_errada') and exists (
    select 1 from public.eventos_xp
    where usuario_id = v_usuario
      and tipo in ('previsao_certa', 'previsao_errada')
      and referencia = left(p_referencia, 120)
  ) then
    return 0;
  end if;

  -- Cada (tipo, referência) rende XP uma única vez
  insert into public.eventos_xp (usuario_id, tipo, capsula_id, referencia, xp)
  values (v_usuario, p_tipo, p_capsula_id, left(p_referencia, 120), v_xp)
  on conflict (usuario_id, tipo, referencia) do nothing
  returning xp into v_ganho;

  if v_ganho is null or v_ganho = 0 then
    return 0;
  end if;

  -- Sequência de dias: estudou ontem e hoje de novo? A sequência cresce e rende bônus.
  select ultimo_dia_estudo, sequencia_atual into v_ultimo, v_seq
  from public.perfis where id = v_usuario for update;

  if v_ultimo is distinct from v_hoje then
    if v_ultimo = v_hoje - 1 then
      v_seq := v_seq + 1;
      insert into public.eventos_xp (usuario_id, tipo, referencia, xp)
      values (v_usuario, 'sequencia', v_hoje::text, 20)
      on conflict (usuario_id, tipo, referencia) do nothing
      returning xp into v_bonus;
      v_bonus := coalesce(v_bonus, 0);
    else
      v_seq := 1;
    end if;

    update public.perfis
    set sequencia_atual = v_seq,
        maior_sequencia = greatest(maior_sequencia, v_seq),
        ultimo_dia_estudo = v_hoje
    where id = v_usuario;
  end if;

  -- nivel = floor(sqrt(xp_total / 100)) + 1 (mesma fórmula de src/lib/xp.ts)
  update public.perfis
  set xp_total = xp_total + v_ganho + v_bonus,
      nivel = floor(sqrt((xp_total + v_ganho + v_bonus) / 100.0))::integer + 1
  where id = v_usuario;

  return v_ganho + v_bonus;
end;
$$;

revoke execute on function public.conceder_xp(text, text, text, integer) from public, anon;
grant execute on function public.conceder_xp(text, text, text, integer) to authenticated;
