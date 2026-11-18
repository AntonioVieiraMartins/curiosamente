import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Divisão (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Em 20 ÷ 4 = 5, como se chama cada número? E o que sobra, se sobrar?', verso: '20 é o dividendo (o que se reparte), 4 é o divisor (entre quantos), 5 é o quociente (quanto cada um leva). O que sobra é o resto.' },
  { tipo: 'definição', frente: 'Quais são as duas formas de pensar a divisão?', verso: 'Repartir em partes iguais (20 maçãs entre 4 pessoas) e ver quantas vezes um número cabe em outro (o 4 cabe 5 vezes no 20).' },
  { tipo: 'conta', frente: 'Quanto é 23 ÷ 4? Qual é o resto?', verso: 'Quociente 5 e resto 3. Conta: 4 × 5 = 20 e 23 - 20 = 3. Prova: 4 × 5 + 3 = 23.' },
  { tipo: 'regra', frente: 'Qual fórmula liga dividendo, divisor, quociente e resto?', verso: 'Dividendo = divisor × quociente + resto, e o resto é menor que o divisor (a chamada divisão euclidiana).' },
  { tipo: 'por quê', frente: 'Por que o resto é sempre menor que o divisor?', verso: 'Se o resto fosse igual ou maior, ainda caberia mais um grupo, e o quociente seria maior. Por exemplo: 23 ÷ 4 com resto 7 está errado, porque 7 ainda contém mais um 4.' },
  { tipo: 'regra', frente: 'Dividindo por 7, qual é o maior resto possível?', verso: '6. Os restos vão de 0 até o divisor menos 1.' },
  { tipo: 'conta', frente: 'Quanto é 758 ÷ 6?', verso: '126, com resto 2. Passos: 7 ÷ 6 = 1 (resto 1); 15 ÷ 6 = 2 (resto 3); 38 ÷ 6 = 6 (resto 2). Prova: 6 × 126 + 2 = 758.' },
  { tipo: 'regra', frente: 'Quais são os quatro passos da divisão armada (que se repetem)?', verso: 'Dividir, multiplicar, subtrair e baixar o próximo algarismo.' },
  { tipo: 'regra', frente: 'Como conferir (prova real) que 47 ÷ 5 = 9, resto 2?', verso: 'Multiplique o quociente pelo divisor e some o resto: 5 × 9 + 2 = 47. Se der o dividendo, está certo.' },
  { tipo: 'regra', frente: 'Como saber, sem fazer a conta, se um número é divisível por 3 ou por 9?', verso: 'Por 3: a soma dos algarismos é múltiplo de 3. Por 9: a soma dos algarismos é múltiplo de 9. (Exemplo: 2.340 tem soma 9, então é divisível por 3 e por 9.)' },
  { tipo: 'regra', frente: 'Quais são as regras de divisibilidade por 2, por 5 e por 10?', verso: 'Por 2: termina em número par. Por 5: termina em 0 ou 5. Por 10: termina em 0.' },
  { tipo: 'pegadinha', frente: 'Por que 12 ÷ 0 não existe?', verso: 'Dividir por 0 exigiria um número que, multiplicado por 0, desse 12. Mas qualquer número vezes 0 dá 0. Nenhum número serve, então a conta é indefinida.' },
  { tipo: 'pegadinha', frente: 'Quanto é 24 ÷ 6 ÷ 2? Por que a ordem importa?', verso: '2, resolvendo da esquerda para a direita: 24 ÷ 6 = 4 e 4 ÷ 2 = 2. Se agrupasse 6 ÷ 2 primeiro, daria 24 ÷ 3 = 8: a divisão não é associativa.' },
  { tipo: 'conta', frente: 'Quanto é 3.500 ÷ 100? E 240 ÷ 40?', verso: '35 (dividir por 100 tira dois zeros) e 6 (tirando um zero de cada: 24 ÷ 4).' },
  { tipo: 'problema', frente: '100 alunos vão em ônibus de 40 lugares. Quantos ônibus são necessários?', verso: '3. 100 ÷ 40 = 2, resto 20. Os 20 alunos que sobraram também precisam de lugar, então é preciso mais um ônibus.' },
  { tipo: 'história', frente: 'Quem introduziu o símbolo ÷ e quando? E os dois pontos (:)?', verso: 'O ÷ foi introduzido por Johann Rahn, em 1659. Os dois pontos (:) foram introduzidos por Leibniz, em 1684.' },
]

export default cartoes
