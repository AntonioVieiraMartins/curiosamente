import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Educação financeira em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-financeira"
      titulo="Educação financeira em um olhar"
      desc="Renda menos gastos dá o saldo. A regra 50/30/20 divide a renda em necessidades, desejos e poupança. Meta dividida pelo valor mensal dá o tempo para juntar. Juros simples incidem sobre o valor inicial e os compostos também sobre os juros. Parcelar custa a soma das parcelas menos o preço à vista. O preço por unidade permite comparar embalagens. A inflação faz o dinheiro parado comprar menos."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Renda − gastos = saldo (R$ 2.500 pela regra 50/30/20)</text>
      <rect x={40} y={68} width={300} height={72} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>50% necessidades</text>
      <text x={52} y={114} style={t12}>R$ 1.250: moradia, comida, saúde</text>
      <rect x={350} y={68} width={150} height={72} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={360} y={92} style={t14}>30% desejos</text>
      <text x={360} y={114} style={t12}>R$ 750</text>
      <rect x={510} y={68} width={130} height={72} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={520} y={92} style={t14}>20% guardar</text>
      <text x={520} y={114} style={t12}>R$ 500</text>

      <text x={40} y={170} style={t12}>Meta ÷ valor por mês = meses · reserva = 3 a 6 meses de gastos</text>
      <rect x={40} y={182} width={600} height={52} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={206} style={t14}>R$ 2.400 ÷ R$ 150 = 16 meses</text>
      <text x={52} y={224} style={t12}>para 12 meses: R$ 2.400 ÷ 12 = R$ 200 por mês</text>

      <text x={40} y={264} style={t12}>Juros: R$ 1.000 a 2% ao mês, por 3 meses</text>
      <rect x={40} y={276} width={290} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={300} style={t14}>Simples: R$ 1.060</text>
      <text x={52} y={322} style={t12}>R$ 20 por mês, sempre</text>
      <text x={52} y={342} style={t12}>sobre o valor inicial</text>
      <rect x={350} y={276} width={290} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={300} style={t14}>Compostos: R$ 1.061,21</text>
      <text x={362} y={322} style={t12}>M = C × (1 + i)^n</text>
      <text x={362} y={342} style={t12}>juros sobre juros</text>

      <text x={40} y={384} style={t12}>Comparar antes de comprar</text>
      <rect x={40} y={396} width={290} height={70} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={420} style={t14}>Parcelado: 12 × 120</text>
      <text x={52} y={440} style={t12}>= 1.440 − 1.200 = R$ 240 a mais</text>
      <text x={52} y={458} style={t12}>(20% de juros embutidos)</text>
      <rect x={350} y={396} width={290} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={420} style={t14}>Preço por unidade</text>
      <text x={362} y={440} style={t12}>preço ÷ quantidade (mesma unidade)</text>
      <text x={362} y={458} style={t12}>800 g por 9,60 = R$ 12/kg</text>

      <text x={40} y={492} style={t12}>Inflação 5% ao ano, 10 anos: R$ 100 passam a valer cerca de R$ 61</text>

      <Historia y={524} texto="História: moedas na Lídia, c. 600 a.C. · papel-moeda na China, séc. XI · Plano Real, 1994 · Pix, 2020" />
    </Moldura>
  )
}
