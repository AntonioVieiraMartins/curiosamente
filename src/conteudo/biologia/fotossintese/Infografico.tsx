import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Fotossíntese em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-fotossintese"
      titulo="Fotossíntese em um olhar"
      desc="A fotossíntese transforma gás carbônico e água em glicose e oxigênio, usando a luz do Sol captada pela clorofila: 6 CO2 mais 6 H2O mais luz dão glicose mais 6 O2. Acontece nos cloroplastos em duas fases: a fase clara, nos tilacoides, que quebra a água e faz ATP e NADPH, e o ciclo de Calvin, no estroma, que monta a glicose. A clorofila reflete o verde. A velocidade depende de luz, gás carbônico, temperatura e água. O oxigênio vem da água."
      altura={500}
    >
      <text x={40} y={56} style={t12}>A receita</text>
      <rect x={40} y={68} width={600} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={96} style={t14}>6 CO₂ + 6 H₂O + luz → glicose + 6 O₂</text>
      <text x={52} y={118} style={t12}>O oxigênio solto vem da água. A massa dos dois lados é igual (372).</text>

      <text x={40} y={162} style={t12}>Duas fases no cloroplasto</text>
      <rect x={40} y={174} width={290} height={104} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={198} style={t14}>1. Fase clara</text>
      <text x={52} y={220} style={t12}>Nos tilacoides, com luz</text>
      <text x={52} y={240} style={t12}>Quebra a água, solta O₂</text>
      <text x={52} y={260} style={t12}>Faz ATP e NADPH</text>
      <rect x={350} y={174} width={290} height={104} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={198} style={t14}>2. Ciclo de Calvin</text>
      <text x={362} y={220} style={t12}>No estroma</text>
      <text x={362} y={240} style={t12}>Prende o CO₂ em açúcar</text>
      <text x={362} y={260} style={t12}>Usa o ATP e o NADPH</text>

      <text x={40} y={310} style={t12}>O que manda na velocidade</text>
      <rect x={40} y={322} width={290} height={76} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={346} style={t14}>Fator limitante</text>
      <text x={52} y={368} style={t12}>luz, CO₂, temperatura, água</text>
      <text x={52} y={386} style={t12}>o mais escasso manda</text>
      <rect x={350} y={322} width={290} height={76} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={346} style={t14}>Cor das folhas</text>
      <text x={362} y={368} style={t12}>absorve azul e vermelho</text>
      <text x={362} y={386} style={t12}>reflete o verde</text>

      <text x={40} y={430} style={t12}>Planta: fotossíntese de dia, respiração dia e noite. Ponto de compensação: as duas se igualam.</text>

      <Historia y={474} texto="História: van Helmont, 1640 · Priestley, 1771 · Ingenhousz, 1779 · Ruben e Kamen, 1941 · Calvin, anos 1950 · oxigênio, 2,4 bilhões de anos" />
    </Moldura>
  )
}
