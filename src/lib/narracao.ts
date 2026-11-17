// Leitura em voz alta com a voz do próprio navegador (Web Speech API).
// Grátis, não baixa nada e funciona offline na maioria dos aparelhos.

export type Frase = {
  texto: string
  elemento: Element // o parágrafo (ou item de lista) onde a frase está
  trecho: Range | null // pedaço exato do texto, para o destaque
}

export function narracaoSuportada() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
}

// Nota de qualidade de uma voz. As vozes "neurais" (no Edge aparecem como "Natural" ou
// "Online") soam quase humanas; as antigas do sistema soam robóticas.
function notaDaVoz(v: SpeechSynthesisVoice) {
  const nome = v.name.toLowerCase()
  const lang = v.lang.toLowerCase().replace('_', '-')
  let nota = 0
  if (nome.includes('natural') || nome.includes('neural')) nota += 100
  if (nome.includes('online')) nota += 50
  if (nome.includes('google')) nota += 40
  if (/francisca|thalita|antonio|luciana|felipe/.test(nome)) nota += 20 // vozes pt-BR conhecidas por serem boas
  if (nome.includes('francisca')) nota += 5 // voz padrão escolhida pelo dono do projeto
  if (!v.localService) nota += 10 // vozes da internet costumam ser as mais novas
  if (lang === 'pt-br') nota += 30
  return nota
}

// Todas as vozes em português do aparelho, da melhor para a pior
export function vozesPortugues(): SpeechSynthesisVoice[] {
  if (!narracaoSuportada()) return []
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith('pt'))
    .sort((a, b) => notaDaVoz(b) - notaDaVoz(a))
}

// Nome mais curto para mostrar na lista ("Microsoft Francisca Online (Natural) - Portuguese (Brazil)" vira "Francisca · natural")
export function nomeCurto(v: SpeechSynthesisVoice) {
  const natural = /natural|neural/i.test(v.name) ? ' · natural' : ''
  const limpo = v.name
    .replace(/^(Microsoft|Google)\s+/i, '')
    .replace(/\s*(Online|\(Natural\)|- Portuguese.*|Portuguese.*)/gi, '')
    .trim()
  return (limpo || v.name) + natural + (v.lang.toLowerCase().includes('pt-pt') ? ' (Portugal)' : '')
}

// O que é lido: parágrafos, itens de lista, títulos e enunciados.
// Fica de fora tudo que estiver dentro de [data-sem-narracao] (simulações, fórmulas...).
const LEGIVEIS = 'p, li, h2, h3, blockquote, legend'

export function coletarFrases(raiz: HTMLElement): Frase[] {
  const blocos = [...raiz.querySelectorAll(LEGIVEIS)].filter(
    (el) => !el.closest('[data-sem-narracao]') && !el.querySelector(LEGIVEIS) && el.textContent?.trim(),
  )
  return blocos.flatMap((bloco) => dividirEmFrases(bloco))
}

