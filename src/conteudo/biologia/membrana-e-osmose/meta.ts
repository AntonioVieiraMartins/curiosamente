import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'membrana-e-osmose',
  titulo: 'Membrana e osmose',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Por que a alface murcha quando recebe sal?',
  duracaoMin: 45,
  xp: 100,
  prerequisitos: ['celula'],
  conexoes: ['respiracao-celular', 'solucoes-e-concentracao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Cell membrane, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cell_membrane' },
    { titulo: 'Osmosis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Osmosis' },
    { titulo: 'Fluid mosaic model, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Fluid_mosaic_model' },
    { titulo: 'Sodium-potassium pump, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Na%2B/K%2B-ATPase' },
    { titulo: 'Aquaporin, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Aquaporin' },
    { titulo: 'Tonicity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Tonicity' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
