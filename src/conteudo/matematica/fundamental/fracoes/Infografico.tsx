import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Frações em um olhar": uma barra cortada em 4 pedaços, 3 pegos
export default function Infografico() {
  return (
    <Moldura
      id="info-fra"
      titulo="Frações em um olhar"
      desc="Em uma fração, o número de baixo diz em quantos pedaços iguais o inteiro foi cortado e o de cima, quantos pedaços foram pegos. Mais cortes dão pedaços menores, por isso 1/3 é maior que 1/4. Fração de quantidade: divida pelo de baixo e multiplique pelo de cima, como 2/5 de 30 são 12. Frações equivalentes são a mesma quantidade; simplificar é dividir em cima e embaixo pelo mesmo número. Para somar, deixe os pedaços do mesmo tamanho: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Multiplicar é reto, em cima e embaixo. Dividir é multiplicar pela fração virada."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Embaixo: em quantos pedaços iguais. Em cima: quantos você pegou.</text>

      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={40 + i * 60} y={72} width={60} height={50} fill={i < 3 ? cores.amarelo.fill : 'var(--color-fundo)'} stroke={cores.amarelo.stroke} strokeWidth={1.2} />
      ))}
      <text x={160} y={146} textAnchor="middle" style={t12}>3/4 da barra</text>
      <text x={300} y={104} style={t14}>3 pegos de 4 pedaços iguais</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={420 + i * 40} y={72} width={40} height={20} fill="var(--color-fundo)" stroke={cores.coral.stroke} />
      ))}
      <rect x={420} y={72} width={40} height={20} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={420} y={112} style={t12}>mais cortes, pedaços menores:</text>
      <text x={420} y={130} style={t12}>1/3 é maior que 1/4</text>

      <text x={40} y={174} style={t12}>Quatro operações, quatro ideias</text>
      <rect x={40} y={186} width={190} height={122} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={208} style={t14}>De uma quantidade</text>
      <text x={52} y={230} style={t12}>2/5 de 30 alunos</text>
      <text x={52} y={250} style={t12}>30 ÷ 5 = 6 por grupo</text>
      <text x={52} y={270} style={t12}>2 grupos: 2 × 6</text>
      <text x={52} y={294} style={t14}>= 12</text>

      <rect x={245} y={186} width={190} height={122} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={208} style={t14}>Equivalentes</text>
      <text x={257} y={230} style={t12}>12/18 ÷2 = 6/9 ÷3 = 2/3</text>
      <text x={257} y={250} style={t12}>mesma quantidade,</text>
      <text x={257} y={268} style={t12}>cortada de outro jeito</text>
      <text x={257} y={294} style={t12}>atalho: dividir pelo MDC</text>

      <rect x={450} y={186} width={190} height={122} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={208} style={t14}>Número misto</text>
      <text x={462} y={230} style={t12}>11/4: 11 ÷ 4 = 2, resta 3</text>
      <text x={462} y={252} style={t14}>= 2 3/4</text>
      <text x={462} y={278} style={t12}>2 pizzas inteiras e</text>
      <text x={462} y={294} style={t12}>3 pedaços de 4</text>

      <rect x={40} y={322} width={290} height={120} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={344} style={t14}>Somar: mesmo tamanho primeiro</text>
      <text x={52} y={368} style={t12}>1/2 + 1/3 → sextos (6 é o menor)</text>
      <text x={52} y={388} style={t12}>3/6 + 2/6 = 5/6</text>
      <text x={52} y={412} style={t12}>soma só o de cima; o de baixo</text>
      <text x={52} y={428} style={t12}>(tamanho do pedaço) não muda</text>

      <rect x={350} y={322} width={290} height={120} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={344} style={t14}>Multiplicar e dividir</text>
      <text x={362} y={368} style={t12}>2/3 × 3/5 = 6/15 = 2/5 (reto)</text>
      <text x={362} y={392} style={t12}>3/4 ÷ 1/8 = 3/4 × 8/1 = 6</text>
      <text x={362} y={412} style={t12}>dividir é contar quantos cabem:</text>
      <text x={362} y={428} style={t12}>6 pedaços de 1/8 em 3/4</text>

      <Caixa x={40} y={462} w={150} h={54} cor="amarelo" titulo="3/4" sub="fração" />
      <Seta id="info-fra" x1={192} y1={489} x2={218} y2={489} />
      <Caixa x={220} y={462} w={150} h={54} cor="amarelo" titulo="0,75" sub="3 ÷ 4" />
      <Seta id="info-fra" x1={372} y1={489} x2={398} y2={489} />
      <Caixa x={400} y={462} w={150} h={54} cor="amarelo" titulo="75%" sub="por cento" />
      <text x={40} y={546} style={t12}>Fração é divisão: vira decimal e porcentagem. Entre duas frações sempre cabe outra.</text>
      <text x={40} y={570} style={t12}>No dia a dia: broca 3/8 contra 1/2 (3/8 e 4/8), compasso 3/4 da valsa, 1/4 de hora = 15 min.</text>

      <Historia y={614} texto="História: papiro de Rhind (c. 1550 a.C.) · barra de fração com Al-Hassar (c. 1200) · Fibonacci, 1202 · Stevin, 1585" />
    </Moldura>
  )
}
