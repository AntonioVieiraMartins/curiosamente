import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Íons: o átomo ganha ou perde elétrons, e os prótons ficam
const atomos = [
  { simbolo: 'Na', nome: 'Sódio', Z: 11, tende: 'perder 1 elétron e virar Na⁺' },
  { simbolo: 'Mg', nome: 'Magnésio', Z: 12, tende: 'perder 2 elétrons e virar Mg²⁺' },
  { simbolo: 'Cl', nome: 'Cloro', Z: 17, tende: 'ganhar 1 elétron e virar Cl⁻' },
  { simbolo: 'O', nome: 'Oxigênio', Z: 8, tende: 'ganhar 2 elétrons e virar O²⁻' },
]

export default function GanhaOuPerdeEletron() {
  const [i, setI] = useState(0)
  const [delta, setDelta] = useState(0) // elétrons ganhos (+) ou perdidos (−)
  const a = atomos[i]
  const e = a.Z + delta
  const carga = -delta
  const rotulo = carga === 0 ? a.simbolo : `${a.simbolo}${Math.abs(carga) > 1 ? Math.abs(carga) : ''}${carga > 0 ? '⁺' : '⁻'}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ganhar ou perder elétrons</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Átomo">
        {atomos.map((s, k) => (
          <button key={s.simbolo} type="button" aria-pressed={i === k} onClick={() => { setI(k); setDelta(0) }} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>
            {s.nome} ({s.simbolo})
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="text-center">
          <div className="font-serif text-5xl" style={{ color: carga === 0 ? 'var(--color-texto)' : carga > 0 ? 'var(--color-coral)' : 'var(--color-azul)' }}>{rotulo}</div>
          <div className="mt-1 text-sm text-suave">{a.Z} prótons · {e} elétrons</div>
        </div>
      </div>
      <label className="mt-3 block text-sm font-semibold">Elétrons ganhos (+) ou perdidos (−): {delta > 0 ? `+${delta}` : delta}<input type="range" min={-3} max={3} step={1} value={delta} onChange={(ev) => setDelta(Number(ev.target.value))} className="mt-1 w-full accent-[var(--color-azul)]" /></label>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Carga = prótons − elétrons = {a.Z} − {e} = <strong>{carga > 0 ? `+${carga}` : carga}</strong>. {carga === 0 ? 'Neutro.' : carga > 0 ? 'Perdeu elétrons: sobrou carga positiva (cátion).' : 'Ganhou elétrons: sobrou carga negativa (ânion).'} O {a.nome.toLowerCase()} costuma {a.tende}. O elemento continua sendo o mesmo, porque o número de prótons não mudou.
      </p>
    </div>
  )
}
