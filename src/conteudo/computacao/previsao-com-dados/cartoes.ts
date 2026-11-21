import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Prever o futuro com dados (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é prever com dados?', verso: 'Achar um padrão nos dados do passado e usá-lo para estimar algo que ainda não conhecemos.' },
  { tipo: 'definição', frente: 'O que é uma reta de tendência?', verso: 'A reta y = a·x + b que passa perto dos pontos e resume a relação entre duas medidas.' },
  { tipo: 'regra', frente: 'O que significam a e b em y = a·x + b?', verso: 'a é a inclinação (quanto y muda quando x sobe 1). b é o valor de y quando x é zero.' },
  { tipo: 'definição', frente: 'O que é o erro (resíduo) de um ponto?', verso: 'Valor real menos valor previsto.' },
  { tipo: 'por quê', frente: 'Por que elevar os erros ao quadrado?', verso: 'Para que erros positivos e negativos não se cancelem e para punir mais os erros grandes.' },
  { tipo: 'regra', frente: 'O que é o método dos mínimos quadrados?', verso: 'Escolher a reta que deixa a soma dos quadrados dos erros a menor possível.' },
  { tipo: 'regra', frente: 'Por onde passa a melhor reta?', verso: 'Pelo ponto formado pelas médias de x e de y.' },
  { tipo: 'regra', frente: 'Interpolar e extrapolar: qual a diferença?', verso: 'Interpolar é prever dentro da região dos dados (mais seguro). Extrapolar é prever fora dela (arriscado).' },
  { tipo: 'pegadinha', frente: 'Uma reta que cabe bem nos dados vale para sempre?', verso: 'Não. Ela só é confiável onde há dados. Fora disso o mundo pode mudar de forma (a altura de uma criança para de crescer).' },
  { tipo: 'regra', frente: 'Por que separar dados de treino e de teste?', verso: 'Para saber se o modelo funciona com dados novos, e não só com os que ele já viu.' },
  { tipo: 'definição', frente: 'O que é sobreajuste (overfitting)?', verso: 'Quando o modelo decora o ruído do treino: erro baixo no treino e alto no teste.' },
  { tipo: 'definição', frente: 'O que é subajuste?', verso: 'Quando o modelo é simples demais e erra até nos dados de treino.' },
  { tipo: 'regra', frente: 'Por que dar uma faixa de erro junto da previsão?', verso: 'Porque uma previsão nunca é exata. A faixa mostra o quanto confiar nela.' },
  { tipo: 'história', frente: 'Como Gauss usou previsão em 1801?', verso: 'Com poucas observações do asteroide Ceres, calculou onde ele reapareceria depois de sumir atrás do Sol. Os astrônomos o reencontraram ali.' },
  { tipo: 'pegadinha', frente: 'Correlação forte prova causa?', verso: 'Não. Prever é diferente de explicar: dois fatos podem andar juntos por causa de um terceiro.' },
]

export default cartoes
