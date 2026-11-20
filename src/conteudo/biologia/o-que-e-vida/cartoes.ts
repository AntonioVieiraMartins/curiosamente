import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula O que é vida? (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Quais são as características dos seres vivos?', verso: 'Células, metabolismo, crescimento, reprodução, resposta ao ambiente e herança com evolução.' },
  { tipo: 'definição', frente: 'O que é metabolismo?', verso: 'O conjunto de reações químicas que transformam energia e matéria dentro do ser vivo.' },
  { tipo: 'definição', frente: 'O que é homeostase?', verso: 'Manter o interior do corpo estável (temperatura, água, açúcar no sangue), mesmo quando o ambiente muda.' },
  { tipo: 'pegadinha', frente: 'O fogo é um ser vivo?', verso: 'Não. Consome e se espalha, mas não tem células, nem metabolismo próprio, nem herança.' },
  { tipo: 'pegadinha', frente: 'Uma mula, que não tem filhotes, está viva?', verso: 'Sim. A reprodução é característica da espécie, e não de cada indivíduo.' },
  { tipo: 'pegadinha', frente: 'Um vírus está vivo?', verso: 'Os cientistas discutem: não tem células nem metabolismo próprio e só se reproduz dentro de uma célula.' },
  { tipo: 'definição', frente: 'O que era a geração espontânea?', verso: 'A ideia antiga de que seres vivos nascem sozinhos de matéria sem vida, como larvas da carne.' },
  { tipo: 'história', frente: 'O que Francesco Redi mostrou em 1668?', verso: 'Com carne em frascos aberto, coberto e tampado, só nasciam larvas onde as moscas podiam pôr ovos.' },
  { tipo: 'história', frente: 'O que o frasco de pescoço de cisne de Pasteur mostrou?', verso: 'O caldo fervido ficava limpo porque a poeira com micróbios ficava presa na curva. Os micróbios vêm de outros micróbios.' },
  { tipo: 'história', frente: 'O que fez o experimento de Miller e Urey (1952)?', verso: 'Imitou a Terra primitiva (gases, água e faíscas) e produziu aminoácidos em cerca de uma semana.' },
  { tipo: 'conta', frente: 'Uma bactéria que se divide a cada 20 min: quantas após 2 horas?', verso: '6 divisões: 2⁶ = 64 bactérias.' },
  { tipo: 'regra', frente: 'Níveis de organização, do menor ao maior?', verso: 'Célula, tecido, órgão, sistema, organismo, população, comunidade, ecossistema, biosfera.' },
  { tipo: 'definição', frente: 'Autótrofos e heterótrofos?', verso: 'Autótrofos fabricam o próprio alimento (plantas, algas). Heterótrofos se alimentam de outros seres (animais, fungos).' },
  { tipo: 'conta', frente: 'Quando surgiu a vida na Terra, aproximadamente?', verso: 'Há mais de 3,5 bilhões de anos, enquanto a Terra tem cerca de 4,5 bilhões.' },
  { tipo: 'definição', frente: 'Unicelular e pluricelular?', verso: 'Unicelular: corpo de uma célula só (bactérias). Pluricelular: muitas células (plantas, animais).' },
  { tipo: 'por quê', frente: 'Por que uma semente seca está viva?', verso: 'Contém um embrião vivo com metabolismo quase parado. Com água e calor, ele germina.' },
]

export default cartoes
