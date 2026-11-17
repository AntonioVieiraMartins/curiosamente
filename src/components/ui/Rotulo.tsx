import type { ReactNode } from 'react'

// Etiqueta pequena em caixa alta, usada acima de títulos
export default function Rotulo({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.12em] text-suave ${className}`}>{children}</p>
  )
}
