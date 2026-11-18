import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Multiplicação em um olhar": um retângulo de bolinhas 3 × 4
export default function Infografico() {
  const bolas: [number, number][] = []
  for (let l = 0; l < 3; l++) for (let c = 0; c < 4; c++) bolas.push([66 + c * 28, 110 + l * 28])
  return (
    <Moldura
      id="info-mul"
      titulo="Multiplicação em um olhar"
      desc="Multiplicar é somar grupos iguais e também contar um retângulo: 3 fileiras de 4 dão 12, e girar o retângulo não muda o total, por isso a ordem dos fatores não altera o produto. Truques: por 2 é o dobro, por 10 acrescenta um zero, por 5 é a metade do por 10, por 4 é o dobro do dobro, por 9 é por 10 menos o número. A distributiva quebra 7 vezes 13 em 7 vezes 10 mais 7 vezes 3, que dá 91. Na conta armada se multiplica casa por casa, com o vai. Estimar antes ajuda a achar erros."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Fatores e produto: 3 × 4 = 12</text>

      <rect x={40} y={70} width={170} height={130} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      {bolas.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={10} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />)}
      <text x={125} y={192} textAnchor="middle" style={t12}>3 fileiras de 4</text>

      <Caixa x={230} y={86} w={130} h={56} cor="cinza" titulo="4 + 4 + 4" sub="soma repetida" />
      <Caixa x={230} y={152} w={130} h={48} cor="cinza" titulo="3 × 4 = 12" sub="" />
      <text x={380} y={100} style={t14}>Girar não muda nada</text>
      <text x={380} y={122} style={t12}>4 × 3 também é 12</text>
      <text x={380} y={142} style={t12}>comutativa: a ordem dos</text>
      <text x={380} y={160} style={t12}>fatores não muda o produto</text>
      <text x={380} y={186} style={t12}>x1 não muda; x0 dá zero</text>

      <text x={40} y={236} style={t12}>Truques da tabuada</text>
      <Caixa x={40} y={248} w={110} h={58} cor="azul" titulo="× 2" sub="o dobro" />
      <Caixa x={160} y={248} w={110} h={58} cor="azul" titulo="× 4" sub="dobro do dobro" />
      <Caixa x={280} y={248} w={110} h={58} cor="azul" titulo="× 5" sub="metade do × 10" />
      <Caixa x={400} y={248} w={110} h={58} cor="azul" titulo="× 10" sub="mais um zero" />
      <Caixa x={520} y={248} w={120} h={58} cor="coral" titulo="× 9" sub="× 10 menos o número" />
      <text x={40} y={330} style={t12}>7 × 9 = 70 - 7 = 63 e os algarismos somam 9 (6 + 3). Na tabuada, só falta decorar 6×7, 6×8 e 7×8.</text>

      <text x={40} y={368} style={t12}>Duas ferramentas para contas maiores</text>
      <rect x={40} y={380} width={285} height={120} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={54} y={402} style={t14}>Distributiva: 7 × 13</text>
      <text x={54} y={426} style={t12}>quebre o 13 em 10 + 3</text>
      <text x={54} y={446} style={t12}>7 × 10 = 70 e 7 × 3 = 21</text>
      <text x={54} y={474} style={t14}>70 + 21 = 91</text>

      <rect x={355} y={380} width={285} height={120} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={369} y={402} style={t14}>Conta armada: 347 × 6</text>
      <text x={369} y={426} style={t12}>7 × 6 = 42: escreve 2, vai 4</text>
      <text x={369} y={444} style={t12}>4 × 6 = 24 + 4 = 28: escreve 8, vai 2</text>
      <text x={369} y={462} style={t12}>3 × 6 = 18 + 2 = 20</text>
      <text x={369} y={488} style={t14}>= 2.082</text>

      <rect x={40} y={516} width={600} height={56} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={538} style={t14}>Cuidado e conferência</text>
      <text x={52} y={558} style={t12}>Por 10, 100, 1.000: acrescente zeros. 40 × 50: faça 4 × 5 = 20 e junte dois zeros = 2.000.</text>

      <Historia y={604} texto="História: tabuadas babilônicas há cerca de 4.000 anos · bambu chinês c. 305 a.C. · sinal × em 1618 (Edward Wright)" />
    </Moldura>
  )
}
