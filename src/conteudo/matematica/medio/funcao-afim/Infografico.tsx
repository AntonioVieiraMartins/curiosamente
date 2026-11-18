import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Função afim em um olhar": a reta f(x) = 2x + 1 com b e a destacados
export default function Infografico() {
  const px = (x: number) => 50 + (x + 1) * 40
  const py = (y: number) => 230 - (y + 1) * 16
  return (
    <Moldura
      id="info-afim"
      titulo="Função afim em um olhar"
      desc="A função afim é f(x) = a x + b. O b é onde a reta cruza o eixo y; o a é a inclinação: a cada passo de 1 para a direita, a reta sobe a. Com a positivo ela sobe, com a negativo ela desce. A raiz é x = -b/a, onde a reta cruza o eixo x. Pela reta que passa por dois pontos, a = variação de y dividida pela variação de x. Se b = 0 a função é proporcional. Em duas corridas, 6 + 2,5x e 3,5x empatam em 6 km."
      altura={640}
    >
      <text x={40} y={56} style={t12}>f(x) = a x + b : um ritmo constante e um ponto de partida</text>

      <rect x={40} y={70} width={310} height={190} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={50} y1={py(0)} x2={340} y2={py(0)} stroke="var(--color-borda)" strokeWidth={1} />
      <line x1={px(0)} y1={80} x2={px(0)} y2={250} stroke="var(--color-borda)" strokeWidth={1} />
      <line x1={px(-1)} y1={py(-1)} x2={px(5.2)} y2={py(11.4)} stroke={cores.azul.stroke} strokeWidth={2.5} />
      {[[0, 1], [1, 3], [2, 5], [3, 7]].map(([x, y]) => <circle key={x} cx={px(x)} cy={py(y)} r={4.5} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />)}
      <circle cx={px(0)} cy={py(1)} r={7} fill="none" stroke={cores.coral.stroke} strokeWidth={2} />
      <text x={px(0) + 10} y={py(1) + 18} style={t12}>b = 1</text>
      <path d={`M${px(1)} ${py(1)} L${px(2)} ${py(1)} L${px(2)} ${py(3)}`} fill="none" stroke={cores.coral.stroke} strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={px(1) + 6} y={py(1) + 14} style={t12}>1 passo</text>
      <text x={px(2) + 6} y={py(2)} style={t12}>sobe a = 2</text>
      <text x={195} y={252} textAnchor="middle" style={t12}>f(x) = 2x + 1</text>

      <rect x={370} y={70} width={270} height={190} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={384} y={94} style={t14}>Duas pistas na fórmula</text>
      <text x={384} y={120} style={t14}>b</text>
      <text x={404} y={120} style={t12}>onde a reta cruza o eixo y</text>
      <text x={404} y={138} style={t12}>o ponto de partida (bandeirada)</text>
      <text x={384} y={166} style={t14}>a</text>
      <text x={404} y={166} style={t12}>a inclinação, o ritmo</text>
      <text x={404} y={184} style={t12}>a &gt; 0: sobe · a &lt; 0: desce</text>
      <text x={404} y={202} style={t12}>entre dois pontos: a = Δy ÷ Δx</text>
      <text x={384} y={236} style={t12}>b = 0: proporcional (dobra x, dobra y)</text>

      <text x={40} y={296} style={t12}>Três perguntas que a reta responde</text>
      <rect x={40} y={308} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={330} style={t14}>Raiz</text>
      <text x={52} y={352} style={t12}>f(x) = 2x - 4 = 0</text>
      <text x={52} y={372} style={t12}>x = -b/a = 2</text>
      <text x={52} y={396} style={t12}>antes da raiz: negativa</text>
      <text x={52} y={414} style={t12}>depois: positiva (a &gt; 0)</text>

      <rect x={245} y={308} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={330} style={t14}>Reta por dois pontos</text>
      <text x={257} y={352} style={t12}>(1, 3) e (4, 9)</text>
      <text x={257} y={372} style={t12}>a = (9 - 3)/(4 - 1) = 2</text>
      <text x={257} y={392} style={t12}>b = 3 - 2 · 1 = 1</text>
      <text x={257} y={418} style={t14}>f(x) = 2x + 1</text>

      <rect x={450} y={308} width={190} height={130} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={330} style={t14}>Duas corridas</text>
      <text x={462} y={352} style={t12}>A: 6 + 2,5x</text>
      <text x={462} y={372} style={t12}>B: 3,5x</text>
      <text x={462} y={392} style={t12}>6 + 2,5x = 3,5x → x = 6</text>
      <text x={462} y={418} style={t14}>empatam em 6 km</text>

      <rect x={40} y={458} width={600} height={110} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={480} style={t14}>Taxi: p(x) = 6 + 2,5x</text>
      <text x={52} y={502} style={t12}>p(0) = 6: a bandeirada vale mesmo sem andar.</text>
      <text x={52} y={522} style={t12}>p(8) = 26 e p(10) = 31: 2 km a mais custam 5 reais, ou 2,5 por km (ritmo constante).</text>
      <text x={52} y={548} style={t12}>g(x) = 3x + 2 não é proporcional: g(1) = 5 e g(2) = 8 (e não 10). A bandeirada atrapalha.</text>

      <Historia y={606} texto="História: Oresme (séc. 14) · Descartes publica as coordenadas em 1637 · a letra m da inclinação aparece em 1844" />
    </Moldura>
  )
}
