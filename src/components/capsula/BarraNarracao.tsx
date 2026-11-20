import { useState, type ReactNode, type RefObject } from 'react'
import { useNarracao } from '../../hooks/useNarracao'
import PainelVoz from './PainelVoz'
import PlayerFlutuante from './PlayerFlutuante'

// Ícones desenhados à mão (sem biblioteca), herdam a cor do botão
const Icone = {
  tocar: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
  pausar: <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />,
  parar: <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" fill="currentColor" />,
  ajustes: (
    <path
      d="M4 7h10M18 7h2M4 17h4M12 17h8M16 4.5v5M10 14.5v5"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    />
  ),
}
const Svg = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">{children}</svg>
)

// Botão "Ouvir" da etapa. Só toca quando a pessoa aperta (nada de som automático).
// Se o aparelho não tiver voz em português, a barra simplesmente não aparece.
export default function BarraNarracao({ alvo }: { alvo: RefObject<HTMLElement | null> }) {
  const n = useNarracao()
  const [ajustesAbertos, setAjustesAbertos] = useState(false)
  if (!n.disponivel) return null

  const botao = 'inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition'

  return (
    <div className="mt-4 border-b border-borda pb-4">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Narração da etapa">
        {n.estado === 'parado' && (
          <button type="button" onClick={() => n.tocar(alvo.current)} className={`${botao} border border-borda px-5 hover:border-azul hover:text-azul-texto`}>
            <Svg>{Icone.tocar}</Svg> Ouvir
          </button>
        )}
        {n.estado !== 'parado' && (
          <span className="text-sm text-suave" aria-live="polite">
            {n.estado === 'pausado' ? 'Pausado' : 'Ouvindo'} · frase {n.posicao.atual} de {n.posicao.total}
          </span>
        )}

        <button
          type="button"
          onClick={() => setAjustesAbertos((a) => !a)}
          aria-expanded={ajustesAbertos}
          className={`${botao} ml-auto px-4 text-sm text-suave hover:text-texto ${ajustesAbertos ? 'bg-fundo text-texto' : ''}`}
        >
          <Svg>{Icone.ajustes}</Svg> Voz e velocidade
        </button>
      </div>

      {ajustesAbertos && <PainelVoz narracao={n} />}
      {n.estado !== 'parado' && <PlayerFlutuante narracao={n} />}
    </div>
  )
}
