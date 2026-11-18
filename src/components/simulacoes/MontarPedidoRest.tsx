import { useState } from 'react'
import { cartao } from '../ui/estilos'

const verbos = [
  { m: 'GET', faz: 'buscar' },
  { m: 'POST', faz: 'criar' },
  { m: 'PUT', faz: 'trocar' },
  { m: 'DELETE', faz: 'apagar' },
]

// Em estilo REST, o endereço diz "qual coisa" (o recurso) e o método diz "o que fazer com ela".
export default function MontarPedidoRest() {
  const [m, setM] = useState('GET')
  const [recurso, setRecurso] = useState('produtos')
  const [temId, setTemId] = useState(false)
  const url = `/${recurso}${temId ? '/7' : ''}`
  const faz = verbos.find((v) => v.m === m)!.faz
  const alvo = temId ? `o item de número 7 de "${recurso}"` : `a coleção "${recurso}" inteira`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Monte um pedido</p>
      <p className="mt-2 text-[15px] font-semibold">Método (o verbo)</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {verbos.map((v) => (
          <button key={v.m} type="button" aria-pressed={m === v.m} onClick={() => setM(v.m)}
            className={`min-h-11 rounded-xl border-2 px-3 font-mono text-[15px] ${m === v.m ? 'border-azul bg-fundo font-bold' : 'border-borda'}`}>{v.m}</button>
        ))}
      </div>
      <p className="mt-2 text-[15px] font-semibold">Recurso (o substantivo)</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {['produtos', 'pedidos', 'clientes'].map((r) => (
          <button key={r} type="button" aria-pressed={recurso === r} onClick={() => setRecurso(r)}
            className={`min-h-11 rounded-xl border-2 px-3 text-[15px] ${recurso === r ? 'border-verde bg-fundo font-bold' : 'border-borda'}`}>{r}</button>
        ))}
        <button type="button" aria-pressed={temId} onClick={() => setTemId(!temId)}
          className={`min-h-11 rounded-xl border-2 px-3 text-[15px] ${temId ? 'border-coral bg-fundo font-bold' : 'border-borda'}`}>{temId ? 'com número (/7)' : 'sem número'}</button>
      </div>
      <p className="mt-3 rounded-2xl bg-fundo p-3 font-mono text-[15px]">{m} {url}</p>
      <p aria-live="polite" className="mt-2 text-[15px]">Significa: <strong>{faz}</strong> {alvo}.</p>
    </div>
  )
}
