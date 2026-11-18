import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Logaritmo em um olhar": o log é a pergunta "2 elevado a quanto dá 64?"
export default function Infografico() {
  // Régua log: 1, 10, 100, 1.000, 1.000.000 em passos iguais
  const marcas = ['1', '10', '100', '1.000', '10⁴', '10⁵', '10⁶']
  return (
    <Moldura
      id="info-log"
      titulo="Logaritmo em um olhar"
      desc="O logaritmo responde a pergunta: elevado a quanto? Se 2 elevado a 5 é 32, então log na base 2 de 32 é 5. É o inverso do exponencial. Propriedades: o logaritmo do produto é a soma dos logaritmos, o do quociente é a diferença e o da potência multiplica o expoente. Para mudar de base, divide-se por outro logaritmo. Em base 2, log 8 = 3 e log 16 = 4, então 8 vezes 16 é 2 elevado a 7, 128. Escalas logarítmicas deixam potências de 10 em passos iguais: decibéis, Richter e pH. Para 1.000 opções são necessários 10 bits."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Logaritmo = o expoente. É a pergunta "elevado a quanto?"</text>

      <Caixa x={40} y={72} w={190} h={70} cor="amarelo" titulo="2⁵ = 32" sub="o expoente" grande />
      <Seta id="info-log" x1={232} y1={107} x2={268} y2={107} />
      <Seta id="info-log" x1={268} y1={118} x2={232} y2={118} />
      <Caixa x={270} y={72} w={190} h={70} cor="azul" titulo="log₂ 32 = 5" sub="a pergunta" grande />
      <text x={480} y={96} style={t12}>log₁₀ 1.000 = 3</text>
      <text x={480} y={116} style={t12}>log₃ 81 = 4</text>
      <text x={480} y={136} style={t12}>log₂ 64 = 6</text>

      <text x={40} y={174} style={t12}>Propriedades: o produto vira soma</text>
      <rect x={40} y={186} width={290} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={208} style={t14}>log(a · b) = log a + log b</text>
      <text x={52} y={232} style={t12}>log₂ 8 = 3 e log₂ 16 = 4</text>
      <text x={52} y={252} style={t12}>3 + 4 = 7 e 2⁷ = 128</text>
      <text x={52} y={278} style={t12}>8 × 16 = 128: somamos expoentes</text>

      <rect x={350} y={186} width={290} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={208} style={t14}>Mudança de base</text>
      <text x={362} y={232} style={t12}>log₂ 1.000 = log₁₀ 1.000 ÷ log₁₀ 2</text>
      <text x={362} y={252} style={t12}>= 3 ÷ 0,301 ≈ 9,97</text>
      <text x={362} y={278} style={t12}>2¹⁰ = 1.024: pouco menos que 10</text>

      <text x={40} y={340} style={t12}>Escala logarítmica: cada ×10 é um passo igual</text>
      <line x1={60} y1={374} x2={620} y2={374} stroke="var(--color-suave)" strokeWidth={1.5} />
      {marcas.map((m, i) => (
        <g key={m}>
          <line x1={80 + i * 90} y1={364} x2={80 + i * 90} y2={384} stroke="var(--color-suave)" strokeWidth={1.5} />
          <circle cx={80 + i * 90} cy={374} r={5} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
          <text x={80 + i * 90} y={406} textAnchor="middle" style={t12}>{m}</text>
        </g>
      ))}
      <text x={340} y={430} textAnchor="middle" style={t12}>de 1 a 1.000.000 em 7 marcas igualmente espaçadas</text>

      <text x={40} y={462} style={t12}>Onde aparece</text>
      <rect x={40} y={474} width={190} height={100} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={496} style={t14}>Decibéis</text>
      <text x={52} y={518} style={t12}>+10 dB: intensidade × 10</text>
      <text x={52} y={538} style={t12}>60 dB contra 30 dB:</text>
      <text x={52} y={556} style={t12}>1.000 vezes mais intenso</text>
      <rect x={245} y={474} width={190} height={100} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={496} style={t14}>Bits</text>
      <text x={257} y={518} style={t12}>1.000 opções:</text>
      <text x={257} y={538} style={t12}>2⁹ = 512 (pouco)</text>
      <text x={257} y={556} style={t12}>2¹⁰ = 1.024: 10 bits</text>
      <rect x={450} y={474} width={190} height={100} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={496} style={t14}>Resolver 2ˣ = 100</text>
      <text x={462} y={518} style={t12}>x = log₂ 100 = 2 ÷ 0,301</text>
      <text x={462} y={538} style={t12}>x ≈ 6,64</text>
      <text x={462} y={556} style={t12}>entre 2⁶ = 64 e 2⁷ = 128</text>

      <Historia y={614} texto="História: Napier em 1614 · tabela de base 10 de Briggs em 1617 · Euler e o número e (séc. 18)" />
    </Moldura>
  )
}
