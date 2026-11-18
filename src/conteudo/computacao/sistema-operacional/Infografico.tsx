import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Sistema operacional em um olhar": o gerente entre programas e hardware
export default function Infografico() {
  return (
    <Moldura
      id="info-so"
      titulo="Sistema operacional em um olhar"
      desc="O sistema operacional é o gerente: fica entre os programas e o hardware. Oferece quatro serviços: processos, memória, arquivos e dispositivos, estes por meio dos drivers. Programa é o arquivo no disco, a receita; processo é o programa em execução, carregado na RAM. O escalonador reveza a CPU em fatias de tempo, e parece simultâneo mas é uma troca rápida. Estados do processo: esperando, rodando, bloqueado e terminado. O isolamento de memória impede que um programa derrube os outros. O kernel é o núcleo do sistema."
      altura={640}
    >
      <text x={40} y={56} style={t12}>O gerente fica entre os programas e o hardware</text>

      <Caixa x={40} y={72} w={600} h={44} cor="amarelo" titulo="Programas: navegador, editor, jogo, música" />
      <Seta id="info-so" x1={340} y1={118} x2={340} y2={138} />
      <Caixa x={40} y={140} w={600} h={54} cor="azul" titulo="Sistema operacional (o gerente, com o kernel no núcleo)" sub="" />
      <Seta id="info-so" x1={340} y1={196} x2={340} y2={216} />
      <Caixa x={40} y={218} w={600} h={44} cor="verde" titulo="Hardware: CPU, RAM, disco, teclado, tela, rede (via drivers)" />

      <text x={40} y={292} style={t12}>Quatro serviços</text>
      <Caixa x={40} y={304} w={140} h={58} cor="cinza" titulo="Processos" sub="quem usa a CPU" />
      <Caixa x={190} y={304} w={140} h={58} cor="cinza" titulo="Memória" sub="reparte a RAM" />
      <Caixa x={340} y={304} w={140} h={58} cor="cinza" titulo="Arquivos" sub="nome, pasta, lugar" />
      <Caixa x={490} y={304} w={150} h={58} cor="cinza" titulo="Dispositivos" sub="via drivers" />

      <text x={40} y={394} style={t12}>Programa contra processo</text>
      <rect x={40} y={406} width={190} height={84} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={428} style={t14}>Programa</text>
      <text x={52} y={450} style={t12}>arquivo no disco</text>
      <text x={52} y={468} style={t12}>a receita</text>
      <rect x={245} y={406} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={257} y={428} style={t14}>Processo</text>
      <text x={257} y={450} style={t12}>o programa em execução,</text>
      <text x={257} y={468} style={t12}>na RAM: a cozinha trabalhando</text>
      <rect x={450} y={406} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={428} style={t14}>Escalonador</text>
      <text x={462} y={450} style={t12}>reveza a CPU em fatias:</text>
      <text x={462} y={468} style={t12}>parece junto, mas é troca rápida</text>

      <text x={40} y={520} style={t12}>Estados de um processo</text>
      <Caixa x={40} y={532} w={110} h={44} cor="amarelo" titulo="esperando" />
      <Caixa x={175} y={532} w={110} h={44} cor="verde" titulo="rodando" />
      <Caixa x={310} y={532} w={110} h={44} cor="coral" titulo="bloqueado" />
      <Caixa x={445} y={532} w={110} h={44} cor="cinza" titulo="terminado" />
      <text x={570} y={558} style={t12}>3 × 6 = 18 fatias</text>

      <Historia y={612} texto="História: Unix (1969, Bell Labs) · reescrito em C (1973) · GNU (1983) · Linux, 17/9/1991 · iOS (2007) e Android (2008)" />
    </Moldura>
  )
}
