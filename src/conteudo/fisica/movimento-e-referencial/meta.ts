import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'movimento-e-referencial',
  titulo: 'Movimento e referencial',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'Sentado no ônibus, você está parado? Depende de quem olha.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['plano-cartesiano', 'velocidade-e-aceleracao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Frame of reference, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Frame_of_reference' },
    { titulo: 'Galilean invariance, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Galilean_invariance' },
    { titulo: 'Dialogue Concerning the Two Chief World Systems, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Dialogue_Concerning_the_Two_Chief_World_Systems' },
    { titulo: 'Displacement (geometry), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Displacement_(geometry)' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
