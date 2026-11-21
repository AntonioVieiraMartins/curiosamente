import { Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Vírus e bactérias em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-virus-e-bacterias"
      titulo="Vírus e bactérias em um olhar"
      desc="Bactérias são seres de uma célula sem núcleo, que se dividem sozinhas e podem ser úteis ou causar doenças. Vírus são partículas com DNA ou RNA numa capa de proteína, muito menores, e só se multiplicam dentro de uma célula. Antibióticos matam bactérias, mas não vírus. Vacinas e higiene previnem. O R0 mede o contágio, e a imunidade coletiva exige uma fração de imunes igual a 1 menos 1 sobre R0."
      altura={520}
    >
      <text x={40} y={56} style={t12}>Quem é quem</text>
      <rect x={40} y={68} width={290} height={104} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={92} style={t14}>Bactéria</text>
      <text x={52} y={114} style={t12}>1 célula, sem núcleo</text>
      <text x={52} y={134} style={t12}>cerca de 1 a 5 micrômetros</text>
      <text x={52} y={154} style={t12}>se divide sozinha</text>
      <rect x={350} y={68} width={290} height={104} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={92} style={t14}>Vírus</text>
      <text x={362} y={114} style={t12}>DNA ou RNA + capa de proteína</text>
      <text x={362} y={134} style={t12}>cerca de 20 a 300 nanômetros</text>
      <text x={362} y={154} style={t12}>só se multiplica numa célula</text>

      <text x={40} y={202} style={t12}>Doenças comuns</text>
      <rect x={40} y={214} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={238} style={t14}>Bactérias</text>
      <text x={52} y={258} style={t12}>tuberculose, tétano, cólera</text>
      <rect x={350} y={214} width={290} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={362} y={238} style={t14}>Vírus</text>
      <text x={362} y={258} style={t12}>gripe, dengue, sarampo, Covid-19</text>

      <text x={40} y={308} style={t12}>Como se defender</text>
      <rect x={40} y={320} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={344} style={t14}>Higiene</text>
      <text x={52} y={366} style={t12}>lavar as mãos,</text>
      <text x={52} y={386} style={t12}>água tratada</text>
      <rect x={245} y={320} width={190} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={344} style={t14}>Vacinas</text>
      <text x={257} y={366} style={t12}>treinam as defesas</text>
      <text x={257} y={386} style={t12}>imunidade coletiva</text>
      <rect x={450} y={320} width={190} height={84} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={462} y={344} style={t14}>Antibióticos</text>
      <text x={462} y={366} style={t12}>só contra bactérias,</text>
      <text x={462} y={386} style={t12}>nunca para vírus</text>

      <text x={40} y={428} style={t12}>Conta importante</text>
      <rect x={40} y={440} width={600} height={42} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={466} style={t14}>Imunes necessários = 1 − 1/R0 (R0 = 4 pede 75%)</text>

      <Historia y={510} texto="História: Leeuwenhoek, 1676 · Jenner, 1796 · Semmelweis, 1847 · Pasteur e Koch · Ivanovski, 1892 · Fleming, 1928" />
    </Moldura>
  )
}
