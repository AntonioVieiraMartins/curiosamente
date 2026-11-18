import { useState } from 'react'
import { cartao } from '../ui/estilos'

const alvos = [8, 64, 256, 1024]

// O logaritmo como "quantas vezes eu dobrei?": comece em 1 e dobre até o alvo
export default function QuantasDobras() {
  const [alvo, setAlvo] = useState(64)
  const [dobras, setDobras] = useState(0)
  const valor = 2 ** dobras
  const chegou = valor === alvo
  const passou = valor > alvo
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantas vezes eu dobrei?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Alvo">
        {alvos.map((a) => (
          <button key={a} type="button" aria-pressed={alvo === a} onClick={() => { setAlvo(a); setDobras(0) }} className={`min-h-11 rounded-full border-2 px-4 font-semibold ${alvo === a ? 'border-azul bg-fundo' : 'border-borda'}`}>chegar a {a.toLocaleString('pt-BR')}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Valor</p><p className="text-3xl font-bold">{valor.toLocaleString('pt-BR')}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Dobras</p><p className="text-3xl font-bold">{dobras}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {chegou ? `Chegou! Foram ${dobras} dobras: 2^${dobras} = ${alvo.toLocaleString('pt-BR')}. Dizemos que o logaritmo de ${alvo.toLocaleString('pt-BR')} na base 2 é ${dobras}.` : passou ? 'Passou do alvo. Recomece.' : `Começamos em 1. Dobre até chegar a ${alvo.toLocaleString('pt-BR')}.`}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={valor >= alvo} onClick={() => setDobras(dobras + 1)} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Dobrar</button>
        <button type="button" onClick={() => setDobras(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
