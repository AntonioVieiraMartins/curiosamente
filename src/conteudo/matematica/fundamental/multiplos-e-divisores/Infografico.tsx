import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Múltiplos e divisores em um olhar": MMC e MDC de 6 e 8 / 12 e 18
export default function Infografico() {
  return (
    <Moldura
      id="info-mmd"
      titulo="Múltiplos e divisores em um olhar"
      desc="Múltiplos são os números das tabuadas e divisores repartem sem deixar resto. Todo número tem o 1 e ele mesmo como divisores. Critérios: por 2 termina em par, por 5 termina em 0 ou 5, por 3 e 9 a soma dos algarismos, por 4 os dois últimos algarismos. O MMC é o primeiro encontro dos múltiplos: MMC de 6 e 8 é 24. O MDC é o maior divisor comum: MDC de 12 e 18 é 6. Pela decomposição em fatores primos, o MDC usa os fatores comuns com o menor expoente e o MMC todos com o maior. MDC vezes MMC é igual a a vezes b. O algoritmo de Euclides divide e olha o resto até zerar."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Múltiplos saltam de n em n. Divisores repartem sem resto.</text>

      <rect x={40} y={70} width={290} height={104} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>MMC: o primeiro encontro</text>
      <text x={52} y={114} style={t12}>múltiplos de 6: 6, 12, 18, 24, 30</text>
      <text x={52} y={132} style={t12}>múltiplos de 8: 8, 16, 24, 32</text>
      <text x={52} y={156} style={t14}>MMC(6, 8) = 24</text>

      <rect x={350} y={70} width={290} height={104} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={92} style={t14}>MDC: o maior ladrilho</text>
      <text x={362} y={114} style={t12}>divisores de 12: 1, 2, 3, 4, 6, 12</text>
      <text x={362} y={132} style={t12}>divisores de 18: 1, 2, 3, 6, 9, 18</text>
      <text x={362} y={156} style={t14}>MDC(12, 18) = 6</text>

      <text x={40} y={204} style={t12}>Quando usar</text>
      <text x={40} y={212} style={t12}>MMC: "quando de novo?" (plantões a cada 3 e 4 dias: 12) e somar frações.</text>
      <text x={40} y={230} style={t12}>MDC: "pedaços iguais, os maiores" e simplificar frações.</text>

      <text x={40} y={254} style={t12}>Sem fazer a conta: critérios de divisibilidade</text>
      <Caixa x={40} y={266} w={110} h={58} cor="amarelo" titulo="por 2" sub="termina em par" />
      <Caixa x={160} y={266} w={110} h={58} cor="amarelo" titulo="por 5" sub="termina em 0 ou 5" />
      <Caixa x={280} y={266} w={110} h={58} cor="amarelo" titulo="por 3 e 9" sub="soma dos algarismos" />
      <Caixa x={400} y={266} w={110} h={58} cor="amarelo" titulo="por 4" sub="dois últimos" />
      <Caixa x={520} y={266} w={120} h={58} cor="amarelo" titulo="por 6" sub="por 2 e por 3" />
      <text x={40} y={348} style={t12}>1.296: 1 + 2 + 9 + 6 = 18, então divide por 3 e por 9; 96 ÷ 4 = 24, então divide por 4.</text>

      <text x={40} y={382} style={t12}>Pelos fatores primos: 150 = 2 × 3 × 5² e 210 = 2 × 3 × 5 × 7</text>
      <rect x={40} y={394} width={290} height={84} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={416} style={t14}>MDC: comuns, menor expoente</text>
      <text x={52} y={440} style={t12}>2 × 3 × 5 = 30</text>
      <rect x={350} y={394} width={290} height={84} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={416} style={t14}>MMC: todos, maior expoente</text>
      <text x={362} y={440} style={t12}>2 × 3 × 5² × 7 = 1.050</text>
      <text x={52} y={466} style={t12}>60 = 2² × 3 × 5 (2 × 2 × 3 × 5)</text>
      <text x={362} y={466} style={t12}>MDC × MMC = a × b</text>

      <rect x={40} y={494} width={600} height={76} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={516} style={t14}>Algoritmo de Euclides: divida, olhe o resto, repita até zerar</text>
      <text x={52} y={538} style={t12}>48 ÷ 18 = 2, resto 12 → 18 ÷ 12 = 1, resto 6 → 12 ÷ 6 = 2, resto 0</text>
      <text x={52} y={558} style={t12}>O último divisor é o MDC: MDC(48, 18) = 6. Erros: confundir múltiplo e divisor; MMC não é somar.</text>

      <Historia y={612} texto="História: Euclides descreve o método do MDC nos Elementos (c. 300 a.C.), um dos algoritmos mais velhos ainda em uso" />
    </Moldura>
  )
}
