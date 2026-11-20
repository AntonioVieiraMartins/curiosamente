import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "A célula em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-celula"
      titulo="A célula em um olhar"
      desc="A célula é a unidade básica da vida. Teoria celular: todo ser vivo é feito de células, a célula é a unidade da vida e toda célula vem de outra célula. Procariontes não têm núcleo com membrana, como as bactérias. Eucariontes têm núcleo e organelas. Organelas: núcleo guarda o DNA, mitocôndria libera energia, ribossomo fabrica proteínas, Golgi embala, lisossomo digere. A célula vegetal tem também parede celular, cloroplasto e vacúolo."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Dois tipos de célula</text>
      <rect x={40} y={68} width={290} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Procarionte</text>
      <text x={52} y={114} style={t12}>DNA solto, sem núcleo com membrana</text>
      <text x={52} y={132} style={t12}>bactérias · tamanho de 1 a 5 µm</text>
      <rect x={350} y={68} width={290} height={78} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={92} style={t14}>Eucarionte</text>
      <text x={362} y={114} style={t12}>núcleo com membrana e organelas</text>
      <text x={362} y={132} style={t12}>animais, plantas, fungos, protistas</text>

      <text x={40} y={176} style={t12}>As organelas</text>
      <rect x={40} y={188} width={190} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={212} style={t14}>Núcleo</text>
      <text x={52} y={234} style={t12}>guarda o DNA</text>
      <text x={52} y={252} style={t12}>comanda a célula</text>
      <rect x={245} y={188} width={190} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={212} style={t14}>Mitocôndria</text>
      <text x={257} y={234} style={t12}>libera energia (ATP)</text>
      <text x={257} y={252} style={t12}>a "usina"</text>
      <rect x={450} y={188} width={190} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={212} style={t14}>Ribossomo</text>
      <text x={462} y={234} style={t12}>fabrica proteínas</text>
      <text x={462} y={252} style={t12}>seguindo o RNA</text>
      <rect x={40} y={276} width={190} height={60} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={300} style={t14}>Golgi</text>
      <text x={52} y={320} style={t12}>embala e envia</text>
      <rect x={245} y={276} width={190} height={60} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={300} style={t14}>Lisossomo</text>
      <text x={257} y={320} style={t12}>digere e recicla</text>
      <rect x={450} y={276} width={190} height={60} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={300} style={t14}>Membrana</text>
      <text x={462} y={320} style={t12}>controla entrada e saída</text>

      <text x={40} y={366} style={t12}>Só na célula vegetal</text>
      <rect x={40} y={378} width={600} height={48} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={398} style={t14}>parede celular · cloroplasto (fotossíntese) · vacúolo central</text>
      <text x={52} y={416} style={t12}>a célula animal não tem nenhum dos três</text>

      <text x={40} y={456} style={t12}>Escala</text>
      <rect x={40} y={468} width={600} height={42} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={486} style={t14}>vírus 0,1 µm · bactéria 2 µm · hemácia 7,5 µm · óvulo 120 µm</text>
      <text x={52} y={503} style={t12}>1 mm = 1.000 µm · o corpo humano tem de 30 a 40 trilhões de células</text>

      <Historia y={530} texto="História: Hooke, 1665 · Schleiden e Schwann, 1838-39 · Virchow, 1855 · microscópio eletrônico, anos 1930" />
    </Moldura>
  )
}
