import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Limites e continuidade em um olhar": o limite olha ao redor do ponto, e a continuidade tem três condições
export default function Infografico() {
  return (
    <Moldura
      id="info-limites"
      titulo="Limites e continuidade em um olhar"
      desc="O limite de f em a é o valor para o qual f de x se aproxima quando x chega perto de a, sem importar o valor em a. Só existe se os limites laterais, pela esquerda e pela direita, forem iguais. Exemplo: x ao quadrado menos 1, dividido por x menos 1, perto de 1, tende a 2, embora f de 1 não exista. Quando a substituição dá zero sobre zero, fatora-se e cancela-se. Uma função é contínua em a quando f de a existe, o limite existe e os dois são iguais. As descontinuidades são buraco, salto e infinita. O teorema do valor intermediário garante que uma função contínua que troca de sinal passa por zero."
      altura={600}
    >
      <text x={40} y={56} style={t12}>Limite = para onde f(x) vai quando x chega perto de a (o ponto em si não conta)</text>

      <Caixa x={40} y={72} w={190} h={70} cor="amarelo" titulo="x → 1 pelos dois lados" sub="esquerda e direita" />
      <Seta id="info-limites" x1={232} y1={107} x2={268} y2={107} />
      <Caixa x={270} y={72} w={190} h={70} cor="azul" titulo="f(x) → 2" sub="mesmo sem f(1)" grande />
      <text x={480} y={96} style={t12}>(x² − 1) ÷ (x − 1)</text>
      <text x={480} y={116} style={t12}>= x + 1 perto de 1</text>
      <text x={480} y={136} style={t12}>limite = 2</text>

      <text x={40} y={174} style={t12}>Contínua em a: três condições ao mesmo tempo</text>
      <rect x={40} y={186} width={290} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={208} style={t14}>1. f(a) existe</text>
      <text x={52} y={232} style={t14}>2. o limite em a existe</text>
      <text x={52} y={256} style={t14}>3. limite = f(a)</text>
      <text x={52} y={284} style={t12}>gráfico sem tirar o lápis do papel</text>

      <rect x={350} y={186} width={290} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={208} style={t14}>Truque do 0 ÷ 0</text>
      <text x={362} y={232} style={t12}>(x² − 9) ÷ (x − 3), x → 3</text>
      <text x={362} y={252} style={t12}>= (x − 3)(x + 3) ÷ (x − 3)</text>
      <text x={362} y={272} style={t12}>= x + 3 → 6</text>

      <text x={40} y={334} style={t12}>Três jeitos de falhar a continuidade</text>
      <rect x={40} y={346} width={190} height={100} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={368} style={t14}>Buraco</text>
      <text x={52} y={390} style={t12}>o limite existe,</text>
      <text x={52} y={408} style={t12}>f(a) falta</text>
      <text x={52} y={430} style={t12}>(removível)</text>
      <rect x={245} y={346} width={190} height={100} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={368} style={t14}>Salto</text>
      <text x={257} y={390} style={t12}>esquerda: 1</text>
      <text x={257} y={408} style={t12}>direita: 3</text>
      <text x={257} y={430} style={t12}>não há limite</text>
      <rect x={450} y={346} width={190} height={100} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={368} style={t14}>Infinita</text>
      <text x={462} y={390} style={t12}>1 ÷ (x − 1) perto de 1</text>
      <text x={462} y={408} style={t12}>os valores explodem</text>
      <text x={462} y={430} style={t12}>não há limite finito</text>

      <text x={40} y={476} style={t12}>Ideias para levar</text>
      <rect x={40} y={488} width={290} height={76} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={510} style={t14}>Épsilon e delta</text>
      <text x={52} y={532} style={t12}>toda tolerância ε tem um δ</text>
      <text x={52} y={550} style={t12}>2x + 1 perto de 3: δ = ε ÷ 2</text>
      <rect x={350} y={488} width={290} height={76} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={510} style={t14}>Valor intermediário</text>
      <text x={362} y={532} style={t12}>contínua e troca de sinal:</text>
      <text x={362} y={550} style={t12}>existe uma raiz no meio</text>

      <Historia y={586} texto="História: Zenão (~490 a.C.) · Bolzano 1817 · Cauchy 1821 · Weierstrass 1861 · Hardy 1908" />
    </Moldura>
  )
}
