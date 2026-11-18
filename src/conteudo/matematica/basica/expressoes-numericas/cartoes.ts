import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Expressões numéricas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma expressão numérica e por que precisamos de uma ordem?', verso: 'É uma conta com várias operações juntas, como 20 - 6 ÷ 2 + 1. Sem uma regra comum, cada pessoa chegaria a um resultado. A ordem das operações é uma convenção.' },
  { tipo: 'regra', frente: 'Qual é a ordem das operações?', verso: '1º parênteses, de dentro para fora; 2º expoentes (potências); 3º multiplicação e divisão, da esquerda para a direita; 4º adição e subtração, da esquerda para a direita.' },
  { tipo: 'conta', frente: 'Quanto é 2 + 3 × 4?', verso: '14. A multiplicação vem antes: 3 × 4 = 12 e 2 + 12 = 14.' },
  { tipo: 'conta', frente: 'Quanto é (2 + 3) × 4? Por que difere de 2 + 3 × 4?', verso: '20. Os parênteses mandam somar primeiro: 5 × 4. Sem eles, a multiplicação vem antes e dá 14.' },
  { tipo: 'por quê', frente: 'Por que × e ÷ vêm antes de + e -? Dê um exemplo.', verso: 'Multiplicar é somar parcelas iguais, então já "empacota" o grupo. Boné de R$ 10 e 3 camisas de R$ 25: 10 + 3 × 25 = 10 + 75 = 85, e não 325.' },
  { tipo: 'regra', frente: 'Como resolver operações do mesmo nível?', verso: 'Da esquerda para a direita. × e ÷ têm o mesmo nível; + e - também.' },
  { tipo: 'conta', frente: 'Quanto é 48 ÷ 6 × 2?', verso: '16. Da esquerda para a direita: 48 ÷ 6 = 8 e 8 × 2 = 16. Fazer 6 × 2 antes daria 4, errado.' },
  { tipo: 'conta', frente: 'Quanto é 20 - 5 + 3?', verso: '18. Da esquerda para a direita: 20 - 5 = 15 e 15 + 3 = 18. Fazer 5 + 3 antes daria 12, errado.' },
  { tipo: 'pegadinha', frente: 'Por que as siglas como PEMDAS e BODMAS podem enganar?', verso: 'Lidas ao pé da letra, parecem dizer que a soma vem antes da subtração (ou a multiplicação antes da divisão). Mas cada par tem o mesmo nível, resolvido da esquerda para a direita.' },
  { tipo: 'regra', frente: 'Qual é a ordem dos símbolos de agrupamento na escola?', verso: 'Parênteses ( ), depois colchetes [ ], depois chaves { }, sempre de dentro para fora. Todos significam "resolva isto primeiro".' },
  { tipo: 'conta', frente: 'Quanto é 5 × [ 2 + (10 - 4) ÷ 3 ]?', verso: '20. Dentro para fora: 10 - 4 = 6; 6 ÷ 3 = 2; 2 + 2 = 4; 5 × 4 = 20.' },
  { tipo: 'conta', frente: 'Quanto é 3 + 2² × 5?', verso: '23. Potência primeiro: 2² = 4; depois 4 × 5 = 20; por fim 3 + 20 = 23.' },
  { tipo: 'pegadinha', frente: 'Quanto é 10 - (4 + 1)? Qual é o erro típico?', verso: '5. O parêntese vale como um grupo: 4 + 1 = 5 e 10 - 5 = 5. Quem faz 10 - 4 + 1 chega a 7, errado.' },
  { tipo: 'problema', frente: 'Tenho R$ 100 e gasto R$ 20 em cada um de 3 lanches. Quanto sobra? Escreva a expressão.', verso: 'R$ 40. Expressão: 100 - 20 × 3 = 100 - 60 = 40.' },
  { tipo: 'regra', frente: 'Como diferenciar 8 ÷ 2(2 + 2) viral e evitar a confusão?', verso: 'Tem dois jeitos de ler (16 ou 1). Para Hung-Hsi Wu, contas assim são artificiais. A solução é escrever com mais parênteses.' },
  { tipo: 'história', frente: 'O que a história diz sobre a ordem das operações?', verso: 'É um acordo, não uma descoberta. No século 17 a multiplicação passou a ter precedência sobre a adição na escrita algébrica. Em 1920, Cajori mostrou que ainda havia desacordo sobre a multiplicação e a divisão.' },
]

export default cartoes
