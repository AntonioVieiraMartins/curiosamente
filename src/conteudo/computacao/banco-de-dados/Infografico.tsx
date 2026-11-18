import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Banco de dados em um olhar": duas tabelas ligadas por chave estrangeira
const mono = { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 12, fill: 'var(--color-texto)' } as const

export default function Infografico() {
  return (
    <Moldura
      id="info-bd"
      titulo="Banco de dados em um olhar"
      desc="Um banco de dados é uma coleção organizada de dados, administrada por um SGBD. No modelo relacional, os dados ficam em tabelas: colunas são campos e linhas são registros. A chave primária identifica cada linha. A chave estrangeira liga uma tabela a outra, para não repetir informação. O SQL é declarativo: SELECT lê, INSERT acrescenta, UPDATE muda e DELETE apaga; WHERE filtra e ORDER BY ordena. Uma transação é tudo ou nada, o ACID. O índice é o sumário do banco: mil linhas pedem cerca de 10 passos. Sem WHERE, o comando vale para a tabela toda."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Tabelas: colunas são campos, linhas são registros</text>

      <rect x={40} y={72} width={230} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={94} style={t14}>clientes</text>
      <text x={52} y={116} style={mono}>id* nome   cidade</text>
      <text x={52} y={136} style={mono}>1   Ana</text>
      <text x={52} y={154} style={mono}>2   Bruno</text>
      <text x={52} y={172} style={mono}>3   Carla</text>

      <rect x={370} y={72} width={270} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={382} y={94} style={t14}>pedidos</text>
      <text x={382} y={116} style={mono}>id*  cliente_id  status</text>
      <text x={382} y={136} style={mono}>101  1</text>
      <text x={382} y={154} style={mono}>102  2</text>
      <text x={382} y={172} style={mono}>103  1</text>
      <line x1={272} y1={136} x2={368} y2={136} stroke="var(--color-suave)" strokeWidth={1.5} strokeDasharray="4 3" />
      <text x={320} y={126} textAnchor="middle" style={t12}>chave</text>
      <text x={320} y={152} textAnchor="middle" style={t12}>estrangeira</text>
      <text x={40} y={212} style={t12}>* chave primária (identifica a linha). A Ana aparece 1 vez em clientes e é referenciada por 2 pedidos.</text>

      <text x={40} y={244} style={t12}>SQL: diga o que quer, e não como</text>
      <rect x={40} y={256} width={600} height={110} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={280} style={mono}>SELECT * FROM produtos WHERE categoria = 'calçado';</text>
      <text x={52} y={300} style={t12}>SELECT lê · INSERT acrescenta · UPDATE muda · DELETE apaga</text>
      <text x={52} y={320} style={t12}>WHERE filtra · ORDER BY ordena</text>
      <text x={52} y={346} style={mono}>DELETE FROM pedidos WHERE status = 'pendente';</text>
      <text x={52} y={360} style={t12}>sem o WHERE, apagaria as 5 linhas e não só as 2: teste com SELECT antes</text>

      <text x={40} y={394} style={t12}>Três garantias e defesas</text>
      <rect x={40} y={406} width={190} height={126} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={428} style={t14}>Transação (ACID)</text>
      <text x={52} y={450} style={t12}>tudo ou nada: Ana tira 50</text>
      <text x={52} y={468} style={t12}>e o sistema cai? o banco</text>
      <text x={52} y={486} style={t12}>desfaz. Total fica R$ 200</text>
      <rect x={245} y={406} width={190} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={257} y={428} style={t14}>Índice: o sumário</text>
      <text x={257} y={450} style={t12}>escolher o meio descarta</text>
      <text x={257} y={468} style={t12}>metade: mil linhas ≈ 10</text>
      <text x={257} y={486} style={t12}>passos, um milhão ≈ 20</text>
      <rect x={450} y={406} width={190} height={126} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={462} y={428} style={t14}>Proteger</text>
      <text x={462} y={450} style={t12}>nunca cole texto de usuário</text>
      <text x={462} y={468} style={t12}>dentro de um comando SQL</text>
      <text x={462} y={486} style={t12}>backup, controle de acesso</text>
      <text x={462} y={504} style={t12}>e logs protegem os dados</text>

      <text x={40} y={560} style={t12}>Normalização: cada fato num lugar só. NoSQL ganhou popularidade no fim dos anos 2000.</text>

      <Historia y={612} texto="História: IMS (1966) · Codd propõe tabelas (1970) · System R e SQL (1974) · Oracle (1979) · SQL ANSI (1986), ISO (1987)" />
    </Moldura>
  )
}
