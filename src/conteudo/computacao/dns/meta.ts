import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'dns',
  titulo: 'DNS e domínios',
  area: 'computacao',
  trilha: 'redes-e-internet',
  resumo: 'A lista telefônica da internet.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['ip-e-portas', 'http-https', 'como-a-internet-funciona'],
  videoUrl: null,
  fontes: [
    { titulo: 'Domain Name System (Mockapetris 1983, RFC 882/883 e 1034/1035, hierarquia, cache e TTL, tipos de registro), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Domain_Name_System' },
    { titulo: 'Domain name (estrutura, primeiro .com em 1985, tipos de TLD, limites de tamanho, registradores), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Domain_name' },
  ],
}

export default meta
