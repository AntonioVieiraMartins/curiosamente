import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Hardware em um olhar": cozinha do computador
export default function Infografico() {
  return (
    <Moldura
      id="info-hw"
      titulo="Hardware em um olhar"
      desc="O computador é como uma cozinha. A CPU é o cozinheiro, que executa instruções em ciclos de buscar, decodificar e executar. A RAM é a bancada: rápida, pequena e volátil, esvazia sem energia. O disco, HD ou SSD, é a despensa: grande, permanente e mais lento. Para usar um programa: disco, RAM, CPU. Para guardar: RAM, disco. Cache e registradores ficam na CPU e são os mais rápidos e menores. Vários núcleos são vários cozinheiros. Um computador equilibrado vale mais que uma peça só muito rápida. GPU faz milhares de contas simples ao mesmo tempo."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Uma cozinha: cozinheiro, bancada e despensa</text>

      <Caixa x={40} y={72} w={170} h={78} cor="azul" titulo="CPU" sub="o cozinheiro" grande />
      <Caixa x={255} y={72} w={170} h={78} cor="amarelo" titulo="RAM" sub="a bancada" grande />
      <Caixa x={470} y={72} w={170} h={78} cor="verde" titulo="Disco" sub="a despensa" grande />
      <Seta id="info-hw" x1={212} y1={100} x2={253} y2={100} />
      <Seta id="info-hw" x1={253} y1={124} x2={212} y2={124} />
      <Seta id="info-hw" x1={427} y1={100} x2={468} y2={100} />
      <Seta id="info-hw" x1={468} y1={124} x2={427} y2={124} />
      <text x={40} y={172} style={t12}>executa instruções</text>
      <text x={255} y={172} style={t12}>rápida, pequena, volátil</text>
      <text x={470} y={172} style={t12}>grande, permanente, lenta</text>
      <text x={340} y={198} textAnchor="middle" style={t12}>usar um programa: disco → RAM → CPU · guardar: RAM → disco</text>

      <text x={40} y={234} style={t12}>As camadas de memória: mais rápida e menor em cima</text>
      <rect x={40} y={246} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={268} style={t14}>Registradores e cache</text>
      <text x={52} y={290} style={t12}>dentro da CPU</text>
      <text x={52} y={308} style={t12}>o número que ela soma agora</text>
      <text x={52} y={330} style={t12}>cache: SRAM (6 transistores)</text>
      <rect x={245} y={246} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={268} style={t14}>RAM</text>
      <text x={257} y={290} style={t12}>DRAM: 1 transistor e</text>
      <text x={257} y={308} style={t12}>1 capacitor; "vaza" e é</text>
      <text x={257} y={326} style={t12}>reescrita (refresh)</text>
      <rect x={450} y={246} width={190} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={268} style={t14}>HD contra SSD</text>
      <text x={462} y={290} style={t12}>HD: discos girando, 5.400 ou</text>
      <text x={462} y={308} style={t12}>7.200 rpm, 2,5 a 10 ms</text>
      <text x={462} y={330} style={t12}>SSD: flash (NAND), sem peças</text>
      <text x={462} y={348} style={t12}>móveis, mais rápido e caro</text>

      <text x={40} y={398} style={t12}>Lendo uma ficha técnica</text>
      <Caixa x={40} y={410} w={140} h={56} cor="cinza" titulo="8 núcleos" sub="8 cozinheiros" />
      <Caixa x={190} y={410} w={140} h={56} cor="cinza" titulo="3 GHz" sub="3 bi de passos/s" />
      <Caixa x={340} y={410} w={140} h={56} cor="cinza" titulo="16 GB RAM" sub="tamanho da bancada" />
      <Caixa x={490} y={410} w={150} h={56} cor="cinza" titulo="512 GB SSD" sub="tamanho da despensa" />
      <text x={40} y={490} style={t12}>3 GHz em 1 ms: 3.000.000 ciclos · 8 GB de RAM não comporta 3 + 2,5 + 6 = 11,5 GB (vai para o disco, e trava)</text>

      <rect x={40} y={508} width={600} height={70} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={530} style={t14}>Outras peças</text>
      <text x={52} y={550} style={t12}>placa-mãe (onde tudo se encaixa) · GPU (milhares de contas simples ao mesmo tempo)</text>
      <text x={52} y={568} style={t12}>fonte (energia) · entrada e saída (teclado, mouse, tela, som) · 64 GB ≈ 21 mil fotos de 3 MB</text>

      <Historia y={612} texto="História: von Neumann (1945) · IBM 350 (1956) · DRAM (1966) · Intel 4004 (1971)" />
    </Moldura>
  )
}
