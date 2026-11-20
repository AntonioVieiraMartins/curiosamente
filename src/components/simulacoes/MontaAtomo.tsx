import { useState } from 'react'
import { cartao } from '../ui/estilos'

const elementos = ['', 'Hidrogênio (H)', 'Hélio (He)', 'Lítio (Li)', 'Berílio (Be)', 'Boro (B)', 'Carbono (C)', 'Nitrogênio (N)', 'Oxigênio (O)', 'Flúor (F)', 'Neônio (Ne)', 'Sódio (Na)', 'Magnésio (Mg)', 'Alumínio (Al)', 'Silício (Si)', 'Fósforo (P)', 'Enxofre (S)', 'Cloro (Cl)', 'Argônio (Ar)']

// Distribui os elétrons em camadas de 2, 8 e 8 (modelo simples para os 18 primeiros elementos)
function camadas(e: number) {
  const a = Math.min(e, 2)
  const b = Math.min(Math.max(e - 2, 0), 8)
  const c = Math.max(e - 10, 0)
  return [a, b, c]
}

export default function MontaAtomo() {
  const [p, setP] = useState(6)
  const [n, setN] = useState(6)
  const [e, setE] = useState(6)
  const carga = p - e
  const A = p + n
  const raios = [20, 38, 56]
  const cam = camadas(e)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte um átomo</p>
      <svg viewBox="0 0 200 140" className="mx-auto mt-3 w-full max-w-xs rounded-2xl bg-fundo" role="img" aria-label={`Átomo com ${p} prótons, ${n} nêutrons e ${e} elétrons`}>
        {raios.map((r) => <circle key={r} cx={100} cy={70} r={r} fill="none" stroke="var(--color-borda)" />)}
        <circle cx={100} cy={70} r={11 + Math.min(p + n, 36) * 0.18} fill="var(--color-coral)" fillOpacity="0.85" />
        <text x={100} y={73} fontSize="8" textAnchor="middle" fill="white" fontWeight="700">{p}p {n}n</text>
        {cam.map((qtd, k) =>
          Array.from({ length: qtd }, (_, i) => {
            const ang = (i / Math.max(qtd, 1)) * 2 * Math.PI + k * 0.5
            return <circle key={`${k}-${i}`} cx={100 + raios[k] * Math.cos(ang)} cy={70 + raios[k] * Math.sin(ang)} r={3.5} fill="var(--color-azul)" />
          }),
        )}
      </svg>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm font-semibold">Prótons: {p}<input type="range" min={1} max={18} step={1} value={p} onChange={(ev) => setP(Number(ev.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
        <label className="block text-sm font-semibold">Nêutrons: {n}<input type="range" min={0} max={22} step={1} value={n} onChange={(ev) => setN(Number(ev.target.value))} className="mt-1 w-full accent-[var(--color-suave)]" /></label>
        <label className="block text-sm font-semibold">Elétrons: {e}<input type="range" min={0} max={20} step={1} value={e} onChange={(ev) => setE(Number(ev.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        O número de prótons manda: Z = {p}, então é <strong>{elementos[p]}</strong>. Massa A = {p} + {n} = <strong>{A}</strong>. Carga = {p} − {e} = <strong>{carga > 0 ? `+${carga}` : carga}</strong>:{' '}
        {carga === 0 ? 'átomo neutro.' : carga > 0 ? `íon positivo (cátion), perdeu ${carga} elétron${carga > 1 ? 's' : ''}.` : `íon negativo (ânion), ganhou ${-carga} elétron${-carga > 1 ? 's' : ''}.`} Mudar os nêutrons não troca o elemento: só cria outro <em>isótopo</em>.
      </p>
    </div>
  )
}
