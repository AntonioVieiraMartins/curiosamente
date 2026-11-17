// Avatares desenhados em SVG (o visual do app evita emojis como ícone).
// O id fica salvo em perfis.avatar; "lente" é o padrão do banco.
export const avatares = [
  { id: 'lente', nome: 'Lupa', fundo: 'var(--color-amarelo)', traco: 'var(--color-texto)' },
  { id: 'prisma', nome: 'Prisma', fundo: 'var(--color-azul)', traco: 'white' },
  { id: 'colmeia', nome: 'Colmeia', fundo: 'var(--color-verde)', traco: 'white' },
  { id: 'onda', nome: 'Onda', fundo: 'var(--color-coral)', traco: 'white' },
  { id: 'orbita', nome: 'Órbita', fundo: 'var(--color-computacao)', traco: 'white' },
  { id: 'bits', nome: 'Bits', fundo: 'var(--color-texto)', traco: 'white' },
] as const

function Desenho({ id, traco }: { id: string; traco: string }) {
  const linha = { fill: 'none', stroke: traco, strokeWidth: 3, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (id) {
    case 'prisma':
      return <path d="M20 9 L31 29 H9 Z" {...linha} />
    case 'colmeia':
      return <path d="M20 8 L30.4 14 V26 L20 32 L9.6 26 V14 Z" {...linha} />
    case 'onda':
      return <path d="M7 20 C11 10, 15 10, 20 20 S29 30, 33 20" {...linha} />
    case 'orbita':
      return (
        <>
          <ellipse cx="20" cy="20" rx="13" ry="6" transform="rotate(-30 20 20)" {...linha} />
          <circle cx="20" cy="20" r="3.5" fill={traco} />
        </>
      )
    case 'bits':
      return (
        <>
          <rect x="10" y="10" width="8" height="8" rx="1.5" fill={traco} />
          <rect x="22" y="10" width="8" height="8" rx="1.5" {...linha} strokeWidth={2.5} />
          <rect x="10" y="22" width="8" height="8" rx="1.5" {...linha} strokeWidth={2.5} />
          <rect x="22" y="22" width="8" height="8" rx="1.5" fill={traco} />
        </>
      )
    default: // lente
      return (
        <>
          <circle cx="18" cy="18" r="8" {...linha} />
          <path d="M24 24 L31 31" {...linha} />
        </>
      )
  }
}

type Props = { id?: string | null; tamanho?: number; className?: string }

export default function Avatar({ id, tamanho = 64, className = '' }: Props) {
  const avatar = avatares.find((a) => a.id === id) ?? avatares[0]
  return (
    <svg
      viewBox="0 0 40 40"
      width={tamanho}
      height={tamanho}
      role="img"
      aria-label={`Avatar: ${avatar.nome}`}
      className={`shrink-0 rounded-full ${className}`}
    >
      <circle cx="20" cy="20" r="20" fill={avatar.fundo} />
      <Desenho id={avatar.id} traco={avatar.traco} />
    </svg>
  )
}
