import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// A equação 6 CO₂ + 6 H₂O → 1 glicose + 6 O₂ como receita: quem acaba primeiro limita o bolo
export default function ContaDaFotossintese() {
  const [co2, setCo2] = useState(14)
  const [agua, setAgua] = useState(9)
  const receitas = Math.min(Math.floor(co2 / 6), Math.floor(agua / 6))
  const sobraCo2 = co2 - receitas * 6
  const sobraAgua = agua - receitas * 6
  const limita = co2 / 6 < agua / 6 ? 'o gás carbônico' : co2 / 6 > agua / 6 ? 'a água' : 'os dois'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A receita da fotossíntese</p>
      <p className="mt-2 rounded-2xl bg-fundo p-3 text-center text-[15px] font-semibold">6 CO₂ + 6 H₂O + luz → 1 glicose + 6 O₂</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Deslizante rotulo="Moléculas de gás carbônico" valor={co2} min={0} max={24} passo={1} aoMudar={setCo2} />
        <Deslizante rotulo="Moléculas de água" valor={agua} min={0} max={24} passo={1} aoMudar={setAgua} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
        <p className="rounded-2xl bg-fundo p-3 text-[15px]">Glicose feita<br /><strong className="text-[22px]">{receitas}</strong></p>
        <p className="rounded-2xl bg-fundo p-3 text-[15px]">Oxigênio solto<br /><strong className="text-[22px]">{receitas * 6}</strong></p>
        <p className="rounded-2xl bg-fundo p-3 text-[15px]">CO₂ que sobrou<br /><strong className="text-[22px]">{sobraCo2}</strong></p>
        <p className="rounded-2xl bg-fundo p-3 text-[15px]">Água que sobrou<br /><strong className="text-[22px]">{sobraAgua}</strong></p>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {receitas === 0
          ? 'Faltam ingredientes: cada glicose pede 6 de gás carbônico e 6 de água.'
          : `Cada glicose gasta 6 de cada ingrediente. Quem acaba primeiro é quem limita a produção: aqui, ${limita}. Repare que o oxigênio liberado é sempre 6 por glicose.`}
      </p>
    </div>
  )
}
