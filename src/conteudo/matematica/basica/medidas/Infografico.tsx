import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Medidas em um olhar": a escada, o cubo do litro, perímetro e área
export default function Infografico() {
  const nomes = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm']
  const g = Array.from({ length: 24 }, (_, i) => i)
  return (
    <Moldura
      id="info-med"
      titulo="Medidas em um olhar"
      desc="Medir é comparar com uma unidade. As grandezas são comprimento, em metros, massa, em gramas, e capacidade, em litros. Os prefixos andam de 10 em 10: quilo é mil, hecto é cem, deca é dez, deci é um décimo, centi um centésimo e mili um milésimo. Converter é andar com a vírgula: para uma unidade menor o número cresce. Um cubo de 10 cm de lado tem 1.000 cm³, que são 1.000 mL, ou 1 litro, e 1 litro de água pesa cerca de 1 quilo. Perímetro é a volta, a soma dos lados, e área é a superfície coberta. Para um retângulo, o perímetro é 2 vezes largura mais altura e a área é largura vezes altura. 1 m² tem 10.000 cm²."
      altura={640}
    >
      <text x={40} y={56} style={t12}>A escada: cada degrau vale 10 vezes o vizinho (vale para m, g e L)</text>
      {nomes.map((n, i) => (
        <g key={n}>
          <rect x={40 + i * 87} y={72} width={80} height={50} rx={8} fill={i === 3 ? cores.amarelo.fill : cores.azul.fill} stroke={i === 3 ? cores.amarelo.stroke : cores.azul.stroke} />
          <text x={80 + i * 87} y={92} textAnchor="middle" style={t14}>{n}</text>
          <text x={80 + i * 87} y={110} textAnchor="middle" style={t12}>{['×1.000', '×100', '×10', 'base', '÷10', '÷100', '÷1.000'][i]}</text>
        </g>
      ))}
      <text x={40} y={146} style={t12}>para a direita (unidade menor) o número cresce: 2,5 km = 2.500 m · para a esquerda, diminui: 450 cm = 4,5 m</text>
      <text x={40} y={166} style={t12}>quilo = mil · hecto = cem · deca = dez · deci = 0,1 · centi = 0,01 · mili = 0,001</text>

      <text x={40} y={202} style={t12}>O cubo do litro</text>
      <rect x={40} y={214} width={190} height={130} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={135} y={256} textAnchor="middle" style={{ fontSize: 20, fontWeight: 600, fill: 'var(--color-texto)' }}>10 cm</text>
      <text x={135} y={282} textAnchor="middle" style={t12}>10 × 10 × 10 = 1.000 cm³</text>
      <text x={135} y={302} textAnchor="middle" style={t14}>= 1.000 mL = 1 L</text>
      <text x={135} y={326} textAnchor="middle" style={t12}>1 L de água ≈ 1 kg</text>

      <rect x={245} y={214} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={236} style={t14}>Massa e capacidade</text>
      <text x={257} y={258} style={t12}>1 t = 1.000 kg</text>
      <text x={257} y={276} style={t12}>1 kg = 1.000 g · 1 g = 1.000 mg</text>
      <text x={257} y={296} style={t12}>1 L = 1.000 mL = 1 dm³</text>
      <text x={257} y={316} style={t12}>1 mL = 1 cm³</text>
      <text x={257} y={334} style={t12}>2 L ÷ 250 mL = 8 copos</text>

      <rect x={450} y={214} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={236} style={t14}>Mesma unidade antes</text>
      <text x={462} y={258} style={t12}>1,2 m + 35 cm: converta</text>
      <text x={462} y={276} style={t12}>120 + 35 = 155 cm</text>
      <text x={462} y={300} style={t12}>estime antes de medir:</text>
      <text x={462} y={318} style={t12}>dedo ≈ 1 cm · passo ≈ 0,7 m</text>
      <text x={462} y={336} style={t12}>porta ≈ 2 m</text>

      <text x={40} y={376} style={t12}>Perímetro é a volta; área é o chão coberto (retângulo 6 m × 3 m)</text>
      {g.map((i) => (
        <rect key={i} x={40 + (i % 6) * 24} y={390 + Math.floor(i / 6) * 24} width={24} height={24} fill={i < 18 ? cores.azul.fill : 'none'} stroke={cores.azul.stroke} strokeWidth={0.8} />
      ))}
      <rect x={40} y={390} width={144} height={72} fill="none" stroke={cores.coral.stroke} strokeWidth={3} />
      <text x={210} y={410} style={t14}>Perímetro (a cerca, em m)</text>
      <text x={210} y={430} style={t12}>2 × (6 + 3) = 18 m</text>
      <text x={210} y={454} style={t14}>Área (os quadradinhos, em m²)</text>
      <text x={210} y={474} style={t12}>6 × 3 = 18 m²</text>
      <text x={420} y={410} style={t14}>Cerca ou piso?</text>
      <text x={420} y={430} style={t12}>rodapé, cerca, renda: perímetro</text>
      <text x={420} y={448} style={t12}>piso, tinta, grama: área</text>
      <text x={420} y={472} style={t12}>mesmo perímetro, áreas diferentes</text>

      <rect x={40} y={498} width={600} height={80} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={520} style={t14}>Cuidado: a área anda de 100 em 100</text>
      <text x={52} y={542} style={t12}>1 m = 100 cm, então 1 m² = 100 × 100 = 10.000 cm² · e 1 m³ = 1.000 L (volume: 1.000 em 1.000)</text>
      <text x={52} y={562} style={t12}>tampa de 30 × 20 cm = 600 cm² = 0,06 m² · não some unidades diferentes sem converter</text>

      <Historia y={612} texto="História: Lavoisier (anos 1780) · metro, 1791 · litro, 1795 · sistema em vigor na França, 1799 · SI, 1960" />
    </Moldura>
  )
}
