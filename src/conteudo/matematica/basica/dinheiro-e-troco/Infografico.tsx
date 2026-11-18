import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Dinheiro e troco em um olhar": o troco contado para a frente
export default function Infografico() {
  return (
    <Moldura
      id="info-din"
      titulo="Dinheiro e troco em um olhar"
      desc="Valores em reais têm duas casas depois da vírgula, os centavos: R$ 37,40 são 3.740 centavos. Troco é o valor pago menos o preço. O jeito do caixa é contar para a frente: de 37,40 até 38 são 60 centavos, até 40 são 2 reais e até 50 são 10 reais, total R$ 12,60. Para conferir, preço mais troco deve dar o valor pago. No carrinho, multiplique preço por quantidade e some. Para dividir uma conta, divida o total pelas pessoas. O preço por unidade mostra qual embalagem compensa. No parcelado, o total é parcela vezes número de parcelas, e a diferença para o à vista são os juros. Orçamento: receita menos despesas é o que dá para guardar."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Troco: conte para a frente, do preço até o valor pago (R$ 37,40 pagos com R$ 50)</text>

      <Caixa x={40} y={72} w={110} h={56} cor="azul" titulo="37,40" sub="o preço" />
      <Seta id="info-din" x1={152} y1={100} x2={178} y2={100} />
      <Caixa x={180} y={72} w={100} h={56} cor="amarelo" titulo="38,00" sub="+ 0,60" />
      <Seta id="info-din" x1={282} y1={100} x2={308} y2={100} />
      <Caixa x={310} y={72} w={100} h={56} cor="amarelo" titulo="40,00" sub="+ 2,00" />
      <Seta id="info-din" x1={412} y1={100} x2={438} y2={100} />
      <Caixa x={440} y={72} w={100} h={56} cor="amarelo" titulo="50,00" sub="+ 10,00" />
      <Caixa x={550} y={72} w={90} h={56} cor="verde" titulo="12,60" sub="o troco" />
      <text x={40} y={152} style={t12}>0,60 + 2,00 + 10,00 = R$ 12,60 · confira: preço + troco = valor pago (37,40 + 12,60 = 50,00)</text>

      <text x={40} y={186} style={t12}>As peças do real: comece pelas maiores</text>
      <Caixa x={40} y={198} w={290} h={58} cor="cinza" titulo="Notas: 2, 5, 10, 20, 50, 100, 200" sub="R$ 85,25 = 50 + 20 + 10 + 5 + 0,25 (5 peças)" />
      <Caixa x={350} y={198} w={290} h={58} cor="cinza" titulo="Moedas: 5, 10, 25, 50 centavos e R$ 1" sub="R$ 3 = 12 moedas de 25 centavos" />
      <text x={40} y={280} style={t12}>centavo = centésimo do real · 100 centavos formam R$ 1 · R$ 37,40 = 3.740 centavos</text>

      <text x={40} y={312} style={t12}>Compras do dia a dia</text>
      <rect x={40} y={324} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={346} style={t14}>Carrinho</text>
      <text x={52} y={368} style={t12}>preço × quantidade, e soma</text>
      <text x={52} y={388} style={t12}>6 pães × 0,80 = 4,80</text>
      <text x={52} y={408} style={t12}>+ 5,20 + 10,90 = R$ 20,90</text>
      <text x={52} y={430} style={t12}>troco de 50: R$ 29,10</text>
      <rect x={245} y={324} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={346} style={t14}>Dividir a conta</text>
      <text x={257} y={368} style={t12}>total ÷ pessoas</text>
      <text x={257} y={388} style={t12}>pizza de R$ 63 entre 4:</text>
      <text x={257} y={408} style={t12}>63 ÷ 4 = R$ 15,75 cada</text>
      <text x={257} y={430} style={t12}>arredonde para o centavo</text>
      <rect x={450} y={324} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={346} style={t14}>Preço por quilo</text>
      <text x={462} y={368} style={t12}>500 g por R$ 6: R$ 12/kg</text>
      <text x={462} y={388} style={t12}>2 kg por R$ 20: R$ 10/kg</text>
      <text x={462} y={410} style={t12}>mas só se for usar tudo!</text>

      <text x={40} y={470} style={t12}>Decidir: parcelar, guardar</text>
      <rect x={40} y={482} width={290} height={96} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={504} style={t14}>À vista ou parcelado?</text>
      <text x={52} y={526} style={t12}>R$ 600 contra 6 × R$ 110 = R$ 660</text>
      <text x={52} y={546} style={t12}>diferença R$ 60 (10%): os juros</text>
      <text x={52} y={566} style={t12}>compare o TOTAL, e não a parcela</text>
      <rect x={350} y={482} width={290} height={96} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={504} style={t14}>Orçamento</text>
      <text x={362} y={526} style={t12}>receita − despesas = poupança</text>
      <text x={362} y={546} style={t12}>140 − 80 = R$ 60 por mês</text>
      <text x={362} y={566} style={t12}>em 5 meses: R$ 300</text>

      <Historia y={612} texto="História: escambo e coincidência de desejos · 1ªs moedas (c. 650 a 600 a.C.) · papel-moeda na China · Real, 1/7/1994" />
    </Moldura>
  )
}
