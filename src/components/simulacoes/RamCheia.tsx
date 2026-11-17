import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Consumos de RAM aproximados, só para a brincadeira (variam bastante na vida real).
const apps = [
  { nome: 'Sistema operacional', gb: 3, fixo: true },
  { nome: 'Navegador com 10 abas', gb: 2.5 },
  { nome: 'Jogo', gb: 6 },
  { nome: 'Editor de vídeo', gb: 5 },
  { nome: 'Programa de mensagens', gb: 0.8 },
]

// Quando a RAM enche, o sistema usa o disco como "bancada extra", e tudo fica lento.
export default function RamCheia() {
  const [ram, setRam] = useState(8)
  const [abertos, setAbertos] = useState<string[]>([])
  const id = useId()
  const usado = apps.filter((a) => a.fixo || abertos.includes(a.nome)).reduce((s, a) => s + a.gb, 0)
  const pct = Math.min(100, (usado / ram) * 100)
  const estourou = usado > ram

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A bancada enche</p>
      <label htmlFor={id} className="mt-3 block font-semibold">RAM do computador: <span className="text-coral">{ram} GB</span></label>
      <input id={id} type="range" min={4} max={32} step={4} value={ram} onChange={(e) => setRam(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <div className="mt-2 flex flex-wrap gap-2">
        {apps.map((a) => {
          const on = a.fixo || abertos.includes(a.nome)
          return (
            <button key={a.nome} type="button" disabled={a.fixo} aria-pressed={on}
              onClick={() => setAbertos(on ? abertos.filter((n) => n !== a.nome) : [...abertos, a.nome])}
              className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${on ? 'border-azul bg-azul text-white' : 'border-borda'}`}>
              {a.nome} ({a.gb} GB)
            </button>
          )
        })}
      </div>
      <div className="mt-3 h-5 overflow-hidden rounded-full bg-fundo" aria-hidden="true">
        <div className={`h-full ${estourou ? 'bg-coral' : 'bg-verde'}`} style={{ width: `${pct}%` }} />
      </div>
      <p aria-live="polite" className="mt-2 rounded-2xl bg-fundo p-4 text-[15px]">
        Em uso: <strong>{usado.toLocaleString('pt-BR')} GB</strong> de {ram} GB.{' '}
        {estourou
          ? 'A bancada transbordou: o sistema joga coisas no disco e busca de volta. Tudo fica lento.'
          : 'Cabe tudo na bancada. Rápido.'}
      </p>
    </div>
  )
}
