import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Banco de dados (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um banco de dados e como o modelo relacional os organiza?', verso: 'Uma coleção organizada de dados, administrada por um SGBD. No modelo relacional, os dados ficam em tabelas: colunas são campos, linhas são registros.' },
  { tipo: 'definição', frente: 'O que é chave primária e chave estrangeira?', verso: 'Primária: identifica cada linha (dois clientes nunca têm o mesmo id, mesmo com o mesmo nome). Estrangeira: liga uma tabela a outra, para não repetir informação.' },
  { tipo: 'conta', frente: 'Pedidos 101 e 103 têm cliente_id = 1. O que isso mostra?', verso: 'Ambos são da Ana (id 1 em clientes). Ela aparece uma vez em clientes e é referenciada por 2 pedidos: cada fato num lugar só.' },
  { tipo: 'regra', frente: 'O que fazem SELECT, INSERT, UPDATE e DELETE?', verso: 'SELECT lê, INSERT acrescenta uma linha, UPDATE muda linhas existentes e DELETE apaga. WHERE filtra e ORDER BY ordena.' },
  { tipo: 'conta', frente: 'Escreva a consulta "quais produtos são de calçado?".', verso: "SELECT * FROM produtos WHERE categoria = 'calçado';" },
  { tipo: 'definição', frente: 'O que quer dizer SQL ser declarativo?', verso: 'Você diz o que quer, e não como o banco deve achar.' },
  { tipo: 'regra', frente: 'O que é normalização?', verso: 'Guardar cada fato num lugar só, ligando tabelas por chaves, em vez de repetir informação.' },
  { tipo: 'definição', frente: 'O que é uma transação e para que serve?', verso: 'Um "tudo ou nada" (ACID). Se o sistema cai no meio de uma transferência, o banco desfaz o primeiro passo e o dinheiro não some.' },
  { tipo: 'conta', frente: 'Ana e Bruno têm R$ 100 cada. Sem transação, tira-se R$ 50 da Ana e o sistema cai. Qual o total?', verso: 'R$ 150: R$ 50 sumiram. Com transação, tudo é desfeito e o total continua R$ 200.' },
  { tipo: 'por quê', frente: 'Como um índice acelera a busca?', verso: 'Como adivinhar um número perguntando pelo meio: cada pergunta descarta metade. Mil linhas pedem cerca de 10 passos, um milhão cerca de 20, em vez de olhar uma por uma.' },
  { tipo: 'pegadinha', frente: 'O que acontece com DELETE FROM pedidos sem WHERE?', verso: 'Apaga a tabela toda (as 5 linhas). Com WHERE status = \'pendente\' apaga só as 2 que casam. Escreva antes um SELECT com o mesmo filtro e confira.' },
  { tipo: 'regra', frente: 'Por que nunca colar texto de usuário dentro de um comando SQL?', verso: 'Porque o texto pode conter comandos e alterar a consulta. Proteja-se com consultas parametrizadas, além de backup, controle de acesso e logs.' },
  { tipo: 'regra', frente: 'Quando usar cada tipo de banco?', verso: 'Relacional para dados ligados e consistentes; os bancos NoSQL ganharam popularidade no fim dos anos 2000 para outros formatos e escalas.' },
  { tipo: 'história', frente: 'Quem propôs o modelo relacional e quando?', verso: 'Edgar F. Codd, na IBM, em 1970: dados em tabelas, achados pelo conteúdo. Antes, o IMS (1966) ligava registros por ponteiros.' },
  { tipo: 'história', frente: 'Como surgiram o SQL e seus padrões?', verso: 'Chamberlin e Boyce o criaram (como SEQUEL) para o System R da IBM (1974). O Oracle saiu em 1979. O SQL virou padrão ANSI em 1986 e ISO em 1987.' },
]

export default cartoes
