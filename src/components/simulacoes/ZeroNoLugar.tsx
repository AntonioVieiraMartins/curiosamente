import { useState } from 'react'
import { cartao } from '../ui/estilos'

// O zero como "guarda-lugar": tirar o zero de 305 muda tudo
const exemplos = ['305', '1020', '4007', '90']

export default function ZeroNoLugar() {
  const [n, setN] = useState('305')
  const sem = n.replace(/0/g, '')
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O zero guarda o lugar</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha um número">
        {exemplos.map((x) => (
          <button key={x} type="button" aria-pressed={n === x} onClick={() => setN(x)} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${n === x ? 'border-azul bg-fundo' : 'border-borda'}`}>{x}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-verde p-3"><p className="text-[14px] font-semibold">Com o zero</p><p className="text-3xl font-bold">{Number(n).toLocaleString('pt-BR')}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Sem o zero</p><p className="text-3xl font-bold">{Number(sem).toLocaleString('pt-BR')}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Sem o zero, os outros algarismos “escorregam” para casas menores e o número fica {Math.round((Number(n) / Number(sem)) * 10) / 10} vez(es) menor. O zero não vale nada sozinho, mas segura cada um no seu lugar.
      </p>
    </div>
  )
}
