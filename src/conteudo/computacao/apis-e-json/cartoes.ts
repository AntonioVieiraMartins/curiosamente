import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula APIs e JSON (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é uma API?', verso: 'Uma interface para programas conversarem, como um cardápio ou contrato: o que dá para pedir e o formato da resposta.' },
  { tipo: 'conta', frente: 'Como o aplicativo do clima obtém a temperatura de Recife?', verso: 'Envia um pedido HTTP para a API do serviço, que consulta seus dados e responde com um pequeno texto em JSON; o aplicativo lê e desenha. Ele nunca soube como o serviço achou o número.' },
  { tipo: 'definição', frente: 'O que é JSON e quais são os seus seis tipos?', verso: 'Um texto leve para dados: objeto (chaves, pares nome: valor), lista (colchetes), texto (aspas duplas), número, booleano (true ou false, sem aspas) e nulo (null).' },
  { tipo: 'conta', frente: 'Leia { "nome": "Ana", "idade": 30, "notas": [4, 8, 15] }.', verso: 'Um objeto com 3 pares. nome é texto, idade é número (30) e notas é uma lista de 3 números.' },
  { tipo: 'regra', frente: 'Quais são as regras rígidas do JSON?', verso: 'Aspas duplas, chaves entre aspas, sem comentários (Crockford os removeu) e sem vírgula sobrando no fim.' },
  { tipo: 'conta', frente: 'Ache o erro em { "nome": "Ana", "idade": 30, }.', verso: 'A vírgula pendurada depois do 30: nada vem depois dela. O JSON é inválido.' },
  { tipo: 'por quê', frente: 'Por que as posições de uma lista começam em 0?', verso: 'É a convenção da computação: a posição conta quantos itens vieram antes (o primeiro tem zero antes dele).' },
  { tipo: 'definição', frente: 'O que é REST?', verso: 'Um estilo de API em que o endereço identifica a coisa (recurso) e o método HTTP diz a ação. Os pedidos são sem estado.' },
  { tipo: 'conta', frente: 'O que fazem GET /produtos, GET /produtos/2, POST /pedidos e DELETE /pedidos/4821?', verso: 'Buscar a coleção de produtos; buscar o produto 2; criar um pedido (dados no corpo); apagar o pedido 4821.' },
  { tipo: 'regra', frente: 'O que significa REST ser sem estado?', verso: 'O servidor não guarda a sessão do cliente entre pedidos: cada pedido leva o que precisa.' },
  { tipo: 'regra', frente: 'Quais são as restrições do REST?', verso: 'Cliente e servidor separados, sem estado, cache (respostas dizem se podem ser reaproveitadas), interface uniforme e sistema em camadas.' },
  { tipo: 'pegadinha', frente: 'Que mudança na API quebra quem a usa?', verso: 'Renomear (nome → titulo): o aplicativo procura nome e não acha. Acrescentar um campo (cor) não quebra. APIs sérias avisam antes, mantêm a versão antiga e documentam.' },
  { tipo: 'regra', frente: 'Por que a documentação faz parte da API?', verso: 'Porque quem usa precisa saber o contrato (o que pedir e o que vem). É parte da API e é difícil de manter em dia.' },
  { tipo: 'história', frente: 'Quem descreveu o REST e quando saiu a primeira mensagem JSON?', verso: 'Roy Fielding, em sua tese de doutorado (2000). A primeira mensagem JSON foi enviada em abril de 2001 por Crockford e Morningstar.' },
  { tipo: 'história', frente: 'Quando o JSON virou padrão?', verso: 'ECMA-404 em outubro de 2013 e RFC 8259 (padrão de internet) em dezembro de 2017. A expressão "application program interface" aparece em 1968.' },
]

export default cartoes
