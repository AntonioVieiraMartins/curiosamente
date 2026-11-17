type Props = {
  cima: number // quantos pedaços estão pintados
  baixo: number // em quantos pedaços a pizza foi cortada
  cor?: string
  tamanho?: number
  legenda?: boolean
}

const R = 45

function ponto(angulo: number) {
  // Começa no alto (12 horas) e gira no sentido do relógio
  const rad = (angulo - 90) * (Math.PI / 180)
  return `${50 + R * Math.cos(rad)} ${50 + R * Math.sin(rad)}`
}

// Uma pizza cortada em "baixo" fatias iguais, com "cima" fatias pintadas
export default function Pizza({ cima, baixo, cor = 'var(--color-coral)', tamanho = 140, legenda = true }: Props) {
  const fatia = 360 / baixo
  return (
    <figure data-sem-narracao className="flex flex-col items-center gap-2">
      <svg viewBox="0 0 100 100" width={tamanho} height={tamanho} role="img" aria-label={`${cima} de ${baixo} pedaços`}>
        <circle cx="50" cy="50" r={R} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth="1.5" />
        {baixo === 1
          ? cima > 0 && <circle cx="50" cy="50" r={R} fill={cor} />
          : Array.from({ length: cima }, (_, i) => (
              <path key={i} d={`M50 50 L${ponto(i * fatia)} A${R} ${R} 0 ${fatia > 180 ? 1 : 0} 1 ${ponto((i + 1) * fatia)} Z`} fill={cor} />
            ))}
        {baixo > 1 &&
          Array.from({ length: baixo }, (_, i) => (
            <line key={i} x1="50" y1="50" x2={ponto(i * fatia).split(' ')[0]} y2={ponto(i * fatia).split(' ')[1]} stroke="var(--color-superficie)" strokeWidth="1.5" />
          ))}
      </svg>
      {legenda && (
        <figcaption className="font-serif text-2xl font-medium">
          {cima}/{baixo}
        </figcaption>
      )}
    </figure>
  )
}
