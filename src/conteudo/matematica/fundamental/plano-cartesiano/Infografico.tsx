import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Plano cartesiano em um olhar": eixos, quadrantes e o ponto (-3, 2)
export default function Infografico() {
  const o = [170, 190] // origem
  const u = 24
  const X = (x: number) => o[0] + x * u
  const Y = (y: number) => o[1] - y * u
  return (
    <Moldura
      id="info-pla"
      titulo="Plano cartesiano em um olhar"
      desc="O plano cartesiano tem dois eixos, x na horizontal e y na vertical, que se cruzam na origem, o ponto (0, 0). Um par ordenado (x, y) diz primeiro o lado e depois o alto, e a ordem importa: (3, 2) não é (2, 3). Negativo em x é esquerda e negativo em y é baixo. Há quatro quadrantes: primeiro mais mais, segundo menos mais, terceiro menos menos e quarto mais menos. Reflexão no eixo x troca o sinal de y; no eixo y troca o sinal de x; na origem troca os dois. O ponto médio é a média das coordenadas. A distância no mesmo y é a diferença dos x."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Dois eixos que se cruzam na origem (0, 0); o par (x, y) é um endereço</text>

      <rect x={40} y={70} width={260} height={240} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <line x1={50} y1={o[1]} x2={290} y2={o[1]} stroke="var(--color-suave)" strokeWidth={1.5} />
      <line x1={o[0]} y1={80} x2={o[0]} y2={300} stroke="var(--color-suave)" strokeWidth={1.5} />
      <text x={282} y={o[1] - 6} style={t12}>x</text>
      <text x={o[0] + 6} y={92} style={t12}>y</text>
      <text x={X(2.2)} y={Y(3.2)} textAnchor="middle" style={t12}>1º (+, +)</text>
      <text x={X(-2.6)} y={Y(4.6)} textAnchor="middle" style={t12}>2º (−, +)</text>
      <text x={X(-2.6)} y={Y(-3.6)} textAnchor="middle" style={t12}>3º (−, −)</text>
      <text x={X(2.2)} y={Y(-3.6)} textAnchor="middle" style={t12}>4º (+, −)</text>
      <circle cx={X(-3)} cy={Y(2)} r={5} fill={cores.coral.fill} stroke={cores.coral.stroke} strokeWidth={2} />
      <text x={X(-3) + 8} y={Y(2) + 4} style={t14}>(−3, 2)</text>
      <circle cx={X(3)} cy={Y(2)} r={5} fill={cores.azul.fill} stroke={cores.azul.stroke} strokeWidth={2} />
      <text x={X(3) - 38} y={Y(2) + 18} style={t14}>(3, 2)</text>
      <circle cx={o[0]} cy={o[1]} r={4} fill="var(--color-texto)" />

      <rect x={320} y={70} width={320} height={240} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={332} y={94} style={t14}>Como marcar (−3, 2)</text>
      <text x={332} y={118} style={t12}>comece na origem</text>
      <text x={332} y={138} style={t12}>1º número: lado. −3: 3 casas à esquerda</text>
      <text x={332} y={158} style={t12}>2º número: alto. 2: 2 casas para cima</text>
      <text x={332} y={184} style={t12}>a ordem importa: (3, 2) não é (2, 3)</text>
      <text x={332} y={206} style={t12}>negativo: esquerda (x) e baixo (y)</text>
      <text x={332} y={228} style={t12}>ponto sobre um eixo não está em quadrante</text>
      <text x={332} y={258} style={t12}>Distância no mesmo y: de −3 até 4</text>
      <text x={332} y={276} style={t12}>3 + 4 = 7 casas (diferença dos x)</text>
      <text x={332} y={298} style={t12}>de 1 a 6 são 5 passos, não 6</text>

      <text x={40} y={340} style={t12}>Movimentos no plano</text>
      <rect x={40} y={352} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={374} style={t14}>Espelhos</text>
      <text x={52} y={396} style={t12}>no eixo x: (x, y) → (x, −y)</text>
      <text x={52} y={416} style={t12}>no eixo y: (x, y) → (−x, y)</text>
      <text x={52} y={436} style={t12}>na origem: (x, y) → (−x, −y)</text>
      <text x={52} y={458} style={t12}>(−3, 5) no eixo x: (−3, −5)</text>
      <rect x={245} y={352} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={374} style={t14}>Quarto canto</text>
      <text x={257} y={396} style={t12}>(1, 1), (1, 4) e (4, 4)</text>
      <text x={257} y={416} style={t12}>lados de 3 casas</text>
      <text x={257} y={438} style={t14}>falta o (4, 1)</text>
      <rect x={450} y={352} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={374} style={t14}>Gráfico de corrida</text>
      <text x={462} y={396} style={t12}>bandeirada R$ 5 + R$ 3/km</text>
      <text x={462} y={416} style={t12}>7 km: 5 + 21 = R$ 26</text>
      <text x={462} y={438} style={t12}>ponto (7, 26) do gráfico</text>

      <text x={40} y={500} style={t12}>Onde aparece</text>
      <text x={40} y={522} style={t12}>GPS: latitude e longitude são um par de números · xadrez e batalha naval: letra e número</text>
      <text x={40} y={542} style={t12}>pixels da tela têm endereço (x, y), mas o y costuma crescer para baixo</text>
      <text x={40} y={562} style={t12}>ponto médio: média dos x e média dos y</text>

      <Historia y={612} texto="História: Oresme já usava ideia parecida · Descartes publica em 1637 · Fermat descobre sozinho · tradução latina em 1649" />
    </Moldura>
  )
}
