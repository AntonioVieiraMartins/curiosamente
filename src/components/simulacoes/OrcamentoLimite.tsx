import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const cenas = [
  { nome: 'Pizzas', texto: 'cada pizza custa R$ 28 e você tem R$ 100', un: 'pizzas', custo: (q: number) => 28 * q, limite: 100, desig: '28p ≤ 100', max: 10 },
  { nome: 'Plano de dados', texto: 'R$ 40 fixos mais R$ 5 por giga, com no máximo R$ 90', un: 'gigas', custo: (q: number) => 40 + 5 * q, limite: 90, desig: '40 + 5g ≤ 90', max: 20 },
  { nome: 'Elevador', texto: 'uma pessoa de 70 kg e caixas de 20 kg, com limite de 400 kg', un: 'caixas', custo: (q: number) => 70 + 20 * q, limite: 400, desig: '70 + 20c ≤ 400', max: 25 },
]

// Um limite máximo vira uma inequação: o que cabe e o que passa.
export default function OrcamentoLimite() {
  const [i, setI] = useState(0)
  const [q, setQ] = useState(0)
  const id = useId()
  const c = cenas[i]
  const total = c.custo(q)
  const cabe = total <= c.limite
  let melhor = 0
  while (melhor + 1 <= c.max && c.custo(melhor + 1) <= c.limite) melhor++
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto cabe no limite?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {cenas.map((s, k) => (
          <button key={s.nome} type="button" aria-pressed={k === i} onClick={() => { setI(k); setQ(0) }}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{s.nome}</button>
        ))}
      </div>
      <p className="mt-3 text-[15px]">{c.texto[0].toUpperCase() + c.texto.slice(1)}. Inequação: <strong>{c.desig}</strong>.</p>
      <label htmlFor={id} className="mt-2 block font-semibold">{c.un}: <span className="text-coral">{q}</span></label>
      <input id={id} type="range" min={0} max={c.max} value={q} onChange={(e) => setQ(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p className={`mt-2 rounded-2xl p-4 text-center text-xl font-semibold ${cabe ? 'bg-verde text-white' : 'bg-amarelo'}`} aria-hidden="true">
        {total} {cabe ? '≤' : '>'} {c.limite}
      </p>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {cabe ? `Com ${q} ${c.un}, o total é ${total}, e cabe no limite de ${c.limite}.` : `Com ${q} ${c.un}, o total é ${total}, e passa do limite de ${c.limite}.`}{' '}
        O máximo que cabe é <strong>{melhor} {c.un}</strong>.
      </p>
    </div>
  )
}
