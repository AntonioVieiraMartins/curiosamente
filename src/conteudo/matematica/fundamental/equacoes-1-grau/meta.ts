import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'equacoes-1-grau',
  titulo: 'Equações do 1º grau',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Uma balança que precisa ficar equilibrada.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['razao-e-proporcao', 'numeros-negativos', 'sistemas-de-equacoes', 'funcao-afim'],
  videoUrl: null,
  fontes: [
    { titulo: 'Equals sign (Robert Recorde, 1557, The Whetstone of Witte), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Equals_sign' },
    { titulo: 'Algebra (Papiro de Rhind, al-Khwarizmi em 825, origem da palavra, Diofanto, Viète e Descartes), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Algebra' },
    { titulo: 'Linear equation (solução x = −b/a de ax + b = 0), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Linear_equation' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
