// Índice de todas as cápsulas (prontas e planejadas).
// Na etapa 2 do roteiro, cada cápsula pronta ganha sua pasta com meta.ts + capsula.mdx.
// Para adicionar uma área nova no futuro, basta criar uma linha em `linhas` e itens aqui.

export type Area = 'matematica' | 'computacao' | 'biologia' | 'quimica' | 'fisica'
export type Estado = 'pronta' | 'proxima' | 'em-breve'

export type ResumoCapsula = {
  id: string
  titulo: string
  area: Area
  trilha: string // matemática: "basica" | "fundamental" | "medio" | "avancada"; computação: nome do módulo; biologia e química: o nome da área
  gancho: string
  estado: Estado
  duracaoMin?: number
  conexoes?: string[] // ids de cápsulas de outra linha (baldeação no mapa)
  grupo?: string // título que divide a linha em partes (ex.: "6º ano"); a computação usa os módulos
}

export type Linha = {
  id: string
  area: Area
  sigla: string
  nome: string
  descricao: string
  cor: string
}

// Cada área agrupa uma ou mais linhas do mapa (a Matemática tem quatro; as outras têm uma)
export type InfoArea = { id: Area; nome: string; descricao: string; linhas: string[] }

export const areas: InfoArea[] = [
  { id: 'matematica', nome: 'Matemática', descricao: 'Da tabuada ao cálculo', linhas: ['basica', 'fundamental', 'medio', 'avancada'] },
  { id: 'computacao', nome: 'Computação', descricao: 'Do computador ao sistema no ar', linhas: ['computacao'] },
  { id: 'biologia', nome: 'Biologia', descricao: 'Da célula aos ecossistemas', linhas: ['biologia'] },
  { id: 'quimica', nome: 'Química', descricao: 'Do átomo às reações do dia a dia', linhas: ['quimica'] },
  { id: 'fisica', nome: 'Física', descricao: 'Do movimento ao universo', linhas: ['fisica'] },
]

export const linhas: Linha[] = [
  { id: 'basica', area: 'matematica', sigla: 'B', nome: 'Matemática · Básica', descricao: '1º ao 5º ano, a base de tudo', cor: 'var(--color-basica)' },
  { id: 'fundamental', area: 'matematica', sigla: 'F', nome: 'Matemática · Fundamental', descricao: '6º ao 9º ano', cor: 'var(--color-fundamental)' },
  { id: 'medio', area: 'matematica', sigla: 'M', nome: 'Matemática · Médio', descricao: '1º ao 3º ano', cor: 'var(--color-medio)' },
  { id: 'avancada', area: 'matematica', sigla: 'A', nome: 'Matemática · Avançada', descricao: 'Cálculo, álgebra linear e além do Médio', cor: 'var(--color-avancada)' },
  { id: 'computacao', area: 'computacao', sigla: 'C', nome: 'Computação', descricao: 'Do computador ao sistema no ar', cor: 'var(--color-computacao)' },
  { id: 'biologia', area: 'biologia', sigla: 'Bi', nome: 'Biologia', descricao: 'Da célula aos ecossistemas', cor: 'var(--color-biologia)' },
  { id: 'quimica', area: 'quimica', sigla: 'Q', nome: 'Química', descricao: 'Do átomo às reações do dia a dia', cor: 'var(--color-quimica)' },
  { id: 'fisica', area: 'fisica', sigla: 'Fi', nome: 'Física', descricao: 'Do movimento ao universo', cor: 'var(--color-fisica)' },
]

export const modulosComputacao: Record<string, string> = {
  'o-computador': 'Módulo 1 · O computador',
  'redes-e-internet': 'Módulo 2 · Redes e internet',
  'sistema-web': 'Módulo 3 · Como um sistema web é feito',
  hospedagem: 'Módulo 4 · Colocando no ar',
  'ciencia-de-dados': 'Módulo 5 · Ciência de dados',
}

const m = (trilha: string, id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha, area: 'matematica', estado: 'em-breve', ...extra,
})
const c = (trilha: string, id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha, area: 'computacao', estado: 'em-breve', ...extra,
})
// Biologia e química têm uma linha só; os assuntos se dividem em `grupo`
const bio = (id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha: 'biologia', area: 'biologia', estado: 'em-breve', ...extra,
})
const fis = (id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha: 'fisica', area: 'fisica', estado: 'em-breve', ...extra,
})
const qui = (id: string, titulo: string, gancho: string, extra: Partial<ResumoCapsula> = {}): ResumoCapsula => ({
  id, titulo, gancho, trilha: 'quimica', area: 'quimica', estado: 'em-breve', ...extra,
})

