import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Front-end e back-end em um olhar": salão, cozinha e despensa
export default function Infografico() {
  return (
    <Moldura
      id="info-fb"
      titulo="Front-end e back-end em um olhar"
      desc="O front-end é o salão: o que a pessoa vê e toca. O back-end é a cozinha: dados, regras e decisões. O banco de dados é a despensa. A API é o cardápio da cozinha. Nunca confie no navegador: preço, permissão e identidade são conferidos no servidor, porque quem edita o pedido pode mandar qualquer coisa. O front-end ajuda, o back-end protege. A validação é feita duas vezes: no salão, para ser rápido e simpático, e na cozinha, que recusa dados impossíveis não importa quem mandou. Três camadas: apresentação, lógica e dados."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Uma compra: você toca em "Comprar" e o pedido passa por três lugares</text>

      <Caixa x={40} y={72} w={170} h={78} cor="amarelo" titulo="Front-end" sub="o salão: o que se vê" grande />
      <Caixa x={255} y={72} w={170} h={78} cor="azul" titulo="Back-end" sub="a cozinha: regras" grande />
      <Caixa x={470} y={72} w={170} h={78} cor="verde" titulo="Banco de dados" sub="a despensa" grande />
      <Seta id="info-fb" x1={212} y1={100} x2={253} y2={100} />
      <Seta id="info-fb" x1={253} y1={126} x2={212} y2={126} />
      <Seta id="info-fb" x1={427} y1={100} x2={468} y2={100} />
      <Seta id="info-fb" x1={468} y1={126} x2={427} y2={126} />
      <text x={340} y={178} textAnchor="middle" style={t12}>só o passo de gravar e baixar o estoque vai ao banco; os outros cinco não</text>

      <text x={40} y={214} style={t12}>Quem faz o quê</text>
      <rect x={40} y={226} width={290} height={104} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={248} style={t14}>Front-end</text>
      <text x={52} y={270} style={t12}>páginas, busca, saldos, feed</text>
      <text x={52} y={290} style={t12}>mostra o valor que veio</text>
      <text x={52} y={310} style={t12}>ajuda, mas pode ser editado</text>
      <rect x={350} y={226} width={290} height={104} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={362} y={248} style={t14}>Back-end</text>
      <text x={362} y={270} style={t12}>pagamentos, estoque, transações</text>
      <text x={362} y={290} style={t12}>frete: a tabela é da loja, calcula aqui</text>
      <text x={362} y={310} style={t12}>protege: preço, permissão, identidade</text>

      <text x={40} y={362} style={t12}>Por que conferir duas vezes?</text>
      <rect x={40} y={374} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={396} style={t14}>No salão</text>
      <text x={52} y={418} style={t12}>idade 150: avisa na hora</text>
      <text x={52} y={436} style={t12}>rápido e simpático</text>
      <text x={52} y={460} style={t12}>mas dá para pular o salão</text>
      <rect x={245} y={374} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={396} style={t14}>Na cozinha</text>
      <text x={257} y={418} style={t12}>manda 150 direto ao servidor?</text>
      <text x={257} y={436} style={t12}>recusa: a regra vale</text>
      <text x={257} y={454} style={t12}>não importa quem mandou</text>
      <rect x={450} y={374} width={190} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={396} style={t14}>O tênis de R$ 1</text>
      <text x={462} y={418} style={t12}>pedido editado: "R$ 1"</text>
      <text x={462} y={436} style={t12}>o servidor busca no banco:</text>
      <text x={462} y={454} style={t12}>R$ 100. Cobra R$ 100.</text>

      <rect x={40} y={508} width={290} height={70} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={530} style={t14}>Capacidade</text>
      <text x={52} y={550} style={t12}>30 pedidos/min, cada cozinheiro faz 5</text>
      <text x={52} y={568} style={t12}>30 ÷ 5 = 6 (com 5, sobram 5/min na fila)</text>
      <rect x={350} y={508} width={290} height={70} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={530} style={t14}>Três camadas</text>
      <text x={362} y={550} style={t12}>apresentação (front) · lógica (regras)</text>
      <text x={362} y={568} style={t12}>dados (o que fica guardado)</text>

      <Historia y={612} texto="História: OS/360 (1964) · server-host (1969) · client, Xerox PARC (1978) · JavaScript (1995) · Gmail (2004) · Ajax (2005)" />
    </Moldura>
  )
}
