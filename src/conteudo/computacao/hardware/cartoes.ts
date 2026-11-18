import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Hardware (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Na analogia da cozinha, o que são CPU, RAM e disco?', verso: 'CPU é o cozinheiro (executa instruções em ciclos de buscar, decodificar e executar). RAM é a bancada (rápida, pequena e volátil). Disco é a despensa (grande, permanente e mais lento).' },
  { tipo: 'regra', frente: 'Que caminho um programa faz para rodar e para ser guardado?', verso: 'Para usar: disco → RAM → CPU. Para guardar: RAM → disco. O progresso do jogo só fica guardado de verdade quando ele salva no disco.' },
  { tipo: 'definição', frente: 'O que significa a RAM ser volátil?', verso: 'Ela esvazia quando falta energia. O disco mantém os dados com o computador desligado.' },
  { tipo: 'conta', frente: 'Quantos ciclos acontecem em 1 ms numa CPU de 3 GHz?', verso: '3.000.000. 3 GHz = 3 bilhões de ciclos por segundo; 1 ms é um milésimo disso.' },
  { tipo: 'regra', frente: 'Qual é a diferença entre DRAM e SRAM?', verso: 'DRAM: 1 transistor e 1 capacitor por bit, barata, "vaza" e precisa de refresh; é a RAM. SRAM: 6 transistores por bit, mais rápida e cara; é a cache dentro da CPU.' },
  { tipo: 'problema', frente: '8 GB de RAM, sistema 3 GB, navegador 2,5 GB e jogo 6 GB: cabe?', verso: 'Não: 3 + 2,5 + 6 = 11,5 GB. Os 3,5 GB excedentes vão para o disco e o computador fica lento.' },
  { tipo: 'regra', frente: 'Quais são as diferenças entre HD e SSD?', verso: 'HD: discos magnéticos girando (5.400 ou 7.200 rpm) e cabeça leitora; acesso de 2,5 a 10 ms. SSD: memória flash (NAND), sem peças móveis, latência bem menor, mas custa mais por GB.' },
  { tipo: 'problema', frente: 'Quantas fotos de 3 MB cabem em 64 GB?', verso: 'Cerca de 21 mil: 64.000 ÷ 3 ≈ 21.333 (sem contar o espaço do sistema).' },
  { tipo: 'regra', frente: 'Que é a hierarquia de memória e onde cada coisa fica?', verso: 'Do mais rápido e menor ao mais lento e maior: registradores e cache (na CPU), RAM, disco. O número somado agora está num registrador; a foto aberta há 5 s, na RAM; uma foto antiga nunca aberta, só no disco.' },
  { tipo: 'regra', frente: 'O que significam 8 núcleos, 3 GHz, 16 GB de RAM e 512 GB de SSD?', verso: '8 cozinheiros trabalhando juntos; cada um faz 3 bilhões de passos por segundo; a bancada tem 16 GB; a despensa guarda 512 GB.' },
  { tipo: 'problema', frente: 'Para editar vídeo, qual escolher: 8 GB RAM e 128 GB de disco, ou 32 GB RAM e 1 TB de SSD?', verso: 'O segundo: 4 vezes mais RAM e cerca de 8 vezes mais disco. Vídeo usa muita RAM e muito disco.' },
  { tipo: 'definição', frente: 'O que fazem a GPU, a placa-mãe e a fonte?', verso: 'GPU: milhares de contas simples ao mesmo tempo (gráficos, jogos, IA). Placa-mãe: onde tudo se encaixa e conversa. Fonte: transforma a energia da tomada na que as peças aguentam.' },
  { tipo: 'regra', frente: 'Por que vários núcleos nem sempre ajudam?', verso: 'São vários cozinheiros: úteis quando as tarefas são independentes. E um computador equilibrado vale mais que uma peça só muito rápida.' },
  { tipo: 'história', frente: 'O que von Neumann propôs em 1945?', verso: 'Guardar programa e dados na mesma memória (o EDVAC, concluído em 1949). Antes, máquinas como o ENIAC eram religadas fisicamente para cada tarefa.' },
  { tipo: 'história', frente: 'Cite três marcos do hardware.', verso: 'IBM 350 (1956), o primeiro disco rígido, com 3,75 MB. DRAM inventada por Dennard (1966) e chip 1103 da Intel (1970). Intel 4004 (1971), o primeiro microprocessador comercial.' },
]

export default cartoes
