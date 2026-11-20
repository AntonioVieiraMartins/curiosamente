import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Mutações em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-mutacoes"
      titulo="Mutações em um olhar"
      desc="Mutação é uma mudança permanente no DNA. As pontuais podem ser silenciosas, de troca ou sem sentido. Inserir ou apagar letras que não somam múltiplo de 3 desloca o quadro de leitura. Mutações maiores: deleção, duplicação, inversão e translocação de pedaços de cromossomos, e erros de número, como a síndrome de Down. Causas: erros de cópia, radiação e substâncias químicas. A maioria é neutra. Cada pessoa tem cerca de 70 mutações novas."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Pontuais (uma letra)</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={92} style={t14}>Silenciosa</text>
      <text x={52} y={114} style={t12}>GAG → GAA</text>
      <text x={52} y={134} style={t12}>mesmo aminoácido</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={92} style={t14}>De troca</text>
      <text x={257} y={114} style={t12}>GAG → GUG</text>
      <text x={257} y={134} style={t12}>outro aminoácido</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Sem sentido</text>
      <text x={462} y={114} style={t12}>GAG → UAG</text>
      <text x={462} y={134} style={t12}>PARE: proteína curta</text>

      <text x={40} y={190} style={t12}>Inserir ou apagar letras</text>
      <rect x={40} y={202} width={600} height={46} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={222} style={t14}>1 ou 2 letras: desloca toda a leitura (frameshift)</text>
      <text x={52} y={240} style={t12}>3 letras: só um aminoácido a mais ou a menos</text>

      <text x={40} y={276} style={t12}>Mutações grandes</text>
      <rect x={40} y={288} width={290} height={70} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={312} style={t14}>Nos cromossomos</text>
      <text x={52} y={334} style={t12}>deleção · duplicação · inversão · translocação</text>
      <rect x={350} y={288} width={290} height={70} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={312} style={t14}>No número</text>
      <text x={362} y={334} style={t12}>Down 47 · Turner 45 · trigo 42 · banana 33</text>

      <text x={40} y={386} style={t12}>Causas e efeitos</text>
      <rect x={40} y={398} width={600} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={420} style={t14}>Erros de cópia, UV, raios X, químicos</text>
      <text x={52} y={440} style={t12}>Cerca de 70 mutações novas por pessoa. A maioria é neutra.</text>
      <text x={52} y={456} style={t12}>Prejudicial, neutra ou benéfica: depende do lugar e do ambiente.</text>

      <Historia y={488} texto="História: De Vries, 1901 · Muller, 1927 · Pauling, 1949 · Ingram, 1956 · Lejeune, 1959 · Ames, 1970" />
    </Moldura>
  )
}
