import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Movimento e referencial em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-movimento-referencial"
      titulo="Movimento e referencial em um olhar"
      desc="Movimento é mudança de posição com o tempo em relação a um referencial. Repouso e movimento são relativos. A trajetória também depende do referencial. Distância percorrida soma todo o caminho, e deslocamento é posição final menos posição inicial. Velocidade relativa: mesmo sentido subtrai, sentidos opostos soma."
      altura={470}
    >
      <text x={40} y={56} style={t12}>A ideia central</text>
      <rect x={40} y={68} width={600} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Movimento é relativo ao referencial</text>
      <text x={52} y={114} style={t12}>passageiro: parado para o motorista, em movimento para o poste</text>
      <text x={52} y={134} style={t12}>a trajetória também muda: a bola no trem é reta ou curva</text>

      <text x={40} y={176} style={t12}>Posição</text>
      <rect x={40} y={188} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={212} style={t14}>Distância percorrida</text>
      <text x={52} y={234} style={t12}>soma todo o caminho</text>
      <text x={52} y={254} style={t12}>nunca é negativa</text>
      <rect x={350} y={188} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={212} style={t14}>Deslocamento</text>
      <text x={362} y={234} style={t12}>Δs = posição final − posição inicial</text>
      <text x={362} y={254} style={t12}>volta ao início: deslocamento zero</text>

      <text x={40} y={302} style={t12}>Velocidade relativa</text>
      <rect x={40} y={314} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={338} style={t14}>Mesmo sentido: subtrai</text>
      <text x={52} y={360} style={t12}>80 e 60 km/h: aproximação de 20 km/h</text>
      <rect x={350} y={314} width={290} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={338} style={t14}>Sentidos opostos: soma</text>
      <text x={362} y={360} style={t12}>80 e 60 km/h: aproximação de 140 km/h</text>

      <text x={40} y={412} style={t12}>Por que não sentimos a Terra girar?</text>
      <text x={40} y={434} style={t12}>tudo em volta se move junto: em relação à Terra, estamos em repouso</text>

      <Historia y={462} texto="História: Aristóteles, séc. 4 a.C. · Copérnico, 1543 · Galileu e o navio, 1632 · Newton, 1687 · Einstein, 1905" />
    </Moldura>
  )
}
