import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Exponencial em um olhar": dobrar a cada passo e curvas 2ˣ e (1/2)ˣ
export default function Infografico() {
  const px = (x: number) => 50 + (x + 3) * 40
  const py = (y: number) => 240 - y * 18
  const curva = (f: (x: number) => number) => Array.from({ length: 49 }, (_, i) => {
    const x = -3 + i * 0.125
    return `${px(x)},${py(Math.min(f(x), 8))}`
  }).join(' ')
  const barras = [1, 2, 4, 8, 16]
  return (
    <Moldura
      id="info-exp2"
      titulo="Exponencial em um olhar"
      desc="Na função exponencial, f(x) = b elevado a x, a variável fica no expoente. Com b maior que 1 a função cresce: 2 elevado a x dobra a cada passo, com f(0) = 1, f(3) = 8 e f(10) = 1.024. Com b entre 0 e 1 ela decai e nunca chega a zero. O gráfico de 2 elevado a x e o de um meio elevado a x são espelhos em relação ao eixo y. Juros compostos usam o fator 1 + taxa: mil reais a 10% ao ano viram 1.331 em três anos. A regra do 70 estima o tempo para dobrar. Exponencial ganha de linear no fim."
      altura={640}
    >
      <text x={40} y={56} style={t12}>A variável no expoente: f(x) = bˣ</text>

      <rect x={40} y={70} width={330} height={190} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={50} y1={py(0)} x2={360} y2={py(0)} stroke="var(--color-borda)" strokeWidth={1} />
      <line x1={px(0)} y1={78} x2={px(0)} y2={252} stroke="var(--color-borda)" strokeWidth={1} />
      <polyline points={curva((x) => 2 ** x)} fill="none" stroke={cores.azul.stroke} strokeWidth={2.5} />
      <polyline points={curva((x) => 0.5 ** x)} fill="none" stroke={cores.coral.stroke} strokeWidth={2.5} />
      <circle cx={px(0)} cy={py(1)} r={4.5} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={px(1.9)} y={96} style={t12}>2ˣ cresce</text>
      <text x={px(-2.9)} y={96} style={t12}>(1/2)ˣ decai</text>
      <text x={px(0) + 8} y={py(1) + 16} style={t12}>f(0) = 1</text>
      <text x={210} y={252} textAnchor="middle" style={t12}>espelhos pelo eixo y · nunca tocam o eixo x</text>

      <rect x={390} y={70} width={250} height={190} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={402} y={94} style={t14}>Dobrar a cada passo</text>
      {barras.map((v, i) => (
        <g key={v}>
          <rect x={404} y={106 + i * 30} width={v * 8 + 4} height={20} rx={3} fill={cores.azul.stroke} />
          <text x={404 + v * 8 + 12} y={121 + i * 30} style={t12}>2^{i} = {v}</text>
        </g>
      ))}

      <text x={40} y={296} style={t12}>Três ideias que o exponencial entrega</text>
      <rect x={40} y={308} width={190} height={124} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={330} style={t14}>Juros compostos</text>
      <text x={52} y={352} style={t12}>R$ 1.000 a 10% ao ano</text>
      <text x={52} y={372} style={t12}>fator 1,1: 1.100; 1.210</text>
      <text x={52} y={398} style={t14}>3 anos: 1.331</text>

      <rect x={245} y={308} width={190} height={124} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={330} style={t14}>Regra do 70</text>
      <text x={257} y={352} style={t12}>tempo para dobrar</text>
      <text x={257} y={372} style={t12}>≈ 70 ÷ taxa (%)</text>
      <text x={257} y={398} style={t12}>7% ao ano: ≈ 10 anos</text>

      <rect x={450} y={308} width={190} height={124} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={330} style={t14}>Linear x exponencial</text>
      <text x={462} y={352} style={t12}>+10 por dia: 100 em 10 dias</text>
      <text x={462} y={372} style={t12}>dobra por dia: 1.024</text>
      <text x={462} y={398} style={t12}>em 20 dias: 200 x 1.048.576</text>

      <rect x={40} y={450} width={600} height={74} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={472} style={t14}>Xadrez e o lago</text>
      <text x={52} y={494} style={t12}>Casa 11 do xadrez: 2¹⁰ = 1.024 grãos; total até ela: 2¹¹ - 1 = 2.047.</text>
      <text x={52} y={512} style={t12}>Lago: se dobra por dia e enche no dia 30, no dia 27 só 12,5% está coberto.</text>

      <rect x={40} y={538} width={600} height={42} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={563} style={t12}>Decaimento: 100 g pela metade a cada 3 h → 50, 25, 12,5 g. Nunca chega a zero.</text>

      <Historia y={612} texto="História: lenda do xadrez e dos grãos · Verhulst propõe o modelo logístico em 1845 (crescimento com limite)" />
    </Moldura>
  )
}
