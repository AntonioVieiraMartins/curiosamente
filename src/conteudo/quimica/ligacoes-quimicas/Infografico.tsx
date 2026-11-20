import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Ligações químicas em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-ligacoes-quimicas"
      titulo="Ligações químicas em um olhar"
      desc="Os átomos se ligam para completar a última camada com 8 elétrons, a regra do octeto. Na ligação iônica, entre metal e ametal, o metal doa elétrons e os íons se atraem: ponto de fusão alto, quebradiço, conduz fundido ou dissolvido. Na ligação covalente, entre ametais, há pares de elétrons compartilhados: moléculas com baixo ponto de fusão. Na ligação metálica, entre metais, há um mar de elétrons: conduz e é maleável. A diferença de eletronegatividade ajuda a prever o tipo: menos de 0,4 apolar, de 0,4 a 1,7 polar, mais de 1,7 iônica."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Três tipos de ligação</text>
      <rect x={40} y={68} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Iônica</text>
      <text x={52} y={114} style={t12}>metal + ametal</text>
      <text x={52} y={134} style={t12}>transfere elétrons</text>
      <text x={52} y={154} style={t12}>NaCl, CaO, MgCl₂</text>
      <rect x={245} y={68} width={190} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Covalente</text>
      <text x={257} y={114} style={t12}>ametal + ametal</text>
      <text x={257} y={134} style={t12}>compartilha pares</text>
      <text x={257} y={154} style={t12}>H₂O, CO₂, CH₄</text>
      <rect x={450} y={68} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Metálica</text>
      <text x={462} y={114} style={t12}>metal + metal</text>
      <text x={462} y={134} style={t12}>mar de elétrons</text>
      <text x={462} y={154} style={t12}>Fe, Cu, Al</text>

      <text x={40} y={218} style={t12}>Propriedades</text>
      <rect x={40} y={230} width={600} height={98} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={254} style={t12}>Iônica: derrete alto (NaCl, 801 °C), quebradiça, conduz fundida ou dissolvida</text>
      <text x={52} y={276} style={t12}>Covalente: derrete baixo, não conduz (exceção: redes, como o diamante)</text>
      <text x={52} y={298} style={t12}>Metálica: conduz sólida, maleável, tem brilho</text>

      <text x={40} y={360} style={t12}>Eletronegatividade: diferença → tipo</text>
      <rect x={40} y={372} width={600} height={40} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={398} style={t14}>menos de 0,4 apolar · 0,4 a 1,7 polar · 1,7 ou mais iônica</text>

      <text x={40} y={440} style={t12}>Valência: H faz 1 ligação, O faz 2, N faz 3, C faz 4. Cargas das fórmulas iônicas somam zero.</text>

      <Historia y={474} texto="História: Kekulé, 1858 · Lewis e Kossel, 1916 · Langmuir, 1919 · Heitler e London, 1927 · Pauling, 1932" />
    </Moldura>
  )
}
