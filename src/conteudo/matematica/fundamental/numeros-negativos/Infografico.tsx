import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Números negativos em um olhar": reta de -8 a 3
export default function Infografico() {
  const px = (n: number) => 70 + (n + 8) * 48
  return (
    <Moldura
      id="info-neg"
      titulo="Números negativos em um olhar"
      desc="Na reta numérica o zero é um ponto de referência, os negativos ficam à esquerda e quanto mais à esquerda, menor: menos 8 é menor que menos 5, menor que menos 1, menor que 0, menor que 3. Oposto é o reflexo no espelho do zero e módulo é a distância até o zero. Somar com mesmo sinal junta tudo; com sinais diferentes, os pares se anulam e sobra a diferença. Subtrair é somar o oposto: menos 6 menos menos 9 é menos 6 mais 9, que dá 3. Na multiplicação, sinais iguais dão positivo e diferentes dão negativo. Não se divide por zero."
      altura={640}
    >
      <text x={40} y={56} style={t12}>O zero é um ponto de referência; os negativos ficam do outro lado</text>

      <line x1={50} y1={110} x2={630} y2={110} stroke="var(--color-suave)" strokeWidth={1.5} />
      {[-8, -5, -1, 0, 3].map((n) => (
        <g key={n}>
          <circle cx={px(n)} cy={110} r={6} fill={n < 0 ? cores.coral.fill : n === 0 ? cores.amarelo.fill : cores.verde.fill} stroke={n < 0 ? cores.coral.stroke : n === 0 ? cores.amarelo.stroke : cores.verde.stroke} strokeWidth={1.5} />
          <text x={px(n)} y={140} textAnchor="middle" style={t14}>{n < 0 ? `−${-n}` : n}</text>
        </g>
      ))}
      <text x={60} y={86} style={t12}>menor</text>
      <text x={600} y={86} textAnchor="end" style={t12}>maior</text>
      <text x={340} y={170} textAnchor="middle" style={t12}>−8 &lt; −5 &lt; −1 &lt; 0 &lt; 3 · oposto: espelho do zero · módulo: distância até o zero</text>

      <text x={40} y={206} style={t12}>Somar e subtrair</text>
      <rect x={40} y={218} width={190} height={130} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={240} style={t14}>Mesmo sinal</text>
      <text x={52} y={262} style={t12}>junte tudo</text>
      <text x={52} y={282} style={t12}>(−4) + (−3) = −7</text>
      <text x={52} y={306} style={t12}>duas dívidas viram</text>
      <text x={52} y={322} style={t12}>uma dívida maior</text>

      <rect x={245} y={218} width={190} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={240} style={t14}>Sinais diferentes</text>
      <text x={257} y={262} style={t12}>pares se anulam,</text>
      <text x={257} y={280} style={t12}>sobra a diferença</text>
      <text x={257} y={304} style={t12}>(−8) + 3 = −5</text>

      <rect x={450} y={218} width={190} height={130} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={240} style={t14}>Subtrair = somar o oposto</text>
      <text x={462} y={262} style={t12}>7 − (−2) = 7 + 2 = 9</text>
      <text x={462} y={282} style={t12}>−6 − (−9) = −6 + 9 = 3</text>
      <text x={462} y={306} style={t12}>tirar dívida = ganhar crédito</text>

      <text x={40} y={384} style={t12}>Multiplicar e dividir: o sinal</text>
      <rect x={40} y={396} width={290} height={100} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={418} style={t14}>iguais dão +, diferentes dão −</text>
      <text x={52} y={442} style={t12}>(−4) × 3 = −12</text>
      <text x={52} y={462} style={t12}>(−6) × (−5) = 30</text>
      <text x={52} y={482} style={t12}>vale também na divisão</text>

      <rect x={350} y={396} width={290} height={100} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={418} style={t14}>Cuidados</text>
      <text x={362} y={442} style={t12}>−2 + 3 × (−4): × primeiro = −14</text>
      <text x={362} y={462} style={t12}>não se divide por zero</text>
      <text x={362} y={482} style={t12}>atenção com sinal em potências</text>

      <text x={40} y={528} style={t12}>No dia a dia</text>
      <text x={40} y={550} style={t12}>Freezer perto de −18 °C · Vostok, −89,2 °C (1983) · saldo de gols 40 − 52 = −12</text>
      <text x={40} y={570} style={t12}>Brasília é UTC−3, Tóquio é UTC+9 · cheque especial: saldo negativo é dívida com juros</text>

      <Historia y={612} texto="História: varetas dos Han · Diofanto: absurda (séc. III) · Brahmagupta c. 630 · Fibonacci, 1202" />
    </Moldura>
  )
}
