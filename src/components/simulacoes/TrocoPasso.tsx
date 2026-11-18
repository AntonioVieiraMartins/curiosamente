import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Troco contando para a frente: do preço até a próxima "parada" (centavos, reais, dezena), até o valor pago
const reais = (c: number) => (c / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function TrocoPasso() {
  const [preco, setPreco] = useState(3740)
  const [pago, setPago] = useState(5000)
  const idp = useId(), ida = useId()
  const valido = pago >= preco
  // Paradas: até o próximo real inteiro, depois dezena de reais, depois o valor pago
  const paradas: number[] = []
  let atual = preco
  const proximaInteira = Math.ceil(atual / 100) * 100
  if (proximaInteira > atual && proximaInteira <= pago) { paradas.push(proximaInteira); atual = proximaInteira }
  const proxDezena = Math.ceil(atual / 1000) * 1000
  if (proxDezena > atual && proxDezena <= pago) { paradas.push(proxDezena); atual = proxDezena }
  if (pago > atual) paradas.push(pago)
  let a = preco
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Troco contando para a frente</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idp} className="text-[15px]">Preço: <b>{reais(preco)}</b>
          <input id={idp} type="range" min={100} max={4900} step={10} value={preco} onChange={(e) => setPreco(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={ida} className="text-[15px]">Você pagou com: <b>{reais(pago)}</b>
          <input id={ida} type="range" min={1000} max={20000} step={1000} value={pago} onChange={(e) => setPago(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      {valido ? (
        <ol aria-live="polite" className="mt-3 space-y-1 rounded-2xl bg-fundo p-4 text-[15px]">
          {paradas.map((p) => {
            const passo = p - a
            const linha = <li key={p}>De {reais(a)} até {reais(p)}: +{reais(passo)}</li>
            a = p
            return linha
          })}
          <li className="pt-1 font-semibold">Troco: {reais(pago - preco)}</li>
        </ol>
      ) : (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">O valor pago é menor que o preço: ainda falta pagar {reais(preco - pago)}.</p>
      )}
    </div>
  )
}
