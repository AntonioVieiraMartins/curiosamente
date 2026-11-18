import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Equações do 1º grau (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma equação e o que é resolvê-la?', verso: 'Uma igualdade com uma incógnita (o x). Resolver é achar o valor de x que a torna verdadeira.' },
  { tipo: 'regra', frente: 'Qual é a regra da balança?', verso: 'O que se faz de um lado, faz-se do outro, para a igualdade continuar em equilíbrio.' },
  { tipo: 'conta', frente: 'Resolva x + 3 = 8 na balança.', verso: 'Tire 3 dos dois lados: x = 5. Confira: 5 + 3 = 8.' },
  { tipo: 'regra', frente: 'Em que ordem desfazer as operações?', verso: 'Na ordem contrária à de montagem: primeiro o somar/subtrair, depois o multiplicar/dividir.' },
  { tipo: 'conta', frente: 'Resolva 3x + 5 = 20.', verso: 'Tire 5: 3x = 15. Divida por 3: x = 5. Confira: 3 × 5 + 5 = 20.' },
  { tipo: 'conta', frente: 'Resolva x + 9 = 4.', verso: 'x = 4 − 9 = −5. A solução pode ser negativa. Confira: −5 + 9 = 4.' },
  { tipo: 'conta', frente: 'Resolva 5x + 2 = 2x + 11.', verso: 'Tire 2x: 3x + 2 = 11; tire 2: 3x = 9; divida por 3: x = 3. Confira: 17 = 17.' },
  { tipo: 'regra', frente: 'O que fazer quando o x aparece nos dois lados?', verso: 'Junte os x de um lado (subtraindo-os do outro) e os números do outro lado.' },
  { tipo: 'conta', frente: 'Resolva x/3 + 2 = 6.', verso: 'Tire 2: x/3 = 4. Multiplique os dois lados por 3: x = 12. Confira: 12 ÷ 3 + 2 = 6.' },
  { tipo: 'pegadinha', frente: 'Em 2x + 4 = 18, dá para dividir só o 2x por 2?', verso: 'Não: é preciso dividir todos os termos (x + 2 = 9). Dividir só um termo é erro comum.' },
  { tipo: 'regra', frente: 'Por que sempre conferir?', verso: 'Troque x pelo resultado na equação do começo. Se os dois lados derem o mesmo valor, está certo; evita erros de sinal.' },
  { tipo: 'problema', frente: 'Daqui a 5 anos Ana terá 20. Qual a idade dela hoje?', verso: 'x + 5 = 20, então x = 15 anos.' },
  { tipo: 'problema', frente: 'Corrida de R$ 31 com bandeirada de R$ 6 e R$ 2,50 por km. Quantos km?', verso: '6 + 2,5x = 31 → 2,5x = 25 → x = 10 km.' },
  { tipo: 'problema', frente: 'Celular de R$ 1.200, entrada de R$ 300 e parcelas de R$ 150: quantas parcelas?', verso: '300 + 150x = 1.200 → 150x = 900 → x = 6 parcelas.' },
  { tipo: 'problema', frente: 'O perímetro de um retângulo é 30 cm e a base mede 9. Qual a altura?', verso: '30 = 2·(9 + h) → 15 = 9 + h → h = 6 cm. Confira: 2 × 15 = 30.' },
  { tipo: 'história', frente: 'Quem inventou o sinal de igual e quando?', verso: 'Robert Recorde, em 1557, no livro The Whetstone of Witte.' },
  { tipo: 'história', frente: 'De onde vem a palavra álgebra e quem popularizou as letras?', verso: 'Do livro de Al-Khwarizmi (825) sobre restauração e balanceamento. Viète e Descartes passaram a usar letras para os desconhecidos nos séculos XVI e XVII. O papiro de Rhind (c. 1650 a.C.) já tinha equações lineares.' },
]

export default cartoes
