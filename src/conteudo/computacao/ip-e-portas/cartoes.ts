import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula IP e portas (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que são o IP e a porta?', verso: 'IP é o endereço do computador (o prédio); porta é o endereço do serviço (o apartamento). Juntos: IP:porta.' },
  { tipo: 'conta', frente: 'Por que nenhuma parte de um IPv4 passa de 255?', verso: 'Cada parte tem 8 bits: 2⁸ = 256 combinações, de 0 a 255 (o zero também conta).' },
  { tipo: 'regra', frente: 'Quais as faixas de portas e o que há em cada uma?', verso: 'Conhecidas 0 a 1.023 (22 SSH, 25 e-mail, 53 DNS, 80 HTTP, 443 HTTPS); registradas 1.024 a 49.151 (3000, 5173, 8080...); dinâmicas 49.152 a 65.535 (temporárias do cliente).' },
  { tipo: 'conta', frente: 'A porta 5173 está em qual faixa?', verso: 'Registrada (entre 1.024 e 49.151), onde programas de desenvolvimento costumam ficar.' },
  { tipo: 'regra', frente: 'Para onde vai um pacote para 203.0.113.10:443?', verso: 'O IP leva ao computador certo (o prédio) e a porta 443 (padrão do https) leva ao programa que cuida das páginas (o apartamento). A porta 25 levaria ao e-mail.' },
  { tipo: 'regra', frente: 'Quais são as faixas de IP privado?', verso: '10.x.x.x, 172.16.x.x a 172.31.x.x e 192.168.x.x. Servem só dentro da rede local e não são roteados na internet pública.' },
  { tipo: 'conta', frente: '192.168.1.50 é público ou privado?', verso: 'Privado: está na faixa 192.168.x.x. O mundo não o enxerga diretamente.' },
  { tipo: 'definição', frente: 'O que é localhost?', verso: '127.0.0.1 (IPv6: ::1): o próprio computador. Útil para testar um sistema sem sair dele.' },
  { tipo: 'regra', frente: 'Como o NAT separa os aparelhos da casa?', verso: 'Todos usam o mesmo IP público e o roteador mapeia cada um a uma porta (celular → 50000, TV → 50013, valores de exemplo). A resposta volta pela porta e a tabela diz a quem entregar.' },
  { tipo: 'conta', frente: 'Quantos endereços tem o IPv4 e o IPv6?', verso: 'IPv4: 32 bits, cerca de 4,29 bilhões. IPv6: 128 bits, 2⁹⁶ vezes mais (cada bit dobra).' },
  { tipo: 'regra', frente: 'Quantas informações identificam uma conversa?', verso: '4: IP e porta de origem, IP e porta de destino. Mudou qualquer uma, é outra conversa.' },
  { tipo: 'problema', frente: 'Que portas deixar abertas num servidor que mostra um site com cadeado?', verso: 'A 443 (e talvez a 80 para redirecionar). A porta do banco de dados fica fechada para a internet; menos portas abertas, menos entradas para invasores.' },
  { tipo: 'problema', frente: 'Por que localhost:5180 não funciona no celular para ver o site do notebook?', verso: 'Lá, localhost é o próprio celular. Use o IP privado do notebook, como 192.168.0.12:5180, com os dois na mesma rede e o servidor aceitando acessos de fora.' },
  { tipo: 'pegadinha', frente: 'Dois programas podem usar a mesma porta?', verso: 'Não: há conflito de portas.' },
  { tipo: 'história', frente: 'Como surgiram os números de porta e por que o IPv6?', verso: 'Nos anos 1970 eram "números de soquete" na ARPANET; a RFC 349 (1972) propôs as atribuições oficiais. O TCP/IP é de 1982; nos anos 2010 o IPv4 começou a acabar, e o IPv6 é o sucessor.' },
]

export default cartoes
