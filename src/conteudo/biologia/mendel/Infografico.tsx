import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Mendel em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-mendel"
      titulo="Mendel em um olhar"
      desc="Cada característica é controlada por dois alelos, um de cada genitor. O dominante (A) aparece com uma cópia, e o recessivo (a), só com duas. Aa cruzado com Aa dá 1 AA, 2 Aa e 1 aa, ou 3 dominantes para 1 recessivo. Aa com aa dá 1 para 1. AaBb com AaBb dá 9, 3, 3 e 1. O quadro de Punnett mostra todas as combinações. Exceções: dominância incompleta, codominância e genes ligados."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Vocabulário</text>
      <rect x={40} y={68} width={600} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={92} style={t14}>Alelo: versão do gene · Genótipo: AA, Aa, aa · Fenótipo: o que aparece</text>
      <text x={52} y={114} style={t12}>Homozigoto: alelos iguais · Heterozigoto: alelos diferentes (Aa)</text>
      <text x={52} y={130} style={t12}>Dominante aparece com 1 cópia · recessivo, só com 2</text>

      <text x={40} y={166} style={t12}>As leis</text>
      <rect x={40} y={178} width={290} height={70} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={202} style={t14}>1ª lei: segregação</text>
      <text x={52} y={224} style={t12}>cada gameta leva só 1 alelo</text>
      <rect x={350} y={178} width={290} height={70} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={202} style={t14}>2ª lei: independente</text>
      <text x={362} y={224} style={t12}>genes em cromossomos diferentes</text>

      <text x={40} y={276} style={t12}>Proporções</text>
      <rect x={40} y={288} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={312} style={t14}>Aa x Aa</text>
      <text x={52} y={334} style={t12}>1 AA : 2 Aa : 1 aa</text>
      <text x={52} y={354} style={t12}>fenótipos 3 : 1</text>
      <rect x={245} y={288} width={190} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={312} style={t14}>Aa x aa</text>
      <text x={257} y={334} style={t12}>1 Aa : 1 aa</text>
      <text x={257} y={354} style={t12}>cruzamento-teste</text>
      <rect x={450} y={288} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={312} style={t14}>AaBb x AaBb</text>
      <text x={462} y={334} style={t12}>9 : 3 : 3 : 1</text>
      <text x={462} y={354} style={t12}>16 combinações</text>

      <text x={40} y={400} style={t12}>Fora da regra</text>
      <rect x={40} y={412} width={600} height={44} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={432} style={t12}>Dominância incompleta: vermelha x branca = rosa (1 : 2 : 1)</text>
      <text x={52} y={448} style={t12}>Codominância, genes ligados e muitos genes para uma característica</text>

      <Historia y={484} texto="História: Mendel, 1856 a 1866 · redescoberta, 1900 · Bateson, 1905 · Johannsen, 1909 · Morgan" />
    </Moldura>
  )
}
