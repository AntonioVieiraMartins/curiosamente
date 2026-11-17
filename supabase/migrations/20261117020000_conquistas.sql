-- =====================================================================
-- Curiosamente · conquistas (etapa 6 do roteiro)
--
-- conceder_conquista: o ÚNICO jeito de ganhar uma medalha.
-- O navegador avisa "acho que ganhei X"; o banco confere com os dados que ele tem
-- (eventos_xp e perfis) e só então grava em conquistas_usuario.
-- Medalhas não dão XP. A lista de ids espelha src/conteudo/conquistas.ts.
-- Rode este arquivo uma vez no "SQL Editor" do Supabase (depois do inicial).
-- =====================================================================

create or replace function public.conceder_conquista(p_conquista text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_usuario uuid := auth.uid();
  v_ok      boolean;
  v_nova    text;
begin
  if v_usuario is null then
    raise exception 'Login necessario para ganhar conquistas';
  end if;

  v_ok := case p_conquista
    when 'primeiro-palpite' then exists (select 1 from public.eventos_xp
      where usuario_id = v_usuario and tipo in ('previsao_certa', 'previsao_errada'))
    when 'errou-bonito' then exists (select 1 from public.eventos_xp
      where usuario_id = v_usuario and tipo = 'previsao_errada')
    when 'mergulho' then exists (select 1 from public.eventos_xp
      where usuario_id = v_usuario and tipo = 'aprofundar')
    when 'sete-dias' then exists (select 1 from public.perfis
      where id = v_usuario and maior_sequencia >= 7)
    -- O banco não sabe a que linha do mapa cada cápsula pertence;
    -- confere pelo menos que há duas cápsulas concluídas (o app confere as linhas)
    when 'baldeacao' then (select count(distinct capsula_id) from public.eventos_xp
      where usuario_id = v_usuario and tipo = 'capsula') >= 2
    -- Rodar a simulação não passa pelo banco: aqui vale a palavra do app (medalha não dá XP)
    when 'dez-mil' then true
    else null
  end;

  if v_ok is null then
    raise exception 'Conquista desconhecida: %', p_conquista;
  end if;
  if not v_ok then
    return false;
  end if;

  insert into public.conquistas_usuario (usuario_id, conquista_id)
  values (v_usuario, p_conquista)
  on conflict (usuario_id, conquista_id) do nothing
  returning conquista_id into v_nova;

  return v_nova is not null; -- true só na primeira vez
end;
$$;

revoke execute on function public.conceder_conquista(text) from public, anon;
grant execute on function public.conceder_conquista(text) to authenticated;
