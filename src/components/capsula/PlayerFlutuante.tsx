import { useEffect, useRef, useState, type ReactNode } from 'react'
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
  parar: <rect x="7" y="7" width="10" height="10" rx="1.5" fill="currentColor" />,
}

const botao = 'inline-flex size-11 items-center justify-center rounded-full text-texto transition hover:bg-fundo'

// Bolinha discreta no canto: só play/pause. Ao tocar, abre voltar, avançar, velocidade e parar
// por alguns segundos e depois volta a ser só a bolinha.
export default function PlayerFlutuante({ narracao: n }: { narracao: Narracao }) {
  const [aberto, setAberto] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  function abrir() {
    setAberto(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAberto(false), 3500)
  }
  useEffect(() => () => window.clearTimeout(timer.current), [])

  function proximaVelocidade() {
    const i = VELOCIDADES.indexOf(n.velocidade)
    n.mudarVelocidade(VELOCIDADES[(i + 1) % VELOCIDADES.length])
    abrir()
  }
  function principal() {
    // Primeiro toque só abre os controles; o seguinte pausa ou continua
    if (!aberto) return abrir()
    if (n.estado === 'tocando') n.pausar()
    else n.continuar()
    abrir()
  }

  return (
    <div
      role="group"
      aria-label="Controles da narração"
      data-sem-narracao
      className={`fixed right-3 bottom-[4.75rem] z-40 flex items-center rounded-full border border-borda bg-white/95 p-0.5 shadow-cartao transition-opacity md:bottom-6 md:right-6 ${aberto ? 'opacity-100' : 'opacity-60 hover:opacity-100 focus-within:opacity-100'}`}
    >
      {aberto && (
        <>
          <button type="button" aria-label="Frase anterior" className={botao} onClick={() => { n.pular(-1); abrir() }}>
            <Svg>{icones.voltar}</Svg>
          </button>
          <button type="button" aria-label="Próxima frase" className={botao} onClick={() => { n.pular(1); abrir() }}>
            <Svg>{icones.avancar}</Svg>
          </button>
          <button type="button" aria-label={`Velocidade ${n.velocidade}×. Trocar`} className={`${botao} w-auto min-w-11 px-2 text-sm font-semibold`} onClick={proximaVelocidade}>
            {String(n.velocidade).replace('.', ',')}×
          </button>
          <button type="button" aria-label="Parar a narração" className={botao} onClick={n.parar}>
            <Svg>{icones.parar}</Svg>
          </button>
        </>
      )}
      <button type="button" aria-label={n.estado === 'tocando' ? 'Pausar' : 'Continuar'} className={botao} onClick={principal}>
        <Svg>{n.estado === 'tocando' ? icones.pausar : icones.tocar}</Svg>
      </button>
    </div>
  )
}