export const capsulas: ResumoCapsula[] = [
  // Básica: o que vem antes do 6º ano. Grupos por tema (a BNCC espalha estes assuntos do 1º ao 5º ano).
  m('basica', 'sistema-decimal', 'Sistema decimal', 'Com só dez algarismos dá para escrever qualquer número. Como?', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40, conexoes: ['binario'] }),
  m('basica', 'adicao-e-subtracao', 'Adição e subtração', 'O "vai um" explicado com palitos e caixinhas.', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40 }),
  m('basica', 'multiplicacao', 'Multiplicação e tabuada', 'Dá para entender a tabuada em vez de decorar.', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40, conexoes: ['potencias'] }),
  m('basica', 'divisao', 'Divisão', 'Dividir 23 balas entre 4 amigos: e o resto?', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40 }),
  m('basica', 'expressoes-numericas', 'Expressões numéricas', '2 + 3 × 4 dá 20 ou 14?', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40 }),
  m('basica', 'numeros-decimais', 'Números decimais', 'R$ 2,50 + R$ 1,75 sem calculadora.', { grupo: 'Números e contas', estado: 'pronta', duracaoMin: 40, conexoes: ['porcentagem'] }),
  m('basica', 'medidas', 'Medidas', 'Por que 1 litro cabe num cubo de 10 cm?', { grupo: 'Medidas', estado: 'pronta', duracaoMin: 40, conexoes: ['potencias'] }),
  m('basica', 'tempo-e-horas', 'Tempo e horas', 'Por que a hora tem 60 minutos, e não 100?', { grupo: 'Medidas', estado: 'pronta', duracaoMin: 40, conexoes: ['angulos'] }),
  m('basica', 'dinheiro-e-troco', 'Dinheiro e troco', 'Conferir o troco de cabeça, sem errar.', { grupo: 'Medidas', estado: 'pronta', duracaoMin: 40, conexoes: ['porcentagem'] }),
  m('basica', 'formas-geometricas', 'Formas geométricas', 'Quantos lados tem um círculo?', { grupo: 'Formas e dados', estado: 'pronta', duracaoMin: 40, conexoes: ['angulos'] }),
  m('basica', 'tabelas-e-graficos', 'Tabelas e gráficos', 'Ler um gráfico antes de acreditar nele.', { grupo: 'Formas e dados', estado: 'pronta', duracaoMin: 40, conexoes: ['porcentagem'] }),

  // Fundamental (6º ao 9º ano), agrupado pelo ano em que a BNCC põe cada assunto
  m('fundamental', 'fracoes', 'Frações', 'Qual pedaço é maior: 1/3 ou 1/4 da pizza?', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'porcentagem', 'Porcentagem', '50% de desconto e mais 20% dá 70%? Não dá.', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['exponencial'] }),
  m('fundamental', 'potencias', 'Potências', 'Grãos de arroz dobrando num tabuleiro de xadrez.', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['binario', 'exponencial'] }),
  m('fundamental', 'multiplos-e-divisores', 'Múltiplos, divisores, MMC e MDC', 'Quando dois semáforos piscam juntos de novo?', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'numeros-primos', 'Números primos', 'Os números que não se dividem e guardam segredos.', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['senhas-e-hash'] }),
  m('fundamental', 'plano-cartesiano', 'Plano cartesiano', 'Batalha naval é matemática.', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['geometria-analitica'] }),
  m('fundamental', 'angulos', 'Ângulos', 'Por que uma volta tem 360 graus?', { grupo: '6º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['trigonometria'] }),

  m('fundamental', 'numeros-negativos', 'Números negativos', 'Como algo pode valer menos que nada?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'razao-e-proporcao', 'Razão e proporção', 'A receita é para 3. A festa é para 30.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['funcao-afim'] }),
  m('fundamental', 'expressoes-algebricas', 'Letras na matemática', 'Por que trocar números por letras?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'equacoes-1-grau', 'Equações do 1º grau', 'Uma balança que precisa ficar equilibrada.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['razao-e-proporcao', 'sistemas-de-equacoes'] }),
  m('fundamental', 'inequacoes', 'Inequações', 'Quantas pizzas posso pedir sem passar de R$ 100?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['equacoes-1-grau'] }),
  m('fundamental', 'educacao-financeira', 'Educação financeira', 'Para onde vai o seu dinheiro no fim do mês?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['matematica-financeira'] }),
  m('fundamental', 'poligonos', 'Triângulos e polígonos', 'Por que as abelhas usam hexágonos?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'circunferencia-e-pi', 'Circunferência e Pi', 'Toda roda esconde o mesmo número.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),
  m('fundamental', 'simetria', 'Simetria e transformações', 'Espelhar, girar e deslizar figuras.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['matrizes'] }),
  m('fundamental', 'probabilidade-simples', 'Probabilidade simples', 'Jogue uma moeda mil vezes. O que acontece?', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['monty-hall'] }),
  m('fundamental', 'estatistica-basica', 'Média, mediana e moda', 'Quando a média engana.', { grupo: '7º ano', estado: 'pronta', duracaoMin: 40 }),

  m('fundamental', 'raizes', 'Raízes', 'Qual número vezes ele mesmo dá 2?', { grupo: '8º ano' }),
  m('fundamental', 'notacao-cientifica', 'Notação científica', 'Do átomo à galáxia em potências de 10.', { grupo: '8º ano' }),
  m('fundamental', 'produtos-notaveis', 'Produtos notáveis e fatoração', '(a + b)² montado com quadrados recortados.', { grupo: '8º ano' }),
  m('fundamental', 'padroes-e-sequencias', 'Padrões e sequências', 'Qual é o próximo número? E o centésimo?', { grupo: '8º ano', conexoes: ['progressoes'] }),
  m('fundamental', 'congruencia', 'Congruência de triângulos', 'Quando dois triângulos são exatamente iguais?', { grupo: '8º ano' }),
  m('fundamental', 'construcoes-geometricas', 'Construções com régua e compasso', 'Desenhar um hexágono perfeito só com um compasso.', { grupo: '8º ano', conexoes: ['poligonos'] }),
  m('fundamental', 'sistemas-de-equacoes', 'Sistemas de equações', 'Dois planos de celular: qual compensa?', { grupo: '8º ano' }),
  m('fundamental', 'areas-e-perimetros', 'Áreas e perímetros', 'Com a mesma cerca, qual terreno é o maior?', { grupo: '8º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['volume'] }),
  m('fundamental', 'volume', 'Volume', 'Quantos litros cabem nessa caixa d’água?', { grupo: '8º ano', conexoes: ['geometria-espacial'] }),
  m('fundamental', 'contagem', 'Contagem', '3 camisas e 2 calças: quantas roupas diferentes?', { grupo: '8º ano', conexoes: ['combinatoria'] }),

  m('fundamental', 'numeros-reais', 'Números reais e irracionais', 'Um número que nunca termina e nunca se repete.', { grupo: '9º ano' }),
  m('fundamental', 'equacao-2-grau', 'Equação do 2º grau', 'O quadrado que os babilônios completavam.', { grupo: '9º ano', conexoes: ['funcao-quadratica'] }),
  m('fundamental', 'semelhanca', 'Semelhança e Teorema de Tales', 'Medir uma pirâmide pela sombra.', { grupo: '9º ano', conexoes: ['trigonometria'] }),
  m('fundamental', 'pitagoras', 'Teorema de Pitágoras', 'Uma prova que se faz arrastando quadrados.', { grupo: '9º ano', estado: 'pronta', duracaoMin: 40, conexoes: ['plano-cartesiano', 'angulos'] }),
  m('fundamental', 'graficos-e-pesquisas', 'Gráficos e pesquisas', 'Como montar uma pesquisa que não engana.', { grupo: '9º ano', conexoes: ['estatistica'] }),

  // Médio: a BNCC não fixa o ano de cada assunto, então os grupos são por tema
  m('medio', 'funcoes', 'Funções', 'Uma máquina que transforma números.', { grupo: 'Funções', estado: 'pronta', duracaoMin: 40 }),
  m('medio', 'funcao-afim', 'Função afim', 'Quanto vai custar essa corrida de táxi?', { grupo: 'Funções', estado: 'pronta', duracaoMin: 40, conexoes: ['sistemas-de-equacoes'] }),
  m('medio', 'funcao-quadratica', 'Função quadrática', 'O caminho de uma bola arremessada.', { grupo: 'Funções', estado: 'pronta', duracaoMin: 40 }),
  m('medio', 'exponencial', 'Exponencial', 'Dobrar uma folha 42 vezes alcança a Lua?', { grupo: 'Funções', estado: 'pronta', duracaoMin: 40, conexoes: ['potencias'] }),
  m('medio', 'logaritmo', 'Logaritmo', 'Quantas vezes eu dobrei?', { grupo: 'Funções', estado: 'pronta', duracaoMin: 40 }),
  m('medio', 'funcoes-modulares', 'Funções modulares', 'A distância não tem sinal: o valor absoluto.', { grupo: 'Funções' }),
  m('medio', 'funcoes-por-partes', 'Funções definidas por partes', 'Como a conta de luz e o Imposto de Renda são calculados?', { grupo: 'Funções' }),
  m('medio', 'progressoes', 'Progressões (PA e PG)', 'Gauss somando de 1 a 100 num instante.', { grupo: 'Sequências e dinheiro' }),
  m('medio', 'matematica-financeira', 'Matemática financeira', 'Parcelado ou à vista? E o rotativo do cartão?', { grupo: 'Sequências e dinheiro', conexoes: ['porcentagem'] }),
  m('medio', 'amortizacao', 'Sistemas de amortização', 'Price ou SAC: qual financiamento custa menos?', { grupo: 'Sequências e dinheiro', conexoes: ['matematica-financeira'] }),
  m('medio', 'trigonometria', 'Trigonometria', 'A altura de um prédio medida pela sombra.', { grupo: 'Trigonometria' }),
  m('medio', 'ciclo-trigonometrico', 'Ciclo trigonométrico e ondas', 'O que a roda-gigante tem a ver com o som?', { grupo: 'Trigonometria' }),
  m('medio', 'geometria-espacial', 'Geometria espacial', 'Por que as latas são cilindros?', { grupo: 'Geometria' }),
  m('medio', 'geometria-analitica', 'Geometria analítica', 'Como o GPS calcula a distância?', { grupo: 'Geometria', estado: 'pronta', duracaoMin: 40, conexoes: ['vetores', 'secoes-conicas'] }),
  m('medio', 'secoes-conicas', 'Seções cônicas', 'Elipse, parábola e hipérbole saem de um cone cortado.', { grupo: 'Geometria' }),
  m('medio', 'fractais-e-pavimentacoes', 'Fractais e pavimentações', 'Uma figura que se repete em todas as escalas.', { grupo: 'Geometria' }),
  m('medio', 'combinatoria', 'Análise combinatória', 'Quantas senhas de 4 dígitos existem?', { grupo: 'Contagem e chance' }),
  m('medio', 'probabilidade', 'Probabilidade', 'Numa sala com 23 pessoas, duas fazem aniversário no mesmo dia?', { grupo: 'Contagem e chance' }),
  m('medio', 'monty-hall', 'O problema de Monty Hall', 'Trocar de porta dobra suas chances. Por quê?', {
    grupo: 'Contagem e chance', estado: 'pronta', duracaoMin: 20, conexoes: ['probabilidade-simples'],
  }),
  m('medio', 'estatistica', 'Estatística', 'Pesquisa eleitoral e margem de erro.', { grupo: 'Estatística' }),
  m('medio', 'dispersao-e-normal', 'Dispersão e distribuição normal', 'Duas turmas com a mesma média e notas bem diferentes.', { grupo: 'Estatística' }),
  m('medio', 'matrizes', 'Matrizes', 'Toda foto digital é uma tabela de números.', { grupo: 'Álgebra', conexoes: ['binario'] }),
  m('medio', 'sistemas-lineares', 'Sistemas lineares', 'Três incógnitas, três pistas.', { grupo: 'Álgebra' }),
  m('medio', 'polinomios', 'Polinômios', 'As contas por trás das curvas.', { grupo: 'Álgebra' }),
  m('medio', 'numeros-complexos', 'Números complexos', 'A raiz de −1 existe. E serve para algo.', { grupo: 'Álgebra' }),
  m('medio', 'vetores', 'Vetores', 'Como o avião sabe para onde o vento o empurra?', { grupo: 'Álgebra', conexoes: ['geometria-analitica'] }),
  m('medio', 'pensamento-computacional', 'Pensamento computacional', 'Ensinar um robô a achar o caminho: algoritmos e fluxogramas.', { grupo: 'Álgebra', conexoes: ['binario'] }),

  // Avançada: depois do Médio (cálculo, álgebra linear, estatística inferencial)
  m('avancada', 'logica-e-proposicoes', 'Lógica e proposições', 'Se chove, a rua molha. A rua molhou: choveu?', { grupo: 'Lógica e fundamentos', estado: 'pronta', duracaoMin: 40, conexoes: ['binario', 'paradoxos-e-limites-da-logica'] }),
  m('avancada', 'conjuntos', 'Conjuntos', 'O que "todos" e "alguns" querem dizer de verdade.', { grupo: 'Lógica e fundamentos' }),
  m('avancada', 'demonstracao', 'Demonstração', 'Como ter certeza de que algo vale para infinitos números.', { grupo: 'Lógica e fundamentos' }),
  m('avancada', 'inducao-matematica', 'Indução matemática', 'Derrubar infinitos dominós provando só dois fatos.', { grupo: 'Lógica e fundamentos', conexoes: ['progressoes'] }),
  m('avancada', 'axiomas-e-sistemas', 'Axiomas e sistemas', 'Do que a matemática parte, e por que Euclides fez isso.', { grupo: 'Lógica e fundamentos' }),
  m('avancada', 'paradoxos-e-limites-da-logica', 'Paradoxos e limites da lógica', 'O mentiroso e o que Gödel descobriu.', { grupo: 'Lógica e fundamentos' }),
  m('avancada', 'limites', 'Limites e continuidade', 'Chegar cada vez mais perto sem nunca tocar.', { grupo: 'Cálculo', estado: 'pronta', duracaoMin: 45, conexoes: ['funcoes', 'progressoes'] }),
  m('avancada', 'derivadas', 'Derivadas', 'A velocidade de um carro num único instante.', { grupo: 'Cálculo' }),
  m('avancada', 'aplicacoes-derivadas', 'Aplicações das derivadas', 'Achar o máximo lucro e o mínimo custo.', { grupo: 'Cálculo', conexoes: ['funcao-quadratica'] }),
  m('avancada', 'integrais', 'Integrais', 'Somar infinitas fatias finas para achar uma área.', { grupo: 'Cálculo' }),
  m('avancada', 'aplicacoes-integrais', 'Aplicações das integrais', 'Volume de um vaso e distância percorrida.', { grupo: 'Cálculo' }),
  m('avancada', 'series', 'Sequências e séries infinitas', 'Somar infinitos números pode dar um resultado finito?', { grupo: 'Cálculo', conexoes: ['progressoes'] }),
  m('avancada', 'equacoes-diferenciais', 'Equações diferenciais', 'Como uma epidemia ou uma xícara de café esfria.', { grupo: 'Cálculo' }),
  m('avancada', 'calculo-multivariavel', 'Cálculo de várias variáveis', 'A inclinação de um morro em todas as direções.', { grupo: 'Cálculo' }),
  m('avancada', 'espacos-vetoriais', 'Espaços vetoriais', 'Qualquer ponto do espaço com poucas setas.', { grupo: 'Álgebra linear', conexoes: ['vetores', 'matrizes'] }),
  m('avancada', 'transformacoes-lineares', 'Transformações lineares', 'Como um jogo gira e estica imagens com matrizes.', { grupo: 'Álgebra linear', conexoes: ['matrizes'] }),
  m('avancada', 'inferencia-estatistica', 'Inferência estatística', 'Como 1.000 pessoas dizem algo sobre 200 milhões.', { grupo: 'Estatística avançada', conexoes: ['estatistica'] }),
  m('avancada', 'regressao', 'Regressão e correlação', 'Correlação não é causa: o caso dos sorvetes e dos afogamentos.', { grupo: 'Estatística avançada' }),

  c('o-computador', 'binario', 'Binário', 'Escrever números acendendo lâmpadas.', { estado: 'pronta', duracaoMin: 40, conexoes: ['potencias'] }),
  c('o-computador', 'hardware', 'Hardware', 'A cozinha que existe dentro do computador.', { estado: 'pronta', duracaoMin: 40, conexoes: ['binario'] }),
  c('o-computador', 'sistema-operacional', 'Sistema operacional', 'O gerente que ninguém vê trabalhar.', { estado: 'pronta', duracaoMin: 40, conexoes: ['hardware'] }),
  c('o-computador', 'terminal', 'Terminal', 'Comandos sem medo da tela preta.', { estado: 'pronta', duracaoMin: 40, conexoes: ['sistema-operacional'] }),
  c('redes-e-internet', 'como-a-internet-funciona', 'Como a internet funciona', 'A viagem de um pacote, roteador por roteador.', { estado: 'pronta', duracaoMin: 40, conexoes: ['sistema-operacional'] }),
  c('redes-e-internet', 'ip-e-portas', 'IP e portas', 'O que significa localhost:5173?', { estado: 'pronta', duracaoMin: 40, conexoes: ['como-a-internet-funciona'] }),
  c('redes-e-internet', 'dns', 'DNS e domínios', 'A lista telefônica da internet.', { estado: 'pronta', duracaoMin: 40, conexoes: ['ip-e-portas'] }),
  c('redes-e-internet', 'http-https', 'HTTP e HTTPS', 'O que o cadeado do navegador garante?', { estado: 'pronta', duracaoMin: 40, conexoes: ['dns'] }),
  c('sistema-web', 'front-end-e-back-end', 'Front-end e back-end', 'O salão e a cozinha de todo site.', { estado: 'pronta', duracaoMin: 40, conexoes: ['http-https'] }),
  c('sistema-web', 'html-css-javascript', 'HTML, CSS e JavaScript', 'Esqueleto, roupa e movimento de toda página.', { estado: 'pronta', duracaoMin: 40, conexoes: ['front-end-e-back-end'] }),
  c('sistema-web', 'apis-e-json', 'APIs e JSON', 'O cardápio que um sistema oferece para outro.', { estado: 'pronta', duracaoMin: 40, conexoes: ['html-css-javascript'] }),
  c('sistema-web', 'banco-de-dados', 'Banco de dados', 'Planilhas que conversam entre si.', { estado: 'pronta', duracaoMin: 40, conexoes: ['apis-e-json'] }),
  c('sistema-web', 'senhas-e-hash', 'Usuários e login', 'Por que ninguém deveria guardar sua senha.', { estado: 'pronta', duracaoMin: 40, conexoes: ['banco-de-dados', 'numeros-primos'] }),
  c('hospedagem', 'git-e-github', 'Git e GitHub', 'Salvar o jogo do código e voltar no tempo.', { estado: 'pronta', duracaoMin: 40, conexoes: ['terminal'] }),
  c('hospedagem', 'deploy', 'Deploy', 'Do seu computador para o mundo.', { estado: 'pronta', duracaoMin: 40, conexoes: ['dns'] }),
  c('ciencia-de-dados', 'o-que-sao-dados', 'O que são dados', 'Uma linha de planilha vira uma pessoa, uma compra, um clique.', { conexoes: ['banco-de-dados', 'estatistica-basica'] }),
  c('ciencia-de-dados', 'tabelas-e-limpeza', 'Tabelas e limpeza de dados', 'Por que 80% do trabalho é arrumar a bagunça antes de analisar.', { conexoes: ['o-que-sao-dados'] }),
  c('ciencia-de-dados', 'resumindo-dados', 'Resumindo dados', 'Média, mediana e desvio: três jeitos de contar a mesma história.', { conexoes: ['estatistica-basica', 'tabelas-e-limpeza'] }),
  c('ciencia-de-dados', 'graficos-que-contam-historias', 'Gráficos que contam histórias', 'O mesmo número, dois gráficos, duas conclusões opostas.', { conexoes: ['resumindo-dados', 'estatistica'] }),
  c('ciencia-de-dados', 'correlacao-e-causa', 'Correlação não é causa', 'Sorvete e afogamentos sobem juntos. Quem culpar?', { conexoes: ['graficos-que-contam-historias', 'regressao'] }),
  c('ciencia-de-dados', 'amostras-e-vieses', 'Amostras e vieses', 'Como uma pesquisa com 2 milhões de pessoas errou feio.', { conexoes: ['correlacao-e-causa', 'inferencia-estatistica'] }),
  c('ciencia-de-dados', 'previsao-com-dados', 'Prever o futuro com dados', 'Uma reta que adivinha o preço de uma casa.', { estado: 'pronta', duracaoMin: 50, conexoes: ['amostras-e-vieses', 'funcao-afim', 'regressao'] }),
  c('ciencia-de-dados', 'aprendizado-de-maquina', 'Aprendizado de máquina', 'Como o computador aprende a separar gatos de cachorros sem receber regras.', { estado: 'pronta', duracaoMin: 55, conexoes: ['previsao-com-dados', 'matrizes'] }),

  // Biologia: da célula aos ecossistemas, na ordem em que as ideias se apoiam
  bio('o-que-e-vida', 'O que é vida?', 'Um vírus está vivo? Os cientistas ainda discutem.', { grupo: 'A célula e a vida', estado: 'pronta', duracaoMin: 40 }),
  bio('celula', 'A célula', 'Somos feitos de trilhões de minúsculas fábricas.', { grupo: 'A célula e a vida', estado: 'pronta', duracaoMin: 40 }),
  bio('microscopio', 'Microscópio e o mundo invisível', 'Numa gota de água de lagoa vive um zoológico.', { grupo: 'A célula e a vida', estado: 'pronta', duracaoMin: 40, conexoes: ['notacao-cientifica'] }),
  bio('membrana-e-osmose', 'Membrana e osmose', 'Por que a alface murcha quando recebe sal?', { grupo: 'A célula e a vida', estado: 'pronta', duracaoMin: 45, conexoes: ['solucoes-e-concentracao'] }),
  bio('fotossintese', 'Fotossíntese', 'A planta fabrica a própria comida com luz, água e ar.', { grupo: 'Energia da vida', estado: 'pronta', duracaoMin: 50, conexoes: ['reacoes-quimicas'] }),
  bio('respiracao-celular', 'Respiração celular', 'A bateria de cada célula: de onde vem a energia do corpo.', { grupo: 'Energia da vida', estado: 'pronta', duracaoMin: 50, conexoes: ['energia-nas-reacoes'] }),
  bio('dna-e-genes', 'DNA e genes', 'O manual de instruções que cada célula carrega.', { grupo: 'Genética', estado: 'pronta', duracaoMin: 50, conexoes: ['binario'] }),
  bio('divisao-celular', 'Divisão celular: mitose e meiose', 'Como uma célula vira duas, e por que irmãos não são cópias.', { grupo: 'Genética', estado: 'pronta', duracaoMin: 50 }),
  bio('mendel', 'As ervilhas de Mendel', 'Por que filhos se parecem com os pais sem serem cópias?', { grupo: 'Genética', estado: 'pronta', duracaoMin: 50, conexoes: ['probabilidade-simples'] }),
  bio('heredogramas', 'Heredogramas e probabilidade', 'Qual a chance de um bebê ter os olhos do avô?', { grupo: 'Genética', estado: 'pronta', duracaoMin: 50, conexoes: ['probabilidade'] }),
  bio('mutacoes', 'Mutações', 'Um erro de cópia pode ser ruim, neutro ou até útil.', { grupo: 'Genética', estado: 'pronta', duracaoMin: 50 }),
  bio('biotecnologia', 'Biotecnologia e edição do DNA', 'Insulina feita por bactérias e o que é o CRISPR.', { grupo: 'Genética', estado: 'pronta', duracaoMin: 55 }),
  bio('selecao-natural', 'Seleção natural', 'Por que as bactérias ficam resistentes aos antibióticos?', { grupo: 'Evolução e diversidade', estado: 'pronta', duracaoMin: 55, conexoes: ['probabilidade-simples'] }),
  bio('fosseis-e-tempo', 'Fósseis e o tempo profundo', 'Como descobrir a idade de uma rocha?', { grupo: 'Evolução e diversidade', estado: 'pronta', duracaoMin: 55, conexoes: ['exponencial'] }),
  bio('classificacao', 'Classificação dos seres vivos', 'Por que a baleia não é um peixe?', { grupo: 'Evolução e diversidade', estado: 'pronta', duracaoMin: 55 }),
  bio('virus-e-bacterias', 'Vírus e bactérias', 'Quem é vilão, quem é amigo e quem só está de passagem.', { grupo: 'Evolução e diversidade', estado: 'pronta', duracaoMin: 55 }),
  bio('cadeias-alimentares', 'Cadeias e teias alimentares', 'Quem come quem, e o que acontece quando um some.', { grupo: 'Ecologia' }),
  bio('populacoes', 'Populações e crescimento', 'Coelhos e raposas: por que a conta não cresce para sempre?', { grupo: 'Ecologia', conexoes: ['exponencial'] }),
  bio('ciclos-da-natureza', 'Ciclos da água, do carbono e do nitrogênio', 'Os átomos do seu corpo já passaram por outros seres.', { grupo: 'Ecologia', conexoes: ['atomo'] }),
  bio('biomas-do-brasil', 'Biomas do Brasil', 'Amazônia, Cerrado, Mata Atlântica: cada um com seu jeito.', { grupo: 'Ecologia' }),
  bio('efeito-estufa', 'Efeito estufa e clima', 'Sem efeito estufa a Terra seria um deserto gelado. E com demais?', { grupo: 'Ecologia', conexoes: ['gases'] }),
  bio('impactos-ambientais', 'Impactos ambientais e sustentabilidade', 'O que muda quando uma cidade inteira recicla.', { grupo: 'Ecologia', conexoes: ['tabelas-e-graficos'] }),
  bio('digestao', 'Digestão', 'A viagem de um pão pelo seu corpo.', { grupo: 'Corpo humano', conexoes: ['funcoes-inorganicas'] }),
  bio('circulacao', 'Coração e circulação', 'Uma bomba que não para: o caminho do sangue.', { grupo: 'Corpo humano' }),
  bio('respiracao', 'Respiração e pulmões', 'Por que o ar entra e sai sem você pensar?', { grupo: 'Corpo humano', conexoes: ['gases'] }),
  bio('sistema-nervoso', 'Sistema nervoso', 'Como um toque vira um pensamento em frações de segundo.', { grupo: 'Corpo humano' }),
  bio('imunidade-e-vacinas', 'Imunidade e vacinas', 'Como o corpo aprende a lutar sem ficar doente.', { grupo: 'Corpo humano', conexoes: ['virus-e-bacterias'] }),
  bio('hormonios', 'Hormônios', 'Mensageiros químicos que mandam no corpo.', { grupo: 'Corpo humano', conexoes: ['quimica-da-vida'] }),
  bio('reproducao-e-puberdade', 'Reprodução, puberdade e saúde', 'As mudanças do corpo e os cuidados que elas pedem.', { grupo: 'Corpo humano' }),
  bio('plantas-e-sementes', 'Plantas, flores e sementes', 'Como uma semente sabe para onde crescer?', { grupo: 'Plantas', conexoes: ['fotossintese'] }),

  // Química: do átomo às reações do dia a dia
  qui('materia-e-propriedades', 'Matéria e suas propriedades', 'Por que o gelo boia na água? A densidade explica.', { grupo: 'Matéria e átomos', estado: 'pronta', duracaoMin: 40, conexoes: ['razao-e-proporcao', 'medidas'] }),
  qui('estados-da-materia', 'Estados da matéria', 'Por que a água vira gelo e vira vapor?', { grupo: 'Matéria e átomos', estado: 'pronta', duracaoMin: 40 }),
  qui('misturas-e-separacao', 'Misturas e separação', 'Como separar sal da água e areia do açúcar?', { grupo: 'Matéria e átomos', estado: 'pronta', duracaoMin: 40 }),
  qui('atomo', 'O átomo', 'Do "indivisível" dos gregos ao átomo que hoje conhecemos.', { grupo: 'Matéria e átomos', conexoes: ['notacao-cientifica'], estado: 'pronta', duracaoMin: 45 }),
  qui('modelos-atomicos', 'Modelos atômicos', 'De Dalton a Bohr: como imaginar o que ninguém vê.', { grupo: 'Matéria e átomos', estado: 'pronta', duracaoMin: 50 }),
  qui('tabela-periodica', 'Tabela periódica', 'Um mapa dos elementos com padrões escondidos.', { grupo: 'Matéria e átomos', estado: 'pronta', duracaoMin: 50 }),
  qui('mol', 'Mol e quantidade de matéria', 'Como contar átomos sem contar um por um.', { grupo: 'Matéria e átomos', conexoes: ['notacao-cientifica', 'potencias'], estado: 'pronta', duracaoMin: 50 }),
  qui('ligacoes-quimicas', 'Ligações químicas', 'Por que sal e açúcar se comportam tão diferente?', { grupo: 'Ligações e substâncias', estado: 'pronta', duracaoMin: 50 }),
  qui('moleculas-e-polaridade', 'Moléculas e polaridade', 'Por que óleo e água não se misturam?', { grupo: 'Ligações e substâncias', estado: 'pronta', duracaoMin: 50 }),
  qui('funcoes-inorganicas', 'Ácidos, bases e sais', 'O suco de repolho que muda de cor.', { grupo: 'Ligações e substâncias' }),
  qui('ph', 'pH', 'Do limão ao sabão: uma escala que usa logaritmo.', { grupo: 'Ligações e substâncias', conexoes: ['logaritmo'] }),
  qui('quimica-do-carbono', 'Química do carbono', 'Por que a vida é feita de carbono?', { grupo: 'Ligações e substâncias' }),
  qui('reacoes-quimicas', 'Reações químicas', 'Como saber que algo se transformou de verdade?', { grupo: 'Reações' }),
  qui('balanceamento', 'Balanceamento de equações', 'Átomos não somem: a lição de Lavoisier.', { grupo: 'Reações', conexoes: ['equacoes-1-grau'] }),
  qui('estequiometria', 'Estequiometria: a receita das reações', 'Quanto de cada ingrediente para o bolo químico?', { grupo: 'Reações', conexoes: ['razao-e-proporcao'] }),
  qui('energia-nas-reacoes', 'Energia nas reações', 'Por que a bolsa de gelo esfria e a de calor esquenta?', { grupo: 'Reações' }),
  qui('velocidade-das-reacoes', 'Velocidade e catalisadores', 'Por que a comida dura mais na geladeira?', { grupo: 'Reações', conexoes: ['exponencial'] }),
  qui('equilibrio-quimico', 'Equilíbrio químico', 'Quando a reação para de mudar, mas não para de acontecer.', { grupo: 'Reações' }),
  qui('oxirreducao-e-pilhas', 'Oxirredução, pilhas e baterias', 'Como uma pilha transforma química em eletricidade?', { grupo: 'Reações' }),
  qui('solucoes-e-concentracao', 'Soluções e concentração', 'Quanto sal tem no soro? Contas de misturas.', { grupo: 'Soluções e gases', conexoes: ['porcentagem', 'razao-e-proporcao'] }),
  qui('gases', 'Os gases', 'Por que o balão murcha quando esfria?', { grupo: 'Soluções e gases', conexoes: ['funcoes'] }),
  qui('quimica-da-cozinha', 'Química da cozinha', 'Por que o bolo cresce e a maçã escurece?', { grupo: 'Química no dia a dia' }),
  qui('polimeros', 'Plásticos e polímeros', 'Moléculas que formam correntes gigantes.', { grupo: 'Química no dia a dia' }),
  qui('combustiveis', 'Combustíveis e energia', 'De onde vem a energia do carro e do fogão?', { grupo: 'Química no dia a dia' }),
  qui('quimica-ambiental', 'Química e meio ambiente', 'Chuva ácida, camada de ozônio e o que fazer.', { grupo: 'Química no dia a dia', conexoes: ['efeito-estufa'] }),
  qui('quimica-da-vida', 'Química da vida', 'Proteínas, açúcares e gorduras: de que somos feitos.', { grupo: 'Química no dia a dia', conexoes: ['celula', 'dna-e-genes'] }),

  // Física: do movimento ao universo
  fis('movimento-e-referencial', 'Movimento e referencial', 'Sentado no ônibus, você está parado? Depende de quem olha.', { grupo: 'Movimento', conexoes: ['plano-cartesiano'], estado: 'pronta', duracaoMin: 40 }),
  fis('velocidade-e-aceleracao', 'Velocidade e aceleração', 'Por que o corpo vai para a frente quando o carro freia?', { grupo: 'Movimento', conexoes: ['razao-e-proporcao'], estado: 'pronta', duracaoMin: 45 }),
  fis('movimento-uniforme', 'Movimento uniforme', 'Quando o carro chega: gráficos de posição e tempo.', { grupo: 'Movimento', conexoes: ['funcao-afim'], estado: 'pronta', duracaoMin: 45 }),
  fis('movimento-variado', 'Movimento uniformemente variado', 'Frear a tempo: a conta que salva vidas.', { grupo: 'Movimento', conexoes: ['funcao-quadratica'], estado: 'pronta', duracaoMin: 50 }),
  fis('queda-livre', 'Queda livre', 'Uma pena e um martelo caem juntos? Na Lua, sim.', { grupo: 'Movimento', estado: 'pronta', duracaoMin: 45 }),
  fis('lancamentos', 'Lançamentos', 'A parábola do chute de falta.', { grupo: 'Movimento', conexoes: ['funcao-quadratica', 'trigonometria'], estado: 'pronta', duracaoMin: 50 }),
  fis('leis-de-newton', 'As leis de Newton', 'Por que o cinto de segurança salva vidas?', { grupo: 'Forças e energia' }),
  fis('atrito', 'Força de atrito', 'Sem atrito, você não conseguiria andar.', { grupo: 'Forças e energia' }),
  fis('gravitacao', 'Gravitação', 'Por que a Lua não cai na Terra?', { grupo: 'Forças e energia' }),
  fis('trabalho-e-energia', 'Trabalho e energia', 'O que gasta energia: empurrar a parede ou subir a escada?', { grupo: 'Forças e energia' }),
  fis('conservacao-de-energia', 'Conservação de energia', 'A montanha-russa e a energia que nunca some.', { grupo: 'Forças e energia' }),
  fis('pressao-e-empuxo', 'Pressão e empuxo', 'Como um navio de aço de milhares de toneladas flutua?', { grupo: 'Forças e energia', conexoes: ['materia-e-propriedades'] }),
  fis('temperatura-e-calor', 'Temperatura e calor', 'Calor e temperatura são a mesma coisa? Não.', { grupo: 'Calor e ondas', conexoes: ['estados-da-materia'] }),
  fis('termodinamica', 'Termodinâmica', 'Por que o calor só passa do quente para o frio?', { grupo: 'Calor e ondas' }),
  fis('ondas', 'Ondas', 'Como o som e a luz viajam sem carregar matéria?', { grupo: 'Calor e ondas', conexoes: ['ciclo-trigonometrico'] }),
  fis('som', 'Som', 'Por que a sirene muda de tom quando passa?', { grupo: 'Calor e ondas' }),
  fis('luz-e-optica', 'Luz, espelhos e lentes', 'Como uma lente aumenta o que você vê?', { grupo: 'Calor e ondas', conexoes: ['microscopio'] }),
  fis('cores', 'As cores', 'Por que o céu é azul e o pôr do sol é vermelho?', { grupo: 'Calor e ondas' }),
  fis('eletricidade-estatica', 'Carga elétrica e eletricidade estática', 'Por que o cabelo arrepia no pente de plástico?', { grupo: 'Eletricidade e magnetismo', conexoes: ['atomo'] }),
  fis('circuitos-eletricos', 'Circuitos e a lei de Ohm', 'Tensão, corrente e resistência numa lâmpada.', { grupo: 'Eletricidade e magnetismo', conexoes: ['funcao-afim', 'logica-e-proposicoes'] }),
  fis('consumo-de-energia', 'Consumo de energia e conta de luz', 'Quanto custa deixar o chuveiro ligado?', { grupo: 'Eletricidade e magnetismo', conexoes: ['porcentagem'] }),
  fis('magnetismo', 'Ímãs e magnetismo', 'Por que a bússola aponta para o norte?', { grupo: 'Eletricidade e magnetismo' }),
  fis('eletromagnetismo', 'Eletromagnetismo', 'Como um motor e um gerador funcionam?', { grupo: 'Eletricidade e magnetismo' }),
  fis('relatividade', 'Relatividade', 'O tempo passa igual para todo mundo? Quase.', { grupo: 'Física moderna' }),
  fis('fisica-quantica', 'Introdução à física quântica', 'A luz é onda ou partícula?', { grupo: 'Física moderna' }),
  fis('radioatividade', 'Radioatividade e meia-vida', 'Por que a radiação cai pela metade em tempos regulares?', { grupo: 'Física moderna', conexoes: ['exponencial', 'atomo'] }),
  fis('universo', 'O universo: estrelas e galáxias', 'De onde vêm os átomos do seu corpo?', { grupo: 'Física moderna', conexoes: ['notacao-cientifica'] }),
]

export function linhaDaCapsula(cap: { area: Area; trilha: string }) {
  return cap.area === 'matematica' ? cap.trilha : cap.area
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
