import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Funções (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma função, em uma frase?', verso: 'Uma máquina que, para cada entrada x, devolve exatamente uma saída f(x).' },
  { tipo: 'definição', frente: 'O que são domínio, contradomínio e imagem?', verso: 'Domínio: as entradas possíveis. Contradomínio: o conjunto onde as saídas "moram". Imagem: as saídas que de fato aparecem.' },
  { tipo: 'conta', frente: 'Se f(x) = 2x + 3, quanto são f(4), f(0) e f(-2)?', verso: 'f(4) = 11; f(0) = 3; f(-2) = -4 + 3 = -1. Basta trocar x pela entrada.' },
  { tipo: 'regra', frente: 'f(x) é um produto de f por x?', verso: 'Não. f(x) é só o nome da saída quando a entrada é x. f(4) é o valor da função quando a entrada é 4.' },
  { tipo: 'regra', frente: 'Quais são os quatro jeitos de representar uma função?', verso: 'Em palavras, por fórmula, por tabela e por gráfico. Ex.: pão a R$ 0,50 → p(n) = 0,5n → tabela → pontos alinhados numa reta.' },
  { tipo: 'conta', frente: 'Monte a tabela de f(x) = 2x + 1 para x de -1 a 3.', verso: 'f(-1) = -1; f(0) = 1; f(1) = 3; f(2) = 5; f(3) = 7. Os pontos ficam alinhados: é uma reta.' },
  { tipo: 'regra', frente: 'Como funciona o teste da reta vertical?', verso: 'Se alguma reta vertical cruzar o gráfico em mais de um ponto, a entrada tem duas saídas e o gráfico não é de uma função.' },
  { tipo: 'pegadinha', frente: 'O círculo é gráfico de função? E a metade de cima dele?', verso: 'O círculo não é: x = 0 cruza em (0, 1) e (0, -1). A metade de cima é, porque para cada x só há um y.' },
  { tipo: 'regra', frente: 'Qual é o domínio de f(x) = 1/x?', verso: 'Todos os reais, menos o 0, porque 1/0 não existe. Teste: f(2) = 0,5 funciona e f(-3) = -1/3 funciona.' },
  { tipo: 'pegadinha', frente: 'Uma saída pode vir de duas entradas diferentes?', verso: 'Pode. Em f(x) = x²/2 - 2, a saída 6 vem de x = 4 e de x = -4. O que não pode é uma entrada ter duas saídas.' },
  { tipo: 'conta', frente: 'Em f(x) = x²/2 - 2, onde o gráfico cruza o eixo x e qual é o menor valor?', verso: 'Cruza em x = 2 (f(2) = 0, e também em -2). O menor valor é f(0) = -2.' },
  { tipo: 'conta', frente: 'Com f(x) = 2x e g(x) = x + 3, quanto são g(f(2)) e f(g(2))?', verso: 'g(f(2)) = g(4) = 7 e f(g(2)) = f(5) = 10. Compor não é comutativo: a ordem importa.' },
  { tipo: 'por quê', frente: 'Por que ligamos os pontos de uma tabela para fazer o gráfico?', verso: 'Porque a função também vale entre os pontos marcados; ligá-los mostra a forma completa (aqui, uma reta).' },
  { tipo: 'problema', frente: 'Corrida com bandeirada de R$ 6 e R$ 2,50 por km: escreva a função e calcule 10 km.', verso: 'p(x) = 6 + 2,5x. Para 10 km: p(10) = 6 + 25 = R$ 31. Variável independente: km; dependente: preço.' },
  { tipo: 'história', frente: 'Quem usou pela primeira vez a notação f(x) e quando?', verso: 'Leonhard Euler, em 1734.' },
  { tipo: 'história', frente: 'Como nasceu a ideia de função?', verso: 'Astrônomos tabelavam a posição dos planetas dia a dia (uma grandeza dependendo do tempo). No século 17, Newton e Leibniz criaram o cálculo; no fim do século 19, a definição ganhou forma em termos de conjuntos.' },
]

export default cartoes
