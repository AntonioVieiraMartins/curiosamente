import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Carrinho: preço × quantidade, total e troco. Conta em centavos para evitar erro de decimais
const itens = [
  { nome: 'Pão (un.)', preco: 80 },
  { nome: 'Leite (1 L)', preco: 520 },
  { nome: 'Ovos (dúzia)', preco: 1090 },
  { nome: 'Arroz (1 kg)', preco: 690 },
  { nome: 'Suco (1 L)', preco: 750 },
]
const reais = (c: number) => (c / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function CarrinhoDeCompras() {
  const [qtd, setQtd] = useState<number[]>([6, 1, 1, 0, 0])
  const [pago, setPago] = useState(50)
  const total = itens.reduce((s, it, i) => s + it.preco * qtd[i], 0)
  const set = (i: number, d: number) => setQtd(qtd.map((q, k) => (k === i ? Math.max(0, q + d) : q)))
  const troco = pago * 100 - total
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Carrinho de compras</p>
      <ul className="mt-3 space-y-2">
        {itens.map((it, i) => (
          <li key={it.nome} className="flex items-center justify-between gap-2 rounded-2xl border border-borda p-2 text-[15px]">
            <span>{it.nome}<br /><span className="text-suave">{reais(it.preco)}</span></span>
            <span className="flex items-center gap-1">
              <button type="button" aria-label={`Tirar ${it.nome}`} onClick={() => set(i, -1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">−</button>
              <span className="w-6 text-center font-bold">{qtd[i]}</span>
              <button type="button" aria-label={`Pôr ${it.nome}`} onClick={() => set(i, 1)} className="grid size-11 place-items-center rounded-full border border-borda text-lg">+</button>
              <span className="w-24 text-right font-semibold">{reais(it.preco * qtd[i])}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Nota usada para pagar">
        {[20, 50, 100].map((v) => (
          <button key={v} type="button" aria-pressed={pago === v} onClick={() => setPago(v)}
            className={`min-h-11 rounded-full border-2 px-5 font-bold ${pago === v ? 'border-azul bg-azul-claro' : 'border-borda'}`}>Pagar com R$ {v}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Total: <b>{reais(total)}</b>. {troco >= 0 ? <>Troco de R$ {pago}: <b>{reais(troco)}</b>.</> : <>R$ {pago} não bastam: faltam <b>{reais(-troco)}</b>.</>}
      </p>
    </div>
  )
}
