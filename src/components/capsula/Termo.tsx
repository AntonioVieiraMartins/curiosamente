import type { ReactNode } from 'react'

// Palavra-chave colorida: cada conceito da cápsula ganha uma cor e mantém essa cor até o fim
const cores = {
  azul: 'text-azul-texto',
  verde: 'text-verde',
  coral: 'text-coral',
  amarelo: 'bg-amarelo/40 rounded px-1',
}

export default function Termo({ cor = 'azul', children }: { cor?: keyof typeof cores; children: ReactNode }) {
  return <strong className={`font-semibold ${cores[cor]}`}>{children}</strong>
}
