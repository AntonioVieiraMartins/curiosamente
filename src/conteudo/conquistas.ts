// Lista de medalhas. As regras ficam em src/lib/regrasConquistas.ts
// e são conferidas de novo no banco (supabase/migrations/..._conquistas.sql).
// Para criar uma medalha nova: some aqui, crie a regra e adicione o id na função conceder_conquista.
export const conquistas = [
  { id: 'primeiro-palpite', nome: 'Primeiro palpite', descricao: 'Apostou antes de ver uma simulação' },
  { id: 'errou-bonito', nome: 'Errou bonito', descricao: 'Errou a previsão e foi até o fim' },
  { id: 'mergulho', nome: 'Mergulho', descricao: 'Concluiu uma etapa Aprofundar' },
  { id: 'baldeacao', nome: 'Baldeação', descricao: 'Concluiu cápsulas de duas linhas' },
  { id: 'sete-dias', nome: 'Sete dias', descricao: 'Estudou sete dias seguidos' },
  { id: 'dez-mil', nome: 'Dez mil', descricao: 'Rodou 10 mil vezes uma simulação' },
] as const

export type IdConquista = (typeof conquistas)[number]['id']

export const buscarConquista = (id: string) => conquistas.find((c) => c.id === id)
