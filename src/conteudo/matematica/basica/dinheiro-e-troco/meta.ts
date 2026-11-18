import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'dinheiro-e-troco',
  titulo: 'Dinheiro e troco',
  area: 'matematica',
  trilha: 'basica',
  serie: '3º ao 5º ano',
  resumo: 'Conferir o troco de cabeça, sem errar.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['numeros-decimais'],
  conexoes: ['porcentagem', 'razao-e-proporcao', 'adicao-e-subtracao'],
  videoUrl: null,
  fontes: [
    { titulo: 'Money (escambo e coincidência de desejos, funções do dinheiro, dinheiro-mercadoria, primeiras moedas, papel-moeda na China, dinheiro de curso legal), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Money' },
    { titulo: 'Brazilian real (Plano Real em 1º de julho de 1994, centavos, notas e moedas, nota de 200 reais, moedas anteriores), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Brazilian_real' },
  ],
}

export default meta
