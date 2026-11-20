import { useState } from 'react'
import { cartao } from '../ui/estilos'

const CARTAS = [
  { rotulo: 'A', precisa: true, porque: 'Vogal: se o outro lado não for par, a regra falha. Precisa virar.' },
  { rotulo: 'K', precisa: false, porque: 'Consoante: a regra não diz nada sobre consoantes. Tanto faz o outro lado.' },
  { rotulo: '4', precisa: false, porque: 'Par: a regra não diz que só vogais têm par. Seja o que for do outro lado, não quebra nada.' },
  { rotulo: '7', precisa: true, porque: 'Ímpar: se atrás houver uma vogal, a regra falha. Precisa virar.' },
]

// Tarefa de seleção de Wason: quase todo mundo vira o 4 em vez do 7
export default function CartasDeWason() {
  const [marcadas, setMarcadas] = useState<string[]>([])
  const [conferido, setConferido] = useState(false)
  const certo = CARTAS.every((c) => c.precisa === marcadas.includes(c.rotulo))

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As quatro cartas</p>
      <p className="mt-2">Regra: <strong>“Se uma carta tem uma vogal de um lado, então tem um número par do outro.”</strong> Quais cartas você precisa virar para ter certeza de que a regra não é quebrada?</p>
      <div className="mt-4 grid grid-cols-4 gap-2" role="group" aria-label="Escolha as cartas para virar">
        {CARTAS.map((c) => {
          const on = marcadas.includes(c.rotulo)
          return (
            <button key={c.rotulo} type="button" aria-pressed={on} disabled={conferido}
              onClick={() => setMarcadas(on ? marcadas.filter((x) => x !== c.rotulo) : [...marcadas, c.rotulo])}
              className={`flex aspect-[3/4] min-h-16 items-center justify-center rounded-2xl border-2 font-serif text-3xl ${on ? 'border-azul bg-azul/10' : 'border-borda'}`}>{c.rotulo}</button>
          )
        })}
      </div>
      <button type="button" disabled={conferido || marcadas.length === 0} onClick={() => setConferido(true)} className="mt-3 min-h-11 rounded-full bg-azul px-5 text-sm font-semibold text-white disabled:opacity-40">Conferir</button>
      <div aria-live="polite">
        {conferido && (
          <div className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
            <p className="font-semibold">{certo ? 'Acertou! É a pegadinha mais famosa da lógica.' : 'A resposta certa é virar o A e o 7. Quase todo mundo erra.'}</p>
            <ul className="mt-2 flex flex-col gap-1">
              {CARTAS.map((c) => <li key={c.rotulo}><strong>{c.rotulo}:</strong> {c.porque}</li>)}
            </ul>
            <button type="button" onClick={() => { setMarcadas([]); setConferido(false) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Tentar de novo</button>
          </div>
        )}
      </div>
    </div>
  )
}
