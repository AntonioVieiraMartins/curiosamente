import { useState } from 'react'
import { cartao } from '../ui/estilos'

const FRASES = [
  { texto: '7 é um número primo.', prop: true, porque: 'É uma proposição: dá para julgar, e é verdadeira.' },
  { texto: 'Que horas são?', prop: false, porque: 'É uma pergunta. Perguntas não são verdadeiras nem falsas.' },
  { texto: 'Feche a porta.', prop: false, porque: 'É uma ordem. Ordens não são verdadeiras nem falsas.' },
  { texto: '2 + 2 = 5.', prop: true, porque: 'É uma proposição falsa. Falsa também conta: o que importa é poder ser julgada.' },
  { texto: 'x + 1 = 5.', prop: false, porque: 'Depende de x. Com x = 4 é verdadeira, com outro x é falsa. É uma sentença aberta, e não uma proposição.' },
  { texto: 'Todo quadrado é um retângulo.', prop: true, porque: 'É uma proposição verdadeira: o quadrado é um retângulo de lados iguais.' },
  { texto: 'Que dia lindo!', prop: false, porque: 'É uma exclamação, uma opinião. Não dá para provar que é verdadeira ou falsa.' },
]

// Proposição é uma frase que pode ser julgada verdadeira ou falsa, mas só uma das duas
export default function ProposicaoOuNao() {
  const [resp, setResp] = useState<(boolean | null)[]>(FRASES.map(() => null))
  const acertos = resp.filter((r, i) => r === FRASES[i].prop).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Isso é uma proposição?</p>
      <ul className="mt-3 flex flex-col gap-3">
        {FRASES.map((f, i) => {
          const r = resp[i]
          return (
            <li key={f.texto} className="rounded-2xl bg-fundo p-3">
              <p className="font-semibold">“{f.texto}”</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {[true, false].map((v) => (
                  <button key={String(v)} type="button" disabled={r !== null} onClick={() => setResp(resp.map((x, j) => (j === i ? v : x)))}
                    className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${r === v ? (v === f.prop ? 'border-verde bg-verde/10' : 'border-coral bg-coral/10') : 'border-borda'}`}>
                    {v ? 'É proposição' : 'Não é'}
                  </button>
                ))}
              </div>
              {r !== null && <p aria-live="polite" className="mt-2 text-[15px]">{r === f.prop ? 'Certo. ' : 'Quase. '}{f.porque}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p aria-live="polite" className="text-sm font-semibold">Acertos: {acertos} de {FRASES.length}</p>
        <button type="button" onClick={() => setResp(FRASES.map(() => null))} className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
