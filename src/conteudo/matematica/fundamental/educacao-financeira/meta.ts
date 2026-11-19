import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'educacao-financeira',
  titulo: 'Educação financeira',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '7º ano',
  resumo: 'Para onde vai o seu dinheiro no fim do mês?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['matematica-financeira', 'inequacoes', 'dinheiro-e-troco'],
  videoUrl: null,
  fontes: [
    { titulo: 'Coin (primeiras moedas na Lídia), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Coin' },
    { titulo: 'Banknote (papel-moeda na China), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Banknote' },
    { titulo: 'Plano Real e o real brasileiro, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Brazilian_real' },
    { titulo: 'Pix (sistema de pagamento do Banco Central), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Pix_(payment_system)' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática, anos finais', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
