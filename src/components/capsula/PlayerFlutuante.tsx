import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'
import { nomeCurto } from '../../lib/narracao'
import { useNarracao, VELOCIDADES } from '../../hooks/useNarracao'

type Narracao = ReturnType<typeof useNarracao>

const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">{children}</svg>
)
const icones = {
  tocar: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
  pausar: <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />,
  voltar: <path d="M6 5h2v14H6zM19 5.5v13L9.5 12z" fill="currentColor" />,
  avancar: <path d="M16 5h2v14h-2zM5 5.5v13L14.5 12z" fill="currentColor" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
}

const botao = 'inline-flex size-11 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15'

// Barra escura da narração, fixa no pé da área do texto: anterior, pausar, próxima, frase atual,
// velocidade, voz e fechar (fechar = parar a voz). Entra no espaço "#player-narracao" da cápsula.
export default function PlayerFlutuante({ narracao: n }: { narracao: Narracao }) {
  const lugar = typeof document === 'undefined' ? null : document.getElementById('player-narracao')
  if (!lugar) return null

  function proximaVelocidade() {
    const i = VELOCIDADES.indexOf(n.velocidade)
    n.mudarVelocidade(VELOCIDADES[(i + 1) % VELOCIDADES.length])
  }
  const porcento = n.posicao.total ? Math.round((n.posicao.atual / n.posicao.total) * 100) : 0

  return createPortal(
    <div
      role="group"
      aria-label="Controles da narração"
      data-sem-narracao
      className="overflow-hidden rounded-2xl bg-texto text-white shadow-cartao-alto"
    >
      <div className="flex items-center gap-1 px-2 py-1.5">
        <button type="button" aria-label="Frase anterior" className={botao} onClick={() => n.pular(-1)}>
          <Svg>{icones.voltar}</Svg>
        </button>
        <button
          type="button"
          aria-label={n.estado === 'tocando' ? 'Pausar' : 'Continuar'}
          className={`${botao} bg-white text-texto hover:bg-white/90`}
          onClick={n.estado === 'tocando' ? n.pausar : n.continuar}
        >
          <Svg>{n.estado === 'tocando' ? icones.pausar : icones.tocar}</Svg>
        </button>
        <button type="button" aria-label="Próxima frase" className={botao} onClick={() => n.pular(1)}>
          <Svg>{icones.avancar}</Svg>
        </button>
        <p className="min-w-0 flex-1 truncate px-2 text-sm text-white/85" aria-live="off">{n.posicao.texto}</p>
        <button
          type="button"
          aria-label={`Velocidade ${n.velocidade}×. Trocar`}
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full px-2 text-sm font-semibold hover:bg-white/15"
          onClick={proximaVelocidade}
        >
          {String(n.velocidade).replace('.', ',')}×
        </button>
        {n.vozes.length > 1 && (
          <select
            aria-label="Voz"
            value={n.voz?.name ?? ''}
            onChange={(e) => n.mudarVoz(e.target.value)}
            className="hidden min-h-11 max-w-36 rounded-full bg-white/10 px-3 text-sm text-white lg:block"
          >
            {n.vozes.map((v) => (
              <option key={v.name} value={v.name} className="text-texto">{nomeCurto(v)}</option>
            ))}
          </select>
        )}
        <button type="button" aria-label="Fechar e parar a narração" className={botao} onClick={n.parar}>
          <Svg>{icones.fechar}</Svg>
        </button>
      </div>
      <div className="flex items-center gap-3 px-4 pb-2.5 text-xs text-white/70">
        <span aria-live="polite" className="shrink-0">Frase {n.posicao.atual} de {n.posicao.total}</span>
        <div
          role="progressbar"
          aria-label="Progresso da narração"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={porcento}
          className="h-1 flex-1 overflow-hidden rounded-full bg-white/20"
        >
          <div className="h-full rounded-full bg-white" style={{ width: `${porcento}%` }} />
        </div>
      </div>
    </div>,
    lugar,
  )
}
