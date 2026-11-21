import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'aprendizado-de-maquina',
  titulo: 'Aprendizado de máquina',
  area: 'computacao',
  trilha: 'ciencia-de-dados',
  resumo: 'Como o computador aprende a separar gatos de cachorros sem receber regras.',
  duracaoMin: 55,
  xp: 100,
  prerequisitos: ['previsao-com-dados'],
  conexoes: ['previsao-com-dados', 'matrizes', 'banco-de-dados'],
  videoUrl: null,
  fontes: [
    { titulo: 'Machine learning, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Machine_learning' },
    { titulo: 'Arthur Samuel (computer scientist), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Arthur_Samuel_(computer_scientist)' },
    { titulo: 'Perceptron, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Perceptron' },
    { titulo: 'k-nearest neighbors algorithm, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm' },
    { titulo: 'k-means clustering, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/K-means_clustering' },
    { titulo: 'Gradient descent, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Gradient_descent' },
    { titulo: 'Backpropagation, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Backpropagation' },
    { titulo: 'AlexNet, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/AlexNet' },
    { titulo: 'Confusion matrix, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Confusion_matrix' },
    { titulo: 'Algorithmic bias, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Algorithmic_bias' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Matemática', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/matematica' },
  ],
}

export default meta
