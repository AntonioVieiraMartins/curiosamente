import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Porcentagem em um olhar": grade de 100 com 25% pintados
export default function Infografico() {
  const quad = Array.from({ length: 100 }, (_, i) => ({ x: 40 + (i % 10) * 12, y: 72 + Math.floor(i / 10) * 12, cheio: i % 10 < 5 && Math.floor(i / 10) < 5 }))
  return (
    <Moldura
      id="info-por"
      titulo="Porcentagem em um olhar"
      desc="Por cento quer dizer de cada cem: 25% é 25/100, que é 1/4 e 0,25. De cabeça: 10% anda a vírgula uma casa, 1% duas casas, 5% é metade de 10%, 50% é a metade e 25% a metade da metade. Quanto por cento é: parte sobre todo, como 18 de 24 que dá 75%. Desconto de 30% é pagar 70%, multiplicando por 0,7. Aumento de 10% é multiplicar por 1,1. Descontos e aumentos seguidos se multiplicam. Para achar o preço de antes, divida pelo fator. Juros compostos são uma bola de neve: 1.000 a 10% ao mês viram 1.331 em três meses."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Por cento: de cada 100. Aqui, 25 de 100 pintados</text>
      {quad.map((q, i) => (
        <rect key={i} x={q.x} y={q.y} width={10} height={10} rx={1.5} fill={q.cheio ? cores.azul.stroke : 'var(--color-fundo)'} stroke="var(--color-borda)" strokeWidth={0.5} />
      ))}
      <text x={180} y={96} style={t14}>25% = 25/100 = 1/4 = 0,25</text>
      <text x={180} y={118} style={t12}>50% = 1/2 · 75% = 3/4 · 20% = 1/5</text>
      <text x={180} y={138} style={t12}>10% = 1/10 · 1% = 1/100</text>
      <text x={180} y={166} style={t12}>Sempre de alguma coisa: mudou a base,</text>
      <text x={180} y={184} style={t12}>mudou o valor (20% de bateria grande ≠ pequena)</text>

      <text x={40} y={222} style={t12}>De cabeça</text>
      <Caixa x={40} y={234} w={110} h={58} cor="azul" titulo="10%" sub="anda a vírgula" />
      <Caixa x={160} y={234} w={110} h={58} cor="azul" titulo="1%" sub="duas casas" />
      <Caixa x={280} y={234} w={110} h={58} cor="azul" titulo="5%" sub="metade de 10%" />
      <Caixa x={400} y={234} w={110} h={58} cor="azul" titulo="15%" sub="10% + 5%" />
      <Caixa x={520} y={234} w={120} h={58} cor="azul" titulo="25%" sub="metade da metade" />
      <text x={40} y={316} style={t12}>Conta de R$ 86: 10% = 8,60 · 5% = 4,30 · 15% = 12,90</text>

      <rect x={40} y={336} width={190} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={358} style={t14}>Quanto por cento é?</text>
      <text x={52} y={380} style={t12}>parte sobre todo</text>
      <text x={52} y={400} style={t12}>18 de 24 = 18/24 = 3/4</text>
      <text x={52} y={424} style={t14}>= 75%</text>

      <rect x={245} y={336} width={190} height={126} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={358} style={t14}>Fator multiplicativo</text>
      <text x={257} y={380} style={t12}>desconto d%: × (1 - d/100)</text>
      <text x={257} y={400} style={t12}>aumento a%: × (1 + a/100)</text>
      <text x={257} y={424} style={t12}>tênis R$ 250 com 30%:</text>
      <text x={257} y={442} style={t14}>250 × 0,7 = R$ 175</text>

      <rect x={450} y={336} width={190} height={126} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={358} style={t14}>Seguidos se multiplicam</text>
      <text x={462} y={380} style={t12}>50% e depois 20% de</text>
      <text x={462} y={398} style={t12}>desconto: 0,5 × 0,8 = 0,4</text>
      <text x={462} y={424} style={t12}>é 60% de desconto,</text>
      <text x={462} y={442} style={t12}>e não 70%</text>

      <text x={40} y={496} style={t12}>Juros: simples contra compostos (R$ 1.000, 10% ao mês)</text>
      <rect x={40} y={508} width={600} height={70} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={532} style={t12}>simples: sempre 10% do valor do começo → R$ 1.300 em 3 meses</text>
      <text x={52} y={554} style={t12}>compostos: 1.100 → 1.210 → 1.331, a porcentagem incide sobre o que já cresceu (bola de neve)</text>
      <text x={52} y={570} style={t12}>Preço de antes: divida pelo fator, não tire a porcentagem do preço novo.</text>

      <Historia y={612} texto="História: Augusto cobra 1/100 em leilões · per cento vira % · jun. 1994: preços sobem 46,58%; com o Real, 6,08%" />
    </Moldura>
  )
}
