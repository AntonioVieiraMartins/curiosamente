import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'lancamentos',
  titulo: 'Lançamentos',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'A parábola do chute de falta.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['queda-livre'],
  conexoes: ['funcao-quadratica', 'trigonometria'],
  videoUrl: null,
  fontes: [
    { titulo: 'Projectile motion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Projectile_motion' },
    { titulo: 'Niccolò Fontana Tartaglia, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Niccol%C3%B2_Fontana_Tartaglia' },
    { titulo: 'Galileo Galilei, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Galileo_Galilei' },
    { titulo: 'Magnus effect, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Magnus_effect' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
