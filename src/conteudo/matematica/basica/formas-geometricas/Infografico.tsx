import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Formas geométricas em um olhar": polígonos, quadriláteros, círculo e sólidos
export default function Infografico() {
  const poli = (n: number, cx: number, cy: number, r: number) =>
    Array.from({ length: n }, (_, k) => {
      const a = (k / n) * 2 * Math.PI - Math.PI / 2
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    }).join(' ')
  const nomes = [[3, 'triângulo'], [4, 'quadrilátero'], [5, 'pentágono'], [6, 'hexágono'], [8, 'octógono']] as const
  return (
    <Moldura
      id="info-for"
      titulo="Formas geométricas em um olhar"
      desc="Figuras planas têm 2 dimensões e sólidos têm 3. Polígono é uma figura plana fechada por segmentos de reta, com tantos lados quanto vértices e ângulos; o círculo não é polígono, porque é curvo. Nomes: 3 triângulo, 4 quadrilátero, 5 pentágono, 6 hexágono, 7 heptágono, 8 octógono. Regular tem lados e ângulos iguais. A soma dos ângulos internos de um polígono de n lados é n menos 2 vezes 180 graus. Triângulos: equilátero, isósceles e escaleno; três lados só fecham se o maior for menor que a soma dos outros dois. Quadriláteros: quadrado, retângulo, losango, paralelogramo e trapézio. No círculo, o diâmetro é o dobro do raio. Poliedros têm faces, arestas e vértices, com V menos A mais F igual a 2."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Polígono: só segmentos de reta, fechando um contorno. O círculo é curvo e não é polígono.</text>

      {nomes.map(([n, nome], i) => (
        <g key={n}>
          <polygon points={poli(n, 80 + i * 120, 108, 38)} fill={cores.azul.fill} stroke={cores.azul.stroke} strokeWidth={2.5} strokeLinejoin="round" />
          <text x={80 + i * 120} y={166} textAnchor="middle" style={t14}>{n}</text>
          <text x={80 + i * 120} y={182} textAnchor="middle" style={t12}>{nome}</text>
        </g>
      ))}
      <text x={40} y={206} style={t12}>soma dos ângulos internos: (n − 2) × 180° · triângulo 180°, quadrilátero 360°, pentágono 540° · regular: tudo igual</text>

      <text x={40} y={240} style={t12}>Triângulos e quadriláteros</text>
      <rect x={40} y={252} width={190} height={124} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={274} style={t14}>Triângulos</text>
      <text x={52} y={296} style={t12}>equilátero: 3 lados iguais</text>
      <text x={52} y={314} style={t12}>isósceles: 2 lados iguais</text>
      <text x={52} y={332} style={t12}>escaleno: 3 diferentes</text>
      <text x={52} y={356} style={t12}>fecha se o maior &lt; soma dos outros</text>
      <rect x={245} y={252} width={395} height={124} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={274} style={t14}>Quadriláteros (três pistas)</text>
      <text x={257} y={296} style={t12}>quadrado: 2 pares paralelos, 4 lados iguais, 4 ângulos retos</text>
      <text x={257} y={314} style={t12}>retângulo: 2 pares paralelos e 4 ângulos retos</text>
      <text x={257} y={332} style={t12}>losango: 2 pares paralelos e 4 lados iguais</text>
      <text x={257} y={350} style={t12}>paralelogramo: 2 pares · trapézio: só 1 par</text>
      <text x={257} y={368} style={t12}>todo quadrado é retângulo e losango</text>

      <text x={40} y={404} style={t12}>Círculo e simetria</text>
      <circle cx={110} cy={462} r={44} fill={cores.azul.fill} stroke={cores.azul.stroke} strokeWidth={2.5} />
      <line x1={66} y1={462} x2={154} y2={462} stroke={cores.coral.stroke} strokeWidth={2} />
      <line x1={110} y1={462} x2={110} y2={418} stroke={cores.amarelo.stroke} strokeWidth={2} />
      <text x={110} y={456} textAnchor="middle" style={t12}>diâmetro</text>
      <text x={116} y={436} style={t12}>raio</text>
      <text x={180} y={438} style={t14}>diâmetro = 2 × raio</text>
      <text x={180} y={458} style={t12}>raio 8 cm → diâmetro 16 cm</text>
      <text x={180} y={478} style={t12}>volta ÷ diâmetro ≈ 3,14 (pi)</text>
      <rect x={400} y={414} width={240} height={96} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={412} y={436} style={t14}>Eixos de simetria</text>
      <text x={412} y={458} style={t12}>quadrado 4 · triângulo equilátero 3</text>
      <text x={412} y={476} style={t12}>retângulo 2 · círculo infinitos</text>
      <text x={412} y={494} style={t12}>as metades se encaixam ao dobrar</text>

      <rect x={40} y={524} width={600} height={56} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={546} style={t14}>Sólidos: cubo (6 faces, 12 arestas, 8 vértices), pirâmide quadrada (5, 8, 5)</text>
      <text x={52} y={566} style={t12}>poliedros: V − A + F = 2 (8 − 12 + 6) · cilindro, cone e esfera têm superfície curva e não são poliedros</text>

      <Historia y={612} texto="História: geometria = medir a terra · pentagrama num krater (séc. 7 a.C.) · Euclides (c. 300 a.C.) · Bradwardine (séc. 14)" />
    </Moldura>
  )
}
