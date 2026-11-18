import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Função quadrática (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é a forma da função quadrática e como é o gráfico?', verso: 'f(x) = a x² + b x + c, com a diferente de 0. O gráfico é uma parábola.' },
  { tipo: 'regra', frente: 'O que o sinal de a e o valor de c dizem sobre a parábola?', verso: 'a > 0: abre para cima e tem mínimo. a < 0: abre para baixo e tem máximo. c é onde ela corta o eixo y: (0, c).' },
  { tipo: 'regra', frente: 'Qual é a fórmula do vértice?', verso: 'xᵥ = -b/(2a), e yᵥ = f(xᵥ). O vértice é o ponto mais baixo (a > 0) ou mais alto (a < 0).' },
  { tipo: 'conta', frente: 'Ache o vértice de f(x) = x² - 4x + 3.', verso: 'xᵥ = 4/2 = 2 e yᵥ = 4 - 8 + 3 = -1. Vértice (2, -1): o ponto mais baixo, porque a > 0.' },
  { tipo: 'conta', frente: 'Leia f(x) = -x² + 6x - 5: abertura, corte em y e ponto mais alto.', verso: 'a = -1: abre para baixo. Corta o eixo y em (0, -5). xᵥ = 3 e yᵥ = -9 + 18 - 5 = 4: ponto mais alto (3, 4).' },
  { tipo: 'regra', frente: 'O que é a simetria da parábola?', verso: 'Ela é espelhada em torno da reta vertical do vértice. Pontos a igual distância do eixo têm a mesma altura: em x² - 4x + 1, f(0,5) = f(3,5) = -0,75.' },
  { tipo: 'regra', frente: 'Como calcular o delta e quantas raízes ele indica?', verso: 'Δ = b² - 4ac. Δ > 0: duas raízes reais. Δ = 0: uma raiz. Δ < 0: nenhuma raiz real.' },
  { tipo: 'conta', frente: 'Resolva x² - 5x + 6 = 0.', verso: 'Δ = 25 - 24 = 1; x = (5 ± 1)/2, então x = 3 ou x = 2. Confira: f(2) = 4 - 10 + 6 = 0.' },
  { tipo: 'pegadinha', frente: 'Por que x² + x + 1 não tem raízes reais?', verso: 'Δ = 1 - 4 = -3, e não existe raiz quadrada real de número negativo. A parábola abre para cima e fica inteira acima do eixo x.' },
  { tipo: 'regra', frente: 'Quais são as três formas de escrever uma quadrática?', verso: 'Fatorada (a(x - x₁)(x - x₂), mostra as raízes), padrão (a x² + b x + c) e canônica (a(x - h)² + k, mostra o vértice).' },
  { tipo: 'conta', frente: 'Escreva (x - 1)(x - 5) nas formas padrão e canônica.', verso: 'Padrão: x² - 6x + 5. Canônica: (x - 3)² - 4. O vértice fica no meio das raízes: (3, -4).' },
  { tipo: 'problema', frente: 'Terreno retangular com perímetro 40: qual a área máxima?', verso: '100 m². Com y = 20 - x, A(x) = -x² + 20x, máximo em x = 10: o quadrado de lado 10.' },
  { tipo: 'problema', frente: 'Lucro máximo: preços R$ 20, 35 e 50 dão lucros 400, 625 e 400 (custo R$ 10). O que isso mostra?', verso: 'A simetria: 20 e 50 dão o mesmo lucro, e o máximo (R$ 625) fica no meio, em R$ 35, o vértice.' },
  { tipo: 'conta', frente: 'Uma bola segue h(t) = -5t² + 20t. Quando volta ao chão e qual é a altura máxima?', verso: 'Raízes t = 0 e t = 4. O vértice fica em t = 2 e h(2) = 20 m. Sobe 2 s e desce 2 s.' },
  { tipo: 'história', frente: 'Quem deu o nome parábola e o que Galileu mostrou em 1638?', verso: 'Apolônio deu o nome (séc. 3 a.C.). Galileu mostrou que a trajetória de um projétil é uma parábola (movimento composto).' },
  { tipo: 'história', frente: 'Por que Newton usou um espelho esférico no telescópio em 1668?', verso: 'Porque espelhos parabólicos eram difíceis de fabricar. A propriedade refletora da parábola explica antenas parabólicas e faróis.' },
]

export default cartoes
