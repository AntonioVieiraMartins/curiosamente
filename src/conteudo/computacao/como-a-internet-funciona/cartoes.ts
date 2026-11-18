import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Como a internet funciona (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é a internet?', verso: 'Uma rede de redes que seguem as mesmas regras (TCP/IP).' },
  { tipo: 'regra', frente: 'Como uma mensagem viaja pela internet?', verso: 'É cortada em pacotes, cada um com cabeçalho (o envelope) e carga (o pedaço). Roteadores leem o cabeçalho e escolhem o próximo salto.' },
  { tipo: 'conta', frente: '"Oi, tudo bem com você?" tem 22 caracteres e cada pacote leva 5. Quantos pacotes?', verso: '5: 22 ÷ 5 = 4,4, então são 4 cheios e 1 com 2 letras (não existe 0,4 de pacote).' },
  { tipo: 'por quê', frente: 'Por que existem protocolos?', verso: 'Para que todos escrevam e leiam o envelope do mesmo jeito. Se A pusesse o endereço no início e B esperasse no fim, o roteador leria um pedaço da mensagem como endereço.' },
  { tipo: 'regra', frente: 'O que acontece se um cabo é cortado ou um pacote se perde?', verso: 'O pacote dá a volta por outro caminho. Se chegar fora de ordem ou se perder, a numeração permite remontar e pedir de novo.' },
  { tipo: 'regra', frente: 'Por onde os sinais viajam?', verso: 'Fibra óptica (pulsos de luz, a espinha dorsal), cabo de cobre (sinais elétricos, redes locais) e ondas de rádio (Wi-Fi, 4G/5G até uma antena, depois cabo).' },
  { tipo: 'conta', frente: 'Quanto demora baixar 500 MB a 100 Mbps?', verso: '40 s no melhor caso. Mbps são megabits: 500 MB × 8 = 4.000 megabits; 4.000 ÷ 100 = 40.' },
  { tipo: 'pegadinha', frente: 'Mbps e MB são a mesma coisa?', verso: 'Não: Mbps são megabits por segundo. Para estimar o tempo, multiplique o arquivo em MB por 8 e divida pela velocidade.' },
  { tipo: 'conta', frente: 'Servidor a 4.000 km, luz a 200 km/ms: qual o tempo mínimo de ida e volta?', verso: '40 ms: ida 4.000 ÷ 200 = 20 ms, ida e volta 40 ms, sem contar roteadores e curvas.' },
  { tipo: 'problema', frente: 'O celular mostra Wi-Fi conectado, mas nenhum site abre. Como investigar?', verso: 'O celular até o roteador está ok. Teste outro aparelho: se também não abre, o problema está depois do roteador (cabo, operadora); se só um falha, o problema é nele.' },
  { tipo: 'pegadinha', frente: 'Internet e Web são a mesma coisa?', verso: 'Não. A Web é só um serviço da internet, ao lado de e-mail, jogos e chamadas de vídeo.' },
  { tipo: 'história', frente: 'Quem criou a ideia de pacotes e quando a ARPANET começou?', verso: 'Paul Baran (anos 1960) e Donald Davies (1965, que cunhou "packet switching"). Os dois primeiros nós da ARPANET se conectaram em 29/10/1969.' },
  { tipo: 'história', frente: 'O que foi feito em 1974, 1982 e 1990?', verso: '1974: Cerf e Kahn propõem interligar redes de pacotes (nasce o termo internet). 1982: TCP/IP padronizado. 1990: Tim Berners-Lee escreve o primeiro navegador.' },
]

export default cartoes
