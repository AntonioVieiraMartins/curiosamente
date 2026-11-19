import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Educação financeira (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é saldo no orçamento?', verso: 'Renda menos gastos. Se for positivo, sobra; se for negativo, falta.' },
  { tipo: 'definição', frente: 'Qual a diferença entre necessidade e desejo?', verso: 'Necessidade: sem ela a vida fica difícil (moradia, comida). Desejo: é bom ter, mas pode esperar ou ser trocado.' },
  { tipo: 'regra', frente: 'Como funciona a regra 50/30/20?', verso: '50% da renda para necessidades, 30% para desejos e 20% para guardar. É um ponto de partida, e não uma lei.' },
  { tipo: 'conta', frente: 'Quanto vai para guardar numa renda de R$ 2.500 (regra 50/30/20)?', verso: '20% de 2.500 = R$ 500.' },
  { tipo: 'definição', frente: 'O que é reserva de emergência?', verso: 'Dinheiro guardado para imprevistos, de 3 a 6 meses de gastos essenciais, num lugar seguro e de fácil acesso.' },
  { tipo: 'regra', frente: 'Como saber em quantos meses se junta uma meta?', verso: 'Meta ÷ valor guardado por mês.' },
  { tipo: 'conta', frente: 'Meta de R$ 2.400 guardando R$ 150 por mês. Quantos meses?', verso: '2.400 ÷ 150 = 16 meses.' },
  { tipo: 'definição', frente: 'O que são juros?', verso: 'O "aluguel" do dinheiro: quem guarda recebe, quem deve paga.' },
  { tipo: 'por quê', frente: 'Por que os juros compostos crescem mais que os simples?', verso: 'Porque a taxa incide também sobre os juros já acumulados (juros sobre juros).' },
  { tipo: 'conta', frente: 'R$ 1.000 a 10% ao mês, compostos, por 2 meses. Quanto vira?', verso: '1.000 × 1,1 × 1,1 = R$ 1.210.' },
  { tipo: 'pegadinha', frente: '1% ao mês é o mesmo que 12% ao ano?', verso: 'Não. Em juros compostos, 1% ao mês dá cerca de 12,68% ao ano.' },
  { tipo: 'regra', frente: 'Como descobrir o custo de parcelar?', verso: 'Some as parcelas e subtraia o preço à vista. A diferença é o juro embutido.' },
  { tipo: 'conta', frente: 'À vista R$ 1.200 ou 12x de R$ 120. Quanto custa parcelar?', verso: '12 × 120 = 1.440; 1.440 − 1.200 = R$ 240 (20% a mais).' },
  { tipo: 'pegadinha', frente: 'O pacote maior é sempre mais barato por quilo?', verso: 'Não. Compare sempre o preço por unidade: preço ÷ quantidade na mesma unidade.' },
  { tipo: 'definição', frente: 'O que é inflação?', verso: 'A alta geral dos preços. O mesmo dinheiro passa a comprar menos.' },
  { tipo: 'regra', frente: 'Qual a melhor forma de usar o cartão de crédito?', verso: 'Pagar a fatura inteira. Pagar só o mínimo joga o resto no rotativo, que tem juros altos.' },
]

export default cartoes
