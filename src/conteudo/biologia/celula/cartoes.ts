import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula A célula (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que diz a teoria celular?', verso: 'Todo ser vivo é feito de células; a célula é a unidade básica da vida; toda célula vem de outra célula.' },
  { tipo: 'história', frente: 'Quem deu o nome "célula" e quando?', verso: 'Robert Hooke, em 1665, ao olhar cortiça no microscópio e ver "celinhas" (cellulae).' },
  { tipo: 'história', frente: 'Quem propôs a teoria celular?', verso: 'Schleiden (plantas, 1838) e Schwann (animais, 1839). Virchow completou em 1855: toda célula vem de outra.' },
  { tipo: 'definição', frente: 'Procarionte e eucarionte?', verso: 'Procarionte: sem núcleo com membrana (bactérias). Eucarionte: com núcleo e organelas (animais, plantas, fungos, protistas).' },
  { tipo: 'regra', frente: 'Para que serve a membrana plasmática?', verso: 'Envolve a célula e controla o que entra e o que sai.' },
  { tipo: 'regra', frente: 'Qual é a função do núcleo?', verso: 'Guardar o DNA e comandar a célula.' },
  { tipo: 'regra', frente: 'Qual é a função da mitocôndria?', verso: 'Liberar a energia dos alimentos (respiração celular), em forma de ATP.' },
  { tipo: 'regra', frente: 'Qual é a função dos ribossomos?', verso: 'Fabricar proteínas.' },
  { tipo: 'regra', frente: 'Para que serve o complexo de Golgi?', verso: 'Embalar, etiquetar e enviar as proteínas, como uma central dos Correios.' },
  { tipo: 'regra', frente: 'Qual é a função do lisossomo?', verso: 'Digerir e reciclar o que a célula não quer mais.' },
  { tipo: 'regra', frente: 'O que só a célula vegetal tem?', verso: 'Parede celular, cloroplastos (fotossíntese) e um grande vacúolo central.' },
  { tipo: 'regra', frente: 'Qual o caminho de uma proteína?', verso: 'Gene no núcleo → RNA → ribossomo → retículo e Golgi → vesícula → membrana.' },
  { tipo: 'conta', frente: 'Quantos µm tem 1 mm?', verso: '1.000 µm. E 1 µm tem 1.000 nm.' },
  { tipo: 'conta', frente: 'Quantas hemácias (7,5 µm) cabem em fila em 1 mm?', verso: '1.000 ÷ 7,5, cerca de 133.' },
  { tipo: 'pegadinha', frente: 'Quantas células tem o corpo humano?', verso: 'Cerca de 30 a 40 trilhões. Não é um número exato.' },
  { tipo: 'por quê', frente: 'Por que a mitocôndria é chamada de "usina"?', verso: 'Porque libera a energia usada pela célula. Ela tem DNA próprio, e herdamos da mãe.' },
]

export default cartoes
