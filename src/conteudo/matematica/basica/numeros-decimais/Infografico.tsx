import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Números decimais em um olhar": a grade de 100 quadradinhos mostra 0,3 = 30 centésimos
export default function Infografico() {
  const quad = Array.from({ length: 100 }, (_, i) => ({ x: 40 + (i % 10) * 12, y: 74 + Math.floor(i / 10) * 12, cheio: i < 30 }))
  return (
    <Moldura
      id="info-dcm"
      titulo="Números decimais em um olhar"
      desc="Depois da vírgula, cada casa vale 10 vezes menos: décimo, centésimo, milésimo. Um inteiro cortado em 100 quadradinhos mostra que 0,3 é o mesmo que 30 centésimos. Zeros à direita não mudam o valor, e 0,5 é maior que 0,45. Para comparar, iguale as casas. Para somar, vírgula embaixo de vírgula. Multiplicar por 10, 100 e 1.000 anda a vírgula para a direita. Ao multiplicar decimais, multiplique como inteiros e conte as casas. A fração 1 sobre 3 vira uma dízima que nunca termina."
      altura={640}
    >
      <text x={40} y={56} style={t12}>O inteiro cortado em 100 pedaços: 0,3 = 30 centésimos</text>
      {quad.map((q, i) => (
        <rect key={i} x={q.x} y={q.y} width={10} height={10} rx={1.5} fill={q.cheio ? cores.azul.stroke : 'var(--color-fundo)'} stroke="var(--color-borda)" strokeWidth={0.5} />
      ))}

      <Caixa x={190} y={74} w={110} h={54} cor="azul" titulo="3,472" sub="" grande />
      <text x={190} y={146} style={t12}>3 unidades</text>
      <text x={190} y={164} style={t12}>4 décimos (0,4)</text>
      <text x={190} y={182} style={t12}>7 centésimos (0,07)</text>
      <text x={190} y={200} style={t12}>2 milésimos (0,002)</text>

      <rect x={340} y={74} width={300} height={130} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={354} y={96} style={t14}>Cada casa vale 10 vezes menos</text>
      <text x={354} y={120} style={t12}>unidade → décimo → centésimo → milésimo</text>
      <text x={354} y={142} style={t12}>0,3 = 0,30 = 0,300 (zeros no fim não mudam)</text>
      <text x={354} y={162} style={t12}>mas 0,03 é bem menor que 0,3</text>
      <text x={354} y={190} style={t12}>0,5 = 1/2 · 0,25 = 1/4 · 0,75 = 3/4</text>

      <text x={40} y={240} style={t12}>Quatro ferramentas</text>
      <rect x={40} y={252} width={140} height={126} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={274} style={t14}>Comparar</text>
      <text x={52} y={296} style={t12}>iguale as casas:</text>
      <text x={52} y={314} style={t12}>0,5 vira 0,50</text>
      <text x={52} y={332} style={t12}>50 &gt; 45, logo</text>
      <text x={52} y={352} style={t14}>0,5 &gt; 0,45</text>

      <rect x={190} y={252} width={140} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={202} y={274} style={t14}>Somar</text>
      <text x={202} y={296} style={t12}>vírgula embaixo</text>
      <text x={202} y={314} style={t12}>de vírgula</text>
      <text x={202} y={336} style={t12}>2,50 + 1,75</text>
      <text x={202} y={356} style={t14}>= 4,25</text>

      <rect x={340} y={252} width={140} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={352} y={274} style={t14}>A vírgula anda</text>
      <text x={352} y={296} style={t12}>× 10, 100: direita</text>
      <text x={352} y={314} style={t12}>÷ 10, 100: esquerda</text>
      <text x={352} y={336} style={t12}>3,45 × 100 = 345</text>
      <text x={352} y={356} style={t12}>8,9 ÷ 10 = 0,89</text>

      <rect x={490} y={252} width={150} height={126} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={502} y={274} style={t14}>Multiplicar</text>
      <text x={502} y={296} style={t12}>ignore as vírgulas,</text>
      <text x={502} y={314} style={t12}>conte as casas</text>
      <text x={502} y={336} style={t12}>0,4 × 0,6: 4 × 6 = 24</text>
      <text x={502} y={356} style={t14}>= 0,24 (2 casas)</text>

      <text x={40} y={414} style={t12}>Frações que viram decimais</text>
      <Caixa x={40} y={426} w={110} h={54} cor="amarelo" titulo="3/4" sub="3 ÷ 4" />
      <Seta id="info-dcm" x1={152} y1={453} x2={168} y2={453} />
      <Caixa x={170} y={426} w={110} h={54} cor="amarelo" titulo="0,75" sub="termina" />
      <Caixa x={330} y={426} w={110} h={54} cor="coral" titulo="1/3" sub="1 ÷ 3" />
      <Seta id="info-dcm" x1={442} y1={453} x2={458} y2={453} />
      <Caixa x={460} y={426} w={180} h={54} cor="coral" titulo="0,333..." sub="dízima: nunca termina" />
      <text x={40} y={504} style={t12}>Exato só quando o denominador (simplificado) tem apenas os fatores 2 e 5.</text>

      <rect x={40} y={520} width={600} height={50} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={540} style={t14}>Pegadinha: mais algarismos não é maior</text>
      <text x={52} y={558} style={t12}>0,5 tem um algarismo e 0,45 tem dois, mas 0,5 é maior. Multiplicar por menos de 1 diminui.</text>

      <Historia y={606} texto="História: varetas chinesas (séc. 3 a 5) · De Thiende, de Stevin, em 1585 · Brasil usa vírgula; EUA e Reino Unido, ponto" />
    </Moldura>
  )
}
