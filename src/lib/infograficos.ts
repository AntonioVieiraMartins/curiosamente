// Infográficos que a pessoa salvou na página Revisar (guardados só no navegador).
const CHAVE = 'curiosamente:infograficos:v1'

function carregar(): string[] {
  try {
    const bruto = localStorage.getItem(CHAVE)
    return bruto ? (JSON.parse(bruto) as string[]) : []
  } catch {
    return []
  }
}

let cache: string[] | null = null
const ouvintes = new Set<() => void>()

// Mesma lista até algo mudar (o React precisa disso para não repintar à toa)
export function lerInfograficos(): string[] {
  if (!cache) cache = carregar()
  return cache
}

export function assinar(aoMudar: () => void) {
  ouvintes.add(aoMudar)
  const outraAba = (e: StorageEvent) => {
    if (e.key === CHAVE) {
      cache = carregar()
      aoMudar()
    }
  }
  window.addEventListener('storage', outraAba)
  return () => {
    ouvintes.delete(aoMudar)
    window.removeEventListener('storage', outraAba)
  }
}

function gravar(lista: string[]) {
  cache = lista
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista))
  } catch {
    // Sem armazenamento: vale só até fechar a aba
  }
  ouvintes.forEach((f) => f())
}

export function salvarInfografico(capsulaId: string) {
  if (!lerInfograficos().includes(capsulaId)) gravar([...lerInfograficos(), capsulaId])
}

export function removerInfografico(capsulaId: string) {
  gravar(lerInfograficos().filter((id) => id !== capsulaId))
}
