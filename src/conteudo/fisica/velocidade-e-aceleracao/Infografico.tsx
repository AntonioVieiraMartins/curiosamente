import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Velocidade e aceleração em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-velocidade-aceleracao"
      titulo="Velocidade e aceleração em um olhar"
      desc="Velocidade média é espaço dividido por tempo. De km/h para m/s divide por 3,6, e de m/s para km/h multiplica por 3,6. A média das velocidades engana: ida a 60 e volta a 120 km/h dá média de 80. Aceleração é variação da velocidade dividida pelo tempo, em m/s². Frear é aceleração negativa. Com aceleração constante, v é igual a v zero mais a vezes t. O corpo sente a aceleração, e não a velocidade."
      altura={480}
    >
      <text x={40} y={56} style={t12}>Velocidade</text>
      <rect x={40} y={68} width={290} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>vm = Δs ÷ Δt</text>
      <text x={52} y={114} style={t12}>espaço dividido pelo tempo</text>
      <text x={52} y={134} style={t12}>do velocímetro: velocidade instantânea</text>
      <rect x={350} y={68} width={290} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={92} style={t14}>Unidades</text>
      <text x={362} y={114} style={t12}>km/h ÷ 3,6 = m/s</text>
      <text x={362} y={134} style={t12}>m/s × 3,6 = km/h  (72 km/h = 20 m/s)</text>

      <text x={40} y={190} style={t12}>A pegadinha da média</text>
      <rect x={40} y={202} width={600} height={64} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={226} style={t14}>Ida a 60 km/h e volta a 120 km/h: média de 80 km/h, e não 90</text>
      <text x={52} y={248} style={t12}>mais tempo na parte lenta: 240 km em 3 h</text>

      <text x={40} y={296} style={t12}>Aceleração</text>
      <rect x={40} y={308} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={332} style={t14}>a = Δv ÷ Δt   (m/s²)</text>
      <text x={52} y={354} style={t12}>2 m/s²: ganha 2 m/s a cada segundo</text>
      <text x={52} y={374} style={t12}>frear = aceleração negativa</text>
      <rect x={350} y={308} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={332} style={t14}>v = v₀ + a × t</text>
      <text x={362} y={354} style={t12}>do repouso, a = 3 m/s²: 18 m/s em 6 s</text>
      <text x={362} y={374} style={t12}>g ≈ 9,8 m/s² na queda livre</text>

      <text x={40} y={422} style={t12}>O que o corpo sente</text>
      <text x={40} y={444} style={t12}>a mudança de velocidade (aceleração), e não a velocidade: inércia na freada</text>

      <Historia y={472} texto="História: Oresme, séc. 14 · Galileu e as rampas, c. 1600 · Discursos, 1638 · Newton, 1687 · Yeager passa o som, 1947" />
    </Moldura>
  )
}
