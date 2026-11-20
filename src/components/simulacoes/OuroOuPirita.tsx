import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const TABELA = [
  { nome: 'Ouro', d: 19.3 },
  { nome: 'Cobre', d: 8.96 },
  { nome: 'Pirita ("ouro de tolo")', d: 5.0 },
  { nome: 'Alumínio', d: 2.7 },
]
const AMOSTRAS = [
  { nome: 'Amostra A', m: 96.5, v: 5 },
  { nome: 'Amostra B', m: 25, v: 5 },
  { nome: 'Amostra C', m: 44.8, v: 5 },
]
const br = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Mesma cor dourada, densidades bem diferentes: a densidade desmascara a pirita
export default function OuroOuPirita() {
  const [m, setM] = useState(96.5)
  const [v, setV] = useState(5)
  const d = m / v
  const achou = TABELA.find((t) => Math.abs(t.d - d) / t.d <= 0.05)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">É ouro de verdade?</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Amostras prontas">
        {AMOSTRAS.map((a) => (
          <button key={a.nome} type="button" onClick={() => { setM(a.m); setV(a.v) }}
            className="min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">{a.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Massa (g)" valor={m} min={5} max={200} passo={0.1} aoMudar={setM} />
        <Deslizante rotulo="Volume (cm³)" valor={v} min={1} max={20} aoMudar={setV} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Densidade = {br(m)} ÷ {v} = <strong>{br(d)} g/cm³</strong>.{' '}
        {achou ? `Combina com ${achou.nome} (${br(achou.d)} g/cm³).` : 'Não combina com nenhum material da tabela.'}
      </p>
      <ul className="mt-2 text-sm text-suave">
        {TABELA.map((t) => <li key={t.nome}>{t.nome}: {br(t.d)} g/cm³</li>)}
      </ul>
    </div>
  )
}
