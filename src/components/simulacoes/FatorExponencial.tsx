import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 3 })

// f(x) = b^x: o que o fator b faz
export default function FatorExponencial() {
  const [b, setB] = useState(2)
  const id = useId()
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">f(x) = bˣ</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Base b: <b>{f2(b)}</b>
        <input id={id} type="range" min={0.25} max={3} step={0.25} value={b} onChange={(e) => setB(Number(e.target.value))} className="h-11 w-full" /></label>
      <PlanoFuncao curvas={[{ f: (x) => b ** x, cor: 'var(--color-azul)' }]} xmin={-3} xmax={4} ymin={-1} ymax={9} pontos={[{ x: 0, y: 1, cor: 'var(--color-coral)', rotulo: '(0 ; 1)' }]} rotuloAlt="Gráfico de b elevado a x" />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {b > 1 ? `Como b = ${f2(b)} é maior que 1, a função CRESCE: cada passo multiplica por ${f2(b)}.` : b === 1 ? 'Com b = 1, f(x) = 1 sempre: nada cresce nem diminui.' : `Como b = ${f2(b)} está entre 0 e 1, a função DECAI: cada passo multiplica por ${f2(b)}, e o valor encolhe.`} Em todos os casos, f(0) = 1, e o gráfico nunca fica abaixo do eixo x.
      </p>
    </div>
  )
}
