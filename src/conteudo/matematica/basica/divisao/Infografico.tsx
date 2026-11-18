// Infográfico "Divisão em um olhar", desenhado à mão em SVG. Cores só pelos tokens do tema.
const cores = {
  azul: { fill: 'var(--color-azul-claro)', stroke: 'var(--color-azul)' },
  coral: { fill: 'color-mix(in srgb, var(--color-coral) 12%, white)', stroke: 'var(--color-coral)' },
  cinza: { fill: 'var(--color-fundo)', stroke: 'var(--color-borda)' },
  bala: { fill: 'var(--color-amarelo)', stroke: 'var(--color-amarelo-escuro)' },
}
type Cor = keyof typeof cores

const t14 = { fontSize: 14, fontWeight: 600, fill: 'var(--color-texto)' } as const
const t12 = { fontSize: 12, fill: 'var(--color-suave)' } as const

function Caixa({ x, y, w, h, cor, titulo, sub }: { x: number; y: number; w: number; h: number; cor: Cor; titulo: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={cores[cor].fill} stroke={cores[cor].stroke} strokeWidth={1} />
      <text x={x + w / 2} y={y + 18} textAnchor="middle" style={t14}>{titulo}</text>
      <text x={x + w / 2} y={y + 38} textAnchor="middle" style={t12}>{sub}</text>
    </g>
  )
}

function Bolas({ pontos, r = 8 }: { pontos: [number, number][]; r?: number }) {
  return <>{pontos.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={r} fill={cores.bala.fill} stroke={cores.bala.stroke} strokeWidth={1} />)}</>
}

// Cinco bolas de um amigo: 3 em cima, 2 embaixo
const cinco = (x0: number): [number, number][] => [[x0 + 20, 98], [x0 + 45, 98], [x0 + 70, 98], [x0 + 32, 126], [x0 + 58, 126]]

export default function Infografico() {
  const amigos = [60, 170, 280, 390]
  return (
    <svg viewBox="0 0 680 640" role="img" className="h-auto w-full" aria-labelledby="info-div-t info-div-d">
      <title id="info-div-t">Divisão em um olhar</title>
      <desc id="info-div-d">23 balas repartidas entre 4 amigos dão 5 para cada e sobram 3. Os termos são dividendo, divisor, quociente e resto. A divisão armada repete quatro passos: dividir, multiplicar, subtrair e baixar. Cuidados: o resto é menor que o divisor, não se divide por zero, e há regras de divisibilidade.</desc>
      <defs>
        <marker id="seta-div" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="var(--color-suave)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <text x={60} y={40} style={t14}>Divisão em um olhar</text>
      <text x={60} y={60} style={t12}>23 balas repartidas entre 4 amigos</text>

      {amigos.map((x, i) => (
        <g key={x}>
          <rect x={x} y={72} width={90} height={82} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} strokeWidth={1} />
          <Bolas pontos={cinco(x)} />
          <text x={x + 45} y={174} textAnchor="middle" style={t12}>amigo {i + 1}: 5</text>
        </g>
      ))}
      <rect x={500} y={72} width={120} height={82} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} strokeWidth={1} />
      <Bolas pontos={[[530, 112], [560, 112], [590, 112]]} />
      <text x={560} y={174} textAnchor="middle" style={t12}>sobram 3</text>

      <Caixa x={60} y={194} w={120} h={54} cor="cinza" titulo="23" sub="dividendo" />
      <Caixa x={200} y={194} w={120} h={54} cor="cinza" titulo="÷ 4" sub="divisor" />
      <Caixa x={340} y={194} w={120} h={54} cor="cinza" titulo="= 5" sub="quociente" />
      <Caixa x={480} y={194} w={140} h={54} cor="coral" titulo="resto 3" sub="menor que o divisor" />

      <text x={60} y={284} style={t12}>Divisão armada: quatro passos que se repetem</text>
      <Caixa x={60} y={296} w={120} h={56} cor="azul" titulo="1 dividir" sub="quantas vezes cabe" />
      <Caixa x={200} y={296} w={120} h={56} cor="azul" titulo="2 multiplicar" sub="quociente × divisor" />
      <Caixa x={340} y={296} w={120} h={56} cor="azul" titulo="3 subtrair" sub="o que sobrou" />
      <Caixa x={480} y={296} w={140} h={56} cor="azul" titulo="4 baixar" sub="o próximo algarismo" />
      {[[181, 198], [321, 338], [461, 478]].map(([a, b]) => (
        <line key={a} x1={a} y1={324} x2={b} y2={324} stroke="var(--color-suave)" strokeWidth={1.5} markerEnd="url(#seta-div)" />
      ))}
      <path d="M550 354 L550 374 L120 374 L120 356" fill="none" stroke="var(--color-suave)" strokeWidth={1.5} markerEnd="url(#seta-div)" />
      <text x={335} y={394} textAnchor="middle" style={t12}>volta ao passo 1 até acabarem os algarismos</text>

      <text x={50} y={428} style={t12}>Três cuidados</text>
      <rect x={50} y={440} width={180} height={150} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} strokeWidth={1} />
      <text x={62} y={462} style={t14}>Resto pequeno</text>
      <text x={62} y={482} style={t12}>sempre menor que</text>
      <text x={62} y={498} style={t12}>o divisor (aqui, 5)</text>
      {[0, 1, 2, 3, 4].map((n) => (
        <g key={n}>
          <circle cx={72 + n * 34} cy={534} r={13} fill="var(--color-superficie)" stroke="var(--color-suave)" strokeWidth={1} />
          <text x={72 + n * 34} y={534} textAnchor="middle" dominantBaseline="central" style={t12}>{n}</text>
        </g>
      ))}
      <text x={62} y={572} style={t12}>restos possíveis</text>

      <rect x={250} y={440} width={180} height={150} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} strokeWidth={1} />
      <text x={262} y={462} style={t14}>Por zero, nunca</text>
      <text x={262} y={482} style={t12}>12 ÷ 0 = ?</text>
      <text x={262} y={500} style={t12}>nenhum número vezes 0</text>
      <text x={262} y={516} style={t12}>dá 12</text>
      <line x1={320} y1={534} x2={360} y2={574} stroke="var(--color-coral)" strokeWidth={4} strokeLinecap="round" />
      <line x1={360} y1={534} x2={320} y2={574} stroke="var(--color-coral)" strokeWidth={4} strokeLinecap="round" />

      <rect x={450} y={440} width={180} height={150} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} strokeWidth={1} />
      <text x={462} y={462} style={t14}>Divide sem sobrar?</text>
      <text x={462} y={486} style={t12}>2: termina em par</text>
      <text x={462} y={508} style={t12}>5: termina em 0 ou 5</text>
      <text x={462} y={530} style={t12}>10: termina em 0</text>
      <text x={462} y={552} style={t12}>3, 9: soma dos dígitos</text>

      <text x={340} y={620} textAnchor="middle" style={t12}>História: divisão longa impressa em 1491 · símbolo ÷ em 1659 · dois pontos em 1684</text>
    </svg>
  )
}
