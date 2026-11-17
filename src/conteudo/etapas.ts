// As 8 etapas de toda cápsula, sempre nesta ordem (ver CLAUDE.md)
export const etapas = [
  { id: 'gancho', nome: 'Gancho', dica: 'Uma pergunta para começar' },
  { id: 'historia', nome: 'História', dica: 'Quem, quando e por quê' },
  { id: 'intuicao', nome: 'Intuição', dica: 'A ideia, sem fórmula' },
  { id: 'simulacao', nome: 'Simulação', dica: 'Palpite primeiro, depois teste' },
  { id: 'pratica', nome: 'Na prática', dica: 'Onde isso aparece no mundo' },
  { id: 'aprofundar', nome: 'Aprofundar', dica: 'A prova, a fórmula e as variações' },
  { id: 'desafio', nome: 'Desafio', dica: 'De 3 a 5 perguntas' },
  { id: 'conexoes', nome: 'Conexões', dica: 'Para onde ir depois' },
] as const

export type IdEtapa = (typeof etapas)[number]['id']
