import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'queda-livre',
  titulo: 'Queda livre',
  area: 'fisica',
  trilha: 'fisica',
  resumo: 'Uma pena e um martelo caem juntos? Na Lua, sim.',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['movimento-variado'],
  conexoes: ['lancamentos', 'gravitacao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Free fall, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Free_fall' },
    { titulo: 'Standard gravity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Standard_gravity' },
    { titulo: 'Apollo 15, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Apollo_15' },
    { titulo: 'Terminal velocity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Terminal_velocity' },
    { titulo: 'Galileo Galilei, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Galileo_Galilei' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
