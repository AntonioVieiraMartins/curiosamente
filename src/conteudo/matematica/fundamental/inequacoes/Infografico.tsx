import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Inequações em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-ineq"
      titulo="Inequações em um olhar"
      desc="Os símbolos são menor, maior, menor ou igual e maior ou igual. Uma inequação tem muitas soluções, uma região da reta. Bolinha cheia quando a borda entra (menor ou igual, maior ou igual) e bolinha vazia quando não entra. Resolva como uma equação: somar ou subtrair não muda o sinal. Multiplicar ou dividir por número negativo vira o sinal. Em problemas de limite, no máximo é menor ou igual e pelo menos é maior ou igual, e a resposta precisa fazer sentido na história. Entre dois valores: 2 menor que x menor ou igual a 5. Sempre teste um número da solução."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Os quatro símbolos (a boca do jacaré abre para o maior)</text>
      <rect x={40} y={68} width={140} height={58} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>3 &lt; 7</text>
      <text x={52} y={112} style={t12}>menor que</text>
      <rect x={195} y={68} width={140} height={58} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={207} y={92} style={t14}>7 &gt; 3</text>
      <text x={207} y={112} style={t12}>maior que</text>
      <rect x={350} y={68} width={140} height={58} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={92} style={t14}>x ≤ 5</text>
      <text x={362} y={112} style={t12}>menor ou igual</text>
      <rect x={505} y={68} width={135} height={58} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={517} y={92} style={t14}>x ≥ 2</text>
      <text x={517} y={112} style={t12}>maior ou igual</text>

      <text x={40} y={156} style={t12}>A solução é uma região da reta</text>
      <line x1={60} y1={196} x2={620} y2={196} stroke="var(--color-suave)" strokeWidth={2} />
      <rect x={60} y={190} width={240} height={12} fill="var(--color-azul)" opacity={0.35} />
      <circle cx={300} cy={196} r={7} fill="var(--color-superficie)" stroke="var(--color-azul)" strokeWidth={2.5} />
      <text x={300} y={224} textAnchor="middle" style={t12}>5</text>
      <text x={60} y={224} style={t14}>x &lt; 5 (bolinha vazia: o 5 não entra)</text>
      <rect x={400} y={190} width={220} height={12} fill="var(--color-azul)" opacity={0.35} />
      <circle cx={400} cy={196} r={7} fill="var(--color-azul)" stroke="var(--color-azul)" strokeWidth={2.5} />
      <text x={400} y={176} textAnchor="middle" style={t12}>2</text>
      <text x={400} y={244} style={t14}>x ≥ 2 (bolinha cheia: entra)</text>

      <text x={40} y={278} style={t12}>Resolver: igual a uma equação, com uma regra de ouro</text>
      <rect x={40} y={290} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={314} style={t14}>Somar ou subtrair</text>
      <text x={52} y={334} style={t12}>x + 3 &lt; 8 → x &lt; 5</text>
      <text x={52} y={354} style={t12}>o sinal fica</text>
      <rect x={350} y={290} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={314} style={t14}>Dividir por negativo: vira!</text>
      <text x={362} y={334} style={t12}>−2x &lt; 6 → x &gt; −3</text>
      <text x={362} y={354} style={t12}>3 &lt; 7, mas −3 &gt; −7</text>

      <text x={40} y={404} style={t12}>Problemas de limite</text>
      <rect x={40} y={416} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={440} style={t14}>28p ≤ 100 → p ≤ 3,57</text>
      <text x={52} y={460} style={t12}>pizza é inteira: no máximo 3</text>
      <text x={52} y={478} style={t12}>no máximo ≤ · pelo menos ≥</text>
      <rect x={350} y={416} width={290} height={70} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={440} style={t14}>Entre dois valores</text>
      <text x={362} y={460} style={t12}>2 &lt; x ≤ 5: servem 3, 4 e 5</text>
      <text x={362} y={478} style={t12}>teste sempre um número da região</text>

      <Historia y={518} texto="História: Harriot cria &lt; e &gt; (livro de 1631) · Bouguer acrescenta a linha de ≤ e ≥ em 1734" />
    </Moldura>
  )
}
