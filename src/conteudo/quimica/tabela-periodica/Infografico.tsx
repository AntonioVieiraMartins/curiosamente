import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Tabela periódica em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-tabela-periodica"
      titulo="Tabela periódica em um olhar"
      desc="A tabela periódica ordena os 118 elementos pelo número atômico, em sete períodos, que são as linhas e indicam o número de camadas, e dezoito grupos, que são as colunas e indicam os elétrons de valência. Famílias: metais alcalinos, alcalinoterrosos, halogênios e gases nobres. O raio atômico diminui da esquerda para a direita e aumenta para baixo. A eletronegatividade faz o contrário. Mendeleiev previu elementos em 1869."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Como ler</text>
      <rect x={40} y={68} width={290} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Período (linha)</text>
      <text x={52} y={114} style={t12}>= número de camadas (1 a 7)</text>
      <text x={52} y={134} style={t12}>Na: 3 camadas, período 3</text>
      <rect x={350} y={68} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={92} style={t14}>Grupo (coluna)</text>
      <text x={362} y={114} style={t12}>mesmo nº de elétrons de valência</text>
      <text x={362} y={134} style={t12}>grupos 13 a 18: número − 10</text>

      <text x={40} y={182} style={t12}>Famílias</text>
      <rect x={40} y={194} width={600} height={104} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={218} style={t14}>1: alcalinos (+1) · 2: alcalinoterrosos (+2)</text>
      <text x={52} y={240} style={t12}>3 a 12: metais de transição (Fe, Cu, Au)</text>
      <text x={52} y={260} style={t12}>16: calcogênios (−2) · 17: halogênios (−1)</text>
      <text x={52} y={280} style={t12}>18: gases nobres (camada completa, não reagem)</text>

      <text x={40} y={328} style={t12}>Tendências</text>
      <rect x={40} y={340} width={290} height={64} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={364} style={t14}>Raio atômico</text>
      <text x={52} y={386} style={t12}>diminui → · aumenta ↓</text>
      <rect x={350} y={340} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={364} style={t14}>Eletronegatividade</text>
      <text x={362} y={386} style={t12}>aumenta → · diminui ↓ (flúor: a maior)</text>

      <text x={40} y={434} style={t12}>Tipos: metais (perdem e−), não metais (ganham e−), semimetais, gases nobres</text>

      <Historia y={474} texto="História: Döbereiner, 1829 · Newlands, 1864 · Mendeleiev, 1869 · germânio, 1886 · Moseley, 1913 · 118 elementos, 2016" />
    </Moldura>
  )
}
