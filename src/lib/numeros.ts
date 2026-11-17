// Lê o que a pessoa digitou num exercício e transforma em número.
// Aceita: 5, -3, −3, 0,375, 3/8, 1 1/2 (número misto), 60%, R$ 20. Devolve null se não entender.
export function lerNumero(texto: string): number | null {
  const limpo = texto
    .trim()
    .replace(/^R\$\s*/i, '')
    .replace(/%$/, '')
    .replace(/−/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

  const misto = limpo.match(/^(-?)(\d+) (\d+)\/(\d+)$/)
  if (misto) {
    const [, sinal, inteiro, cima, baixo] = misto
    if (Number(baixo) === 0) return null
    const valor = Number(inteiro) + Number(cima) / Number(baixo)
    return sinal ? -valor : valor
  }

  // "3/8" ou a razão "2:3" (que é a mesma coisa que 2/3)
  const fracao = limpo.match(/^(-?\d+(?:,\d+)?)\s?[/:]\s?(-?\d+(?:,\d+)?)$/)
  if (fracao) {
    const baixo = Number(fracao[2].replace(',', '.'))
    return baixo === 0 ? null : Number(fracao[1].replace(',', '.')) / baixo
  }

  // "0,5" é meio. "1.000" é mil (ponto separando milhares, como no Brasil).
  // Mas quem digita "0.5" ou "2.75" (ponto como vírgula) também é entendido.
  if (!/^-?[\d.]+(,\d+)?$/.test(limpo)) return null
  const pontoDeMilhar = limpo.includes(',') || /^-?\d{1,3}(\.\d{3})+$/.test(limpo) && !/^-?0\./.test(limpo)
  const n = Number(pontoDeMilhar ? limpo.replace(/\./g, '').replace(',', '.') : limpo)
  return Number.isFinite(n) ? n : null
}

export const mesmoNumero = (a: number, b: number) => Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(b))

// Escreve o expoente "pequeno e no alto": sobrescrito(-3) vira "⁻³". Usado em 2⁵, 10⁻² etc.
const altos: Record<string, string> = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' }
export const sobrescrito = (n: number) => [...String(n)].map((c) => altos[c] ?? c).join('')
