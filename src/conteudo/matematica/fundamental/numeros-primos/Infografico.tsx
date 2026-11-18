import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Números primos em um olhar": peneira de Eratóstenes até 30
export default function Infografico() {
  const primos = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
  const nums = Array.from({ length: 30 }, (_, i) => i + 1)
  return (
    <Moldura
      id="info-pri"
      titulo="Números primos em um olhar"
      desc="Primo tem exatamente dois divisores, 1 e ele mesmo; composto tem mais de dois; o 1 não é nem um nem outro. O 2 é o único primo par. Na peneira de Eratóstenes, riscam-se os múltiplos de cada primo e o que sobra é primo. Para testar um número basta dividir pelos primos até a raiz dele: 97 é primo. Todo número é um produto de primos, de um único jeito: 84 é 2 ao quadrado vezes 3 vezes 7. Os primos nunca acabam, como provou Euclides. Multiplicar primos é fácil e desfazer é difícil, base do sistema RSA."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Peneira de Eratóstenes até 30: o que sobra é primo (dois divisores: 1 e ele mesmo)</text>
      {nums.map((n, i) => {
        const x = 40 + (i % 10) * 60
        const y = 72 + Math.floor(i / 10) * 44
        const p = primos.has(n)
        return (
          <g key={n}>
            <rect x={x} y={y} width={54} height={38} rx={8} fill={p ? cores.azul.fill : n === 1 ? cores.amarelo.fill : 'var(--color-fundo)'} stroke={p ? cores.azul.stroke : n === 1 ? cores.amarelo.stroke : 'var(--color-borda)'} />
            <text x={x + 27} y={y + 19} textAnchor="middle" dominantBaseline="central" style={{ ...t14, fill: p ? 'var(--color-texto)' : 'var(--color-suave)', fontWeight: p ? 700 : 400 }}>{n}</text>
          </g>
        )
      })}
      <text x={40} y={214} style={t12}>O 1 não é primo nem composto (um só divisor). O 2 é o único primo par. Todo ímpar é primo? Falso: 9, 15, 21, 25...</text>

      <text x={40} y={248} style={t12}>Três ferramentas</text>
      <rect x={40} y={260} width={190} height={124} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={282} style={t14}>É primo? Teste o 97</text>
      <text x={52} y={304} style={t12}>√97 fica entre 9 e 10</text>
      <text x={52} y={322} style={t12}>teste até 9: não divide</text>
      <text x={52} y={340} style={t12}>por 2, 3, 5 nem 7</text>
      <text x={52} y={364} style={t14}>97 é primo</text>

      <rect x={245} y={260} width={190} height={124} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={282} style={t14}>Desmontar: 84</text>
      <text x={257} y={304} style={t12}>84 ÷ 2 = 42 ÷ 2 = 21</text>
      <text x={257} y={322} style={t12}>21 ÷ 3 = 7 (primo)</text>
      <text x={257} y={346} style={t12}>84 = 2² × 3 × 7</text>
      <text x={257} y={366} style={t12}>único jeito: átomos dos números</text>

      <rect x={450} y={260} width={190} height={124} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={282} style={t14}>Quantos divisores?</text>
      <text x={462} y={304} style={t12}>60 = 2² × 3 × 5</text>
      <text x={462} y={322} style={t12}>(2+1) × (1+1) × (1+1)</text>
      <text x={462} y={346} style={t14}>= 12 divisores</text>

      <rect x={40} y={402} width={290} height={90} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={424} style={t14}>Os primos nunca acabam</text>
      <text x={52} y={446} style={t12}>2 × 3 × 5 × 7 × 11 × 13 + 1 = 30.031</text>
      <text x={52} y={464} style={t12}>não é primo (59 × 509), mas traz</text>
      <text x={52} y={482} style={t12}>fatores que não estavam na lista</text>

      <rect x={350} y={402} width={290} height={90} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={424} style={t14}>Simplificar com primos: 36/60</text>
      <text x={362} y={446} style={t12}>36 = 2 × 2 × 3 × 3 e 60 = 2 × 2 × 3 × 5</text>
      <text x={362} y={464} style={t12}>corte dois 2 e um 3: sobra</text>
      <text x={362} y={482} style={t14}>3/5</text>

      <text x={40} y={522} style={t12}>Segurança: multiplicar primos é fácil, desfazer é difícil (RSA).</text>
      <text x={40} y={542} style={t12}>Cuidado: o 1 não é primo, e não é preciso testar até a metade: só até a raiz.</text>

      <Historia y={612} texto="História: peneira (séc. 3 a.C.) · Euclides: não acabam (c. 300 a.C.) · computadores desde 1951 · RSA" />
    </Moldura>
  )
}
