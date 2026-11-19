import { useState } from 'react'
import { cartao } from '../ui/estilos'

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const itens = [
  { nome: 'Televisão', vista: 1200, n: 12, parcela: 120 },
  { nome: 'Celular', vista: 2000, n: 10, parcela: 230 },
  { nome: 'Bicicleta', vista: 600, n: 3, parcela: 200 },
]

// Compara o preço à vista com a soma das parcelas: a diferença é o que se paga pelo "parcelar".
export default function AVistaOuParcelado() {
  const [k, setK] = useState(0)
  const it = itens[k]
  const total = it.n * it.parcela
  const extra = total - it.vista
  const pct = (extra / it.vista) * 100
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">À vista ou parcelado?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {itens.map((s, j) => (
          <button key={s.nome} type="button" aria-pressed={j === k} onClick={() => setK(j)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${j === k ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{s.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">À vista</div><div className="text-lg font-bold">{brl(it.vista)}</div></div>
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">{it.n}x de {brl(it.parcela)}</div><div className="text-lg font-bold">{brl(total)}</div></div>
      </div>
      <p aria-live="polite" className={`mt-3 rounded-2xl p-4 text-[15px] ${extra > 0 ? 'bg-amarelo' : 'bg-fundo'}`}>
        {extra > 0
          ? <>Parcelando, você paga <strong>{brl(extra)}</strong> a mais ({pct.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}% sobre o preço à vista). Esse extra são juros, mesmo quando a loja não usa essa palavra.</>
          : <>As parcelas somam o mesmo valor do preço à vista: parcelamento <strong>sem juros</strong>. Parcelar aqui é de graça e ajuda a organizar o mês.</>}
      </p>
    </div>
  )
}
