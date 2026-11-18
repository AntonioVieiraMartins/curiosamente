import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula HTTP e HTTPS (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o HTTP e o que significa ser "sem estado"?', verso: 'O idioma de pedido (cliente) e resposta (servidor). Sem estado: cada pedido é novo, o servidor não "lembra" do anterior (por isso existem os cookies).' },
  { tipo: 'conta', frente: 'Descreva a visita a uma página.', verso: 'O navegador abre a conexão (IP pelo DNS, porta 80 ou 443), manda o pedido ("quero /mapa"), recebe um código de status e o conteúdo; depois faz novos pedidos para imagens e estilos.' },
  { tipo: 'regra', frente: 'Quais são os quatro métodos HTTP principais?', verso: 'GET (ler), POST (enviar dados), PUT (criar ou trocar num endereço específico) e DELETE (apagar).' },
  { tipo: 'problema', frente: 'Que método para ver, adicionar, mudar e apagar uma tarefa?', verso: 'Ver: GET. Adicionar: POST. Mudar o texto: PUT. Apagar: DELETE.' },
  { tipo: 'regra', frente: 'O que significa cada família de códigos de status?', verso: '1xx informação; 2xx sucesso (200 OK); 3xx redirecionamento (301 mudou para sempre); 4xx erro do cliente (400, 404); 5xx erro do servidor (500).' },
  { tipo: 'problema', frente: 'Quem deve consertar um 404, um 500 e um 301?', verso: '404: o pedido (endereço errado), você corrige. 500: o servidor, quem cuida do site. 301: ninguém, o navegador segue para o novo endereço sozinho.' },
  { tipo: 'definição', frente: 'O que é o HTTPS?', verso: 'HTTP dentro de uma conexão criptografada (TLS), na porta 443. HTTP puro é texto aberto.' },
  { tipo: 'regra', frente: 'Quais são as três proteções do HTTPS?', verso: 'Sigilo (conteúdo embaralhado), integridade (alterações são detectadas) e autenticidade (o certificado confirma com quem se fala).' },
  { tipo: 'definição', frente: 'O que há num certificado?', verso: 'Para quem foi emitido (nome do site), quem o emitiu e assinou (autoridade certificadora), a chave pública e o prazo de validade.' },
  { tipo: 'por quê', frente: 'Por que a assinatura do certificado importa?', verso: 'Qualquer um pode fabricar um certificado dizendo ser o seu banco; só uma autoridade confiável tem a assinatura que o navegador reconhece. Sem ela, o navegador avisa.' },
  { tipo: 'pegadinha', frente: 'Um site com cadeado é seguro contra golpe?', verso: 'Não. O cadeado só diz que a conversa com esse endereço é criptografada. banco-seguro-login.exemplo.net é de exemplo.net: confira o nome, não só o cadeado.' },
  { tipo: 'problema', frente: 'Uma imagem sumiu da página e a aba Rede mostra 404. O que fazer?', verso: 'O endereço da imagem está errado ou o arquivo foi apagado (começa com 4: o problema não é do servidor). Corrija o endereço no código da página.' },
  { tipo: 'regra', frente: 'O que mudou do HTTP/1.1 ao HTTP/2 e ao HTTP/3?', verso: '1.1 (1997): um pedido por vez por conexão. 2 (2015): vários pedidos ao mesmo tempo. 3 (2022): muda o transporte por baixo para reduzir esperas.' },
  { tipo: 'história', frente: 'Quem criou o HTTP e quando surgiu o HTTPS?', verso: 'Tim Berners-Lee, no CERN, começou o HTTP em 1989. A Netscape criou o HTTPS em 1994, formalizado na RFC 2818 (2000).' },
  { tipo: 'história', frente: 'O que foi lançado em 2016?', verso: 'O Let\'s Encrypt (abril), oferecendo certificados básicos gratuitos.' },
]

export default cartoes
