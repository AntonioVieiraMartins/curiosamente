import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Geometria analítica em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-geometria-analitica"
      titulo="Geometria analítica em um olhar"
      desc="Pontos são pares x e y, e figuras são equações. Distância entre dois pontos: raiz de dx ao quadrado mais dy ao quadrado. Ponto médio: média das coordenadas. Inclinação: dy dividido por dx. Reta: y igual a m x mais n. Paralelas têm o mesmo m, perpendiculares têm m1 vezes m2 igual a menos 1. Circunferência: x menos a, ao quadrado, mais y menos b, ao quadrado, igual a r ao quadrado."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Pontos e distâncias</text>
      <rect x={40} y={68} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Ponto = par (x, y)</text>
      <text x={52} y={114} style={t12}>origem (0, 0)</text>
      <text x={52} y={134} style={t12}>abscissa x · ordenada y</text>
      <rect x={245} y={68} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={92} style={t14}>Distância</text>
      <text x={257} y={114} style={t12}>d = √(dx² + dy²)</text>
      <text x={257} y={134} style={t12}>(0,0) a (6,8): 10</text>
      <rect x={450} y={68} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={92} style={t14}>Ponto médio</text>
      <text x={462} y={114} style={t12}>média de x e de y</text>
      <text x={462} y={134} style={t12}>(2,3) e (8,11): (5; 7)</text>

      <text x={40} y={182} style={t12}>A reta</text>
      <rect x={40} y={194} width={290} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={218} style={t14}>y = m·x + n</text>
      <text x={52} y={240} style={t12}>m = dy ÷ dx (inclinação)</text>
      <text x={52} y={260} style={t12}>n = onde corta o eixo y</text>
      <rect x={350} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={218} style={t14}>Duas retas</text>
      <text x={362} y={240} style={t12}>paralelas: m₁ = m₂</text>
      <text x={362} y={260} style={t12}>perpendiculares: m₁ × m₂ = −1</text>

      <text x={40} y={308} style={t12}>Mais ferramentas</text>
      <rect x={40} y={320} width={190} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={344} style={t14}>Cruzamento</text>
      <text x={52} y={366} style={t12}>iguale as duas retas</text>
      <text x={52} y={384} style={t12}>e ache x, depois y</text>
      <rect x={245} y={320} width={190} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={344} style={t14}>Ponto e reta</text>
      <text x={257} y={366} style={t12}>d = |ax₀ + by₀ + c| ÷</text>
      <text x={257} y={384} style={t12}>√(a² + b²)</text>
      <rect x={450} y={320} width={190} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={344} style={t14}>Circunferência</text>
      <text x={462} y={366} style={t12}>(x − a)² + (y − b)² = r²</text>
      <text x={462} y={384} style={t12}>centro (a, b), raio r</text>

      <text x={40} y={428} style={t12}>Para onde isso serve</text>
      <rect x={40} y={440} width={600} height={64} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={464} style={t14}>mapas e GPS · jogos e telas (pixels são coordenadas) · robôs</text>
      <text x={52} y={486} style={t12}>álgebra e desenho conversam: uma conta responde a uma pergunta geométrica</text>

      <Historia y={530} texto="História: Apolônio, c. 200 a.C. · Fermat e Descartes, anos 1630 · La Géométrie, 1637 · edição latina, 1649" />
    </Moldura>
  )
}
