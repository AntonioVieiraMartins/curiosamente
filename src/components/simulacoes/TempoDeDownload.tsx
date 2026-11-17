import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const velocidades = [10, 50, 100, 500, 1000]

function escrever(s: number) {
  if (s < 1) return 'menos de 1 segundo'
  if (s < 60) return `${s.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} segundos`
  if (s < 3600) return `${(s / 60).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} minutos`
  return `${(s / 3600).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} horas`
}

// Velocidade de internet vem em megaBITS por segundo; arquivos vêm em megaBYTES. 1 byte = 8 bits.
export default function TempoDeDownload() {
  const [mb, setMb] = useState(2000)
  const [mbps, setMbps] = useState(100)
  const id = useId()
  const seg = (mb * 8) / mbps

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto demora um download?</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Tamanho do arquivo: <span className="text-coral">{mb >= 1000 ? `${mb / 1000} GB` : `${mb} MB`}</span></label>
      <input id={id} type="range" min={50} max={10000} step={50} value={mb} onChange={(e) => setMb(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <p className="mt-2 font-semibold">Velocidade da internet (megabits por segundo):</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {velocidades.map((v) => (
          <button key={v} type="button" aria-pressed={v === mbps} onClick={() => setMbps(v)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${v === mbps ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{v} Mbps</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {mb.toLocaleString('pt-BR')} MB × 8 = {(mb * 8).toLocaleString('pt-BR')} megabits. Dividindo por {mbps} Mbps: <strong className="text-coral">{escrever(seg)}</strong> (no melhor caso).
      </p>
    </div>
  )
}
