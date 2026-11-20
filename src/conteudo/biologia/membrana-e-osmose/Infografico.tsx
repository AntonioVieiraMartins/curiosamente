import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Membrana e osmose em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-membrana-e-osmose"
      titulo="Membrana e osmose em um olhar"
      desc="A membrana plasmática é uma bicamada de fosfolipídios com proteínas, e é seletiva. Passa direto o que é pequeno e de gordura, como oxigênio e gás carbônico. Passa por proteínas o que é maior, como a glicose. Contra o gradiente, só com bomba e ATP, como a de sódio e potássio, que joga 3 sódios para fora e traz 2 potássios para dentro. Na osmose, a água vai do meio com menos soluto para o meio com mais soluto. A hemácia incha em meio hipotônico, fica igual em isotônico e murcha em hipertônico. O soro fisiológico tem 0,9% de sal."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Caminhos pela membrana</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Direto</text>
      <text x={52} y={114} style={t12}>O₂, CO₂, gorduras</text>
      <text x={52} y={134} style={t12}>sem ATP</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Por proteína</text>
      <text x={257} y={114} style={t12}>glicose, íons, água</text>
      <text x={257} y={134} style={t12}>a favor, sem ATP</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Bomba (ativo)</text>
      <text x={462} y={114} style={t12}>contra o gradiente</text>
      <text x={462} y={134} style={t12}>3 Na⁺ fora, 2 K⁺ dentro</text>

      <text x={40} y={192} style={t12}>Osmose: a água vai para onde tem mais soluto</text>
      <rect x={40} y={204} width={190} height={96} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={228} style={t14}>Hipotônico</text>
      <text x={52} y={250} style={t12}>fora tem menos sal</text>
      <text x={52} y={270} style={t12}>célula incha, pode estourar</text>
      <rect x={245} y={204} width={190} height={96} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={228} style={t14}>Isotônico</text>
      <text x={257} y={250} style={t12}>mesma quantidade</text>
      <text x={257} y={270} style={t12}>nada muda</text>
      <rect x={450} y={204} width={190} height={96} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={228} style={t14}>Hipertônico</text>
      <text x={462} y={250} style={t12}>fora tem mais sal</text>
      <text x={462} y={270} style={t12}>célula murcha</text>

      <text x={40} y={332} style={t12}>Para lembrar</text>
      <rect x={40} y={344} width={600} height={90} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={368} style={t14}>Soro fisiológico: 0,9 g de sal em 100 mL</text>
      <text x={52} y={390} style={t12}>Tempo de difusão cresce com a distância ao quadrado: 10× mais longe, 100× mais lento</text>
      <text x={52} y={412} style={t12}>Por isso a célula é pequena. Sal por fora puxa a água para fora, e a salada murcha.</text>

      <Historia y={474} texto="História: Nollet, 1748 · Dutrochet, osmose, 1826 · Gorter e Grendel, 1925 · Skou, 1957 · Singer e Nicolson, 1972 · Agre, 2003" />
    </Moldura>
  )
}
