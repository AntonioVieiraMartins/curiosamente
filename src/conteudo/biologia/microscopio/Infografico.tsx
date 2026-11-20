import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Microscópio e o mundo invisível em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-microscopio"
      titulo="Microscópio e o mundo invisível em um olhar"
      desc="O aumento total do microscópio é o da ocular vezes o da objetiva. O olho nu vê até cerca de 0,1 milímetro. O microscópio de luz vê até cerca de 0,2 micrômetro, e não mostra um vírus. O microscópio eletrônico vê menos de 1 nanômetro. Aumentar demais não dá mais detalhes: o que dá detalhes é a resolução. Uma lente convexa funciona como lupa quando o objeto está entre a lente e o foco."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Do que a vista alcança ao muito pequeno</text>
      <rect x={40} y={68} width={145} height={90} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Olho nu</text>
      <text x={52} y={114} style={t12}>até ~0,1 mm</text>
      <text x={52} y={132} style={t12}>(100 µm)</text>
      <rect x={197} y={68} width={145} height={90} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={209} y={92} style={t14}>Lupa</text>
      <text x={209} y={114} style={t12}>~10 a 20 µm</text>
      <text x={209} y={132} style={t12}>lente convexa</text>
      <rect x={354} y={68} width={145} height={90} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={366} y={92} style={t14}>Micr. de luz</text>
      <text x={366} y={114} style={t12}>~0,2 µm</text>
      <text x={366} y={132} style={t12}>bactérias, células</text>
      <rect x={511} y={68} width={129} height={90} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={523} y={92} style={t14}>Eletrônico</text>
      <text x={523} y={114} style={t12}>menos de 1 nm</text>
      <text x={523} y={132} style={t12}>vírus, moléculas</text>

      <text x={40} y={188} style={t12}>Aumento total</text>
      <rect x={40} y={200} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={224} style={t14}>ocular × objetiva</text>
      <text x={52} y={246} style={t12}>10× · 40× = 400×</text>
      <text x={52} y={266} style={t12}>maior aumento, menor campo de visão</text>
      <rect x={350} y={200} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={224} style={t14}>Resolução ≠ aumento</text>
      <text x={362} y={246} style={t12}>detalhes vêm da resolução</text>
      <text x={362} y={266} style={t12}>passar do limite só borra</text>

      <text x={40} y={314} style={t12}>Unidades</text>
      <rect x={40} y={326} width={600} height={52} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={348} style={t14}>1 mm = 1.000 µm · 1 µm = 1.000 nm</text>
      <text x={52} y={368} style={t12}>bactéria ~2 µm · vírus da gripe ~0,1 µm = 100 nm</text>

      <text x={40} y={408} style={t12}>Como usar</text>
      <rect x={40} y={420} width={600} height={90} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={444} style={t14}>amostra fina na lâmina, com lamínula</text>
      <text x={52} y={466} style={t12}>comece pela objetiva de menor aumento · foco grosso (macrométrico), depois fino</text>
      <text x={52} y={488} style={t12}>lupa: objeto entre a lente e o foco dá imagem maior e direita</text>

      <Historia y={530} texto="História: Hooke, 1665 · Leeuwenhoek, anos 1670 · Abbe, 1873 · microscópio eletrônico, 1931 · Nobel de 2014 para a super-resolução" />
    </Moldura>
  )
}
