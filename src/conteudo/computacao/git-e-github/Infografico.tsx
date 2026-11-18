import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Git e GitHub em um olhar": mesa, bandeja, histórico e nuvem
export default function Infografico() {
  return (
    <Moldura
      id="info-git"
      titulo="Git e GitHub em um olhar"
      desc="Git é salvar o jogo do código: cada commit é uma foto do projeto, com autor, data e mensagem. Você edita na mesa, escolhe o que vai com git add para a bandeja e grava com git commit no histórico. Cada commit tem um código que depende do conteúdo e do commit anterior, então qualquer adulteração aparece. Ramos permitem experimentar e merge junta; o conflito só acontece no mesmo trecho. GitHub é um serviço sobre o Git que guarda a cópia na internet; git push envia e git pull traz. Fork é uma cópia pessoal e pull request é um pedido para juntar as mudanças. Nunca coloque segredos no repositório."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Da mesa ao histórico, e do histórico à internet</text>

      <Caixa x={40} y={72} w={130} h={64} cor="cinza" titulo="Mesa" sub="arquivos editados" />
      <Seta id="info-git" x1={172} y1={104} x2={198} y2={104} />
      <Caixa x={200} y={72} w={130} h={64} cor="amarelo" titulo="Bandeja" sub="git add" />
      <Seta id="info-git" x1={332} y1={104} x2={358} y2={104} />
      <Caixa x={360} y={72} w={130} h={64} cor="azul" titulo="Histórico" sub="git commit" />
      <Seta id="info-git" x1={492} y1={104} x2={518} y2={104} />
      <Caixa x={520} y={72} w={120} h={64} cor="verde" titulo="GitHub" sub="git push" />
      <text x={340} y={158} textAnchor="middle" style={t12}>git pull traz do GitHub · o que fica na mesa sem commit continua só na mesa</text>

      <text x={40} y={190} style={t12}>Commits em corrente: o código depende do anterior</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={90 + i * 120} cy={226} r={22} fill={cores.azul.fill} stroke={cores.azul.stroke} strokeWidth={2} />
          <text x={90 + i * 120} y={226} textAnchor="middle" dominantBaseline="central" style={t14}>{i + 1}</text>
          {i < 3 && <Seta id="info-git" x1={114 + i * 120} y1={226} x2={166 + i * 120} y2={226} />}
        </g>
      ))}
      <text x={40} y={268} style={t12}>mudou o commit 1? muda o código dele, do 2, do 3 e do 4: a adulteração aparece na hora</text>
      <text x={40} y={286} style={t12}>Receita: 1 farinha e ovos, 2 açúcar, 3 apagou açúcar sem querer: o 2 continua no histórico</text>

      <text x={40} y={320} style={t12}>Ramos, conflitos e colaboração</text>
      <rect x={40} y={332} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={354} style={t14}>Conflito</text>
      <text x={52} y={376} style={t12}>Bruno e Ana mudaram o</text>
      <text x={52} y={394} style={t12}>mesmo título em ramos</text>
      <text x={52} y={412} style={t12}>diferentes: alguém escolhe</text>
      <text x={52} y={430} style={t12}>e faz o commit da solução</text>
      <rect x={245} y={332} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={354} style={t14}>Fork e pull request</text>
      <text x={257} y={376} style={t12}>fork: cópia pessoal</text>
      <text x={257} y={396} style={t12}>pull request: pedido para</text>
      <text x={257} y={414} style={t12}>juntar suas mudanças; o</text>
      <text x={257} y={432} style={t12}>mantenedor revisa e aprova</text>
      <rect x={450} y={332} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={354} style={t14}>Push recusado</text>
      <text x={462} y={376} style={t12}>a colega enviou 1 commit</text>
      <text x={462} y={394} style={t12}>antes: o GitHub recusa</text>
      <text x={462} y={414} style={t12}>git pull e depois git push</text>

      <rect x={40} y={468} width={600} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={490} style={t14}>Boas práticas</text>
      <text x={52} y={512} style={t12}>commits pequenos e frequentes, com mensagem que explica o porquê</text>
      <text x={52} y={532} style={t12}>NUNCA coloque senhas, chaves ou segredos: o que entra no histórico fica nele (o .env.local fica fora)</text>
      <text x={52} y={552} style={t12}>git pull antes de começar o dia, para evitar conflitos grandes</text>
      <text x={52} y={570} style={t12}>este app também usa Git e GitHub: cada push na main publica o site</text>

      <Historia y={612} texto="História: SCCS (1972) · RCS (1982) · Git, 3/4/2005 · GitHub abre em 10/4/2008 · Microsoft compra o GitHub (2018)" />
    </Moldura>
  )
}
