import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Mitose e meiose em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-divisao-celular"
      titulo="Mitose e meiose em um olhar"
      desc="A mitose faz 2 células iguais à célula-mãe, com 46 cromossomos cada, e serve para crescer e reparar. A meiose faz 4 células com 23 cromossomos, em duas divisões, e gera variedade pela troca de pedaços e pela separação ao acaso. O ciclo tem interfase (G1, S, G2) e fase M. A mitose tem prófase, metáfase, anáfase e télofase. Erros de separação causam trissomias, como a síndrome de Down."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Ciclo celular</text>
      <rect x={40} y={68} width={600} height={50} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={89} style={t14}>Interfase: G1 (cresce) → S (copia o DNA) → G2 (confere)</text>
      <text x={52} y={108} style={t12}>Fase M: mitose + citocinese</text>

      <text x={40} y={146} style={t12}>Mitose x meiose (célula humana)</text>
      <rect x={40} y={158} width={290} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={182} style={t14}>Mitose</text>
      <text x={52} y={204} style={t12}>1 divisão · 2 células · 46 cada</text>
      <text x={52} y={224} style={t12}>filhas idênticas à mãe</text>
      <text x={52} y={244} style={t12}>pró → meta → ana → telófase</text>
      <text x={52} y={264} style={t12}>cresce, repara, substitui</text>
      <rect x={350} y={158} width={290} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={182} style={t14}>Meiose</text>
      <text x={362} y={204} style={t12}>2 divisões · 4 células · 23 cada</text>
      <text x={362} y={224} style={t12}>filhas diferentes entre si</text>
      <text x={362} y={244} style={t12}>I: homólogos · II: cromátides</text>
      <text x={362} y={264} style={t12}>faz óvulos e espermatozoides</text>

      <text x={40} y={304} style={t12}>Fontes de variedade</text>
      <rect x={40} y={316} width={190} height={74} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={340} style={t14}>Crossing-over</text>
      <text x={52} y={362} style={t12}>troca de pedaços</text>
      <rect x={245} y={316} width={190} height={74} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={340} style={t14}>Separação ao acaso</text>
      <text x={257} y={362} style={t12}>2 elevado a 23 = 8,4 milhões</text>
      <rect x={450} y={316} width={190} height={74} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={340} style={t14}>Fecundação</text>
      <text x={462} y={362} style={t12}>qualquer par de gametas</text>

      <text x={40} y={422} style={t12}>Quando dá errado</text>
      <rect x={40} y={434} width={600} height={30} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={454} style={t12}>Não-disjunção: 47 cromossomos = síndrome de Down (trissomia do 21)</text>

      <Historia y={488} texto="História: Virchow, 1855 · Hertwig, 1876 · Flemming, 1882 · Sutton e Boveri, 1902 · Lejeune, 1959" />
    </Moldura>
  )
}
