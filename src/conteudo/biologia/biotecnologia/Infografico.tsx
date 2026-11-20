import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Biotecnologia em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-biotecnologia"
      titulo="Biotecnologia em um olhar"
      desc="Ferramentas: enzimas de restrição cortam o DNA, a ligase cola, plasmídeos levam genes para bactérias e a PCR copia o DNA, dobrando as cópias a cada ciclo. Aplicações: insulina e vacinas feitas por bactérias e leveduras, impressão digital de DNA, transgênicos e clonagem, como a ovelha Dolly. CRISPR: um RNA-guia leva a Cas9 até um trecho de DNA para cortar, desligar ou corrigir um gene. Há riscos e perguntas éticas."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Ferramentas</text>
      <rect x={40} y={68} width={140} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Tesoura</text>
      <text x={52} y={114} style={t12}>enzima de restrição</text>
      <text x={52} y={134} style={t12}>ex.: EcoRI (GAATTC)</text>
      <rect x={192} y={68} width={140} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={204} y={92} style={t14}>Cola</text>
      <text x={204} y={114} style={t12}>DNA ligase</text>
      <text x={204} y={134} style={t12}>junta as pontas</text>
      <rect x={344} y={68} width={140} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={356} y={92} style={t14}>Veículo</text>
      <text x={356} y={114} style={t12}>plasmídeo</text>
      <text x={356} y={134} style={t12}>anel de DNA</text>
      <rect x={496} y={68} width={144} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={508} y={92} style={t14}>Fotocopiadora</text>
      <text x={508} y={114} style={t12}>PCR: 2 elevado a n</text>
      <text x={508} y={134} style={t12}>30 ciclos = 1 bilhão</text>

      <text x={40} y={182} style={t12}>Aplicações</text>
      <rect x={40} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Remédios e vacinas</text>
      <text x={52} y={240} style={t12}>insulina humana (1982)</text>
      <text x={52} y={260} style={t12}>feita por bactérias</text>
      <rect x={350} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={218} style={t14}>Impressão digital de DNA</text>
      <text x={362} y={240} style={t12}>paternidade e identificação</text>
      <text x={362} y={260} style={t12}>gel: menores andam mais</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={314} style={t14}>Transgênicos</text>
      <text x={52} y={334} style={t12}>gene de outra espécie (milho Bt)</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={314} style={t14}>Clonagem</text>
      <text x={362} y={334} style={t12}>Dolly, 1996: núcleo de célula adulta</text>

      <text x={40} y={384} style={t12}>CRISPR</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>RNA-guia (cerca de 20 letras) + Cas9 + PAM (NGG)</text>
      <text x={52} y={440} style={t12}>Corta, desliga ou corrige um gene. Riscos: cortes fora do alvo,</text>
      <text x={52} y={456} style={t12}>acesso e edição germinativa (passa aos descendentes).</text>

      <Historia y={488} texto="História: Smith, 1970 · Berg, 1972 · Cohen e Boyer, 1973 · Mullis, 1983 · Jeffreys, 1984 · Doudna e Charpentier, 2012" />
    </Moldura>
  )
}
