import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'heredogramas',
  titulo: 'Heredogramas e probabilidade',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Qual a chance de um bebê ter os olhos do avô?',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['mendel'],
  conexoes: ['mutacoes', 'probabilidade', 'probabilidade-simples'],
  videoUrl: null,
  fontes: [
    { titulo: 'Pedigree chart, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Pedigree_chart' },
    { titulo: 'ABO blood group system, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/ABO_blood_group_system' },
    { titulo: 'Karl Landsteiner, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Karl_Landsteiner' },
    { titulo: 'Color blindness, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Color_blindness' },
    { titulo: 'Haemophilia, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Haemophilia' },
    { titulo: 'X-linked recessive inheritance, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/X-linked_recessive_inheritance' },
    { titulo: 'Autosomal recessive, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Dominance_(genetics)#Autosomal_dominance_and_recessiveness' },
    { titulo: 'Thomas Hunt Morgan, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Thomas_Hunt_Morgan' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
