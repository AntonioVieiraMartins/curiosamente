import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'movimento-uniforme',
  titulo: 'Movimento uniforme',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'Quando o carro chega: gráficos de posição e tempo.',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['velocidade-e-aceleracao'],
  conexoes: ['funcao-afim', 'movimento-variado'],
  videoUrl: null,
  fontes: [
    { titulo: 'Motion (physics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Motion_(physics)' },
    { titulo: 'Equations of motion, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Equations_of_motion' },
    { titulo: 'Inertia, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Inertia' },
    { titulo: 'Eliud Kipchoge, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Eliud_Kipchoge' },
    { titulo: 'Speed of sound, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Speed_of_sound' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
