type Props = {
  numero: number
  escolhida: boolean
  aberta: boolean
  conteudo: 'carro' | 'cabra'
  desabilitada: boolean
  aoClicar: () => void
}

const arco = 'M6 116 V44 A34 32 0 0 1 74 44 V116 Z'

// Uma porta desenhada em SVG: amarela fechada, azul quando escolhida, escura quando aberta
export default function Porta({ numero, escolhida, aberta, conteudo, desabilitada, aoClicar }: Props) {
  const rotulo = aberta ? `Porta ${numero}, aberta: ${conteudo}` : `Porta ${numero}`
  const fundo = escolhida ? 'var(--color-azul)' : 'var(--color-amarelo)'
  const tinta = escolhida ? '#ffffff' : 'var(--color-texto)'

  return (
    <button
      type="button"
      onClick={aoClicar}
      disabled={desabilitada}
      aria-label={rotulo}
      aria-pressed={escolhida}
      className="group w-full rounded-2xl transition-transform duration-200 enabled:hover:-translate-y-1 disabled:cursor-default"
    >
      <svg viewBox="0 0 80 118" className="w-full" aria-hidden="true">
        {aberta ? (
          <>
            <path d={arco} fill="var(--color-texto)" />
            <path d="M6 116 V44 L20 52 V110 Z" fill={fundo} opacity="0.9" />
            <text
              x="46" y="88" textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="Figtree, sans-serif"
              fill={conteudo === 'carro' ? 'var(--color-amarelo)' : 'var(--color-fundo)'}
            >
              {conteudo}
            </text>
          </>
        ) : (
          <>
            <path d={arco} fill={fundo} />
            <circle cx="62" cy="80" r="3.5" fill={tinta} opacity="0.8" />
            <text x="40" y="56" textAnchor="middle" fontSize="20" fontWeight="700" fontFamily="Figtree, sans-serif" fill={tinta}>
              {numero}
            </text>
          </>
        )}
      </svg>
      <span
        aria-hidden="true"
        className={`mt-1.5 block text-xs font-semibold text-azul-texto ${escolhida ? 'visible' : 'invisible'}`}
      >
        sua porta
      </span>
    </button>
  )
}
