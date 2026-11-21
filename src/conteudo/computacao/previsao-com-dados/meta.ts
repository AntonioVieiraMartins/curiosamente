import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'previsao-com-dados',
  titulo: 'Prever o futuro com dados',
  area: 'computacao',
  trilha: 'ciencia-de-dados',
  resumo: 'Uma reta que adivinha o preço de uma casa, e quando ela erra.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: [],
  conexoes: ['regressao', 'funcao-afim', 'aprendizado-de-maquina'],
  videoUrl: null,
  fontes: [
    { titulo: 'Linear regression, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Linear_regression' },
    { titulo: 'Least squares (história: Legendre, Gauss), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Least_squares' },
    { titulo: 'Ceres (dwarf planet), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Ceres_(dwarf_planet)' },
    { titulo: 'Regression toward the mean (Francis Galton), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Regression_toward_the_mean' },
    { titulo: 'Overfitting, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Overfitting' },
    { titulo: 'Extrapolation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Extrapolation' },
    { titulo: 'Google Flu Trends, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Google_Flu_Trends' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
