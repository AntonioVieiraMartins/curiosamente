import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Respiração celular em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-respiracao-celular"
      titulo="Respiração celular em um olhar"
      desc="A respiração celular é o espelho da fotossíntese: glicose mais 6 oxigênios dão 6 gás carbônico, 6 água e energia. A energia vira ATP, a moeda da célula. Tem três etapas: glicólise no citoplasma, com 2 ATP; ciclo de Krebs na matriz da mitocôndria, com 2 ATP; e cadeia respiratória na membrana interna, com cerca de 26 ATP. Total de cerca de 30 ATP por glicose. Sem oxigênio, só a glicólise funciona, com fermentação, e rende 2 ATP."
      altura={500}
    >
      <text x={40} y={56} style={t12}>A receita ao contrário</text>
      <rect x={40} y={68} width={600} height={60} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={94} style={t14}>glicose + 6 O₂ → 6 CO₂ + 6 H₂O + energia</text>
      <text x={52} y={114} style={t12}>A energia vira ATP (a moeda da célula) e calor</text>

      <text x={40} y={158} style={t12}>Três etapas</text>
      <rect x={40} y={170} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={194} style={t14}>1. Glicólise</text>
      <text x={52} y={216} style={t12}>citoplasma, sem O₂</text>
      <text x={52} y={236} style={t12}>2 ATP</text>
      <rect x={245} y={170} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={257} y={194} style={t14}>2. Ciclo de Krebs</text>
      <text x={257} y={216} style={t12}>matriz, solta CO₂</text>
      <text x={257} y={236} style={t12}>2 ATP</text>
      <rect x={450} y={170} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={194} style={t14}>3. Cadeia respiratória</text>
      <text x={462} y={216} style={t12}>cristas, O₂ vira água</text>
      <text x={462} y={236} style={t12}>cerca de 26 ATP</text>

      <text x={40} y={294} style={t12}>Com e sem oxigênio</text>
      <rect x={40} y={306} width={290} height={76} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={330} style={t14}>Com O₂: cerca de 30 ATP</text>
      <text x={52} y={352} style={t12}>glicose desmontada por inteiro</text>
      <text x={52} y={370} style={t12}>15 vezes mais rendimento</text>
      <rect x={350} y={306} width={290} height={76} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={330} style={t14}>Sem O₂: 2 ATP (fermentação)</text>
      <text x={362} y={352} style={t12}>láctica: músculo, iogurte</text>
      <text x={362} y={370} style={t12}>alcoólica: levedura, pão, cerveja</text>

      <text x={40} y={414} style={t12}>Calorias por grama: carboidrato e proteína, cerca de 4 · gordura, cerca de 9</text>
      <text x={40} y={436} style={t12}>O corpo guarda só uns 50 g de ATP, mas recicla o peso do corpo por dia</text>

      <Historia y={474} texto="História: Lavoisier, 1780 · Pasteur, 1857 · Lohmann, ATP, 1929 · Krebs, 1937 · Lipmann, 1941 · Mitchell, 1961" />
    </Moldura>
  )
}
