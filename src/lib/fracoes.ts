// Contas de fração usadas pelas simulações (só números inteiros, sem arredondar)
export const mdc = (a: number, b: number): number => (b === 0 ? Math.abs(a) : mdc(b, a % b))
export const mmc = (a: number, b: number) => (a * b) / mdc(a, b)

export function simplificar(cima: number, baixo: number) {
  const d = mdc(cima, baixo) || 1
  return { cima: cima / d, baixo: baixo / d }
}

// "7/4" vira "1 3/4"; "8/4" vira "2"; "3/4" fica "3/4"
export function escrever(cima: number, baixo: number, misto = false) {
  const s = simplificar(cima, baixo)
  if (s.baixo === 1) return String(s.cima)
  if (misto && s.cima > s.baixo) {
    const inteiro = Math.floor(s.cima / s.baixo)
    return `${inteiro} ${s.cima - inteiro * s.baixo}/${s.baixo}`
  }
  return `${s.cima}/${s.baixo}`
}
