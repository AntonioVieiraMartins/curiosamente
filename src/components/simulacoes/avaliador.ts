// Avaliador de expressões numéricas de brinquedo, usado pelas simulações de "Expressões numéricas".
// Regra: parênteses de dentro para fora; depois × e ÷ (da esquerda para a direita); depois + e - (idem).
export type Tok = number | '+' | '-' | '×' | '÷' | '(' | ')'

const ehOp = (t: Tok) => t === '+' || t === '-' || t === '×' || t === '÷'

// Posição (na lista inteira) da próxima operação a resolver, ou -1 se não há mais nenhuma
export function proximaOperacao(t: Tok[]): number {
  let fim = t.indexOf(')')
  if (fim === -1) fim = t.length
  const inicio = t.slice(0, fim).lastIndexOf('(') + 1
  const faixa = t.slice(inicio, fim)
  let i = faixa.findIndex((x) => x === '×' || x === '÷')
  if (i === -1) i = faixa.findIndex((x) => x === '+' || x === '-')
  return i === -1 ? -1 : inicio + i
}

export function calcular(a: number, op: Tok, b: number) {
  return op === '+' ? a + b : op === '-' ? a - b : op === '×' ? a * b : a / b
}

export function limparParenteses(t: Tok[]): Tok[] {
  const r = [...t]
  for (let i = 0; i < r.length - 2; i++) {
    if (r[i] === '(' && typeof r[i + 1] === 'number' && r[i + 2] === ')') { r.splice(i, 3, r[i + 1]); i = -1 }
  }
  return r
}

// Um passo: resolve a próxima operação
export function passo(t: Tok[]): { tokens: Tok[]; texto: string } | null {
  const i = proximaOperacao(t)
  if (i === -1) return null
  const a = t[i - 1] as number, b = t[i + 1] as number, op = t[i]
  const r = calcular(a, op, b)
  const novo = [...t]
  novo.splice(i - 1, 3, r)
  return { tokens: limparParenteses(novo), texto: `${a} ${op} ${b} = ${r}` }
}

export function resultado(t: Tok[]): number {
  let atual = limparParenteses(t)
  for (let n = 0; n < 50; n++) {
    const p = passo(atual)
    if (!p) break
    atual = p.tokens
  }
  return atual[0] as number
}

// Calculadora "simples": ignora a prioridade e resolve na ordem em que as teclas foram apertadas (sem parênteses)
export function cadeia(t: Tok[]): number {
  let acc = t[0] as number
  for (let i = 1; i < t.length; i += 2) acc = calcular(acc, t[i], t[i + 1] as number)
  return acc
}

export const mostrar = (t: Tok[]) => t.join(' ').replace('( ', '(').replace(/ \)/g, ')')
export { ehOp }
