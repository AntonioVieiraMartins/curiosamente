import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Estados da matéria em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-estados"
      titulo="Estados da matéria em um olhar"
      desc="Sólido tem forma e volume próprios, líquido tem volume próprio e toma a forma do recipiente, gás ocupa todo o espaço. Mudanças: fusão, solidificação, vaporização, condensação, sublimação e ressublimação. Fusão, vaporização e sublimação absorvem calor. A água funde a zero grau e ferve a cem graus ao nível do mar. Durante as mudanças a temperatura fica parada. Em montanhas altas a água ferve em temperatura menor, e na panela de pressão, maior."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Os três estados</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Sólido</text>
      <text x={52} y={114} style={t12}>partículas fixas, vibrando</text>
      <text x={52} y={134} style={t12}>forma e volume próprios</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Líquido</text>
      <text x={257} y={114} style={t12}>partículas escorregam</text>
      <text x={257} y={134} style={t12}>volume próprio, forma do pote</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Gás</text>
      <text x={462} y={114} style={t12}>partículas soltas e rápidas</text>
      <text x={462} y={134} style={t12}>ocupa todo o espaço</text>

      <text x={40} y={190} style={t12}>Mudanças de estado</text>
      <rect x={40} y={202} width={600} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={226} style={t14}>Absorvem calor: fusão · vaporização · sublimação</text>
      <text x={52} y={248} style={t12}>Liberam calor: solidificação · condensação · ressublimação</text>
      <text x={52} y={268} style={t12}>água: funde a 0 °C, ferve a 100 °C (nível do mar)</text>

      <text x={40} y={316} style={t12}>Curva de aquecimento</text>
      <rect x={40} y={328} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={352} style={t14}>Patamares</text>
      <text x={52} y={374} style={t12}>durante a mudança, a temperatura para</text>
      <text x={52} y={394} style={t12}>a energia separa as partículas</text>
      <rect x={350} y={328} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={352} style={t14}>Energia por grama de água</text>
      <text x={362} y={374} style={t12}>fundir o gelo: 334 J</text>
      <text x={362} y={394} style={t12}>vaporizar a água: 2.260 J</text>

      <text x={40} y={442} style={t12}>Pressão e ebulição</text>
      <rect x={40} y={454} width={600} height={56} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={478} style={t14}>La Paz: ~88 °C · nível do mar: 100 °C · panela de pressão: ~120 °C</text>
      <text x={52} y={498} style={t12}>mais pressão, mais alta a temperatura de ebulição</text>

      <Historia y={530} texto="História: Celsius, 1742 · Joseph Black e o calor latente, c. 1760 · Faraday liquefaz o cloro, 1823 · Langmuir batiza o plasma, 1928" />
    </Moldura>
  )
}
