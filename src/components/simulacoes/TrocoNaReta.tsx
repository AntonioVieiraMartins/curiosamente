import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Subtrair "contando a partir do menor", como se confere um troco
export default function TrocoNaReta() {
  const [pago, setPago] = useState(100)
  const [preco, setPreco] = useState(63)
  const idp = useId(), idc = useId()
  const p = Math.min(preco, pago)
  const saltos: { de: number; para: number }[] = []
  let atual = p
  const proxDez = Math.ceil(atual / 10) * 10
  if (proxDez > atual && proxDez <= pago) { saltos.push({ de: atual, para: proxDez }); atual = proxDez }
  while (atual + 10 <= pago) { saltos.push({ de: atual, para: atual + 10 }); atual += 10 }
  if (atual < pago) saltos.push({ de: atual, para: pago })
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Conferindo o troco</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idp} className="text-[15px]">Você pagou: <b>R$ {pago}</b>
          <input id={idp} type="range" min={10} max={200} step={10} value={pago} onChange={(e) => setPago(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idc} className="text-[15px]">Preço: <b>R$ {p}</b>
          <input id={idc} type="range" min={1} max={pago} value={p} onChange={(e) => setPreco(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <p className="mt-3 text-sm text-suave">Do preço até o valor pago, em saltos:</p>
      <ul className="mt-1 flex flex-wrap gap-2">
        {saltos.map((s, i) => (
          <li key={i} className="rounded-full border-2 border-azul px-3 py-1 text-[14px] font-semibold">{s.de} → {s.para} (+{s.para - s.de})</li>
        ))}
        {saltos.length === 0 && <li className="text-[15px]">Sem troco.</li>}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Somando os saltos: <b>R$ {pago - p}</b> de troco. Conferindo: {pago} - {p} = {pago - p}.
      </p>
    </div>
  )
}
