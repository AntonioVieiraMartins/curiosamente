import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Heredogramas em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-heredogramas"
      titulo="Heredogramas em um olhar"
      desc="Heredograma: quadrado é homem, círculo é mulher, preenchido tem a característica. Pais sem a característica com filho afetado indicam herança recessiva. Padrões: autossômica recessiva, autossômica dominante e recessiva ligada ao X. Regra do E multiplica as chances, e a do OU soma. Cada filho é um sorteio novo. Sistema ABO: alelos IA, IB e i, seis genótipos e quatro fenótipos. Daltonismo e hemofilia são ligados ao X e mais comuns em homens."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Como ler</text>
      <rect x={40} y={68} width={600} height={50} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={90} style={t14}>Quadrado = homem · Círculo = mulher · Preenchido = afetado</text>
      <text x={52} y={108} style={t12}>Pais normais, filho afetado: herança recessiva (pais Aa)</text>

      <text x={40} y={146} style={t12}>Três padrões de herança</text>
      <rect x={40} y={158} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={182} style={t14}>Recessiva</text>
      <text x={52} y={204} style={t12}>pula gerações</text>
      <text x={52} y={224} style={t12}>albinismo, fibrose cística</text>
      <rect x={245} y={158} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={182} style={t14}>Dominante</text>
      <text x={257} y={204} style={t12}>todo afetado tem genitor afetado</text>
      <text x={257} y={224} style={t12}>Huntington</text>
      <rect x={450} y={158} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={182} style={t14}>Ligada ao X</text>
      <text x={462} y={204} style={t12}>mais homens afetados</text>
      <text x={462} y={224} style={t12}>daltonismo, hemofilia</text>

      <text x={40} y={270} style={t12}>Probabilidade</text>
      <rect x={40} y={282} width={290} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={306} style={t14}>Regra do E: multiplica</text>
      <text x={52} y={328} style={t12}>menino aa = 1/4 × 1/2 = 1/8</text>
      <text x={52} y={348} style={t12}>sem memória: cada filho é novo</text>
      <rect x={350} y={282} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={306} style={t14}>Regra do OU: soma</text>
      <text x={362} y={328} style={t12}>AA ou aa = 1/4 + 1/4 = 1/2</text>
      <text x={362} y={348} style={t12}>normal de Aa x Aa: portador = 2/3</text>

      <text x={40} y={394} style={t12}>Sangue ABO</text>
      <rect x={40} y={406} width={600} height={56} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={430} style={t14}>IA, IB (codominantes) e i (recessivo): 6 genótipos, 4 tipos</text>
      <text x={52} y={450} style={t12}>A = IAIA ou IAi · B = IBIB ou IBi · AB = IAIB · O = ii</text>

      <Historia y={488} texto="História: Dalton, 1798 · Landsteiner, 1901 · Morgan, 1910 · rainha Vitória e a hemofilia" />
    </Moldura>
  )
}
