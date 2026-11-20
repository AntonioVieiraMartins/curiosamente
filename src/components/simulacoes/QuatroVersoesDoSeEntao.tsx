import { useState } from 'react'
import { cartao } from '../ui/estilos'

// P = "chove", Q = "a rua molha". Cada "mundo" diz se P e Q acontecem.
const MUNDOS = [
  { p: true, q: true, nome: 'Choveu e a rua molhou' },
  { p: true, q: false, nome: 'Choveu e a rua não molhou (rua coberta)' },
  { p: false, q: true, nome: 'Não choveu e a rua molhou (caminhão-pipa)' },
  { p: false, q: false, nome: 'Não choveu e a rua não molhou' },
]
const se = (a: boolean, b: boolean) => !a || b

export default function QuatroVersoesDoSeEntao() {
  const [i, setI] = useState(0)
  const { p, q } = MUNDOS[i]
  const versoes = [
    { nome: 'Direta', texto: 'Se chove, a rua molha.', val: se(p, q), grupo: 'A' },
    { nome: 'Recíproca', texto: 'Se a rua molha, chove.', val: se(q, p), grupo: 'B' },
    { nome: 'Inversa', texto: 'Se não chove, a rua não molha.', val: se(!p, !q), grupo: 'B' },
    { nome: 'Contrapositiva', texto: 'Se a rua não molha, não chove.', val: se(!q, !p), grupo: 'A' },
  ]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quatro frases, um mesmo mundo</p>
      <div className="mt-3 flex flex-col gap-2" role="group" aria-label="Escolha o que aconteceu">
        {MUNDOS.map((m, j) => (
          <button key={m.nome} type="button" aria-pressed={j === i} onClick={() => setI(j)}
            className={`min-h-11 rounded-2xl border-2 px-4 py-2 text-left text-[15px] font-semibold ${j === i ? 'border-azul bg-azul/10' : 'border-borda'}`}>{m.nome}</button>
        ))}
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2" aria-live="polite">
        {versoes.map((x) => (
          <li key={x.nome} className={`rounded-2xl border-2 p-3 ${x.val ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10'}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-suave">{x.nome} (grupo {x.grupo})</p>
            <p className="mt-1 font-semibold">{x.texto}</p>
            <p className="text-sm">{x.val ? 'Verdadeira nesse mundo' : 'Falsa nesse mundo'}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">Teste os quatro mundos: a <strong>direta</strong> e a <strong>contrapositiva</strong> sempre concordam (grupo A). A <strong>recíproca</strong> e a <strong>inversa</strong> também concordam entre si (grupo B), mas nem sempre com a direta.</p>
    </div>
  )
}
