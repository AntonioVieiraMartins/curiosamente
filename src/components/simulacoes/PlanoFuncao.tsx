// Plano cartesiano simples em SVG, usado pelas cápsulas de funções.
// Desenha eixos, grade, uma ou mais curvas y = f(x) e pontos destacados.
export type Curva = { f: (x: number) => number; cor: string; tracejada?: boolean }
export type Ponto = { x: number; y: number; cor?: string; rotulo?: string }

type Props = {
  curvas: Curva[]
  xmin: number
  xmax: number
  ymin: number
  ymax: number
  pontos?: Ponto[]
  rotuloAlt: string
}

const W = 360
const H = 260
const M = 26 // margem para os números dos eixos

function passoBonito(faixa: number) {
  const bruto = faixa / 8
  const p = 10 ** Math.floor(Math.log10(bruto))
  const f = bruto / p
  return (f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10) * p
}

export default function PlanoFuncao({ curvas, xmin, xmax, ymin, ymax, pontos = [], rotuloAlt }: Props) {
  const sx = (x: number) => M + ((x - xmin) / (xmax - xmin)) * (W - 2 * M)
  const sy = (y: number) => H - M - ((y - ymin) / (ymax - ymin)) * (H - 2 * M)
  const px = passoBonito(xmax - xmin), py = passoBonito(ymax - ymin)
  const xs: number[] = [], ys: number[] = []
  for (let x = Math.ceil(xmin / px) * px; x <= xmax + 1e-9; x += px) xs.push(Math.round(x / px) * px)
  for (let y = Math.ceil(ymin / py) * py; y <= ymax + 1e-9; y += py) ys.push(Math.round(y / py) * py)
  const rot = (n: number) => String(Math.round(n * 1000) / 1000).replace('.', ',')
  const caminhos = curvas.map((c) => {
    let d = ''
    let pen = false
    const N = 240
    for (let i = 0; i <= N; i++) {
      const x = xmin + ((xmax - xmin) * i) / N
      const y = c.f(x)
      if (!Number.isFinite(y) || y < ymin - (ymax - ymin) || y > ymax + (ymax - ymin)) { pen = false; continue }
      d += `${pen ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)} `
      pen = true
    }
    return d
  })
  const x0 = Math.min(Math.max(sx(0), M), W - M)
  const y0 = Math.min(Math.max(sy(0), M), H - M)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={rotuloAlt} className="mt-3 w-full max-w-[420px] rounded-2xl bg-fundo">
      {xs.map((x) => <line key={`gx${x}`} x1={sx(x)} x2={sx(x)} y1={M} y2={H - M} stroke="var(--color-borda)" strokeWidth={1} />)}
      {ys.map((y) => <line key={`gy${y}`} x1={M} x2={W - M} y1={sy(y)} y2={sy(y)} stroke="var(--color-borda)" strokeWidth={1} />)}
      <line x1={M} x2={W - M} y1={y0} y2={y0} stroke="var(--color-suave)" strokeWidth={1.5} />
      <line x1={x0} x2={x0} y1={M} y2={H - M} stroke="var(--color-suave)" strokeWidth={1.5} />
      {xs.filter((x) => x !== 0).map((x) => <text key={`tx${x}`} x={sx(x)} y={H - 8} textAnchor="middle" fontSize={11} fill="var(--color-suave)">{rot(x)}</text>)}
      {ys.filter((y) => y !== 0).map((y) => <text key={`ty${y}`} x={M - 4} y={sy(y) + 4} textAnchor="end" fontSize={11} fill="var(--color-suave)">{rot(y)}</text>)}
      {caminhos.map((d, i) => <path key={i} d={d} fill="none" stroke={curvas[i].cor} strokeWidth={3} strokeDasharray={curvas[i].tracejada ? '6 5' : undefined} strokeLinecap="round" />)}
      {pontos.filter((p) => p.x >= xmin && p.x <= xmax && p.y >= ymin && p.y <= ymax).map((p, i) => (
        <g key={i}>
          <circle cx={sx(p.x)} cy={sy(p.y)} r={5} fill={p.cor ?? 'var(--color-coral)'} />
          {p.rotulo && <text x={sx(p.x) + 8} y={sy(p.y) - 8} fontSize={12} fontWeight={600} fill="var(--color-texto)">{p.rotulo}</text>}
        </g>
      ))}
    </svg>
  )
}
