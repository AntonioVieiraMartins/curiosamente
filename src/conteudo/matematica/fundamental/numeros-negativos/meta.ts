import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'numeros-negativos',
  titulo: 'Números negativos',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Como algo pode valer menos que nada?',
  duracaoMin: 12,
  xp: 100,
  prerequisitos: [],
  conexoes: ['fracoes', 'potencias', 'funcao-afim'],
  videoUrl: null,
  fontes: [
    { titulo: 'Negative number (história: China, Diofanto, Brahmagupta, Europa), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Negative_number' },
    { titulo: 'Número negativo, Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/N%C3%BAmero_negativo' },
    { titulo: 'The Nine Chapters on the Mathematical Art (Os Nove Capítulos), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/The_Nine_Chapters_on_the_Mathematical_Art' },
    { titulo: 'Brahmagupta, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Brahmagupta' },
    { titulo: 'Lowest temperature recorded on Earth (estação Vostok, 1983), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Lowest_temperature_recorded_on_Earth' },
    { titulo: 'Horário de Brasília (UTC−3), Wikipédia em português', url: 'https://pt.wikipedia.org/wiki/Hor%C3%A1rio_de_Bras%C3%ADlia' },
  ],
}

export default meta
