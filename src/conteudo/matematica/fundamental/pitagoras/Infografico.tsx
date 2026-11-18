import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Teorema de Pitágoras em um olhar": triângulo 3-4-5 com os três quadrados
export default function Infografico() {
  const u = 22 // pixels por unidade
  const A = [100, 250] // ângulo reto
  const B = [100 + 4 * u, 250] // fim do cateto de 4
  const C = [100, 250 - 3 * u] // fim do cateto de 3
  return (
    <Moldura
      id="info-pit"
      titulo="Teorema de Pitágoras em um olhar"
      desc="Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a ao quadrado mais b ao quadrado é c ao quadrado. No triângulo 3, 4, 5, as áreas 9 e 16 somam 25. Para a hipotenusa, c é a raiz de a² + b². Para um cateto, subtraia. A recíproca vale: se a² + b² = c², o triângulo é retângulo. Ternos pitagóricos: 3-4-5, 5-12-13, 8-15-17 e 7-24-25. Aplicações: a escada, a diagonal da tela e a distância entre pontos. Erros: somar os lados em vez dos quadrados e esquecer a raiz."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Em todo triângulo retângulo: a² + b² = c²</text>

      <rect x={A[0]} y={A[1]} width={4 * u} height={4 * u} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <rect x={A[0] - 3 * u} y={C[1]} width={3 * u} height={3 * u} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <polygon points={`${A} ${B} ${C}`} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} strokeWidth={2} />
      <rect x={A[0] + 8} y={A[1] - 14} width={8} height={8} fill="none" stroke="var(--color-texto)" strokeWidth={1} />
      <text x={A[0] + 2 * u} y={A[1] + 2 * u + 4} textAnchor="middle" style={t14}>16</text>
      <text x={A[0] - 1.5 * u} y={C[1] + 1.5 * u + 5} textAnchor="middle" style={t14}>9</text>
      <text x={A[0] + 2 * u} y={A[1] - 4} textAnchor="middle" style={t12}>cateto 4</text>
      <text x={A[0] + 10} y={A[1] - 1.4 * u} style={t12}>3</text>
      <text x={(B[0] + C[0]) / 2 + 12} y={(B[1] + C[1]) / 2 - 6} style={t12}>hipotenusa 5</text>

      <text x={260} y={110} style={t14}>Duas áreas somam a terceira</text>
      <text x={260} y={134} style={t12}>3² + 4² = 9 + 16 = 25 = 5²</text>
      <text x={260} y={156} style={t12}>a hipotenusa é sempre o maior lado,</text>
      <text x={260} y={174} style={t12}>oposta ao ângulo reto (quadradinho)</text>
      <text x={260} y={202} style={t12}>c = √(a² + b²) · cateto: a² = c² − b²</text>
      <text x={260} y={222} style={t12}>vale só com ângulo de 90°</text>

      <text x={40} y={356} style={t12}>Usando o teorema</text>
      <rect x={40} y={368} width={190} height={110} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={390} style={t14}>Diagonal 9 × 12</text>
      <text x={52} y={412} style={t12}>81 + 144 = 225</text>
      <text x={52} y={434} style={t14}>√225 = 15 cm</text>
      <text x={52} y={460} style={t12}>tela 40 × 30: 50 cm (≈ 20")</text>
      <rect x={245} y={368} width={190} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={390} style={t14}>Escada de 5 m</text>
      <text x={257} y={412} style={t12}>pé a 3 m da parede</text>
      <text x={257} y={434} style={t12}>h² = 25 − 9 = 16</text>
      <text x={257} y={456} style={t14}>h = 4 m</text>
      <rect x={450} y={368} width={190} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={390} style={t14}>Distância no plano</text>
      <text x={462} y={412} style={t12}>(1, 2) e (4, 6): 3 e 4</text>
      <text x={462} y={434} style={t12}>d² = 9 + 16 = 25</text>
      <text x={462} y={456} style={t14}>d = 5</text>

      <rect x={40} y={494} width={290} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={516} style={t14}>É retângulo? 7, 24 e 25</text>
      <text x={52} y={538} style={t12}>7² + 24² = 49 + 576 = 625 = 25²</text>
      <text x={52} y={558} style={t12}>sim. Ternos: 3-4-5, 5-12-13, 8-15-17, 7-24-25</text>
      <rect x={350} y={494} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={516} style={t14}>Erros comuns</text>
      <text x={362} y={536} style={t12}>somar os lados (a + b = c)</text>
      <text x={362} y={552} style={t12}>esquecer a raiz · trocar a hipotenusa</text>
      <text x={362} y={568} style={t12}>usar em triângulo não retângulo</text>

      <Historia y={612} texto="História: Plimpton 322 (c. 1800 a.C.) · Sulba Sutra (Índia) · Euclides, Elementos I.47 (c. 300 a.C.) · Zhoubi (China)" />
    </Moldura>
  )
}
