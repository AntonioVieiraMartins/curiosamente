import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Tempo profundo em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-fosseis-e-tempo"
      titulo="Fósseis e tempo profundo em um olhar"
      desc="Fósseis são restos ou marcas de seres do passado, raros porque exigem soterramento rápido. Datação relativa: camada de baixo é mais velha, e fósseis-guia ligam camadas distantes. Datação absoluta: átomos radioativos decaem pela metade a cada meia-vida; carbono-14 tem 5.730 anos e serve até 50 mil anos, urânio e potássio datam rochas muito antigas. A Terra tem cerca de 4,54 bilhões de anos. Num relógio de 24 horas, os humanos chegam segundos antes da meia-noite. Houve cinco grandes extinções em massa."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Datar uma rocha</text>
      <rect x={40} y={68} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Relativa: antes ou depois</text>
      <text x={52} y={114} style={t12}>camada de baixo é mais velha</text>
      <text x={52} y={134} style={t12}>fósseis-guia ligam lugares</text>
      <rect x={350} y={68} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={92} style={t14}>Absoluta: em anos</text>
      <text x={362} y={114} style={t12}>átomos decaem à metade</text>
      <text x={362} y={134} style={t12}>a cada meia-vida</text>

      <text x={40} y={182} style={t12}>Meia-vida</text>
      <rect x={40} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Carbono-14</text>
      <text x={52} y={240} style={t12}>5.730 anos</text>
      <text x={52} y={260} style={t12}>até cerca de 50 mil anos</text>
      <rect x={245} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={218} style={t14}>Potássio-40</text>
      <text x={257} y={240} style={t12}>1,25 bilhão de anos</text>
      <text x={257} y={260} style={t12}>rochas vulcânicas</text>
      <rect x={450} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={218} style={t14}>Urânio-238</text>
      <text x={462} y={240} style={t12}>4,47 bilhões de anos</text>
      <text x={462} y={260} style={t12}>rochas muito antigas</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={314} style={t14}>Terra: 4,54 bilhões de anos</text>
      <text x={52} y={334} style={t12}>em 24 h, humanos: segundos antes das 24</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={314} style={t14}>Cinco grandes extinções</text>
      <text x={362} y={334} style={t12}>a maior: Permiano, há 252 milhões</text>

      <text x={40} y={384} style={t12}>Cuidado</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>O registro fóssil é incompleto</text>
      <text x={52} y={440} style={t12}>Virar fóssil é raro, e a erosão apaga camadas.</text>
      <text x={52} y={456} style={t12}>Por isso se combinam vários métodos de datação.</text>

      <Historia y={488} texto="História: Steno, 1669 · Hutton, 1788 · Smith, 1815 · Libby, 1949 · Patterson, 1953 · Alvarez, 1980" />
    </Moldura>
  )
}
