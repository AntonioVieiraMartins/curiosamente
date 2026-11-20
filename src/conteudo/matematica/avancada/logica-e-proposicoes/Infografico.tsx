import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Lógica e proposições em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-logica"
      titulo="Lógica e proposições em um olhar"
      desc="Proposição é uma frase que pode ser verdadeira ou falsa. A negação inverte o valor. E só é verdadeira se as duas forem. Ou é verdadeira se pelo menos uma for. Se então só é falsa quando a condição é verdadeira e a conclusão é falsa. A contrapositiva equivale à frase original, mas a recíproca não. Leis de De Morgan: negar um e vira ou, negar um ou vira e. Tabela com n proposições tem 2 elevado a n linhas."
      altura={540}
    >
      <text x={40} y={56} style={t12}>Os blocos</text>
      <rect x={40} y={68} width={190} height={84} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={92} style={t14}>Proposição</text>
      <text x={52} y={114} style={t12}>frase que é V ou F</text>
      <text x={52} y={134} style={t12}>pergunta e ordem: não</text>
      <rect x={245} y={68} width={190} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={257} y={92} style={t14}>Negação ¬P</text>
      <text x={257} y={114} style={t12}>inverte o valor</text>
      <text x={257} y={134} style={t12}>V vira F, F vira V</text>
      <rect x={450} y={68} width={190} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={462} y={92} style={t14}>Tabela-verdade</text>
      <text x={462} y={114} style={t12}>2ⁿ linhas</text>
      <text x={462} y={134} style={t12}>3 proposições: 8</text>

      <text x={40} y={182} style={t12}>Os conectivos</text>
      <rect x={40} y={194} width={145} height={78} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={218} style={t14}>P ∧ Q (e)</text>
      <text x={52} y={240} style={t12}>V só com as duas V</text>
      <rect x={197} y={194} width={145} height={78} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={209} y={218} style={t14}>P ∨ Q (ou)</text>
      <text x={209} y={240} style={t12}>F só com as duas F</text>
      <rect x={354} y={194} width={145} height={78} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={366} y={218} style={t14}>P → Q (se)</text>
      <text x={366} y={240} style={t12}>F só com V e F</text>
      <rect x={511} y={194} width={129} height={78} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={523} y={218} style={t14}>P ↔ Q</text>
      <text x={523} y={240} style={t12}>V se iguais</text>

      <text x={40} y={302} style={t12}>Frases equivalentes</text>
      <rect x={40} y={314} width={290} height={84} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={52} y={338} style={t14}>Se P então Q</text>
      <text x={52} y={360} style={t12}>= se não Q, então não P (contrapositiva)</text>
      <text x={52} y={380} style={t12}>≠ recíproca (Q → P)</text>
      <rect x={350} y={314} width={290} height={84} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={338} style={t14}>De Morgan</text>
      <text x={362} y={360} style={t12}>¬(P ∧ Q) = ¬P ∨ ¬Q</text>
      <text x={362} y={380} style={t12}>¬(P ∨ Q) = ¬P ∧ ¬Q</text>

      <text x={40} y={428} style={t12}>Argumentos e computadores</text>
      <rect x={40} y={440} width={600} height={64} rx={8} fill={cores.cinza.fill} stroke={cores.cinza.stroke} />
      <text x={52} y={464} style={t14}>válido: premissas V garantem conclusão V · afirmar o consequente é furado</text>
      <text x={52} y={486} style={t12}>portas E, OU e NÃO são a lógica dentro de todo chip: 1 = ligado, 0 = desligado</text>

      <Historia y={530} texto="História: Aristóteles, séc. 4 a.C. · De Morgan e Boole, 1847 · Frege, 1879 · Shannon, 1937 (lógica nos circuitos)" />
    </Moldura>
  )
}
