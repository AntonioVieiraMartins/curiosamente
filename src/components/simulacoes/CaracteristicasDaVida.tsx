import { useState } from 'react'
import { cartao } from '../ui/estilos'

const TRACOS = ['Células', 'Metabolismo', 'Crescimento', 'Reprodução', 'Resposta ao ambiente', 'Herança e evolução']
// 2 = sim, 1 = em parte, 0 = não
const SERES = [
  { nome: 'Bactéria', v: [2, 2, 2, 2, 2, 2], nota: 'Tem todas. É a vida na forma mais simples: uma célula só.' },
  { nome: 'Semente', v: [2, 1, 1, 1, 1, 2], nota: 'Dormente, quase não faz metabolismo. Mas é viva: com água e calor, germina e cresce.' },
  { nome: 'Vírus', v: [0, 0, 0, 1, 1, 2], nota: 'Sem células nem metabolismo. Só se reproduz dentro de uma célula. Por isso a discussão.' },
  { nome: 'Fogo', v: [0, 1, 1, 0, 1, 0], nota: 'Parece vivo (consome, cresce, reage ao vento), mas é uma reação química sem células nem herança.' },
  { nome: 'Cristal de sal', v: [0, 0, 1, 0, 0, 0], nota: 'Cresce por acréscimo de fora. Sem metabolismo e sem reprodução.' },
  { nome: 'Robô aspirador', v: [0, 1, 0, 0, 2, 0], nota: 'Reage bem ao ambiente e gasta energia da bateria, mas não cresce, não se reproduz e não tem células.' },
]
const rotulo = ['Não', 'Em parte', 'Sim']
const cor = ['border-coral bg-coral/10', 'border-amarelo bg-amarelo/20', 'border-verde bg-verde/10']

export default function CaracteristicasDaVida() {
  const [i, setI] = useState(0)
  const s = SERES[i]
  const sims = s.v.filter((x) => x === 2).length

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A lista de características</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o ser ou objeto">
        {SERES.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2" aria-live="polite">
        {TRACOS.map((t, k) => (
          <li key={t} className={`flex items-center justify-between gap-2 rounded-2xl border-2 px-3 py-2 text-[15px] ${cor[s.v[k]]}`}>
            <span className="font-semibold">{t}</span><span>{rotulo[s.v[k]]}</span>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{s.nome}: {sims} de 6 com “Sim”.</strong> {s.nota}</p>
    </div>
  )
}
