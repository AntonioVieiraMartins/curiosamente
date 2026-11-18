import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'http-https',
  titulo: 'HTTP e HTTPS',
  area: 'computacao',
  trilha: 'redes-e-internet',
  resumo: 'O que o cadeado do navegador garante?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['dns', 'ip-e-portas', 'como-a-internet-funciona', 'senhas-e-hash'],
  videoUrl: null,
  fontes: [
    { titulo: 'HTTP (pedido e resposta, métodos, códigos de status, versões 0.9 a 3), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/HTTP' },
    { titulo: 'HTTPS (TLS, porta 443, Netscape 1994, certificados, o que o cadeado não protege), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/HTTPS' },
    { titulo: 'Public key certificate (conteúdo, emissor, validade, cadeia de confiança), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Public_key_certificate' },
  ],
}

export default meta
