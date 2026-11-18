-- Caderno pessoal: prepara a tabela anotacoes para sincronizar com o navegador.
--
-- ref          = código criado no navegador para cada anotação (evita duplicar ao entrar na conta)
-- atualizado_em = quando a anotação foi mudada pela última vez (a mais nova vence ao juntar)
--
-- A regra de acesso (RLS) já existe: cada pessoa só lê e escreve as próprias anotações.

alter table public.anotacoes
  add column ref text check (ref is null or char_length(ref) <= 80),
  add column atualizado_em timestamptz not null default now();

-- Uma anotação por (pessoa, ref). Permite o "upsert" do navegador.
create unique index anotacoes_usuario_ref_idx on public.anotacoes (usuario_id, ref);
