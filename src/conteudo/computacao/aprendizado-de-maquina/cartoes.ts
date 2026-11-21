import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Aprendizado de máquina (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é aprendizado de máquina?', verso: 'Fazer o computador achar as regras sozinho a partir de exemplos, em vez de alguém escrever cada regra.' },
  { tipo: 'definição', frente: 'O que são atributos e rótulo?', verso: 'Atributos são as medidas de cada exemplo (peso, tamanho). Rótulo é a resposta certa (gato ou cachorro).' },
  { tipo: 'regra', frente: 'Aprendizado supervisionado ou não supervisionado?', verso: 'Supervisionado aprende com exemplos que têm rótulo. Não supervisionado procura grupos sem rótulo.' },
  { tipo: 'regra', frente: 'Classificação e regressão: qual a diferença?', verso: 'Classificação prevê uma categoria (spam ou não). Regressão prevê um número (preço).' },
  { tipo: 'regra', frente: 'Como funciona o k vizinhos mais próximos?', verso: 'O exemplo novo recebe a classe mais comum entre os k exemplos conhecidos mais perto dele.' },
  { tipo: 'regra', frente: 'Como funciona o k-médias?', verso: 'Repete duas coisas: cada ponto vai para o centro mais perto, e cada centro vai para a média do seu grupo.' },
  { tipo: 'regra', frente: 'O que faz um neurônio artificial?', verso: 'Multiplica cada entrada por um peso, soma tudo com um viés e decide pela soma (por exemplo, positivo ou negativo).' },
  { tipo: 'definição', frente: 'O que são pesos?', verso: 'Os números ajustáveis do modelo. Aprender é achar bons pesos.' },
  { tipo: 'regra', frente: 'O que é uma rede neural?', verso: 'Muitos neurônios artificiais em camadas, em que a saída de uma camada vira a entrada da próxima.' },
  { tipo: 'regra', frente: 'O que é a descida do gradiente?', verso: 'Dar pequenos passos no sentido que faz o erro cair, como descer uma ladeira.' },
  { tipo: 'pegadinha', frente: 'E se o passo (taxa de aprendizado) for grande demais?', verso: 'O modelo pula de um lado para o outro do vale e pode se afastar do melhor valor.' },
  { tipo: 'pegadinha', frente: 'Acurácia alta sempre quer dizer modelo bom?', verso: 'Não. Se só 1% é doente, um modelo que diz sempre "sadio" tem 99% de acurácia e é inútil.' },
  { tipo: 'definição', frente: 'O que são falso positivo e falso negativo?', verso: 'Falso positivo: alarme falso (disse que sim, era não). Falso negativo: deixou passar (disse que não, era sim).' },
  { tipo: 'por quê', frente: 'Por que um modelo pode ser injusto?', verso: 'Porque aprende com os dados. Se os dados do passado têm viés, o modelo o copia e o repete.' },
  { tipo: 'história', frente: 'Quem criou a expressão machine learning?', verso: 'Arthur Samuel, em 1959, com um programa que aprendeu a jogar damas.' },
]

export default cartoes
