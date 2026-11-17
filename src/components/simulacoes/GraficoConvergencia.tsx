export type Ponto = { rodada: number; ficando: number; trocando: number; moeda: number } // porcentagens de 0 a 100

const L = 320 // largura e altura do desenho (o SVG se ajusta à tela)
const A = 190
const margem = { esq: 34, dir: 10, topo: 10, base: 26 }

// Gráfico simples em SVG: a taxa de vitória de cada estratégia ao longo das rodadas.
// Com poucas rodadas as linhas tremem; com muitas, elas param em 1/3 e 2/3.
export default function GraficoConvergencia({ pontos }: { pontos: Ponto[] }) {
  const ultimaRodada = pontos.at(-1)?.rodada ?? 0
  const x = (rodada: number) => margem.esq + (ultimaRodada === 0 ? 0 : (rodada / ultimaRodada) * (L - margem.esq - margem.dir))
  const y = (pct: number) => margem.topo + (1 - pct / 100) * (A - margem.topo - margem.base)
  const linha = (campo: 'ficando' | 'trocando' | 'moeda') => pontos.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.rodada).toFixed(1)},${y(p[campo]).toFixed(1)}`).join(' ')

  const referencias = [
    { pct: 100 / 3, rotulo: '1/3' },
    { pct: 50, rotulo: '1/2' },
    { pct: 200 / 3, rotulo: '2/3' },
  ]

  return (
    <svg viewBox={`0 0 ${L} ${A}`} className="w-full" role="img" aria-label="Gráfico da porcentagem de vitórias ao longo das rodadas">
      {referencias.map((r) => (
        <g key={r.rotulo}>
          <line
            x1={margem.esq} x2={L - margem.dir} y1={y(r.pct)} y2={y(r.pct)}
            stroke="var(--color-borda)" strokeWidth="1.5" strokeDasharray="4 4"
          />
          <text x={margem.esq - 6} y={y(r.pct) + 4} textAnchor="end" fontSize="11" fill="var(--color-suave)">{r.rotulo}</text>
        </g>
      ))}
      <line x1={margem.esq} x2={L - margem.dir} y1={A - margem.base} y2={A - margem.base} stroke="var(--color-borda)" strokeWidth="1.5" />
      <text x={margem.esq} y={A - 8} fontSize="11" fill="var(--color-suave)">0</text>
      <text x={L - margem.dir} y={A - 8} fontSize="11" textAnchor="end" fill="var(--color-suave)">
        {ultimaRodada.toLocaleString('pt-BR')} rodadas
      </text>

      {pontos.length > 1 ? (
        <>
          <path d={linha('moeda')} fill="none" stroke="var(--color-amarelo-escuro)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d={linha('ficando')} fill="none" stroke="var(--color-coral)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d={linha('trocando')} fill="none" stroke="var(--color-azul)" strokeWidth="2.5" strokeLinejoin="round" />
        </>
      ) : (
        <text x={L / 2 + margem.esq / 2} y={A / 2} textAnchor="middle" fontSize="12" fill="var(--color-suave)">
          As linhas aparecem quando você jogar
        </text>
      )}
    </svg>
  )
}