// Separa o texto de um bloco em frases e guarda onde cada uma começa e termina
function dividirEmFrases(bloco: Element): Frase[] {
  const texto = bloco.textContent ?? ''
  const frases: Frase[] = []
  // Uma frase termina em . ! ? ou … seguido de espaço (assim "10.000" e "33,1%" não são cortados)
  const regra = /[^]+?(?:[.!?…]+["”»)]*(?=\s|$)|$)/g
  let inicioPendente: number | null = null // para juntar "1." com o título que vem depois
  for (const achado of texto.matchAll(regra)) {
    const bruto = achado[0]
    const limpo = bruto.trim()
    if (!limpo) continue
    const comeco = (achado.index ?? 0) + bruto.indexOf(limpo)
    const inicio: number = inicioPendente ?? comeco
    const fim = comeco + limpo.length
    // Um número sozinho ("1.") é numeração de título, não frase: junta com o pedaço seguinte
    if (/^\d+\.$/.test(limpo)) {
      inicioPendente = inicio
      continue
    }
    inicioPendente = null
    frases.push({ texto: texto.slice(inicio, fim), elemento: bloco, trecho: criarTrecho(bloco, inicio, fim) })
  }
  return frases
}

// Converte "do caractere X ao Y" em um Range do navegador, atravessando negritos, links etc.
function criarTrecho(bloco: Element, inicio: number, fim: number): Range | null {
  const caminhante = document.createTreeWalker(bloco, NodeFilter.SHOW_TEXT)
  const trecho = document.createRange()
  let posicao = 0
  let comecou = false
  for (let no = caminhante.nextNode(); no; no = caminhante.nextNode()) {
    const tamanho = no.textContent?.length ?? 0
    if (!comecou && inicio <= posicao + tamanho) {
      trecho.setStart(no, inicio - posicao)
      comecou = true
    }
    if (comecou && fim <= posicao + tamanho) {
      trecho.setEnd(no, fim - posicao)
      return trecho
    }
    posicao += tamanho
  }
  return null
}

// Troca símbolos que a voz leria mal ("⅔" vira "dois terços", "1/3" vira "um terço")
const fracoesComuns: Record<string, string> = {
  '1/2': 'meio', '1/3': 'um terço', '2/3': 'dois terços', '1/6': 'um sexto',
  '1/100': 'um centésimo', '99/100': 'noventa e nove centésimos',
  '1/4': 'um quarto', '3/4': 'três quartos', '1/8': 'um oitavo', '3/8': 'três oitavos',
}
const simbolos: Record<string, string> = {
  '½': ' meio ', '⅓': ' um terço ', '⅔': ' dois terços ', '⅙': ' um sexto ',
  '×': ' vezes ', '÷': ' dividido por ', '→': ' ', '←': ' ', '≈': ' aproximadamente ', '√': ' raiz de ',
  '₁': '1', '₂': '2', '₃': '3', '|': ' sabendo que ', '=': ' igual a ',
  '−': ' menos ', '²': ' ao quadrado ', '³': ' ao cubo ', '≠': ' diferente de ',
}

export function prepararParaFala(texto: string) {
  let saida = texto
    .replace(/"\|"/g, 'vertical') // 'A barra "|" se lê...' vira 'A barra vertical se lê...'
    // "|−3|" e "|5 − (−2)|" viram "módulo de ...". Só números e sinais entre as barras,
    // para não confundir com o "|" de "P(A | B)" (que tem letras).
    .replace(/\|([^|A-Za-z]+)\|/g, ' módulo de $1 ')
    .replace(/\bP\(/g, 'P de ') // "P(A | B)" vira "P de A sabendo que B"
    .replace(/[()]/g, ' ')
    // Número misto: "1 1/2" vira "1 e meio", e não "1 um meio"
    .replace(/\b(\d+) (\d+)\/(\d+)\b/g, (_, inteiro, a, b) => `${inteiro} e ${fracoesComuns[`${a}/${b}`] ?? `${a} sobre ${b}`}`)
    .replace(/\b(\d+)\/(\d+)\b/g, (fracao, a, b) => fracoesComuns[fracao] ?? `${a} sobre ${b}`)
  for (const [simbolo, fala] of Object.entries(simbolos)) saida = saida.split(simbolo).join(fala)
  return saida.replace(/\s+/g, ' ').trim()
}

// Destaque da frase atual. Usa o CSS Highlight API quando existe (não mexe no texto da página);
// nos navegadores sem ele, destaca o parágrafo inteiro com uma classe.
const NOME_DESTAQUE = 'narracao'
let elementoDestacado: Element | null = null

type RegistroDeDestaques = { set: (nome: string, h: unknown) => void; delete: (nome: string) => void }
type ConstrutorDeDestaque = new (...trechos: Range[]) => unknown

function apiDeDestaque() {
  const registro = (CSS as unknown as { highlights?: RegistroDeDestaques }).highlights
  const Construtor = (window as unknown as { Highlight?: ConstrutorDeDestaque }).Highlight
  return registro && Construtor ? { registro, Construtor } : null
}

export function destacar(frase: Frase) {
  limparDestaque()
  const api = apiDeDestaque()
  if (api && frase.trecho) api.registro.set(NOME_DESTAQUE, new api.Construtor(frase.trecho))
  else {
    frase.elemento.classList.add('narrando')
    elementoDestacado = frase.elemento
  }
  // Se o parágrafo saiu da tela, rola até ele com calma
  const caixa = frase.elemento.getBoundingClientRect()
  if (caixa.top < 90 || caixa.bottom > window.innerHeight - 90) {
    frase.elemento.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

export function limparDestaque() {
  apiDeDestaque()?.registro.delete(NOME_DESTAQUE)
  elementoDestacado?.classList.remove('narrando')
  elementoDestacado = null
}
