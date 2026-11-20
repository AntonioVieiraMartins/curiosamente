import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Moléculas e polaridade em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-moleculas-e-polaridade"
      titulo="Moléculas e polaridade em um olhar"
      desc="Uma molécula é polar quando tem ligações polares e uma forma que não anula os puxões dos elétrons: água, amônia e HCl são polares; gás carbônico e metano são apolares. As formas são linear, angular, piramidal e tetraédrica. As forças entre moléculas são, da mais fraca para a mais forte: London, dipolo-dipolo e ligação de hidrogênio. Semelhante dissolve semelhante: polar com polar, apolar com apolar. O sabão tem cabeça polar e cauda apolar e forma micelas. O gelo boia porque as ligações de hidrogênio abrem espaço vazio."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Polar ou apolar?</text>
      <rect x={40} y={68} width={290} height={96} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Polares</text>
      <text x={52} y={114} style={t12}>H₂O (104,5°) · NH₃ (piramidal)</text>
      <text x={52} y={134} style={t12}>HCl · os puxões não se anulam</text>
      <rect x={350} y={68} width={290} height={96} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={92} style={t14}>Apolares</text>
      <text x={362} y={114} style={t12}>CO₂ (linear) · CH₄ (tetraédrica)</text>
      <text x={362} y={134} style={t12}>H₂ · CCl₄ · puxões se anulam</text>

      <text x={40} y={196} style={t12}>Forças entre moléculas (fraca → forte)</text>
      <rect x={40} y={208} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={232} style={t14}>London</text>
      <text x={52} y={254} style={t12}>todas as moléculas</text>
      <text x={52} y={274} style={t12}>cresce com o tamanho</text>
      <rect x={245} y={208} width={190} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={232} style={t14}>Dipolo-dipolo</text>
      <text x={257} y={254} style={t12}>entre moléculas polares</text>
      <text x={257} y={274} style={t12}>ex.: HCl</text>
      <rect x={450} y={208} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={232} style={t14}>Lig. de hidrogênio</text>
      <text x={462} y={254} style={t12}>H com F, O ou N</text>
      <text x={462} y={274} style={t12}>água, amônia, DNA</text>

      <text x={40} y={324} style={t12}>Consequências</text>
      <rect x={40} y={336} width={600} height={90} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={360} style={t14}>Semelhante dissolve semelhante: óleo e água não se misturam</text>
      <text x={52} y={382} style={t12}>Água ferve a 100 °C, metano a −162 °C (mesma massa, outra força)</text>
      <text x={52} y={404} style={t12}>Sabão: cabeça polar + cauda apolar = micela. Gelo: 9% menos denso, boia.</text>

      <Historia y={474} texto="História: Van der Waals, 1873 · Latimer e Rodebush, 1920 · London, 1930 · Pauling, 1932 · Debye, 1936 · VSEPR, 1957" />
    </Moldura>
  )
}
