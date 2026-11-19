import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Áreas e perímetros em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-areas-perimetros"
      titulo="Áreas e perímetros em um olhar"
      desc="Perímetro é a volta da figura, a soma dos lados. Área é a superfície dentro. Retângulo: área base vezes altura. Paralelogramo: base vezes altura. Triângulo: base vezes altura dividido por 2. Trapézio: base maior mais base menor, vezes a altura, dividido por 2. Losango: diagonais multiplicadas e divididas por 2. Um metro quadrado tem 10 mil centímetros quadrados. Com o mesmo perímetro, o quadrado tem a maior área entre os retângulos."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Volta e chão</text>
      <rect x={40} y={68} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Perímetro: a volta</text>
      <text x={52} y={114} style={t12}>soma dos lados (cm, m)</text>
      <text x={52} y={134} style={t12}>retângulo: 2 × (b + h)</text>
      <rect x={350} y={68} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={92} style={t14}>Área: o chão</text>
      <text x={362} y={114} style={t12}>quadradinhos dentro (cm², m²)</text>
      <text x={362} y={134} style={t12}>retângulo: b × h</text>

      <text x={40} y={182} style={t12}>Fórmulas das áreas</text>
      <rect x={40} y={194} width={190} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={218} style={t14}>Paralelogramo</text>
      <text x={52} y={240} style={t12}>b × h (altura na vertical)</text>
      <text x={52} y={258} style={t12}>quadrado: l × l</text>
      <rect x={245} y={194} width={190} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={218} style={t14}>Triângulo</text>
      <text x={257} y={240} style={t12}>b × h ÷ 2</text>
      <text x={257} y={258} style={t12}>metade do retângulo</text>
      <rect x={450} y={194} width={190} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={218} style={t14}>Trapézio e losango</text>
      <text x={462} y={240} style={t12}>trapézio: (B + b) × h ÷ 2</text>
      <text x={462} y={258} style={t12}>losango: D × d ÷ 2</text>

      <text x={40} y={302} style={t12}>Unidades ao quadrado</text>
      <rect x={40} y={314} width={600} height={72} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={338} style={t14}>1 m² = 10.000 cm² (100 × 100)</text>
      <text x={52} y={360} style={t12}>1 km² = 1.000.000 m² · 1 ha = 10.000 m²</text>
      <text x={52} y={378} style={t12}>dobrar o lado: a área fica 4 vezes maior</text>

      <text x={40} y={416} style={t12}>Mesma cerca, áreas diferentes</text>
      <rect x={40} y={428} width={600} height={72} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={452} style={t14}>24 m de cerca: 1 × 11 = 11 m² · 4 × 8 = 32 m² · 6 × 6 = 36 m²</text>
      <text x={52} y={474} style={t12}>o quadrado tem a maior área; figura composta: soma ou subtrai partes</text>

      <Historia y={530} texto="História: cheias do Nilo e as cordas · Euclides, c. 300 a.C. · Heron, séc. 1 · lenda de Dido (Cartago) · círculo provado no séc. 19" />
    </Moldura>
  )
}
