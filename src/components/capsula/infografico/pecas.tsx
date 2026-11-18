import type { ReactNode } from 'react'

// Peças compartilhadas pelos infográficos (um SVG por cápsula, desenhado à mão).
// Cores só pelos tokens do tema, para funcionar também no modo escuro.
export const cores = {
  azul: { fill: 'var(--color-azul-claro)', stroke: 'var(--color-azul)' },
  coral: { fill: 'color-mix(in srgb, var(--color-coral) 12%, white)', stroke: 'var(--color-coral)' },
  cinza: { fill: 'var(--color-fundo)', stroke: 'var(--color-borda)' },
  amarelo: { fill: 'var(--color-amarelo)', stroke: 'var(--color-amarelo-escuro)' },
  verde: { fill: 'color-mix(in srgb, var(--color-verde) 14%, white)', stroke: 'var(--color-verde)' },
}
export type Cor = keyof typeof cores

export const t14 = { fontSize: 14, fontWeight: 600, fill: 'var(--color-texto)' } as const
export const t12 = { fontSize: 12, fill: 'var(--color-suave)' } as const
export const t20 = { fontSize: 20, fontWeight: 600, fill: 'var(--color-texto)' } as const

// Moldura padrão: título e descrição para leitores de tela, e a ponta de seta (id único por cápsula)
export function Moldura({ id, titulo, desc, altura, children }: { id: string; titulo: string; desc: string; altura: number; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 680 ${altura}`} role="img" className="h-auto w-full" aria-labelledby={`${id}-t ${id}-d`}>
      <title id={`${id}-t`}>{titulo}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      <defs>
        <marker id={`seta-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="var(--color-suave)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <text x={40} y={36} style={t14}>{titulo}</text>
      {children}
    </svg>
  )
}

// Caixa com título e legenda centralizados
export function Caixa({ x, y, w, h, cor, titulo, sub, grande }: { x: number; y: number; w: number; h: number; cor: Cor; titulo: string; sub?: string; grande?: boolean }) {
  const meio = y + h / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={cores[cor].fill} stroke={cores[cor].stroke} strokeWidth={1} />
      {sub ? (
        <>
          <text x={x + w / 2} y={grande ? meio - 2 : y + 20} textAnchor="middle" style={grande ? t20 : t14}>{titulo}</text>
          <text x={x + w / 2} y={grande ? meio + 18 : y + 40} textAnchor="middle" style={t12}>{sub}</text>
        </>
      ) : (
        <text x={x + w / 2} y={meio} textAnchor="middle" dominantBaseline="central" style={grande ? t20 : t14}>{titulo}</text>
      )}
    </g>
  )
}

export function Seta({ id, x1, y1, x2, y2 }: { id: string; x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-suave)" strokeWidth={1.5} markerEnd={`url(#seta-${id})`} />
}

// Rodapé com a linha de história
export function Historia({ y, texto }: { y: number; texto: string }) {
  return <text x={340} y={y} textAnchor="middle" style={t12}>{texto}</text>
}
