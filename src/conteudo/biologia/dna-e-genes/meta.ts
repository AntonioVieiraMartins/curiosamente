import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'dna-e-genes',
  titulo: 'DNA e genes',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'O manual de instruções que cada célula carrega.',
  duracaoMin: 50,
  xp: 100,
  prerequisitos: ['celula'],
  conexoes: ['divisao-celular', 'mendel', 'binario'],
  videoUrl: null,
  fontes: [
    { titulo: 'DNA, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/DNA' },
    { titulo: 'Friedrich Miescher, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Friedrich_Miescher' },
    { titulo: 'Avery–MacLeod–McCarty experiment, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Avery%E2%80%93MacLeod%E2%80%93McCarty_experiment' },
    { titulo: "Chargaff's rules, Wikipedia em inglês", url: 'https://en.wikipedia.org/wiki/Chargaff%27s_rules' },
    { titulo: 'Photo 51, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Photo_51' },
    { titulo: 'Genetic code, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Genetic_code' },
    { titulo: 'Meselson–Stahl experiment, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Meselson%E2%80%93Stahl_experiment' },
    { titulo: 'Human Genome Project, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Human_Genome_Project' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
