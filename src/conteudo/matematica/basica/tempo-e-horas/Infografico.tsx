import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Tempo e horas em um olhar": relógio, base 60, duração e fusos
export default function Infografico() {
  const pt = (ang: number, r: number): [number, number] => [110 + r * Math.sin((ang * Math.PI) / 180), 130 - r * Math.cos((ang * Math.PI) / 180)]
  const [mx, my] = pt(180, 52)
  const [hx, hy] = pt(105, 34)
  return (
    <Moldura
      id="info-tem"
      titulo="Tempo e horas em um olhar"
      desc="O tempo anda na base 60: 1 hora tem 60 minutos, 1 minuto tem 60 segundos, então 1 hora tem 3.600 segundos, e o dia tem 24 horas, ou 1.440 minutos. No relógio de ponteiros, o ponteiro dos minutos anda 6 graus por minuto e o das horas 30 graus por hora, e ele também anda quando os minutos passam. Somar tempo: minutos acima de 59 viram horas, o vai um vale 60. Subtrair: empreste 1 hora, que vale 60 minutos. Duração: conte para a frente até a hora cheia. No relógio de 24 horas, depois do meio-dia, subtraia 12. Fusos: a diferença para o UTC dá a hora de cada lugar; Brasília é UTC menos 3. 2,5 horas são 2 horas e 30 minutos."
      altura={640}
    >
      <text x={40} y={56} style={t12}>3h30: o relógio, a base 60 e os ângulos</text>

      <circle cx={110} cy={130} r={62} fill="var(--color-superficie)" stroke="var(--color-borda)" strokeWidth={3} />
      {Array.from({ length: 12 }, (_, k) => {
        const [x1, y1] = pt(k * 30, 54), [x2, y2] = pt(k * 30, 62)
        return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-suave)" strokeWidth={2} />
      })}
      <line x1={110} y1={130} x2={hx} y2={hy} stroke="var(--color-texto)" strokeWidth={5} strokeLinecap="round" />
      <line x1={110} y1={130} x2={mx} y2={my} stroke={cores.coral.stroke} strokeWidth={3} strokeLinecap="round" />
      <circle cx={110} cy={130} r={4} fill="var(--color-texto)" />

      <rect x={210} y={72} width={430} height={116} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={222} y={94} style={t14}>Base 60 (e 24)</text>
      <text x={222} y={116} style={t12}>1 h = 60 min · 1 min = 60 s · 1 h = 3.600 s</text>
      <text x={222} y={136} style={t12}>1 dia = 24 h = 1.440 min = 86.400 s</text>
      <text x={222} y={160} style={t12}>minutos: 6° por minuto · horas: 30° por hora</text>
      <text x={222} y={178} style={t12}>às 3h30: 180° e 90° + 15° = 105°, ângulo de 75°</text>
      <text x={40} y={212} style={t12}>Por que 60? Tem 12 divisores (meia hora 30, um terço 20, um quarto 15...). Base 60 vem da Babilônia.</text>

      <text x={40} y={246} style={t12}>Somar, subtrair e contar a duração</text>
      <rect x={40} y={258} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={280} style={t14}>Somar</text>
      <text x={52} y={302} style={t12}>1 h 45 + 2 h 35</text>
      <text x={52} y={320} style={t12}>45 + 35 = 80 = 1 h 20</text>
      <text x={52} y={342} style={t14}>= 4 h 20</text>
      <text x={52} y={362} style={t12}>"vai um" vale 60</text>
      <rect x={245} y={258} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={280} style={t14}>Subtrair</text>
      <text x={257} y={302} style={t12}>5 h 20 − 2 h 45</text>
      <text x={257} y={320} style={t12}>empreste 1 h: 4 h e 80 min</text>
      <text x={257} y={342} style={t14}>= 2 h 35</text>
      <text x={257} y={362} style={t12}>confira: 2 h 35 + 2 h 45</text>
      <rect x={450} y={258} width={190} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={280} style={t14}>Duração: pra frente</text>
      <text x={462} y={302} style={t12}>7h40 → 8h: 20 min</text>
      <text x={462} y={320} style={t12}>8h → 11h: 3 h</text>
      <text x={462} y={338} style={t12}>11h → 11h15: 15 min</text>
      <text x={462} y={362} style={t14}>= 3 h 35</text>

      <text x={40} y={404} style={t12}>12 e 24 horas · fusos · decimais da hora</text>
      <Caixa x={40} y={416} w={150} h={56} cor="cinza" titulo="15h = 3 da tarde" sub="depois do meio-dia: − 12" />
      <Caixa x={200} y={416} w={150} h={56} cor="cinza" titulo="8 da noite = 20h" sub="+ 12" />
      <Caixa x={360} y={416} w={130} h={56} cor="coral" titulo="2,5 h" sub="= 2 h 30 min" />
      <Caixa x={500} y={416} w={140} h={56} cor="amarelo" titulo="3 sem. e 2 dias" sub="21 + 2 = 23 dias" />

      <rect x={40} y={490} width={600} height={88} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={512} style={t14}>Fusos: diferença entre os números UTC</text>
      <text x={52} y={534} style={t12}>Brasília UTC−3 · Manaus UTC−4 (1 h a menos) · Acre UTC−5 (2 h) · Tóquio UTC+9 (12 h a mais)</text>
      <text x={52} y={554} style={t12}>12h em Brasília: 11h em Manaus e 0h do dia seguinte em Tóquio · Índia UTC+5:30</text>
      <text x={52} y={570} style={t12}>Dias da semana: o resto da divisão por 7 manda · semana 7 dias, século 100 anos</text>

      <Historia y={612} texto="História: noite em 12 partes (c. 2150 a.C.) · horas sazonais · Hiparco e as 24 horas · 60 minutos medievais · 3.600 s" />
    </Moldura>
  )
}
