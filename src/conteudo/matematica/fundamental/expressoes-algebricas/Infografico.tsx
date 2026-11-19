import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Letras na matemática em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-letras"
      titulo="Letras na matemática em um olhar"
      desc="Uma letra (variável) ocupa o lugar de qualquer número e permite escrever regras gerais, como P = 4l. Uma expressão algébrica é uma conta com letras. 3n quer dizer 3 vezes n, não trinta e n. Valor numérico: troque a letra pelo número e calcule. Termos semelhantes se juntam: 3x + 4x = 7x. A distributiva diz que 2(n + 3) = 2n + 6. Duas expressões são equivalentes se dão o mesmo valor para qualquer n. Na regra dos palitos, 3n + 1 palitos formam n quadrados. Para achar erros, teste com um número fácil."
      altura={560}
    >
      <text x={40} y={56} style={t12}>A letra é uma caixa esperando um número</text>
      <rect x={40} y={68} width={190} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>3n + 2</text>
      <text x={52} y={112} style={t12}>3 caixas n e 2 soltas</text>
      <text x={52} y={132} style={t12}>n = 4 → 3 × 4 + 2 = 14</text>
      <rect x={245} y={68} width={190} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={92} style={t14}>Cuidado</text>
      <text x={257} y={112} style={t12}>3n é 3 × n (12)</text>
      <text x={257} y={132} style={t12}>não é 34</text>
      <rect x={450} y={68} width={190} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={92} style={t14}>Fórmula</text>
      <text x={462} y={112} style={t12}>P = 4l (quadrado)</text>
      <text x={462} y={132} style={t12}>F = 1,8C + 32</text>

      <text x={40} y={176} style={t12}>Juntar só o que combina</text>
      <rect x={40} y={188} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={212} style={t14}>3x + 4x = 7x</text>
      <text x={52} y={232} style={t12}>mesma letra: junta</text>
      <text x={52} y={254} style={t12}>5a + 2b + 3a − b = 8a + b</text>
      <rect x={350} y={188} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={212} style={t14}>3x + 4y fica 3x + 4y</text>
      <text x={362} y={232} style={t12}>letras diferentes não se misturam</text>
      <text x={362} y={254} style={t12}>maçã com banana não vira 7</text>

      <text x={40} y={302} style={t12}>Distributiva: o de fora multiplica cada termo de dentro</text>
      <rect x={40} y={314} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={338} style={t14}>2(n + 3) = 2n + 6</text>
      <text x={52} y={360} style={t12}>erro comum: 2(n + 3) = 2n + 3. Teste n = 1: 8 contra 5, então não são equivalentes.</text>

      <text x={40} y={408} style={t12}>Uma regra para qualquer tamanho: quadrados de palitos</text>
      <rect x={40} y={420} width={290} height={72} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={444} style={t14}>palitos = 3n + 1</text>
      <text x={52} y={464} style={t12}>1 → 4, 2 → 7, 3 → 10</text>
      <text x={52} y={482} style={t12}>10 quadrados → 31 palitos</text>
      <rect x={350} y={420} width={290} height={72} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={444} style={t14}>Equivalentes ou não?</text>
      <text x={362} y={464} style={t12}>n + n e 2n: sempre iguais</text>
      <text x={362} y={482} style={t12}>n × n e 2n: só coincidem em n = 2</text>

      <Historia y={532} texto="História: Diofanto, c. 250 · Viète usa letras, 1591 · Descartes fixa x, y, z (desconhecido) e a, b, c (conhecido), 1637" />
    </Moldura>
  )
}
