import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Adição e subtração em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-add"
      titulo="Adição e subtração em um olhar"
      desc="O vai um é a troca de 10 em 10: em 59 + 27, 9 + 7 = 16, escreve 6 e sobe 1 dezena, e o resultado é 86. O empréstimo é a troca ao contrário: em 52 - 27, uma dezena vira 10 unidades e o resultado é 25. Somar e subtrair são inversas: 8 + 5 = 13, 5 + 8 = 13, 13 - 5 = 8 e 13 - 8 = 5. A soma tem ordem livre, elemento neutro zero e pode ser agrupada; a subtração não é comutativa. O troco se conta para a frente. Estimar com arredondamento protege contra erros."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Duas trocas de 10 em 10, uma para cima e outra para baixo</text>

      <rect x={40} y={70} width={285} height={150} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={54} y={92} style={t14}>Vai um (soma): 59 + 27</text>
      <text x={54} y={116} style={t12}>unidades: 9 + 7 = 16</text>
      <text x={54} y={134} style={t12}>escreve 6 e sobe 1 dezena</text>
      <text x={54} y={158} style={t12}>dezenas: 5 + 2 + 1 = 8</text>
      <text x={54} y={192} style={t14}>= 86</text>
      <text x={120} y={192} style={t12}>(1 dezena = 10 unidades)</text>

      <rect x={355} y={70} width={285} height={150} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={369} y={92} style={t14}>Empréstimo (subtração): 52 - 27</text>
      <text x={369} y={116} style={t12}>2 - 7 não dá: 1 dezena vira</text>
      <text x={369} y={134} style={t12}>10 unidades, ficam 4 e 12</text>
      <text x={369} y={158} style={t12}>12 - 7 = 5 e 4 - 2 = 2</text>
      <text x={369} y={192} style={t14}>= 25</text>
      <text x={435} y={192} style={t12}>(é uma troca, não um favor)</text>

      <text x={40} y={256} style={t12}>Família de fatos: um trio, quatro contas</text>
      <Caixa x={40} y={268} w={80} h={50} cor="amarelo" titulo="8" sub="parcela" />
      <Caixa x={140} y={268} w={80} h={50} cor="amarelo" titulo="5" sub="parcela" />
      <Caixa x={240} y={268} w={80} h={50} cor="azul" titulo="13" sub="soma" />
      <Seta id="info-add" x1={122} y1={293} x2={138} y2={293} />
      <Seta id="info-add" x1={222} y1={293} x2={238} y2={293} />
      <text x={350} y={284} style={t12}>8 + 5 = 13  ·  5 + 8 = 13</text>
      <text x={350} y={306} style={t12}>13 - 5 = 8  ·  13 - 8 = 5</text>
      <text x={40} y={346} style={t12}>Subtrair desfaz a soma: confira somando de volta (prova real).</text>

      <text x={40} y={382} style={t12}>Termos e regras</text>
      <rect x={40} y={394} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={416} style={t14}>Subtração</text>
      <text x={52} y={438} style={t12}>15 - 6 = 9</text>
      <text x={52} y={458} style={t12}>15 minuendo</text>
      <text x={52} y={476} style={t12}>6 subtraendo</text>
      <text x={52} y={494} style={t12}>9 diferença</text>
      <text x={52} y={514} style={t12}>tirar, comparar, completar</text>

      <rect x={245} y={394} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={416} style={t14}>Propriedades da soma</text>
      <text x={257} y={438} style={t12}>ordem livre: 3 + 5 = 5 + 3</text>
      <text x={257} y={458} style={t12}>agrupa como quiser</text>
      <text x={257} y={476} style={t12}>zero não muda nada</text>
      <text x={257} y={504} style={t12}>8 - 3 não é 3 - 8</text>

      <rect x={450} y={394} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={416} style={t14}>Troco: conte pra frente</text>
      <text x={462} y={438} style={t12}>pagou 50, lanche 37</text>
      <text x={462} y={458} style={t12}>37 → 40: +3</text>
      <text x={462} y={476} style={t12}>40 → 50: +10</text>
      <text x={462} y={498} style={t14}>troco 13</text>

      <rect x={40} y={540} width={600} height={48} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={560} style={t14}>Antes de calcular, estime</text>
      <text x={52} y={578} style={t12}>4.738 + 2.291 é perto de 4.700 + 2.300 = 7.000. O exato é 7.029: plausível.</text>

      <Historia y={620} texto="História: ábaco na Suméria (2700 a 2300 a.C.) · zero na soma em 628 · Pascal soma com rodas em 1642" />
    </Moldura>
  )
}
