import { useState } from 'react'
import { cartao } from '../ui/estilos'

// v = v0 + a·t, mostrada segundo a segundo
export default function AceleracaoDoCarro() {
  const [v0, setV0] = useState(0)
  const [a, setA] = useState(3)
  const segundos = [0, 1, 2, 3, 4, 5, 6]
  const v = (t: number) => Math.max(0, v0 + a * t)
  const maximo = 40
  const tipo = a === 0 ? 'velocidade constante' : a > 0 ? 'acelerando (a velocidade aumenta)' : 'freando (a velocidade diminui)'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto a velocidade muda a cada segundo</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm font-semibold">Velocidade inicial: {v0} m/s<input type="range" min={0} max={30} step={5} value={v0} onChange={(e) => setV0(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
        <label className="block text-sm font-semibold">Aceleração: {a} m/s²<input type="range" min={-5} max={5} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} className="mt-1 w-full accent-[var(--color-coral)]" /></label>
      </div>
      <ul className="mt-3 space-y-1" aria-label="Velocidade a cada segundo">
        {segundos.map((t) => (
          <li key={t} className="flex items-center gap-2 text-sm">
            <span className="w-10 shrink-0 text-suave">{t} s</span>
            <span className="h-4 rounded-full bg-azul" style={{ width: `${Math.min(100, (v(t) / maximo) * 100)}%`, minWidth: v(t) > 0 ? 4 : 0 }} />
            <span className="font-semibold">{v(t)} m/s</span>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        A cada segundo a velocidade muda <strong>{a} m/s</strong>. Situação: {tipo}.
        {a < 0 && v0 + a * 6 < 0 ? ' (O carro para e fica parado: a barra para em zero.)' : ''}
      </p>
    </div>
  )
}
