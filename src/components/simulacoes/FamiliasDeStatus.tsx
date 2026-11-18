import { useState } from 'react'
import { cartao } from '../ui/estilos'

const familias = ['1xx informação', '2xx sucesso', '3xx redirecionamento', '4xx erro seu', '5xx erro do servidor']
const casos = [
  { codigo: 200, f: 1, texto: 'OK: deu tudo certo.' },
  { codigo: 404, f: 3, texto: 'Not Found: o endereço pedido não existe.' },
  { codigo: 301, f: 2, texto: 'Moved Permanently: o endereço mudou de lugar.' },
  { codigo: 500, f: 4, texto: 'Internal Server Error: o servidor falhou.' },
  { codigo: 400, f: 3, texto: 'Bad Request: o pedido veio malformado.' },
]

// O primeiro dígito do código já diz quem "errou" (ou se deu certo).
export default function FamiliasDeStatus() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const c = casos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">De qual família é o código?</p>
      <p className="mt-3 text-3xl font-semibold text-coral">{c.codigo}</p>
      <div className="mt-2 flex flex-col gap-2">
        {familias.map((f, k) => (
          <button key={f} type="button" disabled={resp !== null} onClick={() => setResp(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-left font-semibold ${resp === null ? 'border-borda' : k === c.f ? 'border-verde bg-verde text-white' : resp === k ? 'border-coral' : 'border-borda opacity-50'}`}>{f}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Escolha a família pelo primeiro dígito.' : `${resp === c.f ? 'Certo! ' : 'Quase. '}${c.codigo} está na família ${familias[c.f]}. ${c.texto}`}
      </p>
      {resp !== null && <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white" onClick={() => { setResp(null); setI((i + 1) % casos.length) }}>Próximo</button>}
    </div>
  )
}
