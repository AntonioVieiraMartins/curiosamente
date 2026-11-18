import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Razão e proporção em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-raz"
      titulo="Razão e proporção em um olhar"
      desc="Razão é uma comparação por divisão: o que importa é a relação, não o tamanho. Proporção é uma igualdade de razões, conferida pelo produto cruzado: 3/4 = 15/20 porque 3 vezes 20 é 4 vezes 15. Taxas são razões com unidade, como km/h e reais por quilo, boas para comparar ofertas. Regra de três: descubra quanto vale 1 e multiplique. Grandezas diretas dobram juntas; inversas, quando uma dobra a outra cai pela metade, como pintores e dias. Dividir proporcionalmente: some as partes e distribua. Aumentar as medidas k vezes multiplica a área por k ao quadrado e o volume por k ao cubo."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Razão compara por divisão; proporção é igualdade de razões</text>

      <Caixa x={40} y={72} w={130} h={60} cor="azul" titulo="3 : 4" sub="razão 3/4" />
      <text x={188} y={108} style={t14}>=</text>
      <Caixa x={210} y={72} w={130} h={60} cor="azul" titulo="15 : 20" sub="x = 15" />
      <text x={360} y={94} style={t14}>Produto cruzado</text>
      <text x={360} y={114} style={t12}>3 × 20 = 4 × 15 = 60</text>
      <text x={360} y={130} style={t12}>(de 4 para 20: × 5, então 3 × 5 = 15)</text>

      <text x={40} y={166} style={t12}>Taxas: razões com unidade</text>
      <rect x={40} y={178} width={600} height={50} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={200} style={t12}>240 km em 3 h = 80 km/h · suco 9 ÷ 2 = R$ 4,50/L contra 12 ÷ 3 = R$ 4,00/L</text>
      <text x={52} y={218} style={t12}>a garrafa de 3 L custa mais no total, mas sai mais barata por litro</text>

      <text x={40} y={256} style={t12}>Regra de três: descubra quanto vale 1</text>
      <rect x={40} y={268} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={290} style={t14}>Direta</text>
      <text x={52} y={312} style={t12}>3 kg → 60 pães</text>
      <text x={52} y={332} style={t12}>1 kg → 20 pães</text>
      <text x={52} y={352} style={t12}>5 kg → 100 pães</text>
      <text x={52} y={374} style={t12}>uma dobra, a outra dobra</text>

      <rect x={245} y={268} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={290} style={t14}>Inversa</text>
      <text x={257} y={312} style={t12}>6 pintores, 10 dias</text>
      <text x={257} y={332} style={t12}>trabalho: 6 × 10 = 60</text>
      <text x={257} y={352} style={t12}>4 pintores: 60 ÷ 4 = 15</text>
      <text x={257} y={374} style={t12}>uma dobra, a outra cai à metade</text>

      <rect x={450} y={268} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={290} style={t14}>Composta</text>
      <text x={462} y={312} style={t12}>4 pintores, 2 paredes, 6 h</text>
      <text x={462} y={332} style={t12}>8 pintores, 6 paredes?</text>
      <text x={462} y={352} style={t12}>6 × (6/2) × (4/8)</text>
      <text x={462} y={374} style={t14}>= 9 horas</text>

      <text x={40} y={414} style={t12}>Dividir em partes proporcionais</text>
      <rect x={40} y={426} width={290} height={104} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={448} style={t14}>Lucro de R$ 1.000</text>
      <text x={52} y={470} style={t12}>Ana R$ 3.000 e Bruno R$ 2.000: razão 3 : 2</text>
      <text x={52} y={490} style={t12}>5 partes, cada uma R$ 200</text>
      <text x={52} y={512} style={t12}>Ana R$ 600 · Bruno R$ 400</text>

      <rect x={350} y={426} width={290} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={448} style={t14}>Escala: tamanho × k</text>
      <text x={362} y={470} style={t12}>medidas × k</text>
      <text x={362} y={490} style={t12}>área × k²</text>
      <text x={362} y={510} style={t12}>volume × k³</text>

      <text x={40} y={560} style={t12}>Nem tudo é proporcional. TV widescreen: 16 : 9, em qualquer tamanho.</text>
      <text x={40} y={580} style={t12}>Dose de remédio por peso (mg/kg): sempre siga a orientação médica.</text>

      <Historia y={614} texto="História: Tales e a sombra da pirâmide (c. 600 a.C.) · Euclides, livro V (c. 300 a.C.) · Eratóstenes · regra de três na China" />
    </Moldura>
  )
}
