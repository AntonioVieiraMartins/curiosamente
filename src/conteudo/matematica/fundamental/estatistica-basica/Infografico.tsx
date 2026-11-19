import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Média, mediana e moda em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-estat"
      titulo="Média, mediana e moda em um olhar"
      desc="Média é a soma dividida pela quantidade, o valor que cada um teria se todos tivessem o mesmo. Mediana é o valor do meio com os dados em ordem, e com quantidade par é a média dos dois do meio. Moda é o valor que mais se repete. Um valor extremo puxa a média, mas quase não mexe na mediana. Média ponderada multiplica cada valor pelo peso. Amplitude é o maior valor menos o menor. A mesma média pode esconder grupos muito diferentes."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Três jeitos de achar o centro: 2, 4 e 9 balas</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Média</text>
      <text x={52} y={112} style={t12}>soma ÷ quantidade</text>
      <text x={52} y={132} style={t12}>15 ÷ 3 = 5</text>
      <text x={52} y={150} style={t12}>juntar e repartir igual</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Mediana</text>
      <text x={257} y={112} style={t12}>o do meio, em ordem</text>
      <text x={257} y={132} style={t12}>2, 4, 9 → 4</text>
      <text x={257} y={150} style={t12}>par: média dos dois do meio</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Moda</text>
      <text x={462} y={112} style={t12}>o que mais se repete</text>
      <text x={462} y={132} style={t12}>3, 5, 5, 6, 5 → 5</text>
      <text x={462} y={150} style={t12}>serve para categorias</text>

      <text x={40} y={190} style={t12}>Quando a média engana: R$ 2.000 (4 pessoas) e R$ 12.000 (o dono)</text>
      <rect x={40} y={202} width={600} height={74} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={226} style={t14}>média R$ 4.000 · mediana R$ 2.000 · moda R$ 2.000</text>
      <text x={52} y={248} style={t12}>o valor extremo puxa a média, mas quase não mexe na mediana</text>
      <text x={52} y={266} style={t12}>para o salário típico, use a mediana</text>

      <text x={40} y={306} style={t12}>Média ponderada e amplitude</text>
      <rect x={40} y={318} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={342} style={t14}>Ponderada: notas × pesos</text>
      <text x={52} y={362} style={t12}>(6×2 + 9×3 + 8×5) ÷ 10</text>
      <text x={52} y={382} style={t14}>= 7,9</text>
      <rect x={350} y={318} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={342} style={t14}>Amplitude = maior − menor</text>
      <text x={362} y={362} style={t12}>12, 5, 20, 9 → 20 − 5 = 15</text>
      <text x={362} y={382} style={t12}>mesma média, espalhada diferente</text>

      <text x={40} y={432} style={t12}>Tabela de frequência (20 alunos, irmãos)</text>
      <rect x={40} y={444} width={600} height={56} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={468} style={t12}>0 irmãos: 4 · 1: 8 · 2: 5 · 3: 2 · 4: 1</text>
      <text x={52} y={488} style={t14}>moda 1 · média 28 ÷ 20 = 1,4 · mediana 1</text>

      <Historia y={524} texto="História: Quetelet e o homem médio, 1835 · Galton usa mediana, 1881 · Pearson batiza a moda, 1895" />
    </Moldura>
  )
}
