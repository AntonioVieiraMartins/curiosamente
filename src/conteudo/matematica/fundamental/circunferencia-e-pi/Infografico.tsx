import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Circunferência e Pi em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-circunferencia"
      titulo="Circunferência e Pi em um olhar"
      desc="O diâmetro é o dobro do raio. O número pi é o comprimento da circunferência dividido pelo diâmetro, cerca de 3,14. O comprimento é pi vezes o diâmetro, ou 2 vezes pi vezes o raio. A área do círculo é pi vezes o raio ao quadrado. Dobrar o raio quadruplica a área. Um setor é a fração ângulo dividido por 360 do círculo inteiro."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Partes da circunferência</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Raio e diâmetro</text>
      <text x={52} y={112} style={t12}>raio: do centro à borda</text>
      <text x={52} y={132} style={t12}>diâmetro: d = 2 × r</text>
      <text x={52} y={150} style={t12}>corda e arco</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Comprimento</text>
      <text x={257} y={112} style={t12}>C = π × d = 2 × π × r</text>
      <text x={257} y={132} style={t12}>d = 10 cm → C = 31,4 cm</text>
      <text x={257} y={150} style={t12}>π ≈ 3,14</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Área</text>
      <text x={462} y={112} style={t12}>A = π × r²</text>
      <text x={462} y={132} style={t12}>r = 10 cm → A = 314 cm²</text>
      <text x={462} y={150} style={t12}>o raio vai ao quadrado</text>

      <text x={40} y={190} style={t12}>π = comprimento ÷ diâmetro, em todo círculo</text>
      <rect x={40} y={202} width={600} height={64} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={226} style={t14}>3 diâmetros e um pedacinho (0,14)</text>
      <text x={52} y={248} style={t12}>π = 3,14159... sem fim e sem repetir (irracional)</text>

      <text x={40} y={296} style={t12}>Dobrar o tamanho quadruplica a área</text>
      <rect x={40} y={308} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={332} style={t14}>Pizza de 40 cm = 4 de 20 cm</text>
      <text x={52} y={354} style={t12}>raio × 2 → área × 4</text>
      <text x={52} y={374} style={t12}>raio × 3 → área × 9</text>
      <rect x={350} y={308} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={332} style={t14}>Setor: fração = ângulo ÷ 360</text>
      <text x={362} y={354} style={t12}>90°, r = 10: arco 15,7 cm</text>
      <text x={362} y={374} style={t12}>área do setor 78,5 cm²</text>

      <text x={40} y={422} style={t12}>Agulhas de Buffon: chance de cruzar = 2 ÷ π</text>
      <rect x={40} y={434} width={600} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={458} style={t12}>π ≈ 2 × (agulhas jogadas) ÷ (agulhas que cruzaram)</text>
      <text x={52} y={480} style={t14}>o π aparece até onde não há círculo</text>

      <Historia y={524} texto="História: papiro de Rhind, c. 1650 a.C. · Arquimedes, c. 250 a.C. · Zu Chongzhi, c. 480 · Lambert, 1761 · Buffon, 1777" />
    </Moldura>
  )
}
