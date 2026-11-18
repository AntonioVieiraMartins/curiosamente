import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Front-end e back-end (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Na analogia do restaurante, o que são front-end, back-end e banco de dados?', verso: 'Front-end é o salão (o que a pessoa vê e toca). Back-end é a cozinha (dados, regras e decisões). Banco de dados é a despensa.' },
  { tipo: 'conta', frente: 'Quem faz o quê numa compra de um tênis?', verso: 'O front-end recebe o toque em "Comprar" e manda o pedido; o back-end confere estoque e preço; o banco de dados guarda; o back-end responde "pedido aceito" e o front-end mostra a mensagem.' },
  { tipo: 'regra', frente: 'Dê exemplos de front-end e back-end num site de compras, banco e rede social.', verso: 'Compras: páginas e busca / pagamento e estoque. Banco: saldos / transações e registros. Rede social: feed / postagens e notificações.' },
  { tipo: 'por quê', frente: 'Onde deve morar o cálculo do frete e por quê?', verso: 'No back-end. A tabela de preços é da loja; se a regra morasse no navegador, qualquer pessoa poderia mexer nela. O front-end só mostra o valor que veio.' },
  { tipo: 'regra', frente: 'Por que não se deve confiar no navegador?', verso: 'Porque quem usa pode editar o que o navegador manda. Preço, permissão e identidade são conferidos no servidor: o front-end ajuda, o back-end protege.' },
  { tipo: 'por quê', frente: 'Por que validar um dado duas vezes (no salão e na cozinha)?', verso: 'No front-end é rápido e simpático (avisa na hora), mas dá para pular. Se alguém manda "idade 150" direto ao servidor, a cozinha recusa: a regra vale não importa quem mandou.' },
  { tipo: 'problema', frente: 'O pedido editado chega com "preço: R$ 1" para um tênis de R$ 100. O que o servidor faz?', verso: 'Ignora esse número e busca o preço no banco: cobra R$ 100.' },
  { tipo: 'problema', frente: 'Em 6 passos da compra, em qual o banco de dados aparece?', verso: 'Só no passo 4: o servidor grava o pedido e baixa o estoque. Montar o pedido, viajar, conferir, responder e mostrar a tela não usam o banco.' },
  { tipo: 'conta', frente: 'Chegam 30 pedidos por minuto e cada cozinheiro faz 5. Quantos cozinheiros?', verso: '6 (30 ÷ 5). Com 5, a capacidade seria 25 e sobrariam 5 pedidos por minuto na fila.' },
  { tipo: 'definição', frente: 'O que é uma API, em termos de restaurante?', verso: 'O cardápio da cozinha: o que dá para pedir e o formato da resposta.' },
  { tipo: 'definição', frente: 'Quais são as três camadas de um sistema web?', verso: 'Apresentação (o que se vê), lógica (regras) e dados (o que fica guardado).' },
  { tipo: 'história', frente: 'Quando o JavaScript e o Ajax mudaram a web?', verso: 'A Netscape lançou o JavaScript em 1995, deixando o navegador executar pequenos programas. O Ajax ganhou nome em 2005 (Gmail em 2004, Google Maps em 2005): a página troca dados sem recarregar.' },
  { tipo: 'história', frente: 'De onde vêm os termos cliente e servidor?', verso: 'O OS/360 (1964) já tinha uma forma antiga (entrada remota de tarefas); a ARPANET usou "server-host" e "user-host" em 1969 (RFCs 4 e 5); a Xerox PARC usou "client" em 1978. "Aplicação web" apareceu em 1999.' },
]

export default cartoes
