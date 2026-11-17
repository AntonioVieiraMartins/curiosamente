import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'monty-hall',
  titulo: 'O problema de Monty Hall',
  area: 'matematica',
  trilha: 'medio',
  resumo: 'Trocar de porta dobra suas chances. Por quê?',
  duracaoMin: 20,
  xp: 100,
  prerequisitos: [],
  conexoes: ['probabilidade-simples', 'combinatoria'],
  videoUrl: null,
  fontes: [
    {
      titulo: 'John Tierney, "Behind Monty Hall\'s Doors: Puzzle, Debate and Answer?", The New York Times (21/07/1991)',
      url: 'https://www.nytimes.com/1991/07/21/us/behind-monty-hall-s-doors-puzzle-debate-and-answer.html',
    },
    { titulo: 'Problema de Monty Hall, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Problema_de_Monty_Hall' },
    { titulo: 'Monty Hall problem, Wikipedia em inglês (histórico e variações)', url: 'https://en.wikipedia.org/wiki/Monty_Hall_problem' },
    {
      // DOI conferido no Crossref (título, autores, volume 45, número 4, p. 284-287)
      titulo: 'Morgan, Chaganty, Dahiya e Doviak, "Let\'s Make a Deal: The Player\'s Dilemma", The American Statistician 45(4), 1991',
      url: 'https://doi.org/10.1080/00031305.1991.10475821',
    },
    { titulo: 'Teorema de Bayes, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Teorema_de_Bayes' },
    { titulo: 'Lei dos grandes números, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Lei_dos_grandes_n%C3%BAmeros' },
    { titulo: "Bertrand's box paradox (paradoxo da caixa de Bertrand, 1889), Wikipedia em inglês", url: 'https://en.wikipedia.org/wiki/Bertrand%27s_box_paradox' },
    { titulo: 'Three Prisoners problem (Martin Gardner, 1959), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Three_Prisoners_problem' },
    { titulo: 'Base rate fallacy (exames e falsos positivos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Base_rate_fallacy' },
    { titulo: 'Naive Bayes spam filtering (filtros de spam), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Naive_Bayes_spam_filtering' },
  ],
}

export default meta
