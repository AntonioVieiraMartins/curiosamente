import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Deploy (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é deploy?', verso: 'Tudo o que torna um sistema disponível para uso: liberar, instalar, ativar e atualizar.' },
  { tipo: 'regra', frente: 'Quais são os três ambientes?', verso: 'Desenvolvimento (seu computador, errar à vontade), teste ou staging (cópia parecida com a real, para conferir) e produção (a versão que o público vê; erro aqui aparece a todos).' },
  { tipo: 'conta', frente: 'Qual é o caminho de corrigir um erro de digitação no site?', verso: 'Corrige no computador (desenvolvimento), faz commit e push ao GitHub, a plataforma faz o build, os testes passam e a versão nova vira a de produção, sem copiar arquivos à mão.' },
  { tipo: 'definição', frente: 'O que são release, instalação, ativação, atualização e desinstalação?', verso: 'Release: preparar para montar e enviar à produção. Instalação: configurar o programa. Ativação: executá-lo pela primeira vez. Atualização: em geral desativar e instalar de novo. Desinstalação: remover.' },
  { tipo: 'conta', frente: 'A equipe desliga a v3, instala a v4 e liga de novo. Como classificar?', verso: 'Desligar é desativação, colocar a v4 é instalação, ligar a v4 pela primeira vez é ativação; o conjunto é uma atualização.' },
  { tipo: 'por quê', frente: 'Por que não testar direto na produção?', verso: 'Um erro apareceria para todo mundo. Teste no desenvolvimento e depois no ambiente de teste (ex.: uma compra de mentira) e só então vai à produção.' },
  { tipo: 'conta', frente: 'Deploy manual de 25 min contra automático de 1 min, 6 por semana: qual a diferença?', verso: '150 min contra 6 min: 144 min a menos por semana, quase 2 h 30. E o automático nunca esquece um passo (valores de exemplo).' },
  { tipo: 'problema', frente: 'O pipeline mostra commit ✓, push ✓, build ✓, testes ✗. O que acontece?', verso: 'A etapa de publicar não roda: o site continua na versão anterior, que funciona. Leia a mensagem do teste, corrija e envie de novo.' },
  { tipo: 'regra', frente: 'Como funciona o deploy azul e verde?', verso: 'A v1 (azul) atende; você testa a v2 (verde); troca o tráfego. Se aparece um defeito, volta ao azul (rollback), que continua intacto.' },
  { tipo: 'definição', frente: 'O que são lançamento gradual (canary) e teste A/B?', verso: 'Mostrar a versão nova a poucos usuários antes de todos (gradual), ou comparar duas versões lado a lado (A/B).' },
  { tipo: 'regra', frente: 'Qual a diferença entre entrega contínua e implantação contínua?', verso: 'Entrega contínua: sempre pronto para liberar, com clique humano. Implantação contínua: a publicação também é automática.' },
  { tipo: 'conta', frente: 'Do código ao endereço próprio: quais passos?', verso: 'Envia o código ao GitHub; a plataforma faz o deploy e dá um endereço como meu-site.vercel.app; você compra um domínio e cria um registro DNS apontando para a plataforma; o DNS traduz e o site abre.' },
  { tipo: 'história', frente: 'Como era publicar software nos anos 1990 e o que mudou nos 2000?', verso: 'Era entregar um instalador (assistente "Avançar, avançar, concluir"). Com a nuvem e o software como serviço, ficou possível atualizar milhões de pessoas em minutos.' },
  { tipo: 'história', frente: 'Quem popularizou a entrega contínua e o que foi a ZEIT?', verso: 'Jez Humble e David Farley, em 2010. A ZEIT, fundada por Guillermo Rauch em 2015, virou Vercel em abril de 2020, tornando o deploy tão simples quanto um push.' },
]

export default cartoes
