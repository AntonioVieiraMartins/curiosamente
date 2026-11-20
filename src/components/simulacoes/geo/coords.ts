// Conversão de coordenadas do plano para a tela (SVG 200 x 200, origem no meio, 10 px por unidade)
export const E = 10
export const C = 100
export const px = (x: number) => C + x * E
export const py = (y: number) => C - y * E
export const num = (v: number) => v.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
export const sinal = (n: number) => (n < 0 ? `−${num(-n)}` : num(n))
