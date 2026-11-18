import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "APIs e JSON em um olhar"
const mono = { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 12, fill: 'var(--color-texto)' } as const

export default function Infografico() {
  return (
    <Moldura
      id="info-api"
      titulo="APIs e JSON em um olhar"
      desc="API é uma interface para programas conversarem, como um cardápio ou contrato: o que dá para pedir e o formato da resposta. JSON é um texto leve com seis tipos: objeto, lista, texto, número, booleano e nulo. As regras são rígidas: aspas duplas, sem comentários e sem vírgula sobrando. REST: o endereço identifica a coisa, o recurso, e o método HTTP diz a ação. Os pedidos são sem estado. Códigos de status acompanham cada resposta. Mudar a API pode quebrar quem a usa: acrescentar costuma ser seguro, renomear não. A documentação é parte da API."
      altura={640}
    >
      <text x={40} y={56} style={t12}>O aplicativo do clima pede, a API responde com JSON</text>

      <Caixa x={40} y={72} w={160} h={56} cor="azul" titulo="Aplicativo" sub="quer o clima de Recife" />
      <Caixa x={480} y={72} w={160} h={56} cor="verde" titulo="API do serviço" sub="o cardápio" />
      <Seta id="info-api" x1={202} y1={90} x2={478} y2={90} />
      <Seta id="info-api" x1={478} y1={112} x2={202} y2={112} />
      <text x={340} y={84} textAnchor="middle" style={t12}>pedido HTTP</text>
      <text x={340} y={130} textAnchor="middle" style={t12}>resposta em JSON</text>

      <text x={40} y={162} style={t12}>JSON: seis tipos</text>
      <rect x={40} y={174} width={290} height={120} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={198} style={mono}>{'{ "nome": "Ana", "idade": 30,'}</text>
      <text x={52} y={216} style={mono}>{'  "notas": [4, 8, 15] }'}</text>
      <text x={52} y={242} style={t12}>objeto (chaves) com 3 pares; idade = 30</text>
      <text x={52} y={262} style={t12}>lista (colchetes): 3 números, começa na posição 0</text>
      <text x={52} y={282} style={t12}>texto "entre aspas duplas"</text>
      <rect x={350} y={174} width={290} height={120} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={196} style={t14}>Os seis tipos</text>
      <text x={362} y={218} style={t12}>objeto · lista · texto · número</text>
      <text x={362} y={236} style={t12}>booleano: true ou false (sem aspas)</text>
      <text x={362} y={254} style={t12}>nulo: null (sem valor)</text>
      <text x={362} y={278} style={t12}>sem comentários · sem vírgula sobrando</text>

      <rect x={40} y={308} width={600} height={46} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={328} style={t14}>Erro clássico: a vírgula pendurada</text>
      <text x={52} y={346} style={mono}>{'{ "nome": "Ana", "idade": 30, }  → JSON inválido'}</text>

      <text x={40} y={384} style={t12}>REST: o endereço é a coisa e o método é a ação</text>
      <rect x={40} y={396} width={600} height={96} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={mono}>GET /produtos  →  buscar a coleção</text>
      <text x={52} y={440} style={mono}>GET /produtos/2  →  buscar o produto 2</text>
      <text x={52} y={460} style={mono}>POST /pedidos  →  criar um pedido (dados no corpo)</text>
      <text x={52} y={480} style={mono}>DELETE /pedidos/4821  →  apagar o 4821</text>

      <text x={40} y={522} style={t12}>sem estado: cada pedido leva o que precisa · cliente e servidor separados · cache · camadas</text>
      <rect x={40} y={534} width={600} height={46} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={554} style={t14}>Mudar a API pode quebrar</text>
      <text x={52} y={572} style={t12}>acrescentar "cor" não quebra · renomear "nome" para "titulo" quebra. Avise, versione, documente.</text>

      <Historia y={612} texto="História: API (1968) · REST, Fielding (2000) · 1º JSON (2001) · ECMA-404 (2013) · RFC 8259 (2017)" />
    </Moldura>
  )
}
