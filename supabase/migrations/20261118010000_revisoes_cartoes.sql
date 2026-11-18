-- Revisão espaçada: cada linha de revisoes passa a guardar o próprio cartão (pergunta e resposta),
-- assim a tela de revisão não precisa reabrir a cápsula.
--
-- A regra de acesso (RLS) já existe: cada pessoa só lê e escreve os próprios cartões.

alter table public.revisoes
  add column capsula_id    text check (capsula_id is null or char_length(capsula_id) <= 80),
  add column frente        text not null default '' check (char_length(frente) <= 2000),
  add column verso         text not null default '' check (char_length(verso) <= 4000),
  add column criado_em     timestamptz not null default now(),
  add column atualizado_em timestamptz not null default now();
