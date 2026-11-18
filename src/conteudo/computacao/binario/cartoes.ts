import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Binário (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Como funciona o sistema binário?', verso: 'Só usa 0 e 1. Cada posição vale o dobro da anterior: 1, 2, 4, 8, 16... Lâmpada acesa soma o valor da posição.' },
  { tipo: 'conta', frente: 'Que número é 1101 em binário?', verso: '13. 8 (aceso) + 4 (aceso) + 2 (apagado) + 1 (aceso) = 13. Não é "mil cento e um".' },
  { tipo: 'conta', frente: 'Escreva 13 em binário.', verso: '1101. Divida por 2 e anote os restos (1, 0, 1, 1); leia de baixo para cima.' },
  { tipo: 'pegadinha', frente: 'Em que ordem se leem os restos da conversão?', verso: 'De baixo para cima (do último resto para o primeiro). Ler de cima para baixo é erro comum.' },
  { tipo: 'conta', frente: 'Some 101 + 11 em binário.', verso: '1000. 1 + 1 = 10 (escreve 0, vai 1) em cada casa; sobra um 1 na frente. Confira: 5 + 3 = 8.' },
  { tipo: 'definição', frente: 'O que são bit e byte?', verso: 'Bit é um dígito binário (0 ou 1). Byte são 8 bits, com 256 valores (0 a 255).' },
  { tipo: 'regra', frente: 'O que cada bit a mais faz com o número de combinações?', verso: 'Dobra. Com 8 bits são 256 valores, e não 255: o zero também é uma combinação.' },
  { tipo: 'regra', frente: 'O que o número de bits representa?', verso: 'O número de perguntas de sim ou não necessárias para achar uma coisa.' },
  { tipo: 'conta', frente: 'Qual é o código ASCII de "D"?', verso: '68. "A" vale 65, e as letras seguem em ordem (B 66, C 67, D 68). Em binário: 01000100.' },
  { tipo: 'por quê', frente: 'Como letras, cores, sons e imagens viram binário?', verso: 'Tudo vira número: letras por tabelas (ASCII, Unicode), cores com 3 bytes por pixel, e som e imagem também são sequências de números.' },
  { tipo: 'definição', frente: 'O que é hexadecimal e quanto vale 2A?', verso: 'O binário em versão compacta: 4 bits por dígito. 2A = 2 × 16 + 10 = 42.' },
  { tipo: 'pegadinha', frente: 'Por que 0,1 + 0,2 pode dar 0,30000000000000004 num computador?', verso: 'Porque frações decimais como 0,1 não cabem exatamente em binário; o computador guarda uma aproximação.' },
  { tipo: 'por quê', frente: 'O que é estouro (overflow) em binário?', verso: 'Quando o resultado não cabe na quantidade de bits disponível (por exemplo, passar de 255 em 8 bits).' },
  { tipo: 'história', frente: 'Quem criou a palavra "bit" e quando saiu o ASCII?', verso: 'John Tukey, em 1947 (Shannon a usou num artigo em 1948). O ASCII saiu em 1963, com 128 caracteres.' },
  { tipo: 'história', frente: 'O que Leibniz, Boole e Shannon fizeram pelo binário?', verso: 'Leibniz escreveu sobre a aritmética binária (1679 e 1703). Boole criou uma álgebra da lógica (1854). Shannon, em 1937, mostrou que chaves liga-desliga fazem lógica e aritmética binária.' },
]

export default cartoes
