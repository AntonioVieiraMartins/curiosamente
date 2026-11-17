// Índice de todas as cápsulas (prontas e planejadas).
// Na etapa 2 do roteiro, cada cápsula pronta ganha sua pasta com meta.ts + capsula.mdx.
// Para adicionar uma área nova no futuro, basta criar uma linha em `linhas` e itens aqui.

export type Area = 'matematica' | 'computacao'
export type Estado = 'pronta' | 'proxima' | 'em-breve'

export type ResumoCapsula = {
  id: string
  titulo: string
  area: Area
  trilha: string // matemática: "basica" | "fundamental" | "medio"; computação: nome do módulo
  gancho: string
  estado: Estado
  duracaoMin?: number
  conexoes?: string[] // ids de cápsulas de outra linha (baldeação no mapa)
  grupo?: string // título que divide a linha em partes (ex.: "6º ano"); a computação usa os módulos
}

export type Linha = {
  id: string
  sigla: string
  nome: string
  descricao: string
  cor: string
}

export const linhas: Linha[] = [
  { id: 'basica', sigla: 'B', nome: 'Matemática · Básica', descricao: '1º ao 5º ano, a base de tudo', cor: 'var(--color-basica)' },
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
  // Básica: o que vem antes do 6º ano. Grupos por tema (a BNCC espalha estes assuntos do 1º ao 5º ano).
  m('basica', 'sistema-decimal', 'Sistema decimal', 'Com só dez algarismos dá para escrever qualquer número. Como?', { grupo: 'Números e contas' }),
  m('basica', 'adicao-e-subtracao', 'Adição e subtração', 'O "vai um" explicado com palitos e caixinhas.', { grupo: 'Números e contas' }),
  m('basica', 'multiplicacao', 'Multiplicação e tabuada', 'Dá para entender a tabuada em vez de decorar.', { grupo: 'Números e contas' }),
  m('basica', 'divisao', 'Divisão', 'Dividir 23 balas entre 4 amigos: e o resto?', { grupo: 'Números e contas' }),
  m('basica', 'expressoes-numericas', 'Expressões numéricas', '2 + 3 × 4 dá 20 ou 14?', { grupo: 'Números e contas' }),
  m('basica', 'numeros-decimais', 'Números decimais', 'R$ 2,50 + R$ 1,75 sem calculadora.', { grupo: 'Números e contas', conexoes: ['porcentagem'] }),
  m('basica', 'medidas', 'Medidas', 'Por que 1 litro cabe num cubo de 10 cm?', { grupo: 'Medidas' }),
  m('basica', 'tempo-e-horas', 'Tempo e horas', 'Por que a hora tem 60 minutos, e não 100?', { grupo: 'Medidas' }),
  m('basica', 'dinheiro-e-troco', 'Dinheiro e troco', 'Conferir o troco de cabeça, sem errar.', { grupo: 'Medidas' }),
  m('basica', 'formas-geometricas', 'Formas geométricas', 'Quantos lados tem um círculo?', { grupo: 'Formas e dados' }),
  m('basica', 'tabelas-e-graficos', 'Tabelas e gráficos', 'Ler um gráfico antes de acreditar nele.', { grupo: 'Formas e dados' }),

  // Fundamental (6º ao 9º ano), agrupado pelo ano em que a BNCC põe cada assunto
  m('fundamental', 'fracoes', 'Frações', 'Qual pedaço é maior: 1/3 ou 1/4 da pizza?', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'porcentagem', 'Porcentagem', '50% de desconto e mais 20% dá 70%? Não dá.', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['exponencial'] }),
  m('fundamental', 'potencias', 'Potências', 'Grãos de arroz dobrando num tabuleiro de xadrez.', { grupo: '6º ano', conexoes: ['binario', 'exponencial'] }),
  m('fundamental', 'multiplos-e-divisores', 'Múltiplos, divisores, MMC e MDC', 'Quando dois semáforos piscam juntos de novo?', { grupo: '6º ano' }),
  m('fundamental', 'numeros-primos', 'Números primos', 'Os números que não se dividem e guardam segredos.', { grupo: '6º ano' }),
  m('fundamental', 'plano-cartesiano', 'Plano cartesiano', 'Batalha naval é matemática.', { grupo: '6º ano', conexoes: ['geometria-analitica'] }),
  m('fundamental', 'angulos', 'Ângulos', 'Por que uma volta tem 360 graus?', { grupo: '6º ano' }),

  m('fundamental', 'numeros-negativos', 'Números negativos', 'Como algo pode valer menos que nada?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'razao-e-proporcao', 'Razão e proporção', 'A receita é para 3. A festa é para 30.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['funcao-afim'] }),
  m('fundamental', 'expressoes-algebricas', 'Letras na matemática', 'Por que trocar números por letras?', { grupo: '7º ano' }),
  m('fundamental', 'equacoes-1-grau', 'Equações do 1º grau', 'Uma balança que precisa ficar equilibrada.', { grupo: '7º ano' }),
  m('fundamental', 'poligonos', 'Triângulos e polígonos', 'Por que as abelhas usam hexágonos?', { grupo: '7º ano' }),
  m('fundamental', 'circunferencia-e-pi', 'Circunferência e Pi', 'Toda roda esconde o mesmo número.', { grupo: '7º ano' }),
  m('fundamental', 'simetria', 'Simetria e transformações', 'Espelhar, girar e deslizar figuras.', { grupo: '7º ano', conexoes: ['matrizes'] }),
  m('fundamental', 'probabilidade-simples', 'Probabilidade simples', 'Jogue uma moeda mil vezes. O que acontece?', { grupo: '7º ano', conexoes: ['monty-hall'] }),
  m('fundamental', 'estatistica-basica', 'Média, mediana e moda', 'Quando a média engana.', { grupo: '7º ano' }),

  m('fundamental', 'raizes', 'Raízes', 'Qual número vezes ele mesmo dá 2?', { grupo: '8º ano' }),
  m('fundamental', 'notacao-cientifica', 'Notação científica', 'Do átomo à galáxia em potências de 10.', { grupo: '8º ano' }),
  m('fundamental', 'produtos-notaveis', 'Produtos notáveis e fatoração', '(a + b)² montado com quadrados recortados.', { grupo: '8º ano' }),
  m('fundamental', 'sistemas-de-equacoes', 'Sistemas de equações', 'Dois planos de celular: qual compensa?', { grupo: '8º ano' }),
  m('fundamental', 'areas-e-perimetros', 'Áreas e perímetros', 'Com a mesma cerca, qual terreno é o maior?', { grupo: '8º ano' }),
  m('fundamental', 'volume', 'Volume', 'Quantos litros cabem nessa caixa d’água?', { grupo: '8º ano', conexoes: ['geometria-espacial'] }),
  m('fundamental', 'contagem', 'Contagem', '3 camisas e 2 calças: quantas roupas diferentes?', { grupo: '8º ano', conexoes: ['combinatoria'] }),

  m('fundamental', 'numeros-reais', 'Números reais e irracionais', 'Um número que nunca termina e nunca se repete.', { grupo: '9º ano' }),
  m('fundamental', 'equacao-2-grau', 'Equação do 2º grau', 'O quadrado que os babilônios completavam.', { grupo: '9º ano', conexoes: ['funcao-quadratica'] }),
  m('fundamental', 'semelhanca', 'Semelhança e Teorema de Tales', 'Medir uma pirâmide pela sombra.', { grupo: '9º ano', conexoes: ['trigonometria'] }),
  m('fundamental', 'pitagoras', 'Teorema de Pitágoras', 'Uma prova que se faz arrastando quadrados.', { grupo: '9º ano' }),
  m('fundamental', 'graficos-e-pesquisas', 'Gráficos e pesquisas', 'Como montar uma pesquisa que não engana.', { grupo: '9º ano', conexoes: ['estatistica'] }),

  // Médio: a BNCC não fixa o ano de cada assunto, então os grupos são por tema
  m('medio', 'funcoes', 'Funções', 'Uma máquina que transforma números.', { grupo: 'Funções' }),
  m('medio', 'funcao-afim', 'Função afim', 'Quanto vai custar essa corrida de táxi?', { grupo: 'Funções' }),
  m('medio', 'funcao-quadratica', 'Função quadrática', 'O caminho de uma bola arremessada.', { grupo: 'Funções' }),
  m('medio', 'exponencial', 'Exponencial', 'Dobrar uma folha 42 vezes alcança a Lua?', { grupo: 'Funções', conexoes: ['potencias'] }),
  m('medio', 'logaritmo', 'Logaritmo', 'Quantas vezes eu dobrei?', { grupo: 'Funções' }),
  m('medio', 'progressoes', 'Progressões (PA e PG)', 'Gauss somando de 1 a 100 num instante.', { grupo: 'Sequências e dinheiro' }),
  m('medio', 'matematica-financeira', 'Matemática financeira', 'Parcelado ou à vista? E o rotativo do cartão?', { grupo: 'Sequências e dinheiro', conexoes: ['porcentagem'] }),
  m('medio', 'trigonometria', 'Trigonometria', 'A altura de um prédio medida pela sombra.', { grupo: 'Trigonometria' }),
  m('medio', 'ciclo-trigonometrico', 'Ciclo trigonométrico e ondas', 'O que a roda-gigante tem a ver com o som?', { grupo: 'Trigonometria' }),
  m('medio', 'geometria-espacial', 'Geometria espacial', 'Por que as latas são cilindros?', { grupo: 'Geometria' }),
  m('medio', 'geometria-analitica', 'Geometria analítica', 'Como o GPS calcula a distância?', { grupo: 'Geometria' }),
  m('medio', 'combinatoria', 'Análise combinatória', 'Quantas senhas de 4 dígitos existem?', { grupo: 'Contagem e chance' }),
  m('medio', 'probabilidade', 'Probabilidade', 'Numa sala com 23 pessoas, duas fazem aniversário no mesmo dia?', { grupo: 'Contagem e chance' }),
  m('medio', 'monty-hall', 'O problema de Monty Hall', 'Trocar de porta dobra suas chances. Por quê?', {
    grupo: 'Contagem e chance', estado: 'pronta', duracaoMin: 20, conexoes: ['probabilidade-simples'],
  }),
  m('medio', 'estatistica', 'Estatística', 'Pesquisa eleitoral e margem de erro.', { grupo: 'Estatística' }),
  m('medio', 'matrizes', 'Matrizes', 'Toda foto digital é uma tabela de números.', { grupo: 'Álgebra', conexoes: ['binario'] }),
  m('medio', 'sistemas-lineares', 'Sistemas lineares', 'Três incógnitas, três pistas.', { grupo: 'Álgebra' }),
  m('medio', 'polinomios', 'Polinômios', 'As contas por trás das curvas.', { grupo: 'Álgebra' }),
  m('medio', 'numeros-complexos', 'Números complexos', 'A raiz de −1 existe. E serve para algo.', { grupo: 'Álgebra' }),

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
