import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Potências em um olhar": escada de 2⁴ até 2⁻³
export default function Infografico() {
  const degraus = [['2⁴', '16'], ['2³', '8'], ['2²', '4'], ['2¹', '2'], ['2⁰', '1'], ['2⁻¹', '1/2'], ['2⁻²', '1/4'], ['2⁻³', '1/8']]
  return (
    <Moldura
      id="info-pot"
      titulo="Potências em um olhar"
      desc="Potência é multiplicação repetida: a elevado a n tem n fatores iguais a a. A base é o que se multiplica e o expoente diz quantas vezes. 3 elevado a 4 é 81, e não 12. Descendo a escada, cada degrau divide pela base: a elevado a 1 é a, a elevado a 0 é 1 e expoente negativo é um sobre a potência positiva, por isso 2 elevado a menos 3 é 1/8. Na mesma base, multiplicar soma os expoentes, dividir subtrai e potência de potência multiplica. Cuidado: menos 3 ao quadrado é 9, mas menos 3² é menos 9. Notação científica é m vezes 10 elevado a n, com m entre 1 e 10."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Potência é multiplicação repetida: 3⁴ = 3 × 3 × 3 × 3 = 81 (e não 12)</text>

      <text x={40} y={90} style={t12}>A escada: cada degrau para baixo divide pela base</text>
      {degraus.map(([p, v], i) => (
        <g key={p}>
          <rect x={40 + i * 75} y={102} width={68} height={56} rx={8} fill={i === 4 ? cores.amarelo.fill : i < 4 ? cores.azul.fill : cores.coral.fill} stroke={i === 4 ? cores.amarelo.stroke : i < 4 ? cores.azul.stroke : cores.coral.stroke} />
          <text x={74 + i * 75} y={126} textAnchor="middle" style={t14}>{p}</text>
          <text x={74 + i * 75} y={146} textAnchor="middle" style={t12}>{v}</text>
        </g>
      ))}
      <text x={40} y={182} style={t12}>a¹ = a · a⁰ = 1 · a⁻ⁿ = 1/aⁿ (expoente negativo não deixa o número negativo)</text>

      <text x={40} y={216} style={t12}>Mesma base: o que acontece com os expoentes</text>
      <Caixa x={40} y={228} w={190} h={64} cor="azul" titulo="multiplicar: soma" sub="aᵐ × aⁿ = aᵐ⁺ⁿ" />
      <Caixa x={245} y={228} w={190} h={64} cor="azul" titulo="dividir: subtrai" sub="2⁶ ÷ 2² = 2⁴ = 16" />
      <Caixa x={450} y={228} w={190} h={64} cor="azul" titulo="potência de potência" sub="(2³)² = 2⁶ = 64" />
      <text x={40} y={316} style={t12}>A regra dos expoentes vale para multiplicar: aᵐ + aⁿ não vira aᵐ⁺ⁿ.</text>

      <text x={40} y={350} style={t12}>Três pegadinhas</text>
      <rect x={40} y={362} width={190} height={110} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={384} style={t14}>2³ não é 2 × 3</text>
      <text x={52} y={406} style={t12}>2³ = 8; 2 × 3 = 6</text>
      <text x={52} y={430} style={t12}>(a + b)² não é a² + b²:</text>
      <text x={52} y={448} style={t12}>(3 + 4)² = 49, mas 25</text>
      <rect x={245} y={362} width={190} height={110} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={384} style={t14}>Sinais</text>
      <text x={257} y={406} style={t12}>(−3)² = 9</text>
      <text x={257} y={426} style={t12}>−3² = −9</text>
      <text x={257} y={450} style={t12}>os parênteses mandam</text>
      <rect x={450} y={362} width={190} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={384} style={t14}>Ordem das operações</text>
      <text x={462} y={406} style={t12}>potência vem antes de ×</text>
      <text x={462} y={426} style={t12}>3 + 2² × 5 = 3 + 20 = 23</text>

      <rect x={40} y={490} width={600} height={80} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={512} style={t14}>Notação científica: m × 10ⁿ, com m entre 1 e 10</text>
      <text x={52} y={534} style={t12}>4.500.000 = 4,5 × 10⁶ (a vírgula andou 6 casas) · 0,0003 = 3 × 10⁻⁴</text>
      <text x={52} y={554} style={t12}>Áreas e volumes: n² e n³ · 16 bits dão 2¹⁶ = 65.536 números · dobrar e dobrar assusta</text>

      <Historia y={614} texto="História: Arquimedes e 10ᵃ × 10ᵇ (séc. 3 a.C.) · xadrez (1256) · Stifel inventa expoente em 1544 · Descartes (séc. 17)" />
    </Moldura>
  )
}
