import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'
import PlanoBase from './geo/PlanoBase'
import { num, px, py, sinal } from './geo/coords'

type Modo = 'paralela' | 'perpendicular'

// Paralelas têm o mesmo m; perpendiculares têm m1 × m2 = −1
export default function ParalelasEPerpendiculares() {
  const [m1, setM1] = useState(2)
  const [modo, setModo] = useState<Modo>('perpendicular')
  const horizontal = m1 === 0
  const m2 = modo === 'paralela' ? m1 : horizontal ? null : -1 / m1
  const n1 = -2
  const n2 = 3
  const desenhar = (m: number | null, n: number, cor: string) =>
    m === null
      ? <line x1={px(0)} y1={0} x2={px(0)} y2={200} stroke={cor} strokeWidth="2.5" />
      : <line x1={px(-10)} y1={py(m * -10 + n)} x2={px(10)} y2={py(m * 10 + n)} stroke={cor} strokeWidth="2.5" />

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Paralelas e perpendiculares</p>
      <PlanoBase aria={`Reta azul de inclinação ${m1} e reta coral ${modo}`}>
        {desenhar(m1, n1, 'var(--color-azul)')}
        {desenhar(m2, modo === 'paralela' ? n2 : 0, 'var(--color-coral)')}
      </PlanoBase>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Tipo da segunda reta">
        {(['paralela', 'perpendicular'] as Modo[]).map((t) => (
          <button key={t} type="button" aria-pressed={modo === t} onClick={() => setModo(t)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${modo === t ? 'border-coral bg-coral text-white' : 'border-borda'}`}>
            Reta {t}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <Deslizante rotulo="Inclinação da reta azul (m₁)" valor={m1} min={-3} max={3} passo={0.5} aoMudar={setM1} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {modo === 'paralela'
          ? <>Mesma inclinação: m₂ = m₁ = <strong>{num(m1)}</strong>. Retas paralelas nunca se encontram.</>
          : horizontal
            ? 'A reta azul é horizontal (m = 0). A perpendicular a ela é vertical, que não tem inclinação.'
            : <>m₂ = −1 ÷ {sinal(m1)} = <strong>{sinal(m2 as number)}</strong>. Conferindo: {sinal(m1)} × {sinal(m2 as number)} = <strong>−1</strong>.</>}
      </p>
    </div>
  )
}
