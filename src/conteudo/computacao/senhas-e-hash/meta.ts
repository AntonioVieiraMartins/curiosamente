import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'senhas-e-hash',
  titulo: 'Usuários e login',
  area: 'computacao',
  trilha: 'sistema-web',
  resumo: 'Por que ninguém deveria guardar sua senha.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['banco-de-dados', 'http-https', 'numeros-primos'],
  videoUrl: null,
  fontes: [
    { titulo: 'Cryptographic hash function (propriedades, MD5, SHA-1, SHA-2, SHA-3, colisões), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Cryptographic_hash_function' },
    { titulo: 'Password hashing (sal, key stretching, bcrypt, Argon2, crypt de 1978), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Password_hashing' },
    { titulo: 'Multi-factor authentication (fatores, 2FA, SMS, apps, chaves de segurança), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Multi-factor_authentication' },
  ],
}

export default meta
