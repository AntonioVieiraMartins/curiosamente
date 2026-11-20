import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'movimento-variado',
  titulo: 'Movimento uniformemente variado',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'Frear a tempo: a conta que salva vidas.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['movimento-uniforme'],
  conexoes: ['funcao-quadratica', 'queda-livre'],
  videoUrl: null,
  fontes: [
    { titulo: 'Equations of motion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Equations_of_motion' },
    { titulo: 'Acceleration, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Acceleration' },
    { titulo: 'Galileo Galilei, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Galileo_Galilei' },
    { titulo: 'Mean speed theorem, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mean_speed_theorem' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
