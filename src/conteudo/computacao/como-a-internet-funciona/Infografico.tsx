import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Como a internet funciona em um olhar": mensagem em pacotes por roteadores
export default function Infografico() {
  return (
    <Moldura
      id="info-net"
      titulo="Como a internet funciona em um olhar"
      desc="A internet é uma rede de redes que seguem as mesmas regras, o TCP/IP. Mensagens são cortadas em pacotes, cada um com cabeçalho, o envelope, e carga, o pedaço. Roteadores leem o cabeçalho e escolhem o próximo salto; com um cabo cortado, o pacote dá a volta. Pacotes podem chegar fora de ordem ou se perder: a numeração permite remontar e pedir de novo. A física impõe um tempo mínimo: a luz na fibra anda cerca de 200 km por milissegundo. Mbps são megabits: divida o arquivo em MB vezes 8 pela velocidade. A Web é só um serviço da internet, ao lado de e-mail e chamadas de vídeo."
      altura={640}
    >
      <text x={40} y={56} style={t12}>"Oi, tudo bem com você?" (22 caracteres) viaja em pacotes de 5: 5 pacotes</text>

      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={40 + i * 66} y={72} width={58} height={40} rx={6} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
          <text x={69 + i * 66} y={96} textAnchor="middle" style={t12}>pacote {i + 1}</text>
        </g>
      ))}
      <text x={390} y={88} style={t14}>cabeçalho + carga</text>
      <text x={390} y={108} style={t12}>(o envelope e o pedaço)</text>

      <Caixa x={40} y={146} w={110} h={50} cor="azul" titulo="Seu aparelho" />
      <Seta id="info-net" x1={152} y1={171} x2={178} y2={171} />
      <Caixa x={180} y={146} w={110} h={50} cor="cinza" titulo="Roteador" />
      <Seta id="info-net" x1={292} y1={171} x2={318} y2={171} />
      <Caixa x={320} y={146} w={110} h={50} cor="cinza" titulo="Roteador" />
      <Seta id="info-net" x1={432} y1={171} x2={458} y2={171} />
      <Caixa x={460} y={146} w={180} h={50} cor="verde" titulo="Servidor" />
      <text x={40} y={222} style={t12}>cada roteador lê o cabeçalho e escolhe o próximo salto · cabo cortado? o pacote dá a volta</text>
      <text x={40} y={242} style={t12}>pacotes podem chegar fora de ordem ou se perder: a numeração remonta e pede de novo</text>

      <text x={40} y={278} style={t12}>Por onde os sinais viajam</text>
      <rect x={40} y={290} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={312} style={t14}>Fibra óptica</text>
      <text x={52} y={334} style={t12}>pulsos de luz no vidro</text>
      <text x={52} y={352} style={t12}>a espinha dorsal da rede</text>
      <rect x={245} y={290} width={190} height={92} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={312} style={t14}>Cabo de cobre</text>
      <text x={257} y={334} style={t12}>sinais elétricos</text>
      <text x={257} y={352} style={t12}>redes locais, linhas antigas</text>
      <rect x={450} y={290} width={190} height={92} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={312} style={t14}>Ondas de rádio</text>
      <text x={462} y={334} style={t12}>Wi-Fi, 4G e 5G até uma</text>
      <text x={462} y={352} style={t12}>antena; depois, cabo</text>

      <text x={40} y={412} style={t12}>Contas que a rede faz</text>
      <rect x={40} y={424} width={290} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={446} style={t14}>Baixar 500 MB a 100 Mbps</text>
      <text x={52} y={468} style={t12}>500 MB × 8 = 4.000 megabits</text>
      <text x={52} y={488} style={t12}>4.000 ÷ 100 = 40 segundos (melhor caso)</text>
      <rect x={350} y={424} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={446} style={t14}>Tempo mínimo de ida e volta</text>
      <text x={362} y={468} style={t12}>servidor a 4.000 km, luz a 200 km/ms</text>
      <text x={362} y={488} style={t12}>ida 20 ms · ida e volta 40 ms (no mínimo)</text>

      <text x={40} y={546} style={t12}>Wi-Fi conectado mas nada abre? Teste outro aparelho: se todos falham, o problema vem depois do roteador.</text>
      <text x={40} y={566} style={t12}>A Web é só um serviço da internet, ao lado de e-mail, jogos e chamadas de vídeo.</text>

      <Historia y={612} texto="História: cabo do Atlântico (1858) · Baran e Davies (anos 60) · ARPANET (29/10/1969) · TCP/IP (1982) · 1º navegador (1990)" />
    </Moldura>
  )
}
