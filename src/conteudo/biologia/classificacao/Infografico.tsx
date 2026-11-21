import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Classificação em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-classificacao"
      titulo="Classificação dos seres vivos em um olhar"
      desc="Classificar é organizar a diversidade da vida. Níveis: domínio, reino, filo, classe, ordem, família, gênero e espécie. O nome científico tem dois nomes em latim, gênero e espécie, como Homo sapiens. Hoje a classificação segue o parentesco, mostrado em árvores com clados. Três domínios: Bactérias, Arqueias e Eucariontes. Eucariontes incluem protistas, fungos, plantas e animais. Nomes populares enganam: baleia é mamífero, cavalo-marinho é peixe."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Os níveis, do maior ao menor</text>
      <rect x={40} y={68} width={600} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Domínio · Reino · Filo · Classe · Ordem · Família · Gênero · Espécie</text>
      <text x={52} y={114} style={t12}>Quanto mais níveis dois seres dividem, mais próximos são.</text>
      <text x={52} y={134} style={t12}>Ser humano: Animalia · Chordata · Mammalia · Primates · Hominidae · Homo · Homo sapiens</text>

      <text x={40} y={182} style={t12}>Ferramentas</text>
      <rect x={40} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Nome científico</text>
      <text x={52} y={240} style={t12}>latim, dois nomes</text>
      <text x={52} y={260} style={t12}>gênero + espécie</text>
      <rect x={245} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={218} style={t14}>Chave</text>
      <text x={257} y={240} style={t12}>perguntas de sim ou não</text>
      <text x={257} y={260} style={t12}>levam ao grupo</text>
      <rect x={450} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={218} style={t14}>Cladograma</text>
      <text x={462} y={240} style={t12}>árvore de parentesco</text>
      <text x={462} y={260} style={t12}>clado = ramo inteiro</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={314} style={t14}>3 domínios</text>
      <text x={52} y={334} style={t12}>Bacteria · Archaea · Eukarya</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={314} style={t14}>Eucariontes</text>
      <text x={362} y={334} style={t12}>protistas, fungos, plantas, animais</text>

      <text x={40} y={384} style={t12}>Cuidado</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>Nomes populares enganam</text>
      <text x={52} y={440} style={t12}>Baleia é mamífero, cavalo-marinho é peixe, morcego não é ave.</text>
      <text x={52} y={456} style={t12}>O que vale é o parentesco, não o jeito de viver.</text>

      <Historia y={488} texto="História: Aristóteles · Lineu, 1735 e 1758 · Darwin, 1859 · Hennig, 1950 · Woese, 1977 e 1990" />
    </Moldura>
  )
}
