export type EstadoEstacao = 'concluida' | 'andamento' | 'pronta' | 'breve'

// Bolinha de estação do metrô:
// cheia com check = concluída; anel grosso = em andamento; anel = pronta; tracejada cinza = em breve.
export default function Estacao({ cor, estado }: { cor: string; estado: EstadoEstacao }) {
  const estilo =
    estado === 'concluida'
      ? { background: cor, border: '0' }
      : estado === 'andamento'
        ? { background: 'var(--color-superficie)', border: `6px solid ${cor}` }
        : estado === 'pronta'
          ? { background: 'var(--color-superficie)', border: `4px solid ${cor}` }
          : { background: 'var(--color-superficie)', border: '3px dashed var(--color-suave)' }
  return (
    <span aria-hidden="true" className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full text-white" style={estilo}>
      {estado === 'concluida' && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12l5 5 9-10" />
        </svg>
      )}
    </span>
  )
}
