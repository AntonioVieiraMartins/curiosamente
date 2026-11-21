import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'selecao-natural',
  titulo: 'Seleção natural',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Por que as bactérias ficam resistentes aos antibióticos.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['mutacoes'],
  conexoes: ['fosseis-e-tempo', 'probabilidade-simples', 'virus-e-bacterias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Natural selection, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Natural_selection' },
    { titulo: 'On the Origin of Species, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/On_the_Origin_of_Species' },
    { titulo: 'Alfred Russel Wallace, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Alfred_Russel_Wallace' },
    { titulo: 'Peppered moth evolution, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Peppered_moth_evolution' },
    { titulo: 'Peter and Rosemary Grant, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Peter_and_Rosemary_Grant' },
    { titulo: 'Antimicrobial resistance, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Antimicrobial_resistance' },
    { titulo: 'Genetic drift, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Genetic_drift' },
    { titulo: 'Lenski\'s long-term evolution experiment, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/E._coli_long-term_evolution_experiment' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
