import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'velocidade-e-aceleracao',
  titulo: 'Velocidade e aceleração',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'Por que o corpo vai para a frente quando o carro freia?',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['movimento-e-referencial'],
  conexoes: ['razao-e-proporcao', 'movimento-uniforme'],
  videoUrl: null,
  fontes: [
    { titulo: 'Speed, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Speed' },
    { titulo: 'Acceleration, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Acceleration' },
    { titulo: 'Nicole Oresme, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Nicole_Oresme' },
    { titulo: 'Two New Sciences (Galileu), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Two_New_Sciences' },
    { titulo: 'Speed of sound, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Speed_of_sound' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
