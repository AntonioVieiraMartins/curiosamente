import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Probabilidade simples em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-probabilidade-simples"
      titulo="Probabilidade simples em um olhar"
      desc="A chance de um evento é casos favoráveis divididos por casos possíveis, um número de 0 a 1. A chance de não acontecer é 1 menos a chance de acontecer. Dois dados têm 36 combinações e a soma 7 é a mais comum, com chance 1 sobre 6. Três moedas têm 8 sequências. Eventos independentes que acontecem juntos têm as chances multiplicadas. Com muitas repetições, a frequência se aproxima da chance."
      altura={520}
    >
      <text x={40} y={56} style={t12}>A régua da chance</text>
      <rect x={40} y={68} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>chance = casos favoráveis ÷ casos possíveis</text>
      <text x={52} y={114} style={t12}>0 = impossível · 1/2 = 50% · 1 = certo</text>

      <text x={40} y={160} style={t12}>Contando casos</text>
      <rect x={40} y={172} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={196} style={t14}>Um dado</text>
      <text x={52} y={216} style={t12}>6 casos possíveis</text>
      <text x={52} y={236} style={t12}>par: 3/6 = 1/2</text>
      <text x={52} y={254} style={t12}>maior que 4: 2/6 = 1/3</text>
      <rect x={245} y={172} width={190} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={196} style={t14}>Dois dados</text>
      <text x={257} y={216} style={t12}>6 × 6 = 36 combinações</text>
      <text x={257} y={236} style={t12}>soma 7: 6/36 = 1/6</text>
      <text x={257} y={254} style={t12}>soma 2 ou 12: 1/36</text>
      <rect x={450} y={172} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={196} style={t14}>Moedas</text>
      <text x={462} y={216} style={t12}>n moedas: 2 × ... × 2</text>
      <text x={462} y={236} style={t12}>3 moedas: 8 sequências</text>
      <text x={462} y={254} style={t12}>2 caras em 3: 3/8</text>

      <text x={40} y={294} style={t12}>Regras úteis</text>
      <rect x={40} y={306} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={330} style={t14}>Complementar</text>
      <text x={52} y={352} style={t12}>não acontecer = 1 − acontecer</text>
      <text x={52} y={372} style={t12}>pelo menos 1 cara em 3: 7/8</text>
      <rect x={350} y={306} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={330} style={t14}>Juntos e independentes</text>
      <text x={362} y={352} style={t12}>multiplique as chances</text>
      <text x={362} y={372} style={t12}>cara e 6: 1/2 × 1/6 = 1/12</text>

      <text x={40} y={420} style={t12}>Lei dos grandes números</text>
      <rect x={40} y={432} width={600} height={64} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={456} style={t14}>muitas repetições: a frequência se aproxima da chance</text>
      <text x={52} y={478} style={t12}>a moeda não tem memória: depois de 5 caras, ainda 50%</text>

      <Historia y={514} texto="História: Cardano, séc. 16 · Pascal e Fermat, 1654 · Huygens, 1657 · Bernoulli, 1713 · Laplace, 1812 · Kolmogorov, 1933" />
    </Moldura>
  )
}
