import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "DNS em um olhar": raiz → .com → exemplo.com
export default function Infografico() {
  return (
    <Moldura
      id="info-dns"
      titulo="DNS em um olhar"
      desc="O DNS traduz nomes em endereços IP: é a lista telefônica da internet. É distribuído e hierárquico: servidor raiz, depois o TLD como .com e .br, depois o domínio e os subdomínios. Ninguém guarda a lista inteira. Leia o domínio da direita para a esquerda. O resolvedor recursivo faz a consulta por você e o cache guarda a resposta pelo TTL. Mudanças demoram até o TTL para chegar a todos. Registros: A para IPv4, AAAA para IPv6, CNAME para apelido, MX para e-mail, TXT para texto e NS para os servidores oficiais. Registrar um domínio é alugar o direito de uso."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Qual o IP de www.exemplo.com? Ninguém sabe tudo; cada um sabe quem pergunta em seguida</text>

      <Caixa x={40} y={72} w={140} h={64} cor="azul" titulo="Raiz" sub="sabe quem cuida do .com" />
      <Seta id="info-dns" x1={182} y1={104} x2={208} y2={104} />
      <Caixa x={210} y={72} w={140} h={64} cor="azul" titulo="Servidor .com" sub="sabe quem cuida do domínio" />
      <Seta id="info-dns" x1={352} y1={104} x2={378} y2={104} />
      <Caixa x={380} y={72} w={140} h={64} cor="verde" titulo="exemplo.com" sub="fonte de verdade: o IP" />
      <text x={536} y={96} style={t14}>resolvedor</text>
      <text x={536} y={114} style={t12}>pergunta por você</text>
      <text x={536} y={132} style={t12}>e guarda no cache</text>

      <text x={40} y={170} style={t12}>Leia o domínio da direita para a esquerda: www.universidade.edu.br</text>
      <Caixa x={40} y={182} w={110} h={50} cor="cinza" titulo="br" sub="país" />
      <Caixa x={160} y={182} w={110} h={50} cor="cinza" titulo="edu" sub="educação" />
      <Caixa x={280} y={182} w={150} h={50} cor="amarelo" titulo="universidade" sub="nome registrado" />
      <Caixa x={440} y={182} w={110} h={50} cor="cinza" titulo="www" sub="subdomínio" />
      <text x={40} y={256} style={t12}>golpe: login.banco.com.seguranca-urgente.net é de seguranca-urgente.net, e não do banco</text>

      <text x={40} y={290} style={t12}>Tipos de registro</text>
      <Caixa x={40} y={302} w={95} h={52} cor="azul" titulo="A" sub="IPv4" />
      <Caixa x={145} y={302} w={95} h={52} cor="azul" titulo="AAAA" sub="IPv6" />
      <Caixa x={250} y={302} w={95} h={52} cor="azul" titulo="CNAME" sub="apelido" />
      <Caixa x={355} y={302} w={95} h={52} cor="azul" titulo="MX" sub="e-mail" />
      <Caixa x={460} y={302} w={85} h={52} cor="azul" titulo="TXT" sub="texto" />
      <Caixa x={555} y={302} w={85} h={52} cor="azul" titulo="NS" sub="oficiais" />
      <text x={40} y={378} style={t12}>site e e-mail do mesmo domínio podem ficar em servidores diferentes (A e MX)</text>

      <rect x={40} y={398} width={290} height={92} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={420} style={t14}>TTL e propagação</text>
      <text x={52} y={442} style={t12}>TTL de 3.600 s: a mudança pode</text>
      <text x={52} y={460} style={t12}>levar até 1 hora para todos</text>
      <text x={52} y={478} style={t12}>(TTL menor, troca mais rápida)</text>
      <rect x={350} y={398} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={420} style={t14}>Diagnóstico simples</text>
      <text x={362} y={442} style={t12}>não abre pelo nome? tente o IP:</text>
      <text x={362} y={460} style={t12}>abriu pelo IP → o problema é o DNS</text>
      <text x={362} y={478} style={t12}>nem pelo IP → servidor ou rede</text>

      <rect x={40} y={506} width={600} height={70} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={528} style={t14}>Por que nomes?</text>
      <text x={52} y={548} style={t12}>203.0.113.10 é difícil de lembrar e muda; exemplo.com fica, só se atualiza a lista.</text>
      <text x={52} y={566} style={t12}>O resolvedor vê o nome que você pede; o cadeado protege o conteúdo. Registrar é alugar o direito de uso.</text>

      <Historia y={612} texto="História: HOSTS.TXT · DNS de Mockapetris (1983) · symbolics.com, 1º .com (1985)" />
    </Moldura>
  )
}
