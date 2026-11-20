import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'misturas-e-separacao',
  titulo: 'Misturas e separação',
  area: 'quimica',
  trilha: 'quimica',
  resumo: 'Como separar sal da água e areia do açúcar?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['materia-e-propriedades', 'estados-da-materia'],
  conexoes: ['solucoes-e-concentracao', 'atomo'],
  videoUrl: null,
  fontes: [
    { titulo: 'Mixture, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Mixture' },
    { titulo: 'Separation process, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Separation_process' },
    { titulo: 'Distillation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Distillation' },
    { titulo: 'Azeotrope, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Azeotrope' },
    { titulo: 'Water treatment, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Water_treatment' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
