import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Nomes e endereços de exemplo (faixas reservadas para documentação), só para a brincadeira.
const lista = [
  { nome: 'www.exemplo.com', ip: '203.0.113.10' },
  { nome: 'loja.exemplo.com', ip: '203.0.113.25' },
  { nome: 'blog.escola.org', ip: '198.51.100.7' },
  { nome: 'jogo.fliperama.net', ip: '192.0.2.44' },
]

export default function ListaTelefonica() {
  const [sel, setSel] = useState<string | null>(null)
  const [reverso, setReverso] = useState(false)
  const item = lista.find((l) => l.nome === sel || l.ip === sel)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A lista telefônica da internet</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button type="button" aria-pressed={!reverso} onClick={() => { setReverso(false); setSel(null) }} className={`min-h-11 rounded-full border-2 font-semibold ${!reverso ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Nome → número</button>
        <button type="button" aria-pressed={reverso} onClick={() => { setReverso(true); setSel(null) }} className={`min-h-11 rounded-full border-2 font-semibold ${reverso ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Número → nome</button>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {lista.map((l) => {
          const chave = reverso ? l.ip : l.nome
          return (
            <button key={l.nome} type="button" aria-pressed={sel === chave} onClick={() => setSel(chave)}
              className={`min-h-11 rounded-xl border-2 px-3 text-left font-mono text-sm ${sel === chave ? 'border-coral bg-amarelo' : 'border-borda'}`}>{chave}</button>
          )
        })}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {item ? <>{reverso ? item.ip : item.nome} → <strong className="font-mono text-coral">{reverso ? item.nome : item.ip}</strong></> : 'Toque numa linha para consultar.'}
      </p>
      <p className="mt-2 text-sm text-suave">Endereços de exemplo. A consulta de número para nome existe de verdade e se chama consulta reversa.</p>
    </div>
  )
}
