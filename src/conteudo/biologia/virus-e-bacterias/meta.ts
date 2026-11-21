import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'virus-e-bacterias',
  titulo: 'Vírus e bactérias',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Quem é vilão, quem é amigo e quem só está de passagem.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['classificacao'],
  conexoes: ['imunidade-e-vacinas', 'selecao-natural', 'biotecnologia'],
  videoUrl: null,
  fontes: [
    { titulo: 'Bacteria, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bacteria' },
    { titulo: 'Virus, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Virus' },
    { titulo: 'Bacteriophage, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Bacteriophage' },
    { titulo: 'Germ theory of disease, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Germ_theory_of_disease' },
    { titulo: 'Ignaz Semmelweis, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Ignaz_Semmelweis' },
    { titulo: 'Tobacco mosaic virus, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Tobacco_mosaic_virus' },
    { titulo: 'Smallpox (eradication), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Smallpox' },
    { titulo: 'Herd immunity, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Herd_immunity' },
    { titulo: 'Basic reproduction number, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Basic_reproduction_number' },
    { titulo: 'Human microbiome, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Human_microbiome' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
