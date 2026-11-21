import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Prever com dados em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-previsao-com-dados"
      titulo="Prever com dados em um olhar"
      desc="Passo a passo: reunir dados, desenhar os pontos, ajustar uma reta y igual a a x mais b que deixe a soma dos quadrados dos erros pequena, prever um valor novo com uma faixa de erro. Cuidados: extrapolar fora dos dados é arriscado, e separar treino e teste evita o sobreajuste. Prever não é explicar: correlação não prova causa."
      altura={500}
    >
      <text x={40} y={56} style={t12}>O caminho</text>
      <rect x={40} y={68} width={140} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>1. Dados</text>
      <text x={52} y={114} style={t12}>pares (x, y)</text>
      <text x={52} y={134} style={t12}>ex.: m² e preço</text>
      <rect x={192} y={68} width={140} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={204} y={92} style={t14}>2. Modelo</text>
      <text x={204} y={114} style={t12}>reta y = a·x + b</text>
      <text x={204} y={134} style={t12}>a: inclinação</text>
      <rect x={344} y={68} width={140} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={356} y={92} style={t14}>3. Erro</text>
      <text x={356} y={114} style={t12}>real − previsto</text>
      <text x={356} y={134} style={t12}>soma dos quadrados</text>
      <rect x={496} y={68} width={144} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={508} y={92} style={t14}>4. Previsão</text>
      <text x={508} y={114} style={t12}>valor novo</text>
      <text x={508} y={134} style={t12}>mais faixa de erro</text>

      <text x={40} y={182} style={t12}>Cuidados</text>
      <rect x={40} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Interpolar x extrapolar</text>
      <text x={52} y={240} style={t12}>dentro dos dados: seguro</text>
      <text x={52} y={260} style={t12}>fora deles: arriscado</text>
      <rect x={350} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={218} style={t14}>Treino e teste</text>
      <text x={362} y={240} style={t12}>treino: o modelo aprende</text>
      <text x={362} y={260} style={t12}>teste: dados escondidos</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={314} style={t14}>Sobreajuste</text>
      <text x={52} y={334} style={t12}>decora o ruído: teste vai mal</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={314} style={t14}>Subajuste</text>
      <text x={362} y={334} style={t12}>simples demais: erra em tudo</text>

      <text x={40} y={384} style={t12}>Lembrete</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>Prever não é explicar</text>
      <text x={52} y={440} style={t12}>Um padrão que funciona no passado pode quebrar amanhã,</text>
      <text x={52} y={456} style={t12}>e correlação não prova causa.</text>

      <Historia y={488} texto="História: Gauss e Ceres, 1801 · Legendre, 1805 · Galton, 1886" />
    </Moldura>
  )
}
