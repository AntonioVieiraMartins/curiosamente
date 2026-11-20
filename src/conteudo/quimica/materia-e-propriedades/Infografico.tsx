import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Matéria e propriedades em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-materia"
      titulo="Matéria e propriedades em um olhar"
      desc="Matéria é tudo que tem massa e ocupa lugar no espaço. Propriedades gerais valem para toda matéria, como massa e volume. Propriedades específicas identificam a substância, como densidade, ponto de fusão e dureza. Densidade é massa dividida por volume. A água tem 1 grama por centímetro cúbico, o ferro 7,87 e o ouro 19,3. Um objeto boia se for menos denso que o líquido. O gelo boia porque tem 0,92 de densidade."
      altura={540}
    >
      <text x={40} y={56} style={t12}>O que é matéria</text>
      <rect x={40} y={68} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Matéria</text>
      <text x={52} y={114} style={t12}>tem massa e ocupa espaço</text>
      <text x={52} y={134} style={t12}>massa em g ou kg · volume em cm³ ou L</text>
      <rect x={350} y={68} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={92} style={t14}>Volume</text>
      <text x={362} y={114} style={t12}>bloco: comp. × larg. × alt.</text>
      <text x={362} y={134} style={t12}>1 L = 1.000 cm³ = 1.000 mL</text>

      <text x={40} y={182} style={t12}>Propriedades</text>
      <rect x={40} y={194} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={218} style={t14}>Gerais (toda matéria)</text>
      <text x={52} y={240} style={t12}>massa · volume · inércia</text>
      <text x={52} y={260} style={t12}>divisibilidade</text>
      <rect x={350} y={194} width={290} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={218} style={t14}>Específicas (cada substância)</text>
      <text x={362} y={240} style={t12}>densidade · ponto de fusão</text>
      <text x={362} y={260} style={t12}>ponto de ebulição · dureza</text>

      <text x={40} y={308} style={t12}>Densidade</text>
      <rect x={40} y={320} width={600} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={344} style={t14}>d = m ÷ V (g/cm³)</text>
      <text x={52} y={366} style={t12}>gelo 0,92 · água 1,0 · alumínio 2,7 · ferro 7,87 · ouro 19,3</text>
      <text x={52} y={386} style={t12}>1 g/cm³ = 1.000 kg/m³ · a densidade não muda se você corta o bloco</text>

      <text x={40} y={428} style={t12}>Boia ou afunda</text>
      <rect x={40} y={440} width={600} height={64} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={464} style={t14}>objeto menos denso que o líquido: boia · mais denso: afunda</text>
      <text x={52} y={486} style={t12}>o gelo boia porque ocupa cerca de 9% mais espaço que a água de onde veio</text>

      <Historia y={530} texto="História: Arquimedes e a coroa (lenda, c. 250 a.C.) · a densidade como assinatura de cada material" />
    </Moldura>
  )
}
