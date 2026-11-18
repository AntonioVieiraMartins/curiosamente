import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Expressões numéricas em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-exp"
      titulo="Expressões numéricas em um olhar"
      desc="A ordem das operações é uma convenção. Primeiro os parênteses, de dentro para fora, com parênteses, colchetes e chaves. Depois os expoentes. Depois multiplicação e divisão, da esquerda para a direita, no mesmo nível. Por último adição e subtração, da esquerda para a direita, no mesmo nível. Em 2 + 3 × 4 o resultado é 14, e com parênteses, (2 + 3) × 4, é 20. Erros comuns: resolver sempre da esquerda para a direita, esquecer que há níveis e pular o sinal de menos diante de um parêntese."
      altura={640}
    >
      <text x={40} y={56} style={t12}>A ordem é um acordo para todo mundo ler a mesma conta do mesmo jeito</text>

      <Caixa x={40} y={72} w={140} h={64} cor="coral" titulo="1º ( ) [ ] { }" sub="de dentro para fora" />
      <Caixa x={200} y={72} w={140} h={64} cor="azul" titulo="2º potências" sub="2² = 4" />
      <Caixa x={360} y={72} w={140} h={64} cor="amarelo" titulo="3º × e ÷" sub="esquerda → direita" />
      <Caixa x={520} y={72} w={120} h={64} cor="cinza" titulo="4º + e -" sub="esquerda → direita" />
      <Seta id="info-exp" x1={182} y1={104} x2={198} y2={104} />
      <Seta id="info-exp" x1={342} y1={104} x2={358} y2={104} />
      <Seta id="info-exp" x1={502} y1={104} x2={518} y2={104} />
      <text x={40} y={160} style={t12}>× e ÷ têm o mesmo nível; + e - também. Dois degraus: os "fortes" antes dos "fracos".</text>

      <text x={40} y={198} style={t12}>Os mesmos números, resultados diferentes</text>
      <rect x={40} y={210} width={285} height={110} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={54} y={232} style={t14}>2 + 3 × 4</text>
      <text x={54} y={256} style={t12}>× primeiro: 3 × 4 = 12</text>
      <text x={54} y={276} style={t12}>depois 2 + 12</text>
      <text x={54} y={302} style={t14}>= 14</text>

      <rect x={355} y={210} width={285} height={110} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={369} y={232} style={t14}>(2 + 3) × 4</text>
      <text x={369} y={256} style={t12}>parênteses primeiro: 5</text>
      <text x={369} y={276} style={t12}>depois 5 × 4</text>
      <text x={369} y={302} style={t14}>= 20</text>

      <text x={40} y={356} style={t12}>Mesmo nível: da esquerda para a direita</text>
      <rect x={40} y={368} width={285} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={54} y={390} style={t14}>48 ÷ 6 × 2</text>
      <text x={54} y={414} style={t12}>48 ÷ 6 = 8 e 8 × 2</text>
      <text x={54} y={440} style={t14}>= 16</text>
      <text x={54} y={464} style={t12}>não: 6 × 2 antes (daria 4)</text>

      <rect x={355} y={368} width={285} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={369} y={390} style={t14}>20 - 5 + 3</text>
      <text x={369} y={414} style={t12}>20 - 5 = 15 e 15 + 3</text>
      <text x={369} y={440} style={t14}>= 18</text>
      <text x={369} y={464} style={t12}>não: 5 + 3 antes (daria 12)</text>

      <rect x={40} y={494} width={600} height={82} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={54} y={516} style={t14}>Três tropeços</text>
      <text x={54} y={536} style={t12}>1. fazer tudo da esquerda para a direita sem pensar</text>
      <text x={54} y={554} style={t12}>2. achar que "soma vem antes de subtração" (são o mesmo nível)</text>
      <text x={54} y={572} style={t12}>3. 10 - (4 + 1): o menos vale para o grupo todo, dá 5 (e não 7)</text>

      <Historia y={612} texto="História: × antes de + no séc. 17 · Cajori em 1920 · PEMDAS (EUA), BODMAS (Reino Unido), BEDMAS (Canadá)" />
    </Moldura>
  )
}
