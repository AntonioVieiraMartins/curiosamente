import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Sistema operacional (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o sistema operacional?', verso: 'O gerente do computador: fica entre os programas e o hardware.' },
  { tipo: 'regra', frente: 'Quais são os quatro serviços do sistema operacional?', verso: 'Processos (quem usa a CPU e quando), memória (reparte a RAM sem um programa invadir o outro), arquivos (nome, pasta e lugar no disco) e dispositivos (por meio dos drivers).' },
  { tipo: 'definição', frente: 'Qual é a diferença entre programa e processo?', verso: 'Programa é o arquivo guardado no disco (a receita). Processo é o programa em execução, carregado na RAM (a cozinha trabalhando).' },
  { tipo: 'conta', frente: 'Ao salvar um arquivo, quem faz o quê?', verso: 'O programa só pede "gravar com este nome"; o sistema operacional escolhe o lugar livre, anota nome e pasta e controla permissões; o driver traduz para o disco; o hardware grava os bits.' },
  { tipo: 'definição', frente: 'O que é um driver?', verso: 'Um tradutor entre o sistema e cada dispositivo (disco, teclado, impressora, rede). Traduz o pedido para a linguagem exata daquele modelo.' },
  { tipo: 'definição', frente: 'O que faz o escalonador?', verso: 'Reveza a CPU em fatias de tempo entre os processos. Parece simultâneo, mas é uma troca rápida (milissegundos).' },
  { tipo: 'regra', frente: 'Quais são os quatro estados de um processo?', verso: 'Esperando (pronto, aguardando a vez na CPU), rodando (usando a CPU), bloqueado (esperando algo lento, como tecla, arquivo ou rede) e terminado.' },
  { tipo: 'problema', frente: 'Por que a música não para quando você digita no editor?', verso: 'O editor fica bloqueado esperando a tecla (não usa CPU). O escalonador dá a CPU ao player, que fica rodando. Ao digitar, o editor volta a esperando e logo ganha uma fatia.' },
  { tipo: 'conta', frente: '3 processos precisam de 6 fatias cada: quantas fatias no total?', verso: '18. Em cada volta de rodízio cada um recebe 1 fatia (3 por volta) e são 6 voltas: 6 × 3 = 18.' },
  { tipo: 'conta', frente: 'Memória de 16 blocos, Navegador (5) e Jogo (6) abertos: quantos sobram e cabem Música (2) e Editor (4)?', verso: '5 blocos livres (16 − 11). Cabe um dos dois, mas não os dois: 2 + 4 = 6 > 5.' },
  { tipo: 'regra', frente: 'Para que serve o isolamento de memória?', verso: 'Impede que um programa invada a memória de outro e derrube os demais.' },
  { tipo: 'problema', frente: 'O computador está lento: como achar o culpado?', verso: 'Abra o gerenciador de tarefas, veja o processo que consome mais CPU (como um editor travado com 85%) e encerre só esse processo.' },
  { tipo: 'definição', frente: 'O que é o kernel?', verso: 'O núcleo do sistema operacional, que cuida dos serviços básicos entre programas e hardware.' },
  { tipo: 'história', frente: 'Quando e onde nasceu o Unix e o que mudou em 1973?', verso: 'Em 1969, no Bell Labs, com Ken Thompson e Dennis Ritchie. Em 1973 foi reescrito na linguagem C, o que ajudou a levá-lo a computadores diferentes.' },
  { tipo: 'história', frente: 'Quando surgiram GNU, Linux, iOS e Android?', verso: 'Projeto GNU em 1983; kernel Linux por Linus Torvalds em 17/9/1991 (inspirado no MINIX, 1987); iOS em 2007 e Android em 2008.' },
]

export default cartoes
