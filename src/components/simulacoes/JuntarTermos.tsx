import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Termos semelhantes têm a mesma parte de letras e podem ser somados ("3 maçãs + 4 maçãs"). Maçã com banana não junta.
const exemplos = [
  { inicial: '3x + 4x + 5', juntado: '7x + 5', dica: '3x e 4x são "maçãs": juntam em 7x. O 5 é outra coisa e fica de fora.' },
  { inicial: '5a + 2b + 3a − b', juntado: '8a + b', dica: 'Os a juntam (5a + 3a = 8a) e os b juntam (2b − b = 1b = b). A letra a não se mistura com a letra b.' },
  { inicial: '2x² + 3x + x² + 4', juntado: '3x² + 3x + 4', dica: 'x² e x são tipos diferentes (quadrado e comum): só juntam x² com x². O 3x fica separado.' },
  { inicial: '6y − 6y + 2', juntado: '2', dica: '6y − 6y = 0y, ou seja, some. Sobra só o 2.' },
]

export default function JuntarTermos() {
  const [i, setI] = useState(0)
  const [juntou, setJuntou] = useState(false)
  const e = exemplos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Juntar termos semelhantes</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exemplos.map((q, k) => (
          <button key={k} type="button" aria-pressed={k === i} onClick={() => { setI(k); setJuntou(false) }}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{q.inicial}</button>
        ))}
      </div>
      <p className="mt-4 rounded-2xl bg-fundo p-4 text-center text-2xl font-semibold">{juntou ? e.juntado : e.inicial}</p>
      <button type="button" onClick={() => setJuntou(!juntou)}
        className="mt-3 min-h-11 rounded-full border-2 border-borda px-4 font-semibold">{juntou ? 'Desfazer' : 'Juntar os termos'}</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {juntou ? e.dica : 'Aperte "Juntar os termos" e veja o que sobra.'}
      </p>
    </div>
  )
}
