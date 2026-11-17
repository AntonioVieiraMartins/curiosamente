// Único lugar do APP com os números de XP e nível (ver CLAUDE.md).
// O banco tem uma cópia desses valores na função conceder_xp (supabase/migrations):
// é ela que decide o XP de quem tem conta, para ninguém trapacear pelo navegador.
// Se mudar um número aqui, mude lá também.
export const XP = {
  etapa: 10,
  previsaoCerta: 15,
  previsaoErrada: 5,
  aprofundar: 30,
  revisaoPorCartao: 5,
  sequencia: 20,
} as const

export type TipoXp = 'etapa' | 'previsao_certa' | 'previsao_errada' | 'capsula' | 'aprofundar' | 'revisao' | 'sequencia'

// Quanto vale cada tipo de evento (o XP da cápsula vem do meta.ts)
export function valorDoEvento(tipo: TipoXp, xpCapsula = 0) {
  switch (tipo) {
    case 'etapa': return XP.etapa
    case 'previsao_certa': return XP.previsaoCerta
    case 'previsao_errada': return XP.previsaoErrada
    case 'aprofundar': return XP.aprofundar
    case 'revisao': return XP.revisaoPorCartao
    case 'sequencia': return XP.sequencia
    case 'capsula': return Math.min(Math.max(xpCapsula, 0), 200)
  }
}

export function calcularNivel(xpTotal: number) {
  return Math.floor(Math.sqrt(xpTotal / 100)) + 1
}

// XP mínimo para estar em um nível (o inverso da fórmula acima)
export function xpDoNivel(nivel: number) {
  return 100 * (nivel - 1) ** 2
}
