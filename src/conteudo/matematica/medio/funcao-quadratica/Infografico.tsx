import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Função quadrática em um olhar": f(x) = x² - 6x + 5, raízes 1 e 5, vértice (3, -4)
export default function Infografico() {
  const px = (x: number) => 50 + x * 36
  const py = (y: number) => 150 - y * 14
  const pts = Array.from({ length: 41 }, (_, i) => {
    const x = i * 0.15
    return `${px(x)},${py(x * x - 6 * x + 5)}`
  }).join(' ')
  return (
    <Moldura
      id="info-quad"
      titulo="Função quadrática em um olhar"
      desc="A função quadrática é f(x) = a x² + b x + c e seu gráfico é uma parábola. Com a positivo abre para cima e tem mínimo; com a negativo abre para baixo e tem máximo. O vértice fica em x = -b/(2a). As raízes vêm da fórmula com o delta, b² - 4ac: delta positivo dá duas raízes, zero dá uma e negativo não dá raiz real. A parábola é simétrica em torno do eixo do vértice. Pode ser escrita nas formas fatorada, padrão e canônica. Aplicações: área máxima de um terreno de perímetro 40, lucro máximo e a altura de uma bola arremessada."
      altura={640}
    >
      <text x={40} y={56} style={t12}>f(x) = a x² + b x + c : o gráfico é uma parábola</text>

      <rect x={40} y={70} width={320} height={190} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={50} y1={py(0)} x2={350} y2={py(0)} stroke="var(--color-borda)" strokeWidth={1} />
      <polyline points={pts} fill="none" stroke={cores.azul.stroke} strokeWidth={2.5} />
      <line x1={px(3)} y1={80} x2={px(3)} y2={250} stroke={cores.coral.stroke} strokeWidth={1.2} strokeDasharray="4 3" />
      <circle cx={px(1)} cy={py(0)} r={5} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <circle cx={px(5)} cy={py(0)} r={5} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <circle cx={px(3)} cy={py(-4)} r={6} fill={cores.coral.fill} stroke={cores.coral.stroke} strokeWidth={2} />
      <text x={px(1) - 14} y={py(0) - 8} style={t12}>raiz 1</text>
      <text x={px(5) - 8} y={py(0) - 8} style={t12}>raiz 5</text>
      <text x={px(3) + 10} y={py(-4) - 2} style={t12}>vértice (3, -4)</text>
      <text x={px(3) + 6} y={92} style={t12}>eixo de simetria</text>
      <text x={200} y={252} textAnchor="middle" style={t12}>f(x) = x² - 6x + 5</text>

      <rect x={380} y={70} width={260} height={190} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={392} y={94} style={t14}>Lendo a, c e o vértice</text>
      <text x={392} y={120} style={t12}>a &gt; 0: abre para cima (mínimo)</text>
      <text x={392} y={140} style={t12}>a &lt; 0: abre para baixo (máximo)</text>
      <text x={392} y={164} style={t12}>c: onde corta o eixo y, (0, c)</text>
      <text x={392} y={188} style={t14}>xᵥ = -b / (2a)</text>
      <text x={392} y={208} style={t12}>x² - 4x + 3: xᵥ = 2, yᵥ = -1</text>
      <text x={392} y={232} style={t12}>mesma altura em x e no seu espelho</text>

      <text x={40} y={296} style={t12}>Quantas raízes? Depende do delta: Δ = b² - 4ac</text>
      <rect x={40} y={308} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={330} style={t14}>Δ &gt; 0: duas raízes</text>
      <text x={52} y={352} style={t12}>x² - 5x + 6: Δ = 1</text>
      <text x={52} y={372} style={t12}>x = (5 ± 1)/2</text>
      <text x={52} y={396} style={t12}>raízes 3 e 2</text>
      <rect x={245} y={308} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={330} style={t14}>Δ = 0: uma raiz</text>
      <text x={257} y={356} style={t12}>o vértice toca</text>
      <text x={257} y={374} style={t12}>o eixo x</text>
      <rect x={450} y={308} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={330} style={t14}>Δ &lt; 0: nenhuma real</text>
      <text x={462} y={352} style={t12}>x² + x + 1: Δ = -3</text>
      <text x={462} y={372} style={t12}>não há √(-3) real</text>
      <text x={462} y={396} style={t12}>gráfico todo acima do eixo</text>

      <text x={40} y={456} style={t12}>Três jeitos de escrever a mesma parábola</text>
      <rect x={40} y={468} width={600} height={40} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={493} style={t12}>fatorada (x - 1)(x - 5)  ·  padrão x² - 6x + 5  ·  canônica (x - 3)² - 4</text>

      <rect x={40} y={522} width={600} height={66} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={544} style={t14}>Para que serve o vértice</text>
      <text x={52} y={563} style={t12}>Terreno de perímetro 40: A = -x² + 20x, máximo em x = 10 (quadrado de 100 m²).</text>
      <text x={52} y={579} style={t12}>Bola: h = -5t² + 20t, altura máxima de 20 m aos 2 s.</text>

      <Historia y={612} texto="História: Menecmo (séc. 4 a.C.) · Apolônio dá o nome parábola · Galileu mostra a trajetória em 1638" />
    </Moldura>
  )
}
