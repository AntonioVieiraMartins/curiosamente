import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Três gráficos posição × tempo; a pessoa descobre a velocidade pela inclinação
const GRAFICOS = [
  { s0: 0, s1: 50, nome: 'Gráfico 1', certa: 1, porque: 'Anda 50 m em 10 s: 50 ÷ 10 = 5 m/s, positiva (a linha sobe).' },
  { s0: 40, s1: 0, nome: 'Gráfico 2', certa: 2, porque: 'A posição cai de 40 m para 0 m em 10 s: −40 ÷ 10 = −4 m/s. O sinal negativo indica o sentido contrário.' },
  { s0: 30, s1: 30, nome: 'Gráfico 3', certa: 0, porque: 'A linha é horizontal: a posição não muda. A velocidade é zero (corpo parado).' },
]
const OP = ['0 m/s', '5 m/s', '−4 m/s', '10 m/s']

export default function LeituraDoGrafico() {
  const [resp, setResp] = useState<(number | null)[]>(GRAFICOS.map(() => null))
  const acertos = resp.filter((r, i) => r === GRAFICOS[i].certa).length
  const gy = (s: number) => 70 - (s / 60) * 60
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é a velocidade? (tempo de 0 a 10 s)</p>
      <ul className="mt-3 flex flex-col gap-3">
        {GRAFICOS.map((g, i) => {
          const r = resp[i]
          return (
            <li key={g.nome} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">{g.nome}</p>
              <svg viewBox="0 0 160 80" className="mt-1 w-full max-w-xs" role="img" aria-label={`${g.nome}: a posição vai de ${g.s0} m a ${g.s1} m em 10 s`}>
                <line x1={20} y1={70} x2={150} y2={70} stroke="var(--color-texto)" strokeOpacity="0.6" />
                <line x1={20} y1={8} x2={20} y2={70} stroke="var(--color-texto)" strokeOpacity="0.6" />
                <polyline points={`20,${gy(g.s0)} 140,${gy(g.s1)}`} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
                <text x={2} y={gy(g.s0) + 3} fontSize="8" fill="var(--color-suave)">{g.s0}</text>
                <text x={143} y={gy(g.s1) + 3} fontSize="8" fill="var(--color-suave)">{g.s1}</text>
                <text x={150} y={79} fontSize="7" textAnchor="end" fill="var(--color-suave)">t (s)</text>
              </svg>
              <div className="mt-2 flex flex-wrap gap-2">
                {OP.map((n, k) => (
                  <button key={n} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? k : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === k ? (k === g.certa ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : r !== null && k === g.certa ? 'border-verde' : 'border-borda'}`}>{n}</button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === g.certa ? 'Certo. ' : 'Quase. '}{g.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {GRAFICOS.length}</p>
        <button type="button" onClick={() => setResp(GRAFICOS.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
