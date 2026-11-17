type Props = { valor: number; min?: number; max?: number; cor?: string }

// Reta de -10 a 10 com uma bolinha no valor atual. À esquerda do zero, os negativos.
export default function RetaNumerica({ valor, min = -10, max = 10, cor = 'var(--color-azul)' }: Props) {
  const largura = 320
  const margem = 14
  const x = (n: number) => margem + ((n - min) / (max - min)) * (largura - 2 * margem)
  const marcas = Array.from({ length: max - min + 1 }, (_, i) => min + i)
  const dentro = Math.max(min, Math.min(max, valor))

  return (
    <svg data-sem-narracao viewBox={`0 0 ${largura} 56`} className="w-full" role="img" aria-label={`Reta numérica marcando ${valor}`}>
      <line x1={margem} x2={x(0)} y1="24" y2="24" stroke="var(--color-coral)" strokeWidth="3" strokeLinecap="round" />
      <line x1={x(0)} x2={largura - margem} y1="24" y2="24" stroke="var(--color-verde)" strokeWidth="3" strokeLinecap="round" />
      {marcas.map((n) => (
        <g key={n}>
          <line x1={x(n)} x2={x(n)} y1={n % 5 === 0 ? 16 : 20} y2={n % 5 === 0 ? 32 : 28} stroke="var(--color-suave)" strokeWidth="1" />
          {n % 5 === 0 && (
            <text x={x(n)} y="48" textAnchor="middle" fontSize="11" fill="var(--color-suave)">
              {n < 0 ? `−${-n}` : n}
            </text>
          )}
        </g>
      ))}
      <circle cx={x(dentro)} cy="24" r="8" fill={cor} stroke="var(--color-superficie)" strokeWidth="2.5" style={{ transition: 'cx 250ms' }} />
    </svg>
  )
}
