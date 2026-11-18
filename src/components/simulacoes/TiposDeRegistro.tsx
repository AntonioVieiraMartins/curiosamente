import { useState } from 'react'
import { cartao } from '../ui/estilos'

// A "ficha" de um domínio de exemplo: cada linha responde a um tipo de pergunta.
const registros = [
  { tipo: 'A', valor: '203.0.113.10', para: 'Diz o endereço IPv4 do site.' },
  { tipo: 'AAAA', valor: '2001:db8::10', para: 'Diz o endereço IPv6 do site.' },
  { tipo: 'CNAME', valor: 'www → exemplo.com', para: 'Cria um apelido: um nome aponta para outro nome.' },
  { tipo: 'MX', valor: 'correio.exemplo.com', para: 'Diz qual servidor recebe os e-mails do domínio.' },
  { tipo: 'TXT', valor: '"texto livre"', para: 'Guarda texto: serve, por exemplo, para provar que o domínio é seu.' },
  { tipo: 'NS', valor: 'ns1.exemplo.com', para: 'Diz quais servidores são a fonte oficial das respostas desse domínio.' },
]

export default function TiposDeRegistro() {
  const [i, setI] = useState(0)
  const r = registros[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A ficha de exemplo.com</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {registros.map((x, k) => (
          <button key={x.tipo} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 font-mono font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.tipo}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <span className="font-mono"><strong>{r.tipo}</strong> → {r.valor}</span>
        <span className="mt-1 block">{r.para}</span>
      </p>
      <p className="mt-2 text-sm text-suave">Valores de exemplo (faixas reservadas para documentação).</p>
    </div>
  )
}
