import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Queda livre em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-queda-livre"
      titulo="Queda livre em um olhar"
      desc="Na queda livre só a gravidade age, e todos os corpos têm a mesma aceleração g, cerca de 9,8 metros por segundo ao quadrado na Terra. Partindo do repouso, v é g vezes t, h é g vezes t ao quadrado sobre dois, e v ao quadrado é dois g h. No lançamento vertical, o corpo sobe freando, para no topo e desce acelerando. O ar atrasa a pena. Em 1971 um martelo e uma pena caíram juntos na Lua."
      altura={480}
    >
      <text x={40} y={56} style={t12}>A ideia central</text>
      <rect x={40} y={68} width={600} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Sem ar, todos os corpos caem com a mesma aceleração</text>
      <text x={52} y={114} style={t12}>g ≈ 9,8 m/s² na Terra · 1,6 na Lua · 3,7 em Marte</text>
      <text x={52} y={134} style={t12}>o ar (e não o peso) é que atrasa a pena</text>

      <text x={40} y={176} style={t12}>Do repouso</text>
      <rect x={40} y={188} width={600} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={212} style={t14}>v = g·t     h = g·t² ÷ 2     v² = 2·g·h</text>
      <text x={52} y={236} style={t12}>trechos por segundo: 1, 3, 5, 7... (padrão de Galileu)</text>

      <text x={40} y={282} style={t12}>Lançamento para cima</text>
      <rect x={40} y={294} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={318} style={t14}>Sobe freando, desce acelerando</text>
      <text x={52} y={340} style={t12}>topo: v = 0 e a = g</text>
      <text x={52} y={360} style={t12}>altura máxima: v₀² ÷ 2g</text>
      <rect x={350} y={294} width={290} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={318} style={t14}>Tempo total = 2·v₀ ÷ g</text>
      <text x={362} y={340} style={t12}>volta com a mesma velocidade</text>
      <text x={362} y={360} style={t12}>subida e descida simétricas</text>

      <text x={40} y={416} style={t12}>Com ar: velocidade limite (paraquedista ≈ 200 km/h; a gota de chuva, bem menos)</text>

      <Historia y={462} texto="História: Aristóteles, séc. 4 a.C. · Galileu, c. 1600 e 1638 · Newton, 1687 · Apollo 15, 1971" />
    </Moldura>
  )
}
