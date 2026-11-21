// Contas de "ajustar uma curva aos dados", usadas nas simulações de previsão.

export type Ponto = { x: number; y: number }

// Dados inventados (só para ilustrar): área do apartamento (m²) e preço (mil reais)
export const casas: Ponto[] = [
  { x: 30, y: 110 }, { x: 45, y: 140 }, { x: 50, y: 170 }, { x: 60, y: 185 }, { x: 70, y: 225 },
  { x: 80, y: 245 }, { x: 90, y: 290 }, { x: 100, y: 300 }, { x: 120, y: 380 },
]

// Reta que deixa a soma dos quadrados dos erros a menor possível (mínimos quadrados)
export function melhorReta(pts: Ponto[]) {
  const n = pts.length
  const mx = pts.reduce((s, p) => s + p.x, 0) / n
  const my = pts.reduce((s, p) => s + p.y, 0) / n
  const sxy = pts.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0)
  const sxx = pts.reduce((s, p) => s + (p.x - mx) ** 2, 0)
  const a = sxy / sxx
  return { a, b: my - a * mx }
}

export function somaDosQuadrados(pts: Ponto[], a: number, b: number) {
  return pts.reduce((s, p) => s + (p.y - (a * p.x + b)) ** 2, 0)
}

// Polinômio de um grau qualquer: resolve as equações normais por eliminação de Gauss
export function ajustePolinomial(pts: Ponto[], grau: number): number[] {
  const m = grau + 1
  const A: number[][] = Array.from({ length: m }, (_, i) =>
    Array.from({ length: m + 1 }, (_, j) =>
      j < m ? pts.reduce((s, p) => s + p.x ** (i + j), 0) : pts.reduce((s, p) => s + p.y * p.x ** i, 0),
    ),
  )
  for (let c = 0; c < m; c++) {
    let mx = c
    for (let r = c + 1; r < m; r++) if (Math.abs(A[r][c]) > Math.abs(A[mx][c])) mx = r
    ;[A[c], A[mx]] = [A[mx], A[c]]
    for (let r = c + 1; r < m; r++) {
      const f = A[r][c] / A[c][c]
      for (let k = c; k <= m; k++) A[r][k] -= f * A[c][k]
    }
  }
  const coef = new Array<number>(m).fill(0)
  for (let i = m - 1; i >= 0; i--) {
    let s = A[i][m]
    for (let j = i + 1; j < m; j++) s -= A[i][j] * coef[j]
    coef[i] = s / A[i][i]
  }
  return coef
}

export const avaliaPolinomio = (coef: number[], x: number) => coef.reduce((s, c, i) => s + c * x ** i, 0)

export const erroMedioQuadratico = (pts: Ponto[], f: (x: number) => number) =>
  pts.reduce((s, p) => s + (p.y - f(p.x)) ** 2, 0) / pts.length
