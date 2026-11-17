import type { ReactNode } from 'react'

// Caixa "Para levar": as ideias principais da cápsula em poucas linhas
export default function Resumo({ titulo = 'Para levar', children }: { titulo?: string; children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-borda bg-fundo p-5 sm:p-6 [&_li]:text-[16px] [&_ul]:mt-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">{titulo}</p>
      {children}
    </aside>
  )
}
