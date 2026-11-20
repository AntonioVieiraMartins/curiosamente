import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Modelos atômicos em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-modelos-atomicos"
      titulo="Modelos atômicos em um olhar"
      desc="Dalton, em 1808, propôs o átomo como esfera maciça. Thomson, em 1904, colocou elétrons numa esfera positiva. O experimento de Geiger e Marsden mostrou, em 1911, que o átomo tem um núcleo pequeno e denso, porque cerca de uma em oito mil partículas alfa voltava. Bohr, em 1913, propôs níveis fixos de energia, e a luz sai nos saltos. O modelo atual usa orbitais, regiões de probabilidade. A camada n comporta no máximo dois n ao quadrado elétrons."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Cinco modelos</text>
      <rect x={40} y={68} width={112} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={50} y={90} style={t14}>Dalton</text>
      <text x={50} y={110} style={t12}>bolinha maciça</text>
      <text x={50} y={128} style={t12}>1808</text>
      <rect x={162} y={68} width={112} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={172} y={90} style={t14}>Thomson</text>
      <text x={172} y={110} style={t12}>pudim de passas</text>
      <text x={172} y={128} style={t12}>1904</text>
      <rect x={284} y={68} width={112} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={294} y={90} style={t14}>Rutherford</text>
      <text x={294} y={110} style={t12}>núcleo + elétrons</text>
      <text x={294} y={128} style={t12}>1911</text>
      <rect x={406} y={68} width={112} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={416} y={90} style={t14}>Bohr</text>
      <text x={416} y={110} style={t12}>níveis de energia</text>
      <text x={416} y={128} style={t12}>1913</text>
      <rect x={528} y={68} width={112} height={92} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={538} y={90} style={t14}>Orbitais</text>
      <text x={538} y={110} style={t12}>probabilidade</text>
      <text x={538} y={128} style={t12}>1926</text>

      <text x={40} y={190} style={t12}>A prova do núcleo</text>
      <rect x={40} y={202} width={600} height={64} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={226} style={t14}>Folha de ouro: a maioria passa, 1 em 8.000 volta</text>
      <text x={52} y={248} style={t12}>núcleo pequeno, pesado e positivo; átomo quase vazio</text>

      <text x={40} y={296} style={t12}>Níveis de energia</text>
      <rect x={40} y={308} width={600} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={332} style={t14}>E(n) = −13,6 ÷ n² eV (hidrogênio)</text>
      <text x={52} y={354} style={t12}>salto para baixo emite luz: λ ≈ 1.240 ÷ ΔE (nm)</text>
      <text x={52} y={374} style={t12}>3→2: 656 nm (vermelho) · 4→2: 486 nm (azul-esverdeado)</text>
      <text x={52} y={392} style={t12}>teste de chama: cada elemento, uma cor</text>

      <text x={40} y={428} style={t12}>Camada n: até 2n² elétrons (2, 8, 18, 32) · orbital: até 2 elétrons</text>

      <Historia y={474} texto="História: Dalton, 1808 · Thomson, 1897 · Geiger e Marsden, 1909 · Bohr, 1913 · Schrödinger, 1926 · Chadwick, 1932" />
    </Moldura>
  )
}
