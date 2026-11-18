import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Em base 2: 2^m · 2^n = 2^(m+n). Multiplicar números vira somar expoentes (logaritmos).
export default function ProdutoViraSoma() {
  const [m, setM] = useState(3)
  const [n, setN] = useState(4)
  const im = useId(), inn = useId()
  const a = 2 ** m, b = 2 ** n
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Multiplicar vira somar</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={im} className="text-[15px]">Primeiro número: 2 elevado a <b>{m}</b>
          <input id={im} type="range" min={0} max={10} value={m} onChange={(e) => setM(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={inn} className="text-[15px]">Segundo número: 2 elevado a <b>{n}</b>
          <input id={inn} type="range" min={0} max={10} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-azul p-3 text-[15px]"><p className="font-semibold">Contas com os números</p><p>{a.toLocaleString('pt-BR')} × {b.toLocaleString('pt-BR')} = <b>{(a * b).toLocaleString('pt-BR')}</b></p></div>
        <div className="rounded-2xl border-2 border-verde p-3 text-[15px]"><p className="font-semibold">Contas com os logaritmos (base 2)</p><p>log {a.toLocaleString('pt-BR')} + log {b.toLocaleString('pt-BR')} = {m} + {n} = <b>{m + n}</b></p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Somar os logaritmos ({m} + {n} = {m + n}) dá o logaritmo do produto: 2^{m + n} = {(a * b).toLocaleString('pt-BR')}. Foi essa a ideia que, no século 17, transformou multiplicações enormes em somas.
      </p>
    </div>
  )
}
