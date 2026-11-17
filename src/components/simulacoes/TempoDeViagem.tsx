import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Distâncias aproximadas em linha reta; a luz na fibra viaja a cerca de 200 mil km/s (2/3 da luz no vácuo).
const trechos = [
  { nome: 'São Paulo → Rio de Janeiro', km: 360 },
  { nome: 'São Paulo → Brasília', km: 870 },
  { nome: 'São Paulo → Lisboa', km: 7900 },
  { nome: 'São Paulo → Nova York', km: 7650 },
  { nome: 'São Paulo → Tóquio', km: 18500 },
]
const KM_POR_MS = 200 // 200 mil km por segundo = 200 km por milissegundo

export default function TempoDeViagem() {
  const [i, setI] = useState(2)
  const t = trechos[i]
  const ida = t.km / KM_POR_MS

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O mínimo que a física permite</p>
      <div className="mt-3 flex flex-col gap-2">
        {trechos.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-left font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Distância (linha reta): cerca de <strong>{t.km.toLocaleString('pt-BR')} km</strong>.
        Só de ida: <strong className="text-coral">{ida.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} ms</strong>.
        Ida e volta (o “ping” mínimo): <strong className="text-coral">{(ida * 2).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} ms</strong>.
        <span className="mt-1 block text-suave">Na vida real é mais, porque os cabos não são retos e cada roteador gasta um tempinho.</span>
      </p>
    </div>
  )
}
