import { useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const regras = [
  { nome: '2x + 1', f: (x: number) => 2 * x + 1 },
  { nome: 'x²', f: (x: number) => x * x },
  { nome: '4 - x', f: (x: number) => 4 - x },
  { nome: 'x³ / 4', f: (x: number) => (x * x * x) / 4 },
]
const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Da tabela de pares (x, y) ao gráfico: cada linha da tabela vira um ponto
export default function TabelaEGrafico() {
  const [k, setK] = useState(0)
  const [ligar, setLigar] = useState(false)
  const r = regras[k]
  const xs = [-3, -2, -1, 0, 1, 2, 3]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Da tabela ao gráfico</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Função">
        {regras.map((x, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-4 font-mono font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>f(x) = {x.nome}</button>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-center text-[14px]">
          <tbody>
            <tr><th scope="row" className="pr-2 text-left font-semibold">x</th>{xs.map((x) => <td key={x} className="px-1">{x}</td>)}</tr>
            <tr><th scope="row" className="pr-2 text-left font-semibold">y</th>{xs.map((x) => <td key={x} className="px-1 font-bold text-azul-texto">{f2(r.f(x))}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <PlanoFuncao
        curvas={ligar ? [{ f: r.f, cor: 'var(--color-azul)' }] : []}
        xmin={-4} xmax={4} ymin={-8} ymax={8}
        pontos={xs.map((x) => ({ x, y: r.f(x), cor: 'var(--color-coral)' }))}
        rotuloAlt={`Gráfico de f(x) = ${r.nome} com sete pontos`}
      />
      <label className="mt-3 flex min-h-11 items-center gap-3 text-[15px]">
        <input type="checkbox" checked={ligar} onChange={(e) => setLigar(e.target.checked)} className="size-5" />
        Ligar os pontos (usar todos os valores de x, não só os inteiros)
      </label>
    </div>
  )
}
