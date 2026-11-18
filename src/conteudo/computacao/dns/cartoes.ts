import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula DNS (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é o DNS?', verso: 'O sistema que traduz nomes (exemplo.com) em endereços IP: a lista telefônica da internet.' },
  { tipo: 'por quê', frente: 'Por que usar nomes em vez de só números?', verso: 'Números são difíceis de lembrar e mudam (o serviço pode ir para outro servidor). O nome fica o mesmo; só se atualiza a lista.' },
  { tipo: 'regra', frente: 'Como o DNS é organizado?', verso: 'Distribuído e hierárquico: servidor raiz → TLD (.com, .br) → domínio → subdomínios. Ninguém guarda a lista inteira.' },
  { tipo: 'conta', frente: 'Desmonte www.universidade.edu.br.', verso: 'Da direita para a esquerda: br (país), edu (educação), universidade (o nome registrado), www (subdomínio). O dono pode criar subdomínios como biblioteca.universidade.edu.br.' },
  { tipo: 'regra', frente: 'Quem sabe o quê numa consulta de www.exemplo.com?', verso: 'A raiz não sabe o IP, mas sabe quem cuida do .com; o servidor do .com sabe quem cuida de exemplo.com; o servidor oficial de exemplo.com sabe o IP (fonte de verdade).' },
  { tipo: 'definição', frente: 'O que fazem o resolvedor recursivo e o cache?', verso: 'O resolvedor faz a consulta por você. O cache guarda a resposta pelo tempo do TTL, para não perguntar tudo de novo.' },
  { tipo: 'conta', frente: 'Um TTL de 3.600 s: quanto pode levar a propagação de uma mudança?', verso: 'Até 1 hora, porque um resolvedor pode ter guardado o IP antigo logo antes. TTL menor deixa a troca mais rápida.' },
  { tipo: 'regra', frente: 'Para que servem os registros A, AAAA, CNAME, MX, TXT e NS?', verso: 'A: IPv4. AAAA: IPv6. CNAME: apelido (nome que aponta para outro nome). MX: onde chega o e-mail. TXT: texto livre (provar posse do domínio). NS: servidores oficiais.' },
  { tipo: 'por quê', frente: 'Por que o e-mail funciona separado do site?', verso: 'O site é indicado pelo registro A e o e-mail pelo MX, que pode apontar para outro servidor. Dá para mudar a hospedagem do site sem perder o e-mail.' },
  { tipo: 'conta', frente: '-erro.com e meu-site.com.br: quais são válidos?', verso: 'meu-site.com.br é válido (letras e hífen no meio). -erro.com é inválido: começa com hífen. Nomes com acento existem, mas passam por codificação especial.' },
  { tipo: 'pegadinha', frente: 'Qual é o dono real de login.banco.com.seguranca-urgente.net?', verso: 'seguranca-urgente.net: o nome registrado fica antes do TLD, lendo da direita para a esquerda. O "banco.com" no meio é enfeite para enganar.' },
  { tipo: 'regra', frente: 'O que o resolvedor vê e o que o cadeado protege?', verso: 'O resolvedor vê o nome que você pediu. O conteúdo da página (mensagens, senhas) viaja pela conexão com o servidor, e é isso que o cadeado protege.' },
  { tipo: 'problema', frente: 'O site não abre pelo nome. Como diagnosticar?', verso: 'Tente abrir pelo IP. Se abrir, o servidor está no ar e o problema é o DNS. Se não abrir nem pelo IP, é servidor ou rede.' },
  { tipo: 'regra', frente: 'O que é registrar um domínio?', verso: 'Alugar o direito de uso por um período, não comprar.' },
  { tipo: 'história', frente: 'Como era antes do DNS e quem o criou?', verso: 'Um arquivo único, HOSTS.TXT, mantido no SRI, ligava nomes a endereços. Paul Mockapetris criou o DNS em 1983 (RFCs 882 e 883; depois 1034 e 1035, em 1987).' },
  { tipo: 'história', frente: 'Qual foi o primeiro domínio .com?', verso: 'symbolics.com, registrado em 15 de março de 1985.' },
]

export default cartoes
