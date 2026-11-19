// Datas sempre no horário de Brasília, igual ao banco (função conceder_xp).
// Assim "hoje" é o mesmo dia para o app e para o Supabase, mesmo estudando de madrugada.

const formatoDia = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Sao_Paulo',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}) // "en-CA" escreve no formato 2026-11-17, fácil de comparar

// Dia (AAAA-MM-DD) em que um momento aconteceu, no horário de Brasília
export const diaEmBrasilia = (momento: string | Date = new Date()) => formatoDia.format(new Date(momento))

// Soma (ou subtrai) dias de um "AAAA-MM-DD", sem se confundir com fuso horário
// Dias desde 1970 no horário de Brasília: serve para trocar conteúdo da página inicial todo dia
export const numeroDoDia = () => Math.floor(new Date(`${diaEmBrasilia()}T00:00:00Z`).getTime() / 86_400_000)

export function somarDias(dia: string, n: number) {
  const d = new Date(`${dia}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

// Os 7 dias da semana atual, de segunda a domingo
export function semanaAtual(hoje = diaEmBrasilia()) {
  const diaDaSemana = new Date(`${hoje}T12:00:00Z`).getUTCDay() // 0 = domingo
  const segunda = somarDias(hoje, -((diaDaSemana + 6) % 7))
  return Array.from({ length: 7 }, (_, i) => somarDias(segunda, i))
}

// Quantos dias seguidos de estudo até hoje (ou até ontem, se hoje ainda não estudou)
export function sequenciaAtual(dias: Set<string>, hoje = diaEmBrasilia()) {
  let dia = dias.has(hoje) ? hoje : somarDias(hoje, -1)
  let seq = 0
  while (dias.has(dia)) {
    seq++
    dia = somarDias(dia, -1)
  }
  return seq
}

// Maior sequência de dias seguidos que já aconteceu
export function maiorSequencia(dias: Set<string>) {
  let maior = 0
  for (const dia of dias) {
    if (dias.has(somarDias(dia, -1))) continue // só conta a partir do começo de cada sequência
    let seq = 0
    let d = dia
    while (dias.has(d)) {
      seq++
      d = somarDias(d, 1)
    }
    maior = Math.max(maior, seq)
  }
  return maior
}
