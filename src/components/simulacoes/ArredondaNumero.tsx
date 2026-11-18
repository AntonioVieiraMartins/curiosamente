import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const casas = [{ nome: 'dezena', p: 10 }, { nome: 'centena', p: 100 }, { nome: 'milhar', p: 1000 }]

// Arredondar: ficar com o múltiplo mais perto. Se o algarismo seguinte for 5 ou mais, sobe.
export default function ArredondaNumero() {
  const [n, setN] = useState(4738)
  const [k, setK] = useState(1)
  const id = useId()
  const { p } = casas[k]
  const baixo = Math.floor(n / p) * p
  const alto = baixo + p
  const resto = n - baixo
  const sobe = resto * 2 >= p
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Arredondando</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Número: <b>{n.toLocaleString('pt-BR')}</b></label>
      <input id={id} type="range" min={0} max={9999} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 h-11 w-full" />
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Arredondar para">
        {casas.map((c, i) => (
          <button key={c.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>à {c.nome} mais próxima</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {n.toLocaleString('pt-BR')} está entre {baixo.toLocaleString('pt-BR')} e {alto.toLocaleString('pt-BR')}. O mais perto é<b>{(sobe ? alto : baixo).toLocaleString('pt-BR')}</b>
        {resto * 2 === p ? ' (bem no meio: por convenção, sobe).' : '.'}
      </p>
    </div>
  )
}
