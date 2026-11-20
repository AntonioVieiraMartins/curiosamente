import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Movimento uniforme em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-movimento-uniforme"
      titulo="Movimento uniforme em um olhar"
      desc="No movimento retilíneo uniforme a velocidade é constante e a equação horária é s igual a s zero mais v vezes t. O gráfico posição por tempo é uma reta, e a inclinação é a velocidade. No gráfico velocidade por tempo a área é o deslocamento. Encontro: iguale as posições. Trem em túnel: soma dos comprimentos. Ultrapassagem: soma dos comprimentos dividida pela diferença das velocidades."
      altura={500}
    >
      <text x={40} y={56} style={t12}>A receita</text>
      <rect x={40} y={68} width={600} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>MRU: velocidade constante em linha reta</text>
      <text x={52} y={114} style={t12}>s = s₀ + v × t   (posição inicial + o que foi andado)</text>
      <text x={52} y={134} style={t12}>v positiva: progressivo · v negativa: retrógrado</text>

      <text x={40} y={176} style={t12}>Gráficos</text>
      <rect x={40} y={188} width={290} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={212} style={t14}>Posição × tempo</text>
      <text x={52} y={234} style={t12}>reta; inclinação = velocidade</text>
      <text x={52} y={254} style={t12}>horizontal = parado</text>
      <rect x={350} y={188} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={212} style={t14}>Velocidade × tempo</text>
      <text x={362} y={234} style={t12}>reta horizontal</text>
      <text x={362} y={254} style={t12}>área = deslocamento (v × t)</text>

      <text x={40} y={310} style={t12}>Problemas clássicos</text>
      <rect x={40} y={322} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={346} style={t14}>Encontro: s_A = s_B</text>
      <text x={52} y={368} style={t12}>sentidos opostos: velocidades somam</text>
      <rect x={350} y={322} width={290} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={346} style={t14}>Trem num túnel</text>
      <text x={362} y={368} style={t12}>distância = túnel + trem</text>
      <rect x={40} y={404} width={600} height={46} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={424} style={t14}>Ultrapassagem: (soma dos comprimentos) ÷ (diferença das velocidades)</text>
      <text x={52} y={442} style={t12}>raio e trovão: cada 3 s de atraso, cerca de 1 km (som a 340 m/s)</text>

      <Historia y={486} texto="História: Aristóteles, séc. 4 a.C. · Galileu, 1638 · Newton e a inércia, 1687 · Kipchoge, 2019" />
    </Moldura>
  )
}
