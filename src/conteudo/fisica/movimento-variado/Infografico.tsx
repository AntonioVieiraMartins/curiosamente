import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Movimento uniformemente variado em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-muv"
      titulo="Movimento uniformemente variado em um olhar"
      desc="No MUV a aceleração é constante. A velocidade é v igual a v zero mais a vezes t, e a posição é s igual a s zero mais v zero vezes t mais a vezes t ao quadrado sobre dois. O gráfico da velocidade é uma reta e o da posição é uma parábola. Torricelli: v ao quadrado é v zero ao quadrado mais dois a delta s. A distância de parada soma a reação e a freada, e dobrar a velocidade quadruplica a freada."
      altura={480}
    >
      <text x={40} y={56} style={t12}>As equações</text>
      <rect x={40} y={68} width={600} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>MUV: aceleração constante (a = Δv ÷ Δt)</text>
      <text x={52} y={114} style={t12}>v = v₀ + a·t</text>
      <text x={52} y={134} style={t12}>s = s₀ + v₀·t + a·t² ÷ 2</text>
      <text x={330} y={114} style={t12}>vm = (v₀ + v) ÷ 2</text>
      <text x={330} y={134} style={t12}>Torricelli: v² = v₀² + 2·a·Δs</text>

      <text x={40} y={190} style={t12}>Gráficos</text>
      <rect x={40} y={202} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={226} style={t14}>Velocidade × tempo</text>
      <text x={52} y={248} style={t12}>reta inclinada; inclinação = a</text>
      <text x={52} y={268} style={t12}>área (trapézio) = deslocamento</text>
      <rect x={350} y={202} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={226} style={t14}>Posição × tempo</text>
      <text x={362} y={248} style={t12}>parábola</text>
      <text x={362} y={268} style={t12}>inclinação em cada ponto = v</text>

      <text x={40} y={316} style={t12}>Freada de verdade</text>
      <rect x={40} y={328} width={600} height={74} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={352} style={t14}>Distância de parada = reação + freada</text>
      <text x={52} y={374} style={t12}>reação: v × t (MRU)  ·  freada: v² ÷ 2a (MUV)</text>
      <text x={52} y={392} style={t12}>dobrar a velocidade: a freada fica 4 vezes maior</text>

      <text x={40} y={428} style={t12}>Galileu: 1, 3, 5, 7... as distâncias crescem como o quadrado do tempo</text>

      <Historia y={462} texto="História: Oxford, séc. 14 · Galileu e as rampas, c. 1600 · Discursos, 1638 · Torricelli, séc. 17" />
    </Moldura>
  )
}
