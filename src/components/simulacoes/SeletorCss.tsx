import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Item = { tag: string; classe?: string; id?: string; texto: string; dentroDeLista?: boolean }

const itens: Item[] = [
  { tag: 'h1', id: 'topo', texto: 'Título' },
  { tag: 'p', texto: 'Parágrafo 1' },
  { tag: 'p', classe: 'aviso', texto: 'Parágrafo 2 (aviso)' },
  { tag: 'li', texto: 'Item A', dentroDeLista: true },
  { tag: 'li', classe: 'aviso', texto: 'Item B (aviso)', dentroDeLista: true },
  { tag: 'button', classe: 'aviso', texto: 'Botão (aviso)' },
]

const seletores: { s: string; casa: (i: Item) => boolean; nota: string }[] = [
  { s: 'p', casa: (i) => i.tag === 'p', nota: 'Seleciona por tipo de elemento: todo parágrafo.' },
  { s: '.aviso', casa: (i) => i.classe === 'aviso', nota: 'Ponto significa classe: tudo que tem class="aviso", de qualquer tipo.' },
  { s: '#topo', casa: (i) => i.id === 'topo', nota: 'Cerquilha significa id: um elemento único.' },
  { s: 'li', casa: (i) => i.tag === 'li', nota: 'Todos os itens de lista.' },
  { s: 'p.aviso', casa: (i) => i.tag === 'p' && i.classe === 'aviso', nota: 'Os dois juntos: parágrafo E com a classe aviso.' },
]

// Mostra quais elementos cada seletor CSS "pega".
export default function SeletorCss() {
  const [k, setK] = useState(0)
  const sel = seletores[k]
  const n = itens.filter(sel.casa).length
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Escolha um seletor: o que ele pega?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {seletores.map((x, j) => (
          <button key={x.s} type="button" aria-pressed={j === k} onClick={() => setK(j)}
            className={`min-h-11 rounded-xl border-2 px-3 font-mono text-[15px] ${j === k ? 'border-azul bg-fundo font-bold' : 'border-borda'}`}>{x.s}</button>
        ))}
      </div>
      <ul className="mt-3 space-y-1.5">
        {itens.map((i) => (
          <li key={i.texto} className={`rounded-xl border-2 px-3 py-1.5 text-[15px] ${sel.casa(i) ? 'border-coral bg-fundo font-semibold' : 'border-borda opacity-60'}`}>
            <code>{`<${i.tag}${i.id ? ` id="${i.id}"` : ''}${i.classe ? ` class="${i.classe}"` : ''}>`}</code> {i.texto}
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-2 text-[15px]">{sel.nota} Pegou <strong>{n}</strong> elemento{n === 1 ? '' : 's'}.</p>
    </div>
  )
}
