import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Aprendizado de máquina em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-aprendizado-de-maquina"
      titulo="Aprendizado de máquina em um olhar"
      desc="Em vez de escrever as regras, damos exemplos e o computador acha as regras. Tipos: supervisionado, com rótulos (classificação e regressão), e não supervisionado, que acha grupos. Ferramentas: k vizinhos, k-médias, neurônio artificial e rede neural. Aprender é ajustar pesos para baixar o erro, em passos, com a descida do gradiente. Cuidados: separar treino e teste, olhar a matriz de confusão e não só a acurácia, e vigiar o viés dos dados."
      altura={500}
    >
      <text x={40} y={56} style={t12}>Como aprende</text>
      <rect x={40} y={68} width={140} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>Exemplos</text>
      <text x={52} y={114} style={t12}>atributos + rótulo</text>
      <text x={52} y={134} style={t12}>ex.: peso, focinho</text>
      <rect x={192} y={68} width={140} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={204} y={92} style={t14}>Modelo</text>
      <text x={204} y={114} style={t12}>pesos ajustáveis</text>
      <text x={204} y={134} style={t12}>faz um palpite</text>
      <rect x={344} y={68} width={140} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={356} y={92} style={t14}>Erro</text>
      <text x={356} y={114} style={t12}>palpite x resposta</text>
      <text x={356} y={134} style={t12}>quanto errou?</text>
      <rect x={496} y={68} width={144} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={508} y={92} style={t14}>Ajuste</text>
      <text x={508} y={114} style={t12}>descida do gradiente</text>
      <text x={508} y={134} style={t12}>passos pequenos</text>

      <text x={40} y={182} style={t12}>Tipos e ferramentas</text>
      <rect x={40} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Supervisionado</text>
      <text x={52} y={240} style={t12}>classificação: categoria</text>
      <text x={52} y={260} style={t12}>regressão: um número</text>
      <rect x={350} y={194} width={290} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={218} style={t14}>Não supervisionado</text>
      <text x={362} y={240} style={t12}>sem rótulos</text>
      <text x={362} y={260} style={t12}>acha grupos (k-médias)</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={314} style={t14}>k vizinhos</text>
      <text x={52} y={334} style={t12}>copia os k exemplos mais perto</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={314} style={t14}>Neurônio e rede neural</text>
      <text x={362} y={334} style={t12}>soma ponderada, em camadas</text>

      <text x={40} y={384} style={t12}>Cuidados</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>Treino e teste, matriz de confusão, viés</text>
      <text x={52} y={440} style={t12}>Acurácia sozinha engana quando o caso é raro.</text>
      <text x={52} y={456} style={t12}>O modelo copia os vícios dos dados com que aprendeu.</text>

      <Historia y={488} texto="História: Turing, 1950 · Rosenblatt, 1958 · Samuel, 1959 · Rumelhart, Hinton e Williams, 1986 · AlexNet, 2012" />
    </Moldura>
  )
}
