import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Tabelas e gráficos em um olhar": o mesmo dado com eixo honesto e eixo cortado
export default function Infografico() {
  const barras = [5, 8, 3, 6]
  const nomes = ['Banana', 'Maçã', 'Uva', 'Laranja']
  return (
    <Moldura
      id="info-tab"
      titulo="Tabelas e gráficos em um olhar"
      desc="A tabela organiza dados em linhas e colunas; a de frequência conta quantas vezes cada coisa aparece, e o total confere. Gráficos de barras comparam categorias, de linhas mostram mudanças no tempo e de setores, a pizza, mostram partes de um todo de 100 por cento. Antes de acreditar num gráfico, leia título, eixos, escala e fonte. Em barras o eixo deve começar no zero: o eixo cortado exagera as diferenças, como 92 contra 95. Outras armadilhas: dados omitidos, escalas diferentes, pizza em 3D e desenhos que crescem ao quadrado ou ao cubo. Média é soma dividida pela quantidade, mediana é o valor do meio e moda é o que mais se repete; a média engana com valores extremos."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Da tabela ao gráfico: 22 votos na fruta preferida (5 + 8 + 3 + 6)</text>

      <rect x={40} y={70} width={200} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      {nomes.map((n, i) => (
        <g key={n}>
          <text x={52} y={96 + i * 24} style={t12}>{n}</text>
          <text x={220} y={96 + i * 24} textAnchor="end" style={t14}>{barras[i]}</text>
        </g>
      ))}
      <line x1={52} y1={176} x2={228} y2={176} stroke="var(--color-borda)" />
      <text x={52} y={192} style={t12}>total</text>
      <text x={220} y={192} textAnchor="end" style={t14}>22</text>

      <line x1={290} y1={190} x2={640} y2={190} stroke="var(--color-suave)" />
      {barras.map((v, i) => (
        <g key={i}>
          <rect x={310 + i * 85} y={190 - v * 11} width={52} height={v * 11} rx={3} fill={i === 1 ? cores.amarelo.stroke : cores.azul.stroke} />
          <text x={336 + i * 85} y={184 - v * 11} textAnchor="middle" style={t14}>{v}</text>
          <text x={336 + i * 85} y={206} textAnchor="middle" style={t12}>{nomes[i]}</text>
        </g>
      ))}

      <text x={40} y={236} style={t12}>Qual gráfico usar?</text>
      <rect x={40} y={248} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={270} style={t14}>Barras</text>
      <text x={52} y={292} style={t12}>comparar categorias</text>
      <text x={52} y={312} style={t12}>(histograma: dados contínuos,</text>
      <text x={52} y={328} style={t12}>barras coladas)</text>
      <rect x={245} y={248} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={270} style={t14}>Linhas</text>
      <text x={257} y={292} style={t12}>mudança no tempo:</text>
      <text x={257} y={312} style={t12}>sobe, desce ou fica plana</text>
      <rect x={450} y={248} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={270} style={t14}>Pizza</text>
      <text x={462} y={292} style={t12}>partes de um todo: somam 100%</text>
      <text x={462} y={312} style={t12}>40% + 30% + 20% + 10%</text>

      <text x={40} y={370} style={t12}>O eixo que engana (92 contra 95)</text>
      <rect x={40} y={382} width={290} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={60} y1={470} x2={310} y2={470} stroke="var(--color-suave)" />
      <rect x={90} y={406} width={60} height={64} fill={cores.azul.stroke} />
      <rect x={200} y={402} width={60} height={68} fill={cores.amarelo.stroke} />
      <text x={120} y={400} textAnchor="middle" style={t12}>92</text>
      <text x={230} y={396} textAnchor="middle" style={t12}>95</text>
      <text x={185} y={484} textAnchor="middle" style={t12}>eixo no 0: quase iguais</text>
      <rect x={350} y={382} width={290} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={370} y1={470} x2={620} y2={470} stroke="var(--color-suave)" />
      <rect x={400} y={440} width={60} height={30} fill={cores.azul.stroke} />
      <rect x={510} y={410} width={60} height={60} fill={cores.coral.stroke} />
      <text x={430} y={434} textAnchor="middle" style={t12}>92</text>
      <text x={540} y={404} textAnchor="middle" style={t12}>95</text>
      <text x={495} y={484} textAnchor="middle" style={t12}>eixo em 90: parece o dobro!</text>

      <rect x={40} y={500} width={290} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={522} style={t14}>Média, mediana e moda</text>
      <text x={52} y={542} style={t12}>1.200, 1.300, 1.300, 1.500, 1.800</text>
      <text x={52} y={560} style={t12}>média 1.420 · mediana 1.300 · moda 1.300</text>
      <rect x={350} y={500} width={290} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={522} style={t14}>A média engana</text>
      <text x={362} y={542} style={t12}>com um salário de R$ 20.000: média 5.060,</text>
      <text x={362} y={560} style={t12}>mas a mediana segue 1.300. Olhe as duas.</text>

      <text x={40} y={602} style={t12}>Antes de acreditar: título, eixos, escala, fonte · dados omitidos · pizza em 3D · desenho que cresce ao quadrado</text>
      <Historia y={626} texto="História: quase gráficos de barras (séc. 14) · Playfair, Atlas Comercial e Político · Darrell Huff, 1954" />
    </Moldura>
  )
}
