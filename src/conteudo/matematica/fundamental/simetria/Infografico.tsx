import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Simetria e transformações em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-simetria"
      titulo="Simetria e transformações em um olhar"
      desc="Três transformações que não mudam o tamanho nem a forma: reflexão, rotação e translação. Na reflexão o ponto e a imagem ficam à mesma distância do eixo. Na rotação, um polígono regular de n lados se encaixa a cada 360 dividido por n graus. Na translação, o ponto x y vai para x mais a, y mais b. No plano, o eixo y troca o sinal do x, o eixo x troca o sinal do y e o giro de 180 graus troca os dois."
      altura={520}
    >
      <text x={40} y={56} style={t12}>Três transformações que mantêm tamanho e forma</text>
      <rect x={40} y={68} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Reflexão (espelho)</text>
      <text x={52} y={112} style={t12}>mesma distância do eixo</text>
      <text x={52} y={132} style={t12}>lados opostos do eixo</text>
      <text x={52} y={150} style={t12}>vira do avesso</text>
      <rect x={245} y={68} width={190} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Rotação (giro)</text>
      <text x={257} y={112} style={t12}>centro + ângulo</text>
      <text x={257} y={132} style={t12}>n lados: giro de 360° ÷ n</text>
      <text x={257} y={150} style={t12}>hexágono: 60°</text>
      <rect x={450} y={68} width={190} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={92} style={t14}>Translação (deslize)</text>
      <text x={462} y={112} style={t12}>vetor (a, b)</text>
      <text x={462} y={132} style={t12}>(x, y) → (x + a, y + b)</text>
      <text x={462} y={150} style={t12}>nada gira nem vira</text>

      <text x={40} y={190} style={t12}>Eixos de simetria</text>
      <rect x={40} y={202} width={600} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={226} style={t14}>Polígono regular de n lados: n eixos</text>
      <text x={52} y={248} style={t12}>triângulo 3 · quadrado 4 · hexágono 6 · círculo: infinitos</text>
      <text x={52} y={268} style={t12}>retângulo: 2 (sem as diagonais) · paralelogramo: nenhum</text>

      <text x={40} y={310} style={t12}>No plano cartesiano</text>
      <rect x={40} y={322} width={600} height={104} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={346} style={t12}>Eixo y (espelho vertical): (x, y) → (−x, y)</text>
      <text x={52} y={366} style={t12}>Eixo x (espelho horizontal): (x, y) → (x, −y)</text>
      <text x={52} y={386} style={t12}>Giro de 180° na origem: (x, y) → (−x, −y)</text>
      <text x={52} y={406} style={t12}>Giro de 90° anti-horário: (x, y) → (−y, x)</text>

      <text x={40} y={452} style={t14}>A ordem importa: espelhar e deslizar ≠ deslizar e espelhar</text>

      <Historia y={504} texto="História: Alhambra, sécs. 13–14 · Klein, 1872 · Fedorov, 1891 (17 padrões) · Noether, 1918 · Escher (1898–1972)" />
    </Moldura>
  )
}
