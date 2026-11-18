import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "HTTP e HTTPS em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-http"
      titulo="HTTP e HTTPS em um olhar"
      desc="HTTP é o idioma de pedido, do cliente, e resposta, do servidor, e é sem estado: cada pedido é novo. Métodos: GET lê, POST envia, PUT troca e DELETE apaga. Códigos: 2xx sucesso, 3xx redirecionamento, 4xx erro do cliente como 404, 5xx erro do servidor como 500. O HTTP puro é texto aberto. O HTTPS é HTTP dentro de uma conexão criptografada, o TLS, na porta 443, e dá sigilo, integridade e autenticidade. O certificado diz para quem foi emitido, quem o assinou, a chave pública e a validade. O cadeado só diz que a conversa com esse endereço é criptografada, então confira o nome."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Pedido e resposta, sem memória: cada pedido é novo</text>

      <Caixa x={40} y={72} w={160} h={56} cor="azul" titulo="Navegador" sub="o cliente" />
      <Caixa x={480} y={72} w={160} h={56} cor="verde" titulo="Servidor" sub="devolve a página" />
      <Seta id="info-http" x1={202} y1={90} x2={478} y2={90} />
      <Seta id="info-http" x1={478} y1={112} x2={202} y2={112} />
      <text x={340} y={84} textAnchor="middle" style={t12}>pedido: GET /mapa</text>
      <text x={340} y={130} textAnchor="middle" style={t12}>resposta: 200 + conteúdo</text>

      <text x={40} y={166} style={t12}>Os quatro métodos (lista de tarefas)</text>
      <Caixa x={40} y={178} w={140} h={58} cor="amarelo" titulo="GET" sub="ler a lista" />
      <Caixa x={190} y={178} w={140} h={58} cor="amarelo" titulo="POST" sub="criar tarefa" />
      <Caixa x={340} y={178} w={140} h={58} cor="amarelo" titulo="PUT" sub="trocar o texto" />
      <Caixa x={490} y={178} w={150} h={58} cor="amarelo" titulo="DELETE" sub="apagar" />

      <text x={40} y={268} style={t12}>Códigos de status: o primeiro dígito diz quem consertar</text>
      <Caixa x={40} y={280} w={110} h={64} cor="cinza" titulo="1xx" sub="informação" />
      <Caixa x={160} y={280} w={110} h={64} cor="verde" titulo="2xx" sub="sucesso (200)" />
      <Caixa x={280} y={280} w={110} h={64} cor="azul" titulo="3xx" sub="mudou (301)" />
      <Caixa x={400} y={280} w={110} h={64} cor="amarelo" titulo="4xx" sub="seu pedido (404)" />
      <Caixa x={520} y={280} w={120} h={64} cor="coral" titulo="5xx" sub="servidor (500)" />
      <text x={40} y={366} style={t12}>404: corrija o endereço · 500: quem cuida do site precisa consertar · 301: o navegador segue sozinho</text>

      <text x={40} y={398} style={t12}>HTTPS = HTTP dentro de uma conexão criptografada (TLS), porta 443</text>
      <rect x={40} y={410} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={432} style={t14}>Sigilo</text>
      <text x={52} y={454} style={t12}>conteúdo embaralhado:</text>
      <text x={52} y={472} style={t12}>só as duas pontas entendem</text>
      <rect x={245} y={410} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={257} y={432} style={t14}>Integridade</text>
      <text x={257} y={454} style={t12}>alterou um pedaço no</text>
      <text x={257} y={472} style={t12}>caminho? é detectado</text>
      <rect x={450} y={410} width={190} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={432} style={t14}>Autenticidade</text>
      <text x={462} y={454} style={t12}>quem está falando?</text>
      <text x={462} y={472} style={t12}>o certificado do site confirma</text>

      <rect x={40} y={518} width={600} height={60} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={540} style={t14}>Certificado e cadeado</text>
      <text x={52} y={558} style={t12}>diz para quem foi emitido, quem assinou, chave pública e validade. O cadeado só garante a conversa</text>
      <text x={52} y={572} style={t12}>com ESSE endereço: confira o nome (banco-seguro-login.exemplo.net é de exemplo.net).</text>

      <Historia y={612} texto="História: HTTP (1989) · HTTPS na Netscape (1994) · HTTP/1.1 (1997) · HTTP/2 (2015) · Let's Encrypt (2016) · HTTP/3 (2022)" />
    </Moldura>
  )
}
