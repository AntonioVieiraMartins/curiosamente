// As 7 etapas de toda cápsula, sempre nesta ordem (ver CLAUDE.md).
// O id 'pratica' continua o mesmo (o XP e o progresso já salvos usam esse nome), mas aparece como "Conteúdo".
export const etapas = [
  { id: 'gancho', nome: 'Gancho', dica: 'Uma pergunta para começar' },
  { id: 'historia', nome: 'História', dica: 'Quem, quando e por quê' },
  { id: 'intuicao', nome: 'Intuição', dica: 'A ideia, sem fórmula' },
  { id: 'simulacao', nome: 'Simulação', dica: 'Palpite primeiro, depois teste' },
  { id: 'pratica', nome: 'Conteúdo', dica: 'O assunto completo, com exercícios' },
  { id: 'desafio', nome: 'Desafio', dica: 'De 3 a 5 perguntas' },
  { id: 'conexoes', nome: 'Conexões', dica: 'Para onde ir depois' },
] as const

export type IdEtapa = (typeof etapas)[number]['id']
