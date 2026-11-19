import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Probabilidade simples (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um experimento aleatório?', verso: 'Uma situação em que não dá para prever o resultado, mas dá para listar tudo o que pode acontecer (moeda, dado, sorteio).' },
  { tipo: 'definição', frente: 'O que são espaço amostral e evento?', verso: 'Espaço amostral: lista de todos os resultados possíveis. Evento: parte dessa lista que nos interessa.' },
  { tipo: 'regra', frente: 'Como calcular a chance quando os resultados são equiprováveis?', verso: 'Casos favoráveis ÷ casos possíveis.' },
  { tipo: 'regra', frente: 'Entre que valores fica uma probabilidade?', verso: 'Entre 0 (impossível) e 1 (certo), ou 0% a 100%.' },
  { tipo: 'conta', frente: 'Chance de sair par num dado?', verso: '3 favoráveis (2, 4, 6) em 6 possíveis = 1/2.' },
  { tipo: 'regra', frente: 'Como calcular a chance de um evento NÃO acontecer?', verso: '1 − chance de acontecer. Chuva 30%: não chover 70%.' },
  { tipo: 'pegadinha', frente: 'Saíram 5 caras seguidas. A próxima tem que ser coroa?', verso: 'Não. A moeda não tem memória: continua 50% e 50% (falácia do apostador).' },
  { tipo: 'definição', frente: 'O que diz a lei dos grandes números?', verso: 'Com muitas repetições, a frequência observada se aproxima da chance calculada.' },
  { tipo: 'conta', frente: 'Quantas combinações há ao lançar dois dados?', verso: '6 × 6 = 36.' },
  { tipo: 'conta', frente: 'Chance de a soma de dois dados ser 7?', verso: '6 maneiras em 36 combinações = 1/6.' },
  { tipo: 'por quê', frente: 'Por que a soma 7 é a mais comum em dois dados?', verso: 'Ela sai de 6 maneiras. A soma 2 ou a 12 só saem de 1 maneira.' },
  { tipo: 'conta', frente: 'Quantas sequências há em 3 lançamentos de moeda?', verso: '2 × 2 × 2 = 8. A cada moeda nova o número dobra.' },
  { tipo: 'conta', frente: 'Chance de exatamente 2 caras em 3 lançamentos?', verso: 'CCK, CKC e KCC: 3/8.' },
  { tipo: 'regra', frente: 'Como calcular a chance de dois eventos independentes acontecerem juntos?', verso: 'Multiplicar as chances. Cara e 6: 1/2 × 1/6 = 1/12.' },
  { tipo: 'definição', frente: 'Quando um jogo é justo?', verso: 'Quando os jogadores têm a mesma chance de ganhar.' },
  { tipo: 'história', frente: 'Quem trocou cartas em 1654 sobre o jogo interrompido?', verso: 'Pascal e Fermat. Foi o nascimento da teoria da probabilidade.' },
]

export default cartoes
