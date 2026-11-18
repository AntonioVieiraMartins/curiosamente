import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Senhas e hash (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'O que é um hash?', verso: 'Um resumo de tamanho fixo de um texto. O site guarda o hash da senha, e não a senha.' },
  { tipo: 'regra', frente: 'Quais são as propriedades de um bom hash?', verso: 'Determinístico (mesmo texto, mesmo resumo), de mão única (inviável reverter), resistente a colisões (inviável achar dois textos com o mesmo resumo) e com efeito avalanche (mudança mínima muda tudo).' },
  { tipo: 'conta', frente: 'Como funciona criar a conta e entrar?', verso: 'O servidor calcula o hash de "gato123" e guarda só ele. No login, calcula o hash do que você digitou e compara: iguais, entra. "gato124" dá um hash totalmente diferente: recusado.' },
  { tipo: 'conta', frente: 'O hash de "oi" e o de um texto de 1.000 palavras têm tamanhos diferentes?', verso: 'Não: o resumo tem tamanho fixo. E "oi" calculado outra vez dá exatamente o mesmo resumo; "oj" dá um totalmente diferente.' },
  { tipo: 'definição', frente: 'O que é o sal?', verso: 'Um valor aleatório por pessoa, junto da senha antes do hash. Deixa hashes diferentes mesmo para senhas iguais e inutiliza dicionários pré-calculados. Não é segredo.' },
  { tipo: 'conta', frente: 'Ana, Bruno e Carla usam 123456. O que muda com e sem sal?', verso: 'Sem sal os três hashes são iguais e o ladrão quebra as 3 contas de uma vez. Com sal ficam diferentes e ele precisa refazer o trabalho em cada conta.' },
  { tipo: 'conta', frente: 'Quantas combinações tem um PIN de 4 dígitos e quanto leva testar todas a 1.000 por segundo?', verso: '10 × 10 × 10 × 10 = 10.000 combinações, 10 segundos. Sem limite de tentativas é fraquíssimo.' },
  { tipo: 'conta', frente: 'Com bloqueio após 3 tentativas, qual a chance de acertar um PIN de 4 dígitos chutando?', verso: '3 em 10.000 = 0,03%. Sem bloqueio, o ladrão testaria todas e acertaria com certeza.' },
  { tipo: 'regra', frente: 'Por que usar um hash lento de propósito?', verso: 'Encarece cada chute do atacante. Exemplos: Argon2, scrypt, bcrypt, PBKDF2. Hashes rápidos como MD5 e SHA-1 estão quebrados para senhas.' },
  { tipo: 'regra', frente: 'Quais são os fatores de autenticação?', verso: 'Conhecimento (algo que você sabe), posse (algo que você tem) e inerência (algo que você é). Dois fatores exigem tipos diferentes.' },
  { tipo: 'conta', frente: 'Cartão e PIN são quantos fatores? E duas senhas?', verso: 'Cartão (posse) e PIN (conhecimento): dois fatores. Duas senhas são um fator só (conhecimento).' },
  { tipo: 'regra', frente: 'Compare SMS, aplicativo autenticador e chave física como segundo fator.', verso: 'SMS: o mais usado, mas com riscos (troca fraudulenta de chip, falhas do SS7). Autenticador: código TOTP que muda a cada poucos segundos, gerado no aparelho. Chave física (FIDO2): geralmente a mais segura.' },
  { tipo: 'regra', frente: 'O que completa a defesa de senhas além do hash?', verso: 'Limitar tentativas, usar senhas longas e únicas e ativar o segundo fator. Não dá para ser 100% seguro.' },
  { tipo: 'história', frente: 'O que foi o crypt(3) de 1978?', verso: 'Do Unix, escrito por Robert Morris: guardava senhas "embaralhadas" com limite de 8 caracteres e sal de 12 bits.' },
  { tipo: 'história', frente: 'Quais hashes foram quebrados e quando?', verso: 'MD5 (criado por Rivest em 1991): colisões achadas em 2004. SHA-1 (1995): colisão prática anunciada pelo Google em 2017. O Argon2 venceu a competição de senhas em 2015.' },
]

export default cartoes
