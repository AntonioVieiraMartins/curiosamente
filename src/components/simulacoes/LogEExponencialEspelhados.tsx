import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 3 })

// log_b(x) é a "volta" de bˣ: os gráficos são espelhos em relação à reta y = x
export default function LogEExponencialEspelhados() {
  const [b, setB] = useState(2)
  const [x, setX] = useState(8)
  const id = useId()
  const y = Math.log(x) / Math.log(b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O logaritmo desfaz o exponencial</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Base">
        {[2, 3, 10].map((q) => (
          <button key={q} type="button" aria-pressed={b === q} onClick={() => setB(q)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${b === q ? 'border-azul bg-fundo' : 'border-borda'}`}>base {q}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block text-[15px]">x = <b>{f2(x)}</b>
        <input id={id} type="range" min={0.25} max={16} step={0.25} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao
        curvas={[{ f: (t) => Math.log(t) / Math.log(b), cor: 'var(--color-azul)' }, { f: (t) => b ** t, cor: 'var(--color-coral)', tracejada: true }, { f: (t) => t, cor: 'var(--color-suave)', tracejada: true }]}
        xmin={-2} xmax={10} ymin={-3} ymax={9}
        pontos={[{ x, y, cor: 'var(--color-azul)', rotulo: `(${f2(x)} ; ${f2(y)})` }]}
        rotuloAlt="Gráficos do logaritmo e da exponencial, espelhados pela reta y igual a x"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        log base {b} de {f2(x)} = <b>{f2(y)}</b>, porque {b}^{f2(y)} = {f2(x)}. A curva azul (log) e a coral tracejada (exponencial) são espelhos pela reta y = x.
      </p>
    </div>
  )
}
