import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'front-end-e-back-end',
  titulo: 'Front-end e back-end',
  area: 'computacao',
  trilha: 'sistema-web',
  resumo: 'O salão e a cozinha de todo site.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['http-https', 'banco-de-dados', 'senhas-e-hash'],
  videoUrl: null,
  fontes: [
    { titulo: 'Front end and back end (definições, exemplos, tecnologias, API), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Frontend_and_backend' },
    { titulo: 'Client–server model (clientes, servidores, pedido e resposta, história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Client%E2%80%93server_model' },
    { titulo: 'Web application (história, três camadas, vantagens), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Web_application' },
  ],
}

export default meta
