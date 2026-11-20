import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Lançamentos em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-lancamentos"
      titulo="Lançamentos em um olhar"
      desc="No lançamento de projéteis, sem ar, o movimento horizontal é uniforme e o vertical é uma queda com aceleração g. A trajetória é uma parábola. No lançamento horizontal, o tempo de queda só depende da altura. No oblíquo, decompõe-se a velocidade em v x igual a v cosseno de teta e v y igual a v seno de teta. O alcance é v ao quadrado vezes seno de dois teta sobre g, máximo em 45 graus."
      altura={480}
    >
      <text x={40} y={56} style={t12}>A grande ideia</text>
      <rect x={40} y={68} width={600} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Dois movimentos independentes, ligados pelo tempo</text>
      <text x={52} y={114} style={t12}>horizontal: MRU (velocidade constante)</text>
      <text x={52} y={134} style={t12}>vertical: MUV com aceleração g, para baixo</text>

      <text x={40} y={176} style={t12}>Lançamento horizontal</text>
      <rect x={40} y={188} width={290} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={212} style={t14}>t = √(2h ÷ g)   x = v·t</text>
      <text x={52} y={234} style={t12}>chega junto com uma bola solta</text>
      <text x={52} y={254} style={t12}>da mesma altura</text>
      <rect x={350} y={188} width={290} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={212} style={t14}>Lançamento oblíquo</text>
      <text x={362} y={234} style={t12}>vₓ = v·cos θ    v_y = v·sen θ</text>
      <text x={362} y={254} style={t12}>no topo: v = vₓ</text>

      <text x={40} y={296} style={t12}>Contas do arco</text>
      <rect x={40} y={308} width={600} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={332} style={t14}>subida = v_y ÷ g  ·  altura = v_y² ÷ 2g</text>
      <text x={52} y={354} style={t12}>tempo total = 2 × subida  ·  alcance = vₓ × tempo total</text>
      <text x={52} y={374} style={t12}>alcance = v²·sen(2θ) ÷ g: máximo em 45°; 30° e 60° empatam</text>

      <text x={40} y={416} style={t12}>Na vida real, o ar e o giro da bola mudam a trajetória (efeito Magnus)</text>

      <Historia y={462} texto="História: Tartaglia, 1537 · Galileu e a parábola, 1638 · Newton, 1687 · gol de falta de Roberto Carlos, 1997" />
    </Moldura>
  )
}
