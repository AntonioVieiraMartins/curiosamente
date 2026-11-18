import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Um PIN de 4 dígitos tem 10.000 possibilidades. Limitar as tentativas limita a chance de acertar no chute.
export default function LimiteDeTentativas() {
  const [limite, setLimite] = useState(3)
  const [semLimite, setSemLimite] = useState(false)
  const id = useId()
  const total = 10000
  const tentativas = semLimite ? total : limite
  const chance = (tentativas / total) * 100
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Alguém chuta o PIN de 4 dígitos (0000 a 9999)</p>
      <button type="button" aria-pressed={semLimite} onClick={() => setSemLimite(!semLimite)}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${semLimite ? 'border-coral' : 'border-verde'}`}>{semLimite ? 'O sistema NÃO limita tentativas' : 'O sistema bloqueia depois de algumas tentativas'}</button>
      {!semLimite && (
        <>
          <label htmlFor={id} className="mt-2 block font-semibold">Tentativas antes de bloquear: <span className="text-azul">{limite}</span></label>
          <input id={id} type="range" min={1} max={20} value={limite} onChange={(e) => setLimite(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
        </>
      )}
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {tentativas.toLocaleString('pt-BR')} tentativas em {total.toLocaleString('pt-BR')} possibilidades, a chance de acertar chutando é de <strong>{chance.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%</strong>.
        {semLimite ? ' Sem limite, é certeza: o ladrão testa todos.' : ''}
      </p>
    </div>
  )
}
