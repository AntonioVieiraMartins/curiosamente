import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Microscópio e o mundo invisível (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'regra', frente: 'Como calcular o aumento total do microscópio?', verso: 'Aumento da ocular × aumento da objetiva. Ex.: 10× · 40× = 400×.' },
  { tipo: 'pegadinha', frente: 'Aumentar mais sempre mostra mais detalhes?', verso: 'Não. A luz tem um limite (cerca de 0,2 µm). Além disso a imagem só fica maior e borrada.' },
  { tipo: 'definição', frente: 'O que é resolução?', verso: 'A capacidade de separar dois pontos muito próximos. É ela que mostra detalhes, e não o aumento.' },
  { tipo: 'conta', frente: 'Qual é o limite aproximado do microscópio de luz?', verso: 'Cerca de 0,2 µm (200 nm). Por isso um vírus (0,1 µm) não aparece.' },
  { tipo: 'conta', frente: 'Quanto vale 1 µm em nm?', verso: '1 µm = 1.000 nm.' },
  { tipo: 'regra', frente: 'Para que serve o microscópio eletrônico?', verso: 'Usa feixes de elétrons e enxerga detalhes de menos de 1 nm: vírus, organelas, moléculas.' },
  { tipo: 'regra', frente: 'Qual a diferença entre MET e MEV?', verso: 'O de transmissão (MET) olha fatias finas por dentro; o de varredura (MEV) mostra a superfície em 3D.' },
  { tipo: 'regra', frente: 'Para que serve o botão macrométrico?', verso: 'Para o ajuste grosso do foco. O micrométrico faz o ajuste fino.' },
  { tipo: 'regra', frente: 'Por onde começar ao usar o microscópio?', verso: 'Pela objetiva de menor aumento: ela tem o maior campo de visão e é mais fácil de achar a amostra.' },
  { tipo: 'regra', frente: 'Por que a amostra precisa ser fina?', verso: 'Para a luz conseguir atravessar e formar a imagem.' },
  { tipo: 'regra', frente: 'Quando uma lente convexa funciona como lupa?', verso: 'Quando o objeto fica entre a lente e o foco: a imagem é virtual, direita e maior.' },
  { tipo: 'regra', frente: 'Qual é a equação da lente?', verso: '1/f = 1/p + 1/p\'. f é a distância focal, p a do objeto e p\' a da imagem.' },
  { tipo: 'história', frente: 'O que Leeuwenhoek fez de especial?', verso: 'Fabricou lentes minúsculas excelentes, de até cerca de 270×, e descobriu bactérias e protozoários (década de 1670).' },
  { tipo: 'história', frente: 'Quem inventou o microscópio eletrônico?', verso: 'Ernst Ruska e Max Knoll, em 1931. Ruska ganhou o Nobel de Física de 1986.' },
  { tipo: 'conta', frente: 'Que tamanho tem o menor detalhe que o olho nu vê?', verso: 'Cerca de 0,1 mm (100 µm).' },
  { tipo: 'história', frente: 'Quem calculou o limite de resolução da luz?', verso: 'Ernst Abbe, em 1873.' },
]

export default cartoes
