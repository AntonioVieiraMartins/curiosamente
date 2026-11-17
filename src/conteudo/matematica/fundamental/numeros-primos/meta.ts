import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'numeros-primos',
  titulo: 'Números primos',
  area: 'matematica',
  trilha: 'fundamental',
  serie: '6º ano',
  resumo: 'Os números que não se dividem e guardam segredos.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['multiplos-e-divisores'],
  conexoes: ['multiplos-e-divisores', 'senhas-e-hash', 'raizes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Prime number (definição, Euclides, teorema fundamental, criptografia), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Prime_number' },
    { titulo: 'Sieve of Eratosthenes, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes' },
    { titulo: "Euclid's theorem (infinitude dos primos), Wikipedia em inglês", url: 'https://en.wikipedia.org/wiki/Euclid%27s_theorem' },
  ],
}

export default meta
