import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Seleção natural (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é seleção natural?', verso: 'Quando indivíduos com certas características herdáveis sobrevivem e se reproduzem mais, essas características se tornam mais comuns na população.' },
  { tipo: 'regra', frente: 'Quais as três condições para a seleção natural?', verso: 'Variação entre os indivíduos, hereditariedade dessa variação e reprodução diferente (uns deixam mais filhos).' },
  { tipo: 'pegadinha', frente: 'Quem evolui: o indivíduo ou a população?', verso: 'A população. Um indivíduo não muda de espécie nem "se adapta" durante a vida para passar isso aos filhos.' },
  { tipo: 'pegadinha', frente: 'A seleção natural escolhe o "mais forte"?', verso: 'Não. Escolhe o mais bem ajustado ao ambiente, que deixa mais descendentes. Pode ser o menor, o mais discreto ou o mais cooperativo.' },
  { tipo: 'definição', frente: 'O que é adaptação?', verso: 'Uma característica que ajuda a sobreviver e a se reproduzir no ambiente onde a espécie vive.' },
  { tipo: 'por quê', frente: 'Por que o antibiótico "cria" bactérias resistentes?', verso: 'Ele não cria: elimina as sensíveis e deixa as raras resistentes, que se multiplicam sem concorrência.' },
  { tipo: 'regra', frente: 'Como evitar a resistência a antibióticos?', verso: 'Usar só com receita, tomar até o fim e nunca para vírus (gripe, resfriado).' },
  { tipo: 'história', frente: 'Quem propôs a seleção natural, e quando?', verso: 'Charles Darwin e Alfred Russel Wallace, apresentando juntos em 1858. Darwin publicou A origem das espécies em 1859.' },
  { tipo: 'história', frente: 'O que se observou nas mariposas na Inglaterra?', verso: 'Com a poluição das fábricas, as escuras ficaram mais comuns, porque as aves viam menos as escuras nos troncos sujos.' },
  { tipo: 'história', frente: 'O que os Grant estudaram nas Galápagos?', verso: 'Os tentilhões de Daphne Major. Numa seca, as aves de bico maior sobreviveram mais, e os filhotes nasceram com bicos maiores.' },
  { tipo: 'conta', frente: 'O que diz a equação R = h² · S?', verso: 'A resposta à seleção (R) é a herdabilidade (h²) vezes a diferença selecionada (S). Sem herança (h² = 0), nada muda.' },
  { tipo: 'definição', frente: 'O que é deriva genética?', verso: 'Mudança de frequência causada só pelo acaso. Forte em populações pequenas, fraca nas grandes.' },
  { tipo: 'pegadinha', frente: 'A seleção natural tem um objetivo?', verso: 'Não. Não planeja nem busca perfeição: só filtra o que já existe, no ambiente de agora.' },
  { tipo: 'regra', frente: 'O que é seleção artificial?', verso: 'Quando as pessoas escolhem quais indivíduos se reproduzem (raças de cães, milho, vacas), usando a mesma variação e herança.' },
  { tipo: 'pegadinha', frente: 'Evolução é "só uma teoria"?', verso: 'Em ciência, teoria é uma explicação muito bem testada, como a da gravidade. A evolução é um fato observado e explicado por uma teoria sólida.' },
]

export default cartoes
