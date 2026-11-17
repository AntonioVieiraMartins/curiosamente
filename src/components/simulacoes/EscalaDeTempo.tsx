import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tempos de acesso em ordem de grandeza (varia muito entre aparelhos). Um ciclo da CPU ≈ 0,3 ns.
const itens = [
  { nome: 'Um ciclo da CPU', ns: 0.3 },
  { nome: 'Buscar na memória RAM', ns: 100 },
  { nome: 'Buscar num SSD', ns: 100_000 },
  { nome: 'Buscar num HD (disco giratório)', ns: 10_000_000 },
]

function escrever(seg: number) {
  if (seg < 60) return `${Math.round(seg)} segundo${Math.round(seg) === 1 ? '' : 's'}`
  if (seg < 3600) return `${(seg / 60).toFixed(1).replace('.', ',')} minutos`
  if (seg < 86400) return `${(seg / 3600).toFixed(1).replace('.', ',')} horas`
  if (seg < 86400 * 365) return `${(seg / 86400).toFixed(1).replace('.', ',')} dias`
  return `${(seg / 86400 / 365).toFixed(1).replace('.', ',')} ano`
}

// Muda a escala: se 1 ciclo da CPU durasse 1 segundo, quanto demoraria cada coisa?
export default function EscalaDeTempo() {
  const [humano, setHumano] = useState(false)
  const fator = 1 / 0.3 // segundos humanos por nanossegundo

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A escala do tempo</p>
      <button type="button" aria-pressed={humano} onClick={() => setHumano(!humano)}
        className="mt-3 min-h-11 rounded-full bg-azul px-5 font-semibold text-white">
        {humano ? 'Voltar aos tempos reais' : 'Fazer 1 ciclo da CPU durar 1 segundo'}
      </button>
      <ul className="mt-3 space-y-2" aria-live="polite">
        {itens.map((it) => (
          <li key={it.nome} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl bg-fundo px-3 py-2 text-[15px]">
            <span>{it.nome}</span>
            <strong className="text-coral">{humano ? escrever(it.ns * fator) : `cerca de ${it.ns < 1 ? '0,3 ns' : it.ns >= 1_000_000 ? `${it.ns / 1_000_000} ms` : it.ns >= 1000 ? `${it.ns / 1000} µs` : `${it.ns} ns`}`}</strong>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[15px] text-suave">Valores aproximados: variam de aparelho para aparelho, mas a ordem de grandeza é essa.</p>
    </div>
  )
}
