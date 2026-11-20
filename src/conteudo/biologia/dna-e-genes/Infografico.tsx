import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "DNA e genes em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-dna-e-genes"
      titulo="DNA e genes em um olhar"
      desc="O DNA é uma dupla hélice feita de nucleotídeos, com quatro bases: A pareia com T e C pareia com G. Um gene é uma receita de proteína, e o genoma humano tem cerca de 3,1 bilhões de pares de bases em 46 cromossomos. O DNA se copia por replicação semiconservativa. A informação vai do DNA ao RNA, na transcrição, e do RNA à proteína, na tradução, lendo trios chamados códons: são 64 trios para 20 aminoácidos, com AUG de início e três sinais de parada. Duas pessoas têm cerca de 99,9% do DNA igual."
      altura={500}
    >
      <text x={40} y={56} style={t12}>As quatro letras</text>
      <rect x={40} y={68} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={94} style={t14}>A com T (2 pontes) · C com G (3 pontes)</text>
      <text x={52} y={116} style={t12}>Chargaff: A = T e C = G. Uma fita é o molde da outra.</text>

      <text x={40} y={162} style={t12}>Organização</text>
      <rect x={40} y={174} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={198} style={t14}>Gene</text>
      <text x={52} y={220} style={t12}>receita de uma proteína</text>
      <text x={52} y={240} style={t12}>cerca de 20 mil</text>
      <rect x={245} y={174} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={198} style={t14}>Cromossomo</text>
      <text x={257} y={220} style={t12}>DNA enrolado em proteínas</text>
      <text x={257} y={240} style={t12}>46 (23 pares)</text>
      <rect x={450} y={174} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={198} style={t14}>Genoma</text>
      <text x={462} y={220} style={t12}>3,1 bilhões de pares</text>
      <text x={462} y={240} style={t12}>cerca de 2 m por célula</text>

      <text x={40} y={298} style={t12}>Do DNA à proteína</text>
      <rect x={40} y={310} width={600} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={336} style={t14}>DNA → RNA → proteína</text>
      <text x={52} y={358} style={t12}>transcrição (núcleo) · tradução (ribossomo, trios)</text>

      <text x={40} y={410} style={t12}>Código: 64 trios, 20 aminoácidos · AUG = início · UAA, UAG, UGA = PARE</text>
      <text x={40} y={434} style={t12}>Replicação: 1 → 2 → 4 → 8 moléculas · duas pessoas: 99,9% iguais</text>

      <Historia y={474} texto="História: Miescher, 1869 · Avery, 1944 · Chargaff, 1950 · Watson e Crick, 1953 · Nirenberg, 1961 · Genoma Humano, 2003" />
    </Moldura>
  )
}
