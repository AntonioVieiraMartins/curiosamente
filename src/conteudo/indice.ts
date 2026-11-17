// Índice de todas as cápsulas (prontas e planejadas).
// Na etapa 2 do roteiro, cada cápsula pronta ganha sua pasta com meta.ts + capsula.mdx.
// Para adicionar uma área nova no futuro, basta criar uma linha em `linhas` e itens aqui.

export type Area = 'matematica' | 'computacao'
export type Estado = 'pronta' | 'proxima' | 'em-breve'

export type ResumoCapsula = {
  id: string
  titulo: string
  area: Area
  trilha: string // matemática: "fundamental" | "medio"; computação: nome do módulo
  gancho: string
  estado: Estado
  duracaoMin?: number
  conexoes?: string[] // ids de cápsulas de outra linha (baldeação no mapa)
}

export type Linha = {
  id: string
  sigla: string
  nome: string
  descricao: string
  cor: string
}

export const linhas: Linha[] = [
  { id: 'fundamental', sigla: 'F', nome: 'Matemática · Fundamental', descricao: '6º ao 9º ano', cor: 'var(--color-fundamental)' },
  { id: 'medio', sigla: 'M', nome: 'Matemática · Médio', descricao: '1º ao 3º ano', cor: 'var(--color-medio)' },
  { id: 'computacao', sigla: 'C', nome: 'Computação', descricao: 'Do computador ao sistema no ar', cor: 'var(--color-computacao)' },
]

export const modulosComputacao: Record<string, string> = {
  'o-computador': 'Módulo 1 · O computador',
  'redes-e-internet': 'Módulo 2 · Redes e internet',
  'sistema-web': 'Módulo 3 · Como um sistema web é feito',
  hospedagem: 'Módulo 4 · Colocando no ar',
}

const m = (trilha: string, id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha, area: 'matematica', estado: 'em-breve', ...extra,
})
const c = (trilha: string, id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha, area: 'computacao', estado: 'em-breve', ...extra,
})

export const capsulas: ResumoCapsula[] = [
  m('fundamental', 'numeros-negativos', 'Números negativos', 'Como algo pode valer menos que nada?', { estado: 'pronta', duracaoMin: 12 }),
  m('fundamental', 'fracoes', 'Frações', 'Qual pedaço é maior: 1/3 ou 1/4 da pizza?', { estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'porcentagem', 'Porcentagem', '50% de desconto e mais 20% dá 70%? Não dá.', { estado: 'pronta', duracaoMin: 12, conexoes: ['exponencial'] }),
  m('fundamental', 'razao-e-proporcao', 'Razão e proporção', 'A receita é para 3. A festa é para 30.', { estado: 'pronta', duracaoMin: 12, conexoes: ['funcao-afim'] }),
  m('fundamental', 'potencias', 'Potências', 'Grãos de arroz dobrando num tabuleiro de xadrez.', { conexoes: ['binario', 'exponencial'] }),
  m('fundamental', 'numeros-primos', 'Números primos', 'Os números que não se dividem e guardam segredos.'),
  m('fundamental', 'pitagoras', 'Teorema de Pitágoras', 'Uma prova que se faz arrastando quadrados.'),
  m('fundamental', 'probabilidade-simples', 'Probabilidade simples', 'Jogue uma moeda mil vezes. O que acontece?', { conexoes: ['monty-hall'] }),
  m('fundamental', 'estatistica-basica', 'Média, mediana e moda', 'Quando a média engana.'),

  m('medio', 'funcoes', 'Funções', 'Uma máquina que transforma números.'),
  m('medio', 'funcao-afim', 'Função afim', 'Quanto vai custar essa corrida de táxi?'),
  m('medio', 'funcao-quadratica', 'Função quadrática', 'O caminho de uma bola arremessada.'),
  m('medio', 'exponencial', 'Exponencial', 'Dobrar uma folha 42 vezes alcança a Lua?', { conexoes: ['potencias'] }),
  m('medio', 'logaritmo', 'Logaritmo', 'Quantas vezes eu dobrei?'),
  m('medio', 'monty-hall', 'O problema de Monty Hall', 'Trocar de porta dobra suas chances. Por quê?', {
    estado: 'pronta', duracaoMin: 20, conexoes: ['probabilidade-simples'],
  }),
  m('medio', 'combinatoria', 'Análise combinatória', 'Quantas senhas de 4 dígitos existem?'),
  m('medio', 'matrizes', 'Matrizes', 'Toda foto digital é uma tabela de números.', { conexoes: ['binario'] }),

  c('o-computador', 'binario', 'Binário', 'Escrever números acendendo lâmpadas.', { conexoes: ['potencias'] }),
  c('o-computador', 'hardware', 'Hardware', 'A cozinha que existe dentro do computador.'),
  c('o-computador', 'sistema-operacional', 'Sistema operacional', 'O gerente que ninguém vê trabalhar.'),
  c('o-computador', 'terminal', 'Terminal', 'Comandos sem medo da tela preta.'),
  c('redes-e-internet', 'como-a-internet-funciona', 'Como a internet funciona', 'A viagem de um pacote, roteador por roteador.', { duracaoMin: 10 }),
  c('redes-e-internet', 'ip-e-portas', 'IP e portas', 'O que significa localhost:5173?'),
  c('redes-e-internet', 'dns', 'DNS e domínios', 'A lista telefônica da internet.'),
  c('redes-e-internet', 'http-https', 'HTTP e HTTPS', 'O que o cadeado do navegador garante?'),
  c('sistema-web', 'banco-de-dados', 'Banco de dados', 'Planilhas que conversam entre si.'),
  c('sistema-web', 'senhas-e-hash', 'Usuários e login', 'Por que ninguém deveria guardar sua senha.', { conexoes: ['numeros-primos'] }),
  c('hospedagem', 'deploy', 'Deploy', 'Do seu computador para o mundo.'),
]

export function linhaDaCapsula(cap: { area: Area; trilha: string }) {
  return cap.area === 'computacao' ? 'computacao' : cap.trilha
}

export function buscarLinha(cap: { area: Area; trilha: string }) {
  return linhas.find((l) => l.id === linhaDaCapsula(cap))!
}

export function buscarCapsula(id: string | undefined) {
  return capsulas.find((cap) => cap.id === id)
}

// Número de catálogo fixo, como numa ficha de biblioteca
export function numeroDaCapsula(id: string) {
  return String(capsulas.findIndex((cap) => cap.id === id) + 1).padStart(3, '0')
}
