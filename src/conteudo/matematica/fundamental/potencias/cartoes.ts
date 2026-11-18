import type { CartaoPronto } from '../../../tipos'

// Baralho de revisão da cápsula Potências (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma potência? O que são base e expoente?', verso: 'Multiplicação repetida: aⁿ tem n fatores iguais a a. A base é o que se multiplica; o expoente diz quantas vezes.' },
  { tipo: 'conta', frente: 'Quanto é 3⁴? É 3 × 4?', verso: '81. 3 × 3 × 3 × 3. Não é 3 × 4 = 12: potência é multiplicação repetida.' },
  { tipo: 'definição', frente: 'De onde vêm as palavras quadrado e cubo?', verso: 'Da geometria: n² é uma área (lado × lado) e n³ é um volume.' },
  { tipo: 'regra', frente: 'Quanto valem a¹, a⁰ e a⁻ⁿ?', verso: 'a¹ = a; a⁰ = 1; a⁻ⁿ = 1/aⁿ. Cada degrau para baixo na escada divide pela base.' },
  { tipo: 'conta', frente: 'Quanto é 2⁻³?', verso: '1/8 (= 0,125). É 1 ÷ 2³ = 1 ÷ 8.' },
  { tipo: 'pegadinha', frente: 'Expoente negativo deixa o número negativo?', verso: 'Não. 2⁻³ = 1/8 é positivo: o expoente negativo inverte a potência.' },
  { tipo: 'regra', frente: 'O que fazer com os expoentes ao multiplicar potências de mesma base?', verso: 'Somar: aᵐ × aⁿ = aᵐ⁺ⁿ (Arquimedes provou 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ).' },
  { tipo: 'conta', frente: 'Simplifique 2⁶ ÷ 2² e (2³)².', verso: '2⁶ ÷ 2² = 2⁴ = 16 (subtrai expoentes). (2³)² = 2⁶ = 64 (multiplica expoentes).' },
  { tipo: 'pegadinha', frente: 'aᵐ + aⁿ vira aᵐ⁺ⁿ?', verso: 'Não. A regra de somar expoentes vale só para multiplicar potências de mesma base.' },
  { tipo: 'pegadinha', frente: '(a + b)² é igual a a² + b²?', verso: 'Não. (3 + 4)² = 49, mas 3² + 4² = 25. Na verdade (a + b)² = a² + 2ab + b².' },
  { tipo: 'pegadinha', frente: 'Qual a diferença entre (−3)² e −3²?', verso: '(−3)² = 9 e −3² = −9. Os parênteses decidem a que a potência se aplica.' },
  { tipo: 'conta', frente: 'Quanto é 3 + 2² × 5?', verso: '23. A potência vem antes: 2² = 4; depois 4 × 5 = 20; por fim 3 + 20.' },
  { tipo: 'definição', frente: 'O que é notação científica?', verso: 'm × 10ⁿ, com m entre 1 e 10. Escreve números enormes e minúsculos.' },
  { tipo: 'conta', frente: 'Escreva 4.500.000 e 0,0003 em notação científica.', verso: '4,5 × 10⁶ (a vírgula andou 6 casas) e 3 × 10⁻⁴.' },
  { tipo: 'problema', frente: 'Quantos números cabem em 16 bits? E por que dobrar assusta?', verso: '2¹⁶ = 65.536. O crescimento exponencial (dobrar e dobrar) foi o que enganou o rei do tabuleiro de xadrez.' },
  { tipo: 'história', frente: 'Quem inventou a palavra "expoente" e quem criou a notação moderna?', verso: 'Michael Stifel inventou "expoente", em 1544. Descartes, no início do século XVII, passou a escrever o número pequeno no alto (a²).' },
  { tipo: 'história', frente: 'O que Arquimedes fez com potências e quando aparece a lenda do xadrez?', verso: 'No século III a.C., em O Contador de Areia, provou 10ᵃ × 10ᵇ = 10ᵃ⁺ᵇ para estimar grãos de areia no universo. A lenda do xadrez aparece por escrito em 1256 (Ibn Khallikan).' },
]

export default cartoes
