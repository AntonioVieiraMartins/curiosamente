import { Caixa, Historia, Moldura, Seta, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Sistema decimal em um olhar"
const casas = [
  { nome: 'milhar', val: '1.000', dig: '5' },
  { nome: 'centena', val: '100', dig: '3' },
  { nome: 'dezena', val: '10', dig: '0' },
  { nome: 'unidade', val: '1', dig: '5' },
]

export default function Infografico() {
  return (
    <Moldura
      id="info-dec"
      titulo="Sistema decimal em um olhar"
      desc="O sistema decimal usa dez algarismos e agrupa de 10 em 10. Cada casa vale 10 vezes a da direita: unidade, dezena, centena e milhar. No 5.305 o primeiro 5 vale 5.000 e o último vale 5, e o zero guarda o lugar da dezena. Para comparar, conte os algarismos e compare da esquerda para a direita. Para arredondar, olhe o algarismo seguinte: de 0 a 4 fica, de 5 a 9 sobe."
      altura={600}
    >
      <text x={40} y={56} style={t12}>Dez algarismos (0 a 9) e grupos de 10 em 10</text>

      {casas.map((c, i) => {
        const x = 70 + i * 140
        return (
          <g key={c.nome}>
            <Caixa x={x} y={80} w={120} h={74} cor={c.dig === '0' ? 'coral' : 'azul'} titulo={c.dig} sub={`${c.nome} · vale ${c.val}`} grande />
            {i < 3 && <text x={x + 130} y={122} textAnchor="middle" style={t12}>×10</text>}
          </g>
        )
      })}
      <text x={40} y={182} style={t12}>5.305: o primeiro 5 vale 5.000, o último vale só 5. O zero segura o lugar da dezena.</text>

      <text x={40} y={222} style={t12}>Três jeitos de usar</text>

      <rect x={40} y={234} width={190} height={170} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth={1} />
      <text x={52} y={256} style={t14}>Decompor</text>
      <text x={52} y={278} style={t12}>3.482 =</text>
      <text x={52} y={298} style={t12}>3.000 + 400</text>
      <text x={52} y={318} style={t12}>+ 80 + 2</text>
      <text x={52} y={346} style={t12}>6.059 =</text>
      <text x={52} y={366} style={t12}>6.000 + 0 + 50 + 9</text>
      <text x={52} y={390} style={t12}>sem o zero, vira 659</text>

      <rect x={245} y={234} width={190} height={170} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth={1} />
      <text x={257} y={256} style={t14}>Comparar</text>
      <text x={257} y={280} style={t12}>1º: quantos algarismos?</text>
      <text x={257} y={298} style={t12}>quem tem mais é maior</text>
      <text x={257} y={324} style={t12}>2º: empate? da esquerda</text>
      <text x={257} y={342} style={t12}>para a direita, até o</text>
      <text x={257} y={360} style={t12}>primeiro diferente</text>
      <text x={257} y={388} style={t12}>4.735 &lt; 4.753</text>

      <rect x={450} y={234} width={190} height={170} rx={8} fill="color-mix(in srgb, var(--color-coral) 12%, white)" stroke="var(--color-coral)" strokeWidth={1} />
      <text x={462} y={256} style={t14}>Arredondar</text>
      <text x={462} y={280} style={t12}>olhe o algarismo seguinte</text>
      <text x={462} y={304} style={t12}>0 a 4: a casa fica</text>
      <text x={462} y={324} style={t12}>5 a 9: a casa sobe 1</text>
      <text x={462} y={352} style={t12}>4.738 na centena:</text>
      <text x={462} y={372} style={t12}>3 é menor que 5</text>
      <text x={462} y={392} style={t14}>4.700</text>

      <text x={40} y={436} style={t12}>Ler um número grande: grupos de três, da direita para a esquerda</text>
      <Caixa x={40} y={448} w={110} h={54} cor="amarelo" titulo="3" sub="milhões" />
      <Caixa x={170} y={448} w={110} h={54} cor="amarelo" titulo="482" sub="milhares" />
      <Caixa x={300} y={448} w={110} h={54} cor="amarelo" titulo="915" sub="unidades" />
      <Seta id="info-dec" x1={152} y1={475} x2={168} y2={475} />
      <Seta id="info-dec" x1={282} y1={475} x2={298} y2={475} />
      <text x={430} y={470} style={t12}>três milhões, quatrocentos e</text>
      <text x={430} y={488} style={t12}>oitenta e dois mil, novecentos e quinze</text>

      <text x={40} y={540} style={t12}>999 + 1 = 1.000: todas as casas chegam a 10 e trocam. Acrescentar um zero multiplica por 10.</text>
      <Historia y={582} texto="História: sistema indiano nos séc. 1 a 4 · zero datado em 876 · Europa em 976 · uso comum no séc. 15" />
    </Moldura>
  )
}
