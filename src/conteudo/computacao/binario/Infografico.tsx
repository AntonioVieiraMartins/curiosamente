import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Binário em um olhar": 1101 = 13
export default function Infografico() {
  const valores = [8, 4, 2, 1]
  const bits = [1, 1, 0, 1]
  return (
    <Moldura
      id="info-bin"
      titulo="Binário em um olhar"
      desc="O binário só usa 0 e 1, e cada posição vale o dobro da anterior: 1, 2, 4, 8, 16. Lâmpada acesa soma o valor dela: 1101 é 8 mais 4 mais 1, que dá 13. Para converter para binário, divida por 2 e leia os restos de baixo para cima. Um bit é um dígito binário e um byte tem 8 bits, com 256 valores. Cada bit a mais dobra as combinações. Tudo vira número: letras no ASCII, cores, sons e imagens. O hexadecimal é o binário compacto, com 4 bits por dígito. Somar em binário: 101 mais 11 dá 1000."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Só 0 e 1. Cada posição vale o dobro da anterior. Lâmpada acesa soma o valor.</text>

      {valores.map((v, i) => (
        <g key={v}>
          <circle cx={110 + i * 110} cy={108} r={30} fill={bits[i] ? cores.amarelo.fill : 'var(--color-fundo)'} stroke={bits[i] ? cores.amarelo.stroke : 'var(--color-borda)'} strokeWidth={2} />
          <text x={110 + i * 110} y={108} textAnchor="middle" dominantBaseline="central" style={{ fontSize: 22, fontWeight: 600, fill: 'var(--color-texto)' }}>{bits[i]}</text>
          <text x={110 + i * 110} y={160} textAnchor="middle" style={t12}>vale {v}</text>
        </g>
      ))}
      <text x={520} y={100} style={t14}>1101 = 8 + 4 + 1</text>
      <text x={520} y={122} style={t14}>= 13</text>
      <text x={520} y={146} style={t12}>(não é "mil cento e um")</text>

      <text x={40} y={200} style={t12}>Converter e somar</text>
      <rect x={40} y={212} width={190} height={126} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={234} style={t14}>13 em binário</text>
      <text x={52} y={256} style={t12}>13 ÷ 2 = 6, resto 1</text>
      <text x={52} y={274} style={t12}>6 ÷ 2 = 3, resto 0</text>
      <text x={52} y={292} style={t12}>3 ÷ 2 = 1, resto 1 · 1 ÷ 2: resto 1</text>
      <text x={52} y={318} style={t12}>restos de baixo p/ cima: 1101</text>

      <rect x={245} y={212} width={190} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={234} style={t14}>Somar: 101 + 11</text>
      <text x={257} y={256} style={t12}>1 + 1 = 10: escreve 0, vai 1</text>
      <text x={257} y={274} style={t12}>0 + 1 + 1 = 10: 0, vai 1</text>
      <text x={257} y={292} style={t12}>1 + 0 + 1 = 10: 0, vai 1</text>
      <text x={257} y={318} style={t14}>= 1000 (5 + 3 = 8)</text>

      <rect x={450} y={212} width={190} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={234} style={t14}>Bit e byte</text>
      <text x={462} y={256} style={t12}>bit: um dígito (0 ou 1)</text>
      <text x={462} y={274} style={t12}>byte: 8 bits = 256 valores</text>
      <text x={462} y={292} style={t12}>(0 a 255, e não 255)</text>
      <text x={462} y={318} style={t12}>cada bit a mais dobra</text>

      <text x={40} y={372} style={t12}>Tudo vira número</text>
      <Caixa x={40} y={384} w={140} h={56} cor="amarelo" titulo="'A' = 65" sub="ASCII (1963)" />
      <Caixa x={190} y={384} w={140} h={56} cor="amarelo" titulo="'D' = 68" sub="01000100" />
      <Caixa x={340} y={384} w={150} h={56} cor="amarelo" titulo="2A = 42" sub="hexadecimal" />
      <Caixa x={500} y={384} w={140} h={56} cor="amarelo" titulo="cor" sub="3 bytes por pixel" />
      <text x={40} y={466} style={t12}>Hexadecimal: 4 bits por dígito (2 × 16 + 10 = 42). Também vira número: som e imagem.</text>

      <rect x={40} y={486} width={600} height={90} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={508} style={t14}>Quatro tropeços</text>
      <text x={52} y={528} style={t12}>101 em binário é 5, e não cento e um · ler os restos de cima para baixo</text>
      <text x={52} y={546} style={t12}>esquecer que o zero também é uma combinação (8 bits = 256, não 255)</text>
      <text x={52} y={564} style={t12}>bits = perguntas de sim ou não para achar uma coisa</text>

      <Historia y={612} texto="História: Pingala (séc. 2 a.C.) · Leibniz, 1703 · Boole, 1854 · Shannon, 1937 · Tukey cria o bit, 1947 · ASCII, 1963" />
    </Moldura>
  )
}
