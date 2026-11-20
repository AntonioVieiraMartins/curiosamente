import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Misturas e separação em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-misturas"
      titulo="Misturas e separação em um olhar"
      desc="Substância pura tem um só componente. Mistura tem dois ou mais. Mistura homogênea tem uma fase, como água com sal. Mistura heterogênea tem duas ou mais fases, como água com óleo. Métodos: catação, peneiração, separação magnética, filtração, decantação, centrifugação, evaporação e destilação. O método depende de uma propriedade que seja diferente entre os componentes."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Pura ou mistura</text>
      <rect x={40} y={68} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Substância pura</text>
      <text x={52} y={114} style={t12}>um só componente</text>
      <text x={52} y={134} style={t12}>propriedades fixas</text>
      <rect x={245} y={68} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>Homogênea</text>
      <text x={257} y={114} style={t12}>1 fase só (solução)</text>
      <text x={257} y={134} style={t12}>água com sal, ar, ligas</text>
      <rect x={450} y={68} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={92} style={t14}>Heterogênea</text>
      <text x={462} y={114} style={t12}>2 ou mais fases</text>
      <text x={462} y={134} style={t12}>água com óleo, granito</text>

      <text x={40} y={182} style={t12}>Separar sólidos</text>
      <rect x={40} y={194} width={190} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={218} style={t14}>Catação e peneiração</text>
      <text x={52} y={240} style={t12}>por tamanho</text>
      <text x={52} y={258} style={t12}>passa o que é menor</text>
      <rect x={245} y={194} width={190} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={218} style={t14}>Separação magnética</text>
      <text x={257} y={240} style={t12}>ímã atrai o ferro</text>
      <text x={257} y={258} style={t12}>deixa areia e sal</text>
      <rect x={450} y={194} width={190} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={218} style={t14}>Dissolução</text>
      <text x={462} y={240} style={t12}>água dissolve o sal</text>
      <text x={462} y={258} style={t12}>areia fica de fora</text>

      <text x={40} y={302} style={t12}>Sólido ou líquido</text>
      <rect x={40} y={314} width={190} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={338} style={t14}>Filtração</text>
      <text x={52} y={360} style={t12}>filtro retém o sólido</text>
      <text x={52} y={378} style={t12}>café coado</text>
      <rect x={245} y={314} width={190} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={338} style={t14}>Decantação</text>
      <text x={257} y={360} style={t12}>o mais denso desce</text>
      <text x={257} y={378} style={t12}>funil de separação</text>
      <rect x={450} y={314} width={190} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={338} style={t14}>Centrifugação</text>
      <text x={462} y={360} style={t12}>girar muito rápido</text>
      <text x={462} y={378} style={t12}>sangue: plasma e células</text>

      <text x={40} y={422} style={t12}>Com calor</text>
      <rect x={40} y={434} width={290} height={76} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={458} style={t14}>Evaporação</text>
      <text x={52} y={480} style={t12}>a água sai, o sal fica (salinas)</text>
      <text x={52} y={498} style={t12}>quer o sólido dissolvido</text>
      <rect x={350} y={434} width={290} height={76} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={458} style={t14}>Destilação</text>
      <text x={362} y={480} style={t12}>ferve, condensa e recolhe o líquido</text>
      <text x={362} y={498} style={t12}>fracionada: líquidos de ebulição diferente</text>

      <Historia y={530} texto="História: salinas e peneiras na Antiguidade · destilação árabe (séc. 8 a 10) · petróleo destilado, 1853 · ultracentrífuga, anos 1920" />
    </Moldura>
  )
}
