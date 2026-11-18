import { useState } from 'react'
import { cartao } from '../ui/estilos'

const partes = [
  { id: 'abre', texto: '<a', nome: 'Abertura da etiqueta', explica: 'Começa com "<" e o nome da etiqueta. Aqui, "a" é um link (âncora).' },
  { id: 'attr', texto: ' href="https://exemplo.com"', nome: 'Atributo', explica: 'Informação extra no formato nome="valor". Aqui diz para onde o link leva.' },
  { id: 'fecha1', texto: '>', nome: 'Fim da abertura', explica: 'Termina a etiqueta de abertura. O conteúdo vem logo depois.' },
  { id: 'conteudo', texto: 'Visite', nome: 'Conteúdo', explica: 'O texto que a pessoa vê e toca.' },
  { id: 'fecha', texto: '</a>', nome: 'Etiqueta de fechamento', explica: 'Igual à de abertura, mas com "/". Diz onde o elemento acaba.' },
]

// Toque em cada pedaço do código HTML para ver qual é o papel dele.
export default function AnatomiaDeUmaTag() {
  const [sel, setSel] = useState('abre')
  const p = partes.find((x) => x.id === sel)!
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Toque em cada pedaço</p>
      <div className="mt-2 flex flex-wrap gap-1 font-mono text-[15px]">
        {partes.map((x) => (
          <button key={x.id} type="button" aria-pressed={sel === x.id} onClick={() => setSel(x.id)}
            className={`min-h-11 whitespace-pre rounded-lg border-2 px-2 ${sel === x.id ? 'border-coral bg-fundo' : 'border-borda'}`}>{x.texto}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{p.nome}.</strong> {p.explica}</p>
    </div>
  )
}
