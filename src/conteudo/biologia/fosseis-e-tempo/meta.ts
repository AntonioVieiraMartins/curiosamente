import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'fosseis-e-tempo',
  titulo: 'Fósseis e o tempo profundo',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Como descobrir a idade de uma rocha, e o que 4,5 bilhões de anos significam.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['selecao-natural'],
  conexoes: ['exponencial', 'classificacao', 'selecao-natural'],
  videoUrl: null,
  fontes: [
    { titulo: 'Fossil, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Fossil' },
    { titulo: 'Radiometric dating, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Radiometric_dating' },
    { titulo: 'Radiocarbon dating, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Radiocarbon_dating' },
    { titulo: 'Age of Earth, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Age_of_Earth' },
    { titulo: 'Geologic time scale, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Geologic_time_scale' },
    { titulo: 'Stratigraphy, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Stratigraphy' },
    { titulo: 'Extinction event, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Extinction_event' },
    { titulo: 'Chicxulub crater, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Chicxulub_crater' },
    { titulo: 'Mary Anning, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mary_Anning' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
