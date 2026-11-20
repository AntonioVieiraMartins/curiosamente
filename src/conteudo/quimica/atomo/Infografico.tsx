import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "O átomo em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-atomo"
      titulo="O átomo em um olhar"
      desc="O átomo tem prótons com carga positiva e nêutrons sem carga no núcleo, e elétrons com carga negativa na eletrosfera. O número atômico é a quantidade de prótons e define o elemento. O número de massa é prótons mais nêutrons. Íons ganham ou perdem elétrons. Isótopos têm o mesmo número de prótons e nêutrons diferentes. O núcleo é cerca de cem mil vezes menor que o átomo."
      altura={480}
    >
      <text x={40} y={56} style={t12}>As três partículas</text>
      <rect x={40} y={68} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Próton (+)</text>
      <text x={52} y={114} style={t12}>no núcleo · massa 1 u</text>
      <text x={52} y={134} style={t12}>define o elemento (Z)</text>
      <rect x={245} y={68} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={92} style={t14}>Nêutron (0)</text>
      <text x={257} y={114} style={t12}>no núcleo · massa 1 u</text>
      <text x={257} y={134} style={t12}>muda o isótopo</text>
      <rect x={450} y={68} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={92} style={t14}>Elétron (−)</text>
      <text x={462} y={114} style={t12}>eletrosfera · 1/1.836 u</text>
      <text x={462} y={134} style={t12}>ganhar/perder = íon</text>

      <text x={40} y={182} style={t12}>As contas</text>
      <rect x={40} y={194} width={600} height={76} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={218} style={t14}>A = Z + N     N = A − Z</text>
      <text x={52} y={240} style={t12}>neutro: elétrons = prótons · íon: carga = prótons − elétrons</text>
      <text x={52} y={258} style={t12}>ex.: sódio-23 → 11 prótons, 12 nêutrons, 11 elétrons</text>

      <text x={40} y={300} style={t12}>Íons e isótopos</text>
      <rect x={40} y={312} width={290} height={76} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={336} style={t14}>Cátion (+) · Ânion (−)</text>
      <text x={52} y={358} style={t12}>Na⁺ perdeu 1 · Cl⁻ ganhou 1</text>
      <rect x={350} y={312} width={290} height={76} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={336} style={t14}>Isótopos: mesmo Z</text>
      <text x={362} y={358} style={t12}>C-12, C-13, C-14 (6, 7 e 8 nêutrons)</text>

      <text x={40} y={418} style={t12}>Tamanho: átomo ≈ 10⁻¹⁰ m · núcleo ≈ 100 mil vezes menor</text>
      <text x={40} y={438} style={t12}>massa atômica da tabela = média dos isótopos, pela abundância</text>

      <Historia y={470} texto="História: Demócrito, c. 400 a.C. · Dalton, 1808 · Thomson, 1897 · Rutherford, 1911 · Chadwick, 1932" />
    </Moldura>
  )
}
