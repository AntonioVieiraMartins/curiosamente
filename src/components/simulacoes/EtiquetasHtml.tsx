import { useState } from 'react'
import { cartao } from '../ui/estilos'

const tags = [
  { t: 'h1', nome: 'Título principal', mostra: <h1 className="text-2xl font-bold">Meu texto</h1> },
  { t: 'p', nome: 'Parágrafo', mostra: <p>Meu texto</p> },
  { t: 'strong', nome: 'Destaque forte', mostra: <p><strong>Meu texto</strong></p> },
  { t: 'em', nome: 'Ênfase (itálico)', mostra: <p><em>Meu texto</em></p> },
  { t: 'ul', nome: 'Lista', mostra: <ul className="list-disc pl-6"><li>Meu texto</li><li>Outro item</li></ul> },
  { t: 'button', nome: 'Botão', mostra: <button type="button" className="min-h-11 rounded-full border-2 border-azul px-4">Meu texto</button> },
]

// Escolher a etiqueta muda o significado do mesmo texto.
export default function EtiquetasHtml() {
  const [i, setI] = useState(0)
  const x = tags[i]
  const codigo = x.t === 'ul' ? '<ul>\n  <li>Meu texto</li>\n  <li>Outro item</li>\n</ul>' : `<${x.t}>Meu texto</${x.t}>`
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Escolha a etiqueta (tag)</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((y, k) => (
          <button key={y.t} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-xl border-2 px-3 font-mono text-[15px] ${k === i ? 'border-azul bg-fundo font-bold' : 'border-borda'}`}>{y.t}</button>
        ))}
      </div>
      <pre className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{codigo}</code></pre>
      <p className="mt-2 text-[15px] text-suave">Significa: {x.nome}</p>
      <div aria-live="polite" className="mt-2 rounded-2xl border border-borda p-3">{x.mostra}</div>
    </div>
  )
}
