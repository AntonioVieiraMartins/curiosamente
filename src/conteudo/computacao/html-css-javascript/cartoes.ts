import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula HTML, CSS e JavaScript (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que fazem HTML, CSS e JavaScript?', verso: 'HTML: conteúdo e estrutura (esqueleto). CSS: aparência (roupa). JavaScript: comportamento (movimento).' },
  { tipo: 'problema', frente: 'Qual camada resolve: título azul, frase que muda conforme a hora, novo parágrafo, menu que abre ao tocar?', verso: 'Título azul: CSS. Frase por hora: JavaScript. Novo parágrafo: HTML. Menu que abre: JavaScript (com a aparência em CSS).' },
  { tipo: 'conta', frente: 'Leia a etiqueta <a href="https://exemplo.com">Visite</a>.', verso: 'Abertura <a ...>, fechamento </a>, 1 atributo (href="...") e conteúdo "Visite" (o texto visível).' },
  { tipo: 'definição', frente: 'Como é a estrutura de um elemento HTML?', verso: 'Etiquetas de abertura e fechamento, atributos (nome="valor") e conteúdo.' },
  { tipo: 'regra', frente: 'Quais são os seletores básicos do CSS?', verso: 'Por elemento (p), por classe (.aviso, com ponto), por id (#topo, com cerquilha; deve ser único) e combinados (p.aviso).' },
  { tipo: 'conta', frente: 'Uma página tem 2 parágrafos, um deles com a classe aviso. Quantos pegam p, p.aviso e .aviso?', verso: 'p pega 2; p.aviso pega 1; .aviso pega tudo que tem a classe (de qualquer tipo; no exemplo, 3 elementos).' },
  { tipo: 'regra', frente: 'Quando duas regras CSS brigam, quem vence?', verso: 'A mais específica: elemento < classe < id < estilo na etiqueta.' },
  { tipo: 'conta', frente: '<p id="topo" class="aviso"> com p azul, .aviso verde e #topo vermelho: qual cor?', verso: 'Vermelho: o id é mais específico que a classe, e a classe mais que o elemento.' },
  { tipo: 'conta', frente: 'Como funciona um contador de curtidas?', verso: 'O HTML tem um botão e um número; o JavaScript registra um ouvinte ("ao clicar, some 1") e atualiza o DOM. Três toques: o ouvinte roda 3 vezes e o número vira 3.' },
  { tipo: 'definição', frente: 'O que é o DOM?', verso: 'A representação da página que o JavaScript muda para atualizar o que aparece na tela.' },
  { tipo: 'pegadinha', frente: 'JavaScript é o mesmo que Java?', verso: 'Não. São linguagens diferentes. O JavaScript também roda fora do navegador, no servidor, com o Node.js (2009).' },
  { tipo: 'história', frente: 'Quem criou o HTML e quem propôs o CSS?', verso: 'Tim Berners-Lee especificou o HTML no fim de 1990 (o documento de 1991 tinha 18 elementos). Håkon Wium Lie propôs o CSS em 10/10/1994; o CSS1 saiu em 1996.' },
  { tipo: 'história', frente: 'Quando surgiram JavaScript, ECMAScript, Node.js e HTML5?', verso: 'JavaScript na Netscape (4/12/1995); ECMAScript em junho de 1997; Node.js por Ryan Dahl em 2009; HTML5 como recomendação do W3C em 28/10/2014.' },
]

export default cartoes
