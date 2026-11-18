import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Funções em um olhar": a máquina f(x) = 2x + 3 e o teste da reta vertical
export default function Infografico() {
  // Gráfico de f(x) = 2x + 1: x de -1 a 3 → pixels
  const px = (x: number) => 60 + (x + 1) * 34
  const py = (y: number) => 410 - (y + 1) * 12
  const pts: [number, number][] = [[-1, -1], [0, 1], [1, 3], [2, 5], [3, 7]]
  return (
    <Moldura
      id="info-fun"
      titulo="Funções em um olhar"
      desc="Uma função é uma máquina: cada entrada x tem exatamente uma saída f(x). Em f(x) = 2x + 3, f(4) = 11, f(0) = 3 e f(-2) = -1. Domínio são as entradas possíveis, imagem são as saídas que aparecem e contradomínio é o conjunto onde elas moram. Uma função se mostra em palavras, fórmula, tabela e gráfico. O teste da reta vertical: se alguma reta vertical cruza o gráfico duas vezes, não é função, como o círculo. Em f(x) = 1/x o domínio exclui o zero. Compor funções não é comutativo."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Uma máquina: cada entrada tem exatamente uma saída</text>
      <Caixa x={40} y={72} w={90} h={54} cor="amarelo" titulo="x = 4" sub="entrada" />
      <Caixa x={170} y={64} w={190} h={70} cor="azul" titulo="f(x) = 2x + 3" sub="a máquina" grande />
      <Caixa x={400} y={72} w={90} h={54} cor="verde" titulo="11" sub="saída f(4)" />
      <Seta id="info-fun" x1={132} y1={99} x2={168} y2={99} />
      <Seta id="info-fun" x1={362} y1={99} x2={398} y2={99} />
      <text x={510} y={90} style={t12}>f(0) = 3</text>
      <text x={510} y={110} style={t12}>f(-2) = -1</text>

      <text x={40} y={164} style={t12}>Três nomes</text>
      <Caixa x={40} y={176} w={190} h={64} cor="azul" titulo="Domínio" sub="entradas possíveis" />
      <Caixa x={245} y={176} w={190} h={64} cor="verde" titulo="Imagem" sub="saídas que aparecem" />
      <Caixa x={450} y={176} w={190} h={64} cor="cinza" titulo="Contradomínio" sub="onde as saídas moram" />

      <text x={40} y={274} style={t12}>Quatro jeitos de mostrar: palavras, fórmula, tabela e gráfico (f(x) = 2x + 1)</text>

      <rect x={40} y={286} width={240} height={168} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={60} y1={py(0)} x2={260} y2={py(0)} stroke="var(--color-borda)" strokeWidth={1} />
      <line x1={px(0)} y1={300} x2={px(0)} y2={430} stroke="var(--color-borda)" strokeWidth={1} />
      <polyline points={pts.map(([x, y]) => `${px(x)},${py(y)}`).join(' ')} fill="none" stroke={cores.azul.stroke} strokeWidth={2} />
      {pts.map(([x, y]) => <circle key={x} cx={px(x)} cy={py(y)} r={4} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />)}
      <text x={160} y={446} textAnchor="middle" style={t12}>pontos alinhados: uma reta</text>

      <rect x={300} y={286} width={160} height={168} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={312} y={308} style={t14}>Tabela</text>
      {pts.map(([x, y], i) => <text key={x} x={312} y={332 + i * 22} style={t12}>x = {x}  →  {y}</text>)}

      <rect x={480} y={286} width={160} height={168} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={492} y={308} style={t14}>Reta vertical</text>
      <circle cx={560} cy={378} r={36} fill="none" stroke={cores.coral.stroke} strokeWidth={2} />
      <line x1={560} y1={326} x2={560} y2={430} stroke="var(--color-suave)" strokeWidth={1.5} strokeDasharray="4 3" />
      <circle cx={560} cy={342} r={4} fill={cores.coral.stroke} />
      <circle cx={560} cy={414} r={4} fill={cores.coral.stroke} />
      <text x={560} y={446} textAnchor="middle" style={t12}>2 saídas: não é função</text>

      <rect x={40} y={474} width={290} height={102} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={496} style={t14}>Domínio de f(x) = 1/x</text>
      <text x={52} y={518} style={t12}>x = 2 funciona (0,5); x = -3 funciona</text>
      <text x={52} y={536} style={t12}>x = 0: 1/0 não existe</text>
      <text x={52} y={558} style={t12}>domínio: todos os reais, menos o 0</text>

      <rect x={350} y={474} width={290} height={102} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={496} style={t14}>Compor: a ordem importa</text>
      <text x={362} y={518} style={t12}>f(x) = 2x e g(x) = x + 3</text>
      <text x={362} y={536} style={t12}>g(f(2)) = g(4) = 7</text>
      <text x={362} y={556} style={t12}>f(g(2)) = f(5) = 10</text>

      <Historia y={614} texto="História: Newton e Leibniz criam o cálculo no séc. 17 · Euler usa f(x) em 1734 · definição moderna no fim do séc. 19" />
    </Moldura>
  )
}
