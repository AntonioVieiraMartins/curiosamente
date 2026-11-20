import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "O que é vida em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-vida"
      titulo="O que é vida em um olhar"
      desc="Os seres vivos têm células, metabolismo, crescimento, reprodução, resposta ao ambiente e herança com evolução. Casos difíceis: o vírus não tem células nem metabolismo próprio. A geração espontânea foi derrubada por Redi em 1668 e por Pasteur em 1862. Miller e Urey produziram aminoácidos em 1952. Níveis de organização: célula, tecido, órgão, sistema, organismo, população, comunidade, ecossistema e biosfera."
      altura={540}
    >
      <text x={40} y={56} style={t12}>O que todo ser vivo tem</text>
      <rect x={40} y={68} width={190} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Células</text>
      <text x={52} y={114} style={t12}>uma (bactéria) ou muitas</text>
      <text x={52} y={132} style={t12}>(planta, animal)</text>
      <rect x={245} y={68} width={190} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={92} style={t14}>Metabolismo</text>
      <text x={257} y={114} style={t12}>reações que usam energia</text>
      <text x={257} y={132} style={t12}>e matéria</text>
      <rect x={450} y={68} width={190} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={92} style={t14}>Crescer e reproduzir</text>
      <text x={462} y={114} style={t12}>desenvolvimento</text>
      <text x={462} y={132} style={t12}>gerar descendentes</text>
      <rect x={40} y={156} width={290} height={56} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={180} style={t14}>Responder ao ambiente e manter o equilíbrio</text>
      <text x={52} y={200} style={t12}>sentir, reagir, homeostase</text>
      <rect x={350} y={156} width={290} height={56} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={180} style={t14}>Herança e evolução</text>
      <text x={362} y={200} style={t12}>genes passam para os filhos e mudam ao longo do tempo</text>

      <text x={40} y={242} style={t12}>Casos difíceis</text>
      <rect x={40} y={254} width={600} height={66} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={278} style={t14}>Vírus: sem células nem metabolismo próprio · semente seca: viva, dormente</text>
      <text x={52} y={300} style={t12}>fogo e cristal de sal: parecem vivos, mas não são · mula: viva, mesmo sem filhotes</text>

      <text x={40} y={350} style={t12}>De onde vêm os seres vivos?</text>
      <rect x={40} y={362} width={290} height={70} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={386} style={t14}>Redi (1668) e Pasteur (1862)</text>
      <text x={52} y={408} style={t12}>vida vem de vida, e não da carne ou do caldo</text>
      <rect x={350} y={362} width={290} height={70} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={386} style={t14}>Miller e Urey (1952)</text>
      <text x={362} y={408} style={t12}>gases + faíscas: aminoácidos em cerca de 1 semana</text>

      <text x={40} y={462} style={t12}>Níveis de organização</text>
      <rect x={40} y={474} width={600} height={36} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={497} style={t14}>célula → tecido → órgão → sistema → organismo → população → ecossistema → biosfera</text>

      <Historia y={530} texto="História: Redi, 1668 · Needham e Spallanzani, séc. 18 · Pasteur, 1862 · Miller e Urey, 1952 · vida há mais de 3,5 bilhões de anos" />
    </Moldura>
  )
}
