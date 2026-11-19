import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Triângulos e polígonos em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-poligonos"
      titulo="Triângulos e polígonos em um olhar"
      desc="Um triângulo só existe se cada lado for menor que a soma dos outros dois. Os ângulos de um triângulo somam 180 graus e os de um quadrilátero 360. Num polígono de n lados, a soma dos ângulos internos é n menos 2 vezes 180 e o número de diagonais é n vezes n menos 3 dividido por 2. Num polígono regular, o ângulo externo é 360 dividido por n. Só triângulo, quadrado e hexágono regulares ladrilham o plano."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Triângulo: cada lado menor que a soma dos outros dois</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Pelos lados</text>
      <text x={52} y={112} style={t12}>equilátero: 3 iguais</text>
      <text x={52} y={132} style={t12}>isósceles: 2 iguais</text>
      <text x={52} y={150} style={t12}>escaleno: 3 diferentes</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Pelos ângulos</text>
      <text x={257} y={112} style={t12}>acutângulo: todos agudos</text>
      <text x={257} y={132} style={t12}>retângulo: um reto</text>
      <text x={257} y={150} style={t12}>obtusângulo: um obtuso</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Soma dos ângulos</text>
      <text x={462} y={112} style={t12}>triângulo: 180°</text>
      <text x={462} y={132} style={t12}>quadrilátero: 360°</text>
      <text x={462} y={150} style={t12}>dois triângulos</text>

      <text x={40} y={190} style={t12}>Família dos quadriláteros</text>
      <rect x={40} y={202} width={600} height={64} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={226} style={t14}>paralelogramo → retângulo (4 retos) e losango (4 iguais)</text>
      <text x={52} y={248} style={t12}>quadrado = retângulo + losango · trapézio: um par paralelo</text>

      <text x={40} y={296} style={t12}>Polígono de n lados</text>
      <rect x={40} y={308} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={332} style={t14}>Soma interna: (n − 2) × 180°</text>
      <text x={52} y={354} style={t12}>hexágono: 4 × 180° = 720°</text>
      <text x={52} y={374} style={t12}>diagonais: n(n − 3) ÷ 2 = 9</text>
      <rect x={350} y={308} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={332} style={t14}>Regular: externo = 360° ÷ n</text>
      <text x={362} y={354} style={t12}>hexágono: 60° por fora</text>
      <text x={362} y={374} style={t12}>interno = 180° − 60° = 120°</text>

      <text x={40} y={422} style={t12}>Quem ladrilha o chão? Ângulos em volta de um ponto somam 360°</text>
      <rect x={40} y={434} width={600} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={458} style={t12}>triângulo 60° (6 peças) · quadrado 90° (4) · hexágono 120° (3)</text>
      <text x={52} y={480} style={t14}>pentágono 108°: 360 ÷ 108 = 3,33, sobra buraco</text>

      <Historia y={524} texto="História: Euclides, c. 300 a.C. · Papo e as abelhas, séc. IV · Gauss e o 17 lados, 1796 · Hales prova o favo, 1999" />
    </Moldura>
  )
}
