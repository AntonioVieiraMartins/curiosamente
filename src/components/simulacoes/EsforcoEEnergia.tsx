import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Modelo ilustrativo: até o limiar, quase tudo vem da respiração; acima dele, a fermentação ajuda cada vez mais
export default function EsforcoEEnergia() {
  const [esforco, setEsforco] = useState(30)
  const limiar = 60
  const ferm = esforco <= limiar ? 5 : Math.min(60, 5 + (esforco - limiar) * 1.4)
  const aerob = 100 - ferm
  const nome = esforco < 25 ? 'Descanso ou caminhada leve' : esforco < limiar ? 'Corrida leve, dá para conversar' : esforco < 85 ? 'Corrida forte, a respiração pesa' : 'Tiro, quase sem fôlego'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto esforço, que energia?</p>
      <svg viewBox="0 0 220 60" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${Math.round(aerob)}% da energia vem da respiração e ${Math.round(ferm)}% da fermentação`}>
        <rect x={10} y={14} width={200 * (aerob / 100)} height={24} fill="var(--color-verde)" />
        <rect x={10 + 200 * (aerob / 100)} y={14} width={200 * (ferm / 100)} height={24} fill="var(--color-coral)" />
        <text x={10} y={54} fontSize="10" fill="var(--color-suave)">verde: respiração · coral: fermentação (lactato)</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Intensidade do esforço" valor={esforco} min={0} max={100} passo={5} aoMudar={setEsforco} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{nome}.</strong> Cerca de {Math.round(aerob)}% da energia vem da respiração e {Math.round(ferm)}% da fermentação. {esforco > limiar ? 'Passou do limiar: o oxigênio não chega rápido o bastante, e o músculo recorre à fermentação, que é rápida mas rende pouco. Daí o cansaço e a queimação.' : 'Abaixo do limiar, o oxigênio dá conta, e o corpo usa a via mais rentável.'} (Os números são ilustrativos, não medidas.)
      </p>
    </div>
  )
}
