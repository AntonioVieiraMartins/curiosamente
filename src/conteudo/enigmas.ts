// Enigmas da página inicial: uma pergunta rápida por cápsula, com palpite antes da explicação.
// Cada conta foi conferida à mão. O `capsulaId` precisa ser de uma cápsula pronta.
export type Enigma = {
  id: string
  capsulaId: string
  tema: string
  pergunta: string
  opcoes: string[]
  correta: number // posição em `opcoes`
  explicacao: string
}

export const enigmas: Enigma[] = [
  {
    id: 'desconto-duplo',
    capsulaId: 'porcentagem',
    tema: 'Porcentagem',
    pergunta: 'Um tênis de R$ 100 tem 20% de desconto e, depois, mais 10% sobre o novo preço. Quanto você paga?',
    opcoes: ['R$ 70,00', 'R$ 72,00', 'R$ 75,00'],
    correta: 1,
    explicacao: 'Os descontos não se somam. 20% de desconto deixa o tênis em R$ 80, e 10% de R$ 80 são R$ 8. Você paga R$ 72, e não R$ 70.',
  },
  {
    id: 'porta-trocada',
    capsulaId: 'monty-hall',
    tema: 'Probabilidade',
    pergunta: 'Há 3 portas e um prêmio atrás de uma. Você escolhe a porta 1. Quem sabe onde está o prêmio abre uma porta vazia. Qual a chance de ganhar se você trocar?',
    opcoes: ['1 em 2', '1 em 3', '2 em 3'],
    correta: 2,
    explicacao: 'Sua primeira escolha acerta em 1 de cada 3 vezes e isso não muda. Sobram 2 de 3 para a outra porta fechada, então trocar ganha 2 de cada 3 vezes.',
  },
  {
    id: 'folha-dobrada',
    capsulaId: 'exponencial',
    tema: 'Crescimento exponencial',
    pergunta: 'Uma folha de 0,1 mm, dobrada ao meio 42 vezes (só na teoria, na vida real a folha não deixa). Que altura teria a pilha?',
    opcoes: ['Cerca de 4 km, como uma montanha', 'Cerca de 440 mil km, mais que a distância até a Lua', 'Cerca de 400 m, como um prédio alto'],
    correta: 1,
    explicacao: 'Cada dobra dobra a altura: 0,1 mm × 2⁴² dá uns 440 mil km. A Lua está a cerca de 384 mil km. O crescimento exponencial começa devagar e depois explode.',
  },
  {
    id: 'cinco-em-binario',
    capsulaId: 'binario',
    tema: 'Binário',
    pergunta: 'O computador só usa 0 e 1. Que número é o 101 escrito em binário?',
    opcoes: ['3', '5', 'Cento e um'],
    correta: 1,
    explicacao: 'Da direita para a esquerda, cada casa vale 1, 2, 4, 8... Em 101 acendem o 4 e o 1: 4 + 1 = 5.',
  },
  {
    id: 'troco-certo',
    capsulaId: 'dinheiro-e-troco',
    tema: 'Dinheiro e troco',
    pergunta: 'Uma compra deu R$ 37,40 e você pagou com uma nota de R$ 50. Qual é o troco?',
    opcoes: ['R$ 12,40', 'R$ 12,60', 'R$ 13,60'],
    correta: 1,
    explicacao: 'Conte para a frente: de R$ 37,40 até R$ 38,00 são R$ 0,60; até R$ 50,00 são mais R$ 12,00. Total: R$ 12,60.',
  },
  {
    id: 'frio-que-piora',
    capsulaId: 'numeros-negativos',
    tema: 'Números negativos',
    pergunta: 'Está fazendo -3 °C e a temperatura cai mais 5 graus. Quantos graus faz agora?',
    opcoes: ['-2 °C', '2 °C', '-8 °C'],
    correta: 2,
    explicacao: 'Cair é andar para baixo no termômetro: -3 menos 5 dá -8. Quem esquece o sinal negativo erra para menos 2 ou 2.',
  },
  {
    id: 'primos-ate-vinte',
    capsulaId: 'numeros-primos',
    tema: 'Números primos',
    pergunta: 'Quantos números primos existem de 1 até 20?',
    opcoes: ['6', '8', '10'],
    correta: 1,
    explicacao: 'São 2, 3, 5, 7, 11, 13, 17 e 19, oito no total. O 1 não é primo, e o 2 é o único primo par.',
  },
  {
    id: 'mesma-senha',
    capsulaId: 'senhas-e-hash',
    tema: 'Senhas e hash',
    pergunta: 'Duas pessoas usam a mesma senha num site que guarda só o hash, sem "sal". Como ficam os hashes guardados?',
    opcoes: ['Iguais', 'Diferentes', 'Sorteados na hora'],
    correta: 0,
    explicacao: 'O mesmo texto sempre dá o mesmo hash. Por isso quem rouba o banco vê quem repete senha. O "sal" corrige isso: cada pessoa recebe um tempero próprio.',
  },
  {
    id: 'reuniao-que-passa-da-hora',
    capsulaId: 'tempo-e-horas',
    tema: 'Tempo e horas',
    pergunta: 'Uma reunião começa às 14h50 e dura 1h30. A que horas termina?',
    opcoes: ['15h80', '16h20', '16h40'],
    correta: 1,
    explicacao: 'A hora tem 60 minutos, não 100. De 14h50 até 15h00 são 10 minutos. Faltam 1h20: 15h00 + 1h20 = 16h20.',
  },
  {
    id: 'media-e-mediana',
    capsulaId: 'tabelas-e-graficos',
    tema: 'Tabelas e gráficos',
    pergunta: 'Cinco salários: R$ 1.200, 1.300, 1.300, 1.500 e 1.800. Qual é a mediana?',
    opcoes: ['R$ 1.300', 'R$ 1.420', 'R$ 1.500'],
    correta: 0,
    explicacao: 'A mediana é o valor do meio com os dados em ordem. Com 5 salários, é o 3º: R$ 1.300. A média daria R$ 1.420.',
  },
]
