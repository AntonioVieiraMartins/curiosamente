import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const regras = [
  { nome: '1/x', f: (x: number) => 1 / x, ok: (x: number) => x !== 0, dom: 'todos os reais, menos o 0', porque: 'não se divide por zero' },
  { nome: '√x', f: (x: number) => Math.sqrt(x), ok: (x: number) => x >= 0, dom: 'os reais maiores ou iguais a 0', porque: 'não existe raiz quadrada real de número negativo' },
  { nome: 'x²', f: (x: number) => x * x, ok: () => true, dom: 'todos os reais', porque: 'qualquer número pode ser elevado ao quadrado' },
  { nome: '2x + 1', f: (x: number) => 2 * x + 1, ok: () => true, dom: 'todos os reais', porque: 'qualquer número pode ser dobrado e somado com 1' },
]
const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Domínio: os valores de x para os quais a regra funciona
export default function DominioDaFuncao() {
  const [k, setK] = useState(0)
  const [x, setX] = useState(2)
  const id = useId()
  const r = regras[k]
  const ok = r.ok(x)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Onde a função funciona?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Função">
        {regras.map((q, i) => (
          <button key={i} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border-2 px-4 font-mono font-semibold ${k === i ? 'border-azul bg-fundo' : 'border-borda'}`}>f(x) = {q.nome}</button>
        ))}
      </div>
      <label htmlFor={id} className="mt-3 block text-[15px]">x = <b>{x.toLocaleString('pt-BR')}</b>
        <input id={id} type="range" min={-4} max={4} step={0.5} value={x} onChange={(e) => setX(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao curvas={[{ f: r.f, cor: 'var(--color-azul)' }]} xmin={-4} xmax={4} ymin={-4} ymax={6} pontos={ok ? [{ x, y: r.f(x), rotulo: `(${f2(x)} ; ${f2(r.f(x))})` }] : []} rotuloAlt={`Gráfico de f(x) = ${r.nome}`} />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {ok ? `f(${f2(x)}) = ${f2(r.f(x))}.` : `f(${f2(x)}) não existe: ${r.porque}.`} Domínio de f(x) = {r.nome}: <b>{r.dom}</b>.
      </p>
    </div>
  )
}
