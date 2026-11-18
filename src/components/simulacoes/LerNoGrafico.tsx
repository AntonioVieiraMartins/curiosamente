import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

// f(x) = x²/2 - 2: dá para ler y a partir de x, e achar os x de um y dado
const f = (x: number) => (x * x) / 2 - 2
const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

export default function LerNoGrafico() {
  const [x, setX] = useState(2)
  const [y, setY] = useState(0)
  const idx = useId(), idy = useId()
  const xsDoY = y >= -2 ? (y === -2 ? [0] : [-Math.sqrt(2 * (y + 2)), Math.sqrt(2 * (y + 2))]) : []
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Lendo o gráfico de f(x) = x²/2 - 2</p>
      <label htmlFor={idx} className="mt-3 block text-[15px]">Escolha x: <b>{x.toLocaleString('pt-BR')}</b>
        <input id={idx} type="range" min={-4} max={4} step={0.5} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <label htmlFor={idy} className="block text-[15px]">Procure y = <b>{y.toLocaleString('pt-BR')}</b>
        <input id={idy} type="range" min={-3} max={6} step={0.5} value={y} onChange={(e) => setY(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao
        curvas={[{ f, cor: 'var(--color-azul)' }, { f: () => y, cor: 'var(--color-coral)', tracejada: true }]}
        xmin={-4} xmax={4} ymin={-3} ymax={7}
        pontos={[{ x, y: f(x), cor: 'var(--color-azul)', rotulo: `y = ${f2(f(x))}` }, ...xsDoY.map((v) => ({ x: v, y, cor: 'var(--color-coral)' }))]}
        rotuloAlt="Gráfico de uma parábola com um ponto escolhido e uma reta horizontal"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Para x = {f2(x)}, o gráfico dá y = <b>{f2(f(x))}</b>. {xsDoY.length === 0 ? `Nenhum x dá y = ${f2(y)}: a reta tracejada não encosta no gráfico.` : `Para y = ${f2(y)}, há ${xsDoY.length} valor(es) de x: ${xsDoY.map(f2).join(' e ')}. Uma saída pode vir de duas entradas, e isso é permitido numa função.`}
      </p>
    </div>
  )
}
