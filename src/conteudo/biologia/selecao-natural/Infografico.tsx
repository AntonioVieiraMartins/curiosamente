import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Seleção natural em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-selecao-natural"
      titulo="Seleção natural em um olhar"
      desc="Três condições: variação entre os indivíduos, hereditariedade e reprodução diferente. O resultado é uma população em que as características vantajosas ficam mais comuns, geração após geração. Exemplos: mariposas escuras na poluição, bicos de tentilhões numa seca e bactérias resistentes a antibióticos. Outros processos: deriva genética, que é puro acaso, e seleção artificial. A seleção não tem objetivo nem escolhe o mais forte."
      altura={500}
    >
      <text x={40} y={56} style={t12}>As três condições</text>
      <rect x={40} y={68} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={92} style={t14}>1. Variação</text>
      <text x={52} y={114} style={t12}>os indivíduos são</text>
      <text x={52} y={134} style={t12}>diferentes entre si</text>
      <rect x={245} y={68} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={92} style={t14}>2. Herança</text>
      <text x={257} y={114} style={t12}>parte da diferença</text>
      <text x={257} y={134} style={t12}>passa aos filhos</text>
      <rect x={450} y={68} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={462} y={92} style={t14}>3. Reprodução diferente</text>
      <text x={462} y={114} style={t12}>uns deixam mais</text>
      <text x={462} y={134} style={t12}>descendentes que outros</text>

      <text x={40} y={182} style={t12}>Exemplos</text>
      <rect x={40} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={218} style={t14}>Mariposas</text>
      <text x={52} y={240} style={t12}>tronco sujo: as escuras</text>
      <text x={52} y={260} style={t12}>ficam mais comuns</text>
      <rect x={245} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={257} y={218} style={t14}>Tentilhões</text>
      <text x={257} y={240} style={t12}>seca: bicos maiores</text>
      <text x={257} y={260} style={t12}>sobrevivem mais</text>
      <rect x={450} y={194} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={218} style={t14}>Bactérias</text>
      <text x={462} y={240} style={t12}>antibiótico elimina as</text>
      <text x={462} y={260} style={t12}>sensíveis; sobram as resistentes</text>

      <rect x={40} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={314} style={t14}>Deriva genética</text>
      <text x={52} y={334} style={t12}>só acaso; forte em populações pequenas</text>
      <rect x={350} y={290} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={314} style={t14}>Seleção artificial</text>
      <text x={362} y={334} style={t12}>pessoas escolhem: cães, milho, gado</text>

      <text x={40} y={384} style={t12}>Cuidado</text>
      <rect x={40} y={396} width={600} height={66} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={420} style={t14}>Não é sobre ser o mais forte</text>
      <text x={52} y={440} style={t12}>É sobre deixar mais descendentes. A seleção não tem plano:</text>
      <text x={52} y={456} style={t12}>só filtra o que já existe, no ambiente de agora.</text>

      <Historia y={488} texto="História: Beagle, 1831 · Darwin e Wallace, 1858 · A origem das espécies, 1859 · Grant, 1973 · Lenski, 1988" />
    </Moldura>
  )
}
