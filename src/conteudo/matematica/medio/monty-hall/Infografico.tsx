import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Monty Hall em um olhar": três portas e as chances de ficar e de trocar
export default function Infografico() {
  return (
    <Moldura
      id="info-monty"
      titulo="Monty Hall em um olhar"
      desc="São três portas, um carro e duas cabras. Você escolhe uma porta e o apresentador, que sabe onde está o carro, abre uma das outras com uma cabra. Ficar ganha em um terço das vezes e trocar ganha em dois terços, porque a primeira escolha só acerta um terço e o apresentador nunca entrega o carro. Com cem portas e noventa e oito abertas, trocar ganha 99 por cento. Se o apresentador for distraído e abrir uma porta ao acaso, a mesma cena dá meio a meio. A probabilidade condicional depende de como a informação foi obtida. Poucas rodadas enganam: o simulador converge para dois terços."
      altura={640}
    >
      <text x={40} y={56} style={t12}>3 portas: 1 carro e 2 cabras. Você escolhe a 1; ele sabe onde está o carro e abre uma cabra.</text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={60 + i * 140} y={72} width={100} height={130} rx={8} fill={i === 0 ? cores.azul.fill : 'var(--color-fundo)'} stroke={i === 0 ? cores.azul.stroke : 'var(--color-borda)'} strokeWidth={i === 0 ? 2 : 1} />
          <text x={110 + i * 140} y={112} textAnchor="middle" style={{ fontSize: 26, fontWeight: 600, fill: 'var(--color-texto)' }}>{i + 1}</text>
          <circle cx={140 + i * 140 - 24} cy={150} r={4} fill="var(--color-suave)" />
        </g>
      ))}
      <text x={110} y={184} textAnchor="middle" style={t12}>sua escolha</text>
      <text x={250} y={184} textAnchor="middle" style={t12}>?</text>
      <text x={390} y={184} textAnchor="middle" style={t12}>cabra (aberta)</text>

      <rect x={500} y={72} width={140} height={130} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={512} y={96} style={t14}>Ficar: 1/3</text>
      <text x={512} y={122} style={t12}>sua 1ª escolha só</text>
      <text x={512} y={140} style={t12}>acerta 1 vez em 3</text>
      <text x={512} y={172} style={t14}>Trocar: 2/3</text>
      <text x={512} y={192} style={t12}>(a pista vale)</text>

      <text x={40} y={236} style={t12}>As três situações (carro atrás da porta)</text>
      <rect x={40} y={248} width={190} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={270} style={t14}>Carro na 1 (1/3)</text>
      <text x={52} y={292} style={t12}>ele abre a 2 ou a 3</text>
      <text x={52} y={312} style={t12}>trocar perde</text>
      <rect x={245} y={248} width={190} height={104} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={270} style={t14}>Carro na 2 (1/3)</text>
      <text x={257} y={292} style={t12}>obrigado a abrir a 3</text>
      <text x={257} y={312} style={t12}>trocar ganha</text>
      <rect x={450} y={248} width={190} height={104} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={270} style={t14}>Carro na 3 (1/3)</text>
      <text x={462} y={292} style={t12}>obrigado a abrir a 2</text>
      <text x={462} y={312} style={t12}>trocar ganha</text>
      <text x={40} y={376} style={t12}>Trocar ganha em 2 de 3 casos. Ele nunca abre a porta do carro: P(abrir a 3 | carro na 3) = 0.</text>

      <text x={40} y={408} style={t12}>Variações</text>
      <rect x={40} y={420} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={442} style={t14}>100 portas</text>
      <text x={52} y={464} style={t12}>ele abre 98: trocar</text>
      <text x={52} y={482} style={t14}>99/100</text>
      <text x={52} y={500} style={t12}>(abrindo só 1: ≈ 1,01%)</text>
      <rect x={245} y={420} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={442} style={t14}>Apresentador distraído</text>
      <text x={257} y={464} style={t12}>abre ao acaso e por sorte</text>
      <text x={257} y={482} style={t12}>mostra cabra: dá ½ a ½</text>
      <rect x={450} y={420} width={190} height={92} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={442} style={t14}>Condicional</text>
      <text x={462} y={464} style={t12}>a chance muda com a</text>
      <text x={462} y={482} style={t12}>informação nova e com</text>
      <text x={462} y={500} style={t12}>como ela foi obtida</text>

      <rect x={40} y={528} width={600} height={50} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={548} style={t14}>Poucas rodadas enganam</text>
      <text x={52} y={566} style={t12}>100 rodadas oscilam ≈ 4,7 pontos; 10.000 oscilam ≈ 0,47. O simulador "gruda" em 2/3.</text>

      <Historia y={612} texto="História: paradoxo da caixa de Bertrand (1889) · Let's Make a Deal (1963) · Selvin (1975) · Marilyn vos Savant (1990)" />
    </Moldura>
  )
}
