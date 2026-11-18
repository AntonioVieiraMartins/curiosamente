import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Equações do 1º grau em um olhar": balança em equilíbrio
export default function Infografico() {
  return (
    <Moldura
      id="info-eq"
      titulo="Equações do 1º grau em um olhar"
      desc="Uma equação é uma igualdade com uma incógnita, o x. Resolver é achar o valor que a torna verdadeira. Regra da balança: o que se faz de um lado, faz-se do outro. Desfaça as operações na ordem contrária: primeiro somar e subtrair, depois multiplicar e dividir. Em 3x + 5 = 20, tira 5 e dá 3x = 15, divide por 3 e dá x = 5. Se o x está nos dois lados, junte os x de um lado e os números do outro. A solução pode ser negativa ou fracionária. Sempre confira trocando x pelo resultado. Para problemas, traduza a história para a equação."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Uma balança em equilíbrio: x + 3 = 8</text>

      <line x1={340} y1={90} x2={340} y2={170} stroke="var(--color-suave)" strokeWidth={2} />
      <line x1={140} y1={96} x2={540} y2={96} stroke="var(--color-suave)" strokeWidth={3} />
      <polygon points="320,170 360,170 340,150" fill="var(--color-suave)" />
      <line x1={140} y1={96} x2={140} y2={120} stroke="var(--color-suave)" strokeWidth={1.5} />
      <line x1={540} y1={96} x2={540} y2={120} stroke="var(--color-suave)" strokeWidth={1.5} />
      <rect x={80} y={120} width={120} height={54} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <rect x={480} y={120} width={120} height={54} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={140} y={152} textAnchor="middle" style={t14}>x + 3</text>
      <text x={540} y={152} textAnchor="middle" style={t14}>8</text>
      <text x={340} y={196} textAnchor="middle" style={t12}>tire 3 dos dois lados: x = 5. Confira: 5 + 3 = 8</text>

      <text x={40} y={236} style={t12}>Desfazer na ordem contrária: 3x + 5 = 20</text>
      <rect x={40} y={248} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={272} style={t12}>3x + 5 = 20  →  tire 5: 3x = 15  →  divida por 3: x = 5</text>
      <text x={52} y={294} style={t12}>conferência: 3 × 5 + 5 = 20 ✓ · x/3 + 2 = 6: tire 2 (x/3 = 4) e multiplique por 3: x = 12</text>

      <text x={40} y={342} style={t12}>Quando o x aparece nos dois lados, ou o resultado sai estranho</text>
      <rect x={40} y={354} width={190} height={114} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={376} style={t14}>x nos dois lados</text>
      <text x={52} y={398} style={t12}>5x + 2 = 2x + 11</text>
      <text x={52} y={416} style={t12}>3x + 2 = 11 → 3x = 9</text>
      <text x={52} y={438} style={t14}>x = 3 (17 = 17)</text>

      <rect x={245} y={354} width={190} height={114} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={376} style={t14}>Solução negativa</text>
      <text x={257} y={398} style={t12}>x + 9 = 4</text>
      <text x={257} y={416} style={t12}>x = 4 − 9</text>
      <text x={257} y={438} style={t14}>x = −5</text>

      <rect x={450} y={354} width={190} height={114} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={376} style={t14}>Erros comuns</text>
      <text x={462} y={398} style={t12}>fazer só de um lado</text>
      <text x={462} y={416} style={t12}>errar o sinal</text>
      <text x={462} y={434} style={t12}>dividir só um termo</text>
      <text x={462} y={452} style={t12}>não conferir</text>

      <text x={40} y={496} style={t12}>Da história para a equação ("dobro" é 2x, "é" é =)</text>
      <rect x={40} y={508} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={530} style={t14}>Celular parcelado</text>
      <text x={52} y={550} style={t12}>300 + 150x = 1.200 → 150x = 900</text>
      <text x={52} y={568} style={t14}>x = 6 parcelas</text>
      <rect x={350} y={508} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={530} style={t14}>Corrida de R$ 31</text>
      <text x={362} y={550} style={t12}>6 + 2,5x = 31 → 2,5x = 25</text>
      <text x={362} y={568} style={t14}>x = 10 km</text>

      <Historia y={612} texto="História: papiro de Rhind (c. 1650 a.C.) · Al-Khwarizmi, 825 · Recorde inventa o = em 1557 · Viète e Descartes usam letras" />
    </Moldura>
  )
}
