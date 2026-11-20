import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Mol em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-mol"
      titulo="Mol em um olhar"
      desc="O mol é uma quantidade fixa de partículas: 6,02 vezes 10 elevado a 23, a constante de Avogadro. A massa molar, em gramas por mol, é a massa de 1 mol e é a soma das massas atômicas da fórmula: água 18, gás carbônico 44, sal 58,5, glicose 180. Para converter: mol é massa dividida pela massa molar, e partículas é mol vezes 6,02 vezes 10 elevado a 23. Nas CNTP, 1 mol de qualquer gás ocupa 22,4 litros. Avogadro propôs a ideia em 1811."
      altura={500}
    >
      <text x={40} y={56} style={t12}>A ideia</text>
      <rect x={40} y={68} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={94} style={t14}>1 mol = 6,02 × 10²³ partículas</text>
      <text x={52} y={116} style={t12}>Uma dúzia gigante. Mesmo número para qualquer substância; a massa muda.</text>

      <text x={40} y={162} style={t12}>Massa molar (g/mol)</text>
      <rect x={40} y={174} width={140} height={70} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={198} style={t14}>H₂O</text>
      <text x={52} y={222} style={t12}>18 g/mol</text>
      <rect x={195} y={174} width={140} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={207} y={198} style={t14}>CO₂</text>
      <text x={207} y={222} style={t12}>44 g/mol</text>
      <rect x={350} y={174} width={140} height={70} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={198} style={t14}>NaCl</text>
      <text x={362} y={222} style={t12}>58,5 g/mol</text>
      <rect x={505} y={174} width={135} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={517} y={198} style={t14}>Glicose</text>
      <text x={517} y={222} style={t12}>180 g/mol</text>

      <text x={40} y={276} style={t12}>As três contas</text>
      <rect x={40} y={288} width={600} height={96} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={312} style={t14}>mol = massa ÷ massa molar</text>
      <text x={52} y={336} style={t14}>partículas = mol × 6,02 × 10²³</text>
      <text x={52} y={360} style={t14}>volume de gás (CNTP) = mol × 22,4 L</text>

      <text x={40} y={414} style={t12}>Ex.: 36 g de água = 2 mol = 12,04 × 10²³ moléculas = 36 mL</text>
      <text x={40} y={436} style={t12}>Contar 1 mol a 1 bilhão por segundo levaria uns 19 milhões de anos</text>

      <Historia y={474} texto="História: Avogadro, 1811 · Cannizzaro, 1860 · Loschmidt, 1865 · Perrin, 1909 · definição nova do mol, 2019" />
    </Moldura>
  )
}
