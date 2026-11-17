import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'como-a-internet-funciona',
  titulo: 'Como a internet funciona',
  area: 'computacao',
  trilha: 'redes-e-internet',
  resumo: 'Um pacote viajando pelo mapa, roteador por roteador.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['ip-e-portas', 'binario', 'sistema-operacional'],
  videoUrl: null,
  fontes: [
    { titulo: 'Internet (ARPANET, Cerf e Kahn, TCP/IP, NSFNET, Web x internet), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Internet' },
    { titulo: 'Packet switching (pacotes, cabeçalho e carga, Baran, Davies), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Packet_switching' },
    { titulo: 'Submarine communications cable (99% do tráfego entre oceanos, cabos de 1858, 1956 e 1988), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Submarine_communications_cable' },
  ],
}

export default meta
