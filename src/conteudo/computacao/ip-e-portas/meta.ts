import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'ip-e-portas',
  titulo: 'Endereço IP e portas',
  area: 'computacao',
  trilha: 'redes-e-internet',
  resumo: 'O que significa localhost:5173?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['como-a-internet-funciona', 'binario', 'dns', 'http-https'],
  videoUrl: null,
  fontes: [
    { titulo: 'IP address (IPv4, IPv6, faixas privadas, DHCP, NAT), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/IP_address' },
    { titulo: 'Port (computer networking) (0 a 65535, portas conhecidas, soquete), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Port_(computer_networking)' },
    { titulo: 'Localhost (127.0.0.1, ::1, loopback), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Localhost' },
  ],
}

export default meta
