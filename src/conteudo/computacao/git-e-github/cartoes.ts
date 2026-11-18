import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Git e GitHub (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o Git e o que é um commit?', verso: 'O Git é "salvar o jogo" do código. Cada commit é uma foto do projeto, com autor, data e mensagem.' },
  { tipo: 'por quê', frente: 'Por que o controle de versão salva você?', verso: 'Se você apaga o açúcar da receita no commit 3, o commit 2 continua no histórico e dá para voltar a olhar e recuperar.' },
  { tipo: 'regra', frente: 'Qual é o caminho mesa, bandeja e histórico?', verso: 'Você edita arquivos (mesa), escolhe com git add (bandeja) e grava com git commit (histórico). O que não foi para o commit continua só na mesa.' },
  { tipo: 'conta', frente: 'Você editou 2 arquivos, deu git add no arquivo 1 e git commit. E o arquivo 2?', verso: 'Continua só na mesa, modificado e sem commit. Você decide depois.' },
  { tipo: 'por quê', frente: 'Por que uma adulteração do histórico é detectada?', verso: 'O código de cada commit depende do conteúdo e do código do commit anterior. Mudar o commit 1 muda o código dele e dos seguintes; ao comparar com uma cópia boa, aparece na hora.' },
  { tipo: 'regra', frente: 'O que são ramos e merge?', verso: 'Ramos permitem experimentar sem mexer no principal; merge junta. O conflito só acontece no mesmo trecho.' },
  { tipo: 'conta', frente: 'Bruno e Ana mudaram a mesma linha do título em ramos diferentes. O que acontece?', verso: 'Conflito: o Git vê dois textos na mesma linha e não sabe qual vale. Alguém escolhe um ou combina os dois e faz o commit da solução.' },
  { tipo: 'definição', frente: 'O que é o GitHub, git push e git pull?', verso: 'Serviço sobre o Git que guarda a cópia na internet (com forks, pull requests e issues). push envia seus commits; pull traz os dos outros.' },
  { tipo: 'conta', frente: 'Seu git push foi recusado. Por quê e o que fazer?', verso: 'O GitHub tem um commit (da colega) que você não tem. Faça git pull (traz e junta com os seus) e depois git push.' },
  { tipo: 'definição', frente: 'O que são fork e pull request?', verso: 'Fork: cópia pessoal de um repositório de outra pessoa. Pull request: pedido para juntar suas mudanças ao projeto original, que o mantenedor revisa, comenta e aprova.' },
  { tipo: 'regra', frente: 'O que NUNCA colocar no repositório?', verso: 'Senhas, chaves ou segredos: o que entra no histórico fica nele, mesmo que você apague depois. Este projeto mantém o .env.local fora do Git.' },
  { tipo: 'regra', frente: 'Quais são as boas práticas do dia a dia?', verso: 'Commits pequenos e frequentes com mensagens que explicam o porquê, e git pull antes de começar o dia para evitar conflitos grandes.' },
  { tipo: 'história', frente: 'Quem criou o Git e quando?', verso: 'Linus Torvalds, em 3 de abril de 2005, depois do fim da licença gratuita do BitKeeper. O Mercurial surgiu no mesmo ano.' },
  { tipo: 'história', frente: 'Quando surgiu o GitHub e o que aconteceu em 2018?', verso: 'Abriu ao público em 10 de abril de 2008. Em 2018, a Microsoft anunciou a compra por 7,5 bilhões de dólares.' },
  { tipo: 'história', frente: 'Quais foram os primeiros sistemas de controle de versões?', verso: 'SCCS (1972), o primeiro feito de propósito; RCS (1982); CVS e Subversion (2000) com servidor central; BitKeeper, distribuído.' },
]

export default cartoes
