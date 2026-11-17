// Regras do jogo de Monty Hall, separadas da tela para poderem ser testadas sozinhas.

export type Placar = {
  rodadas: number
  vitoriasFicando: number
  vitoriasTrocando: number
  vitoriasMoeda: number // decide ficar ou trocar no cara ou coroa
}

export const placarZerado: Placar = { rodadas: 0, vitoriasFicando: 0, vitoriasTrocando: 0, vitoriasMoeda: 0 }

// Joga n rodadas e conta, em cada uma, quem teria ganhado com cada estratégia.
// Não é preciso sortear a porta que o apresentador abre: ela nunca muda o resultado.
// Se a primeira escolha acertou o carro, ficar ganha; se errou, a porta que sobra É o carro,
// então trocar ganha. É exatamente por isso que trocar vence 2 em cada 3.
export function jogarRodadas(placar: Placar, n: number, aleatorio: () => number = Math.random): Placar {
  let { rodadas, vitoriasFicando, vitoriasTrocando, vitoriasMoeda } = placar
  for (let i = 0; i < n; i++) {
    const carro = Math.floor(aleatorio() * 3)
    const escolha = Math.floor(aleatorio() * 3)
    const acertouDePrimeira = escolha === carro
    if (acertouDePrimeira) vitoriasFicando++
    else vitoriasTrocando++
    // A moeda escolhe uma das duas estratégias ao acaso: metade de 1/3 + metade de 2/3 = 1/2
    const moedaMandaTrocar = aleatorio() < 0.5
    // Trocar ganha quando você errou de primeira; ficar ganha quando acertou
    if (moedaMandaTrocar !== acertouDePrimeira) vitoriasMoeda++
    rodadas++
  }
  return { rodadas, vitoriasFicando, vitoriasTrocando, vitoriasMoeda }
}

export function porcentagem(vitorias: number, rodadas: number) {
  return rodadas === 0 ? 0 : (vitorias / rodadas) * 100
}
