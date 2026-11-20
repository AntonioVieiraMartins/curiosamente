// Sons curtinhos e suaves feitos no próprio navegador (sem arquivos de áudio).
// Só tocam depois de uma ação da pessoa (clique), e dá para desligar pelo botão do cabeçalho.
const CHAVE = 'curiosamente:sons'

export type Som = 'acerto' | 'erro' | 'nivel' | 'premio'

let ctx: AudioContext | null = null

export function sonsLigados(): boolean {
  try {
    return localStorage.getItem(CHAVE) !== 'desligado'
  } catch {
    return true
  }
}

export function ligarSons(ligado: boolean) {
  try {
    localStorage.setItem(CHAVE, ligado ? 'ligado' : 'desligado')
  } catch {
    /* sem armazenamento: vale só nesta visita */
  }
}

// Cada nota: frequência (Hz), começo (s) e duração (s)
const notas: Record<Som, [number, number, number][]> = {
  acerto: [[523, 0, 0.12], [784, 0.1, 0.2]],
  erro: [[330, 0, 0.14], [262, 0.12, 0.22]],
  nivel: [[523, 0, 0.12], [659, 0.11, 0.12], [784, 0.22, 0.12], [1047, 0.33, 0.35]],
  premio: [[784, 0, 0.1], [988, 0.09, 0.1], [1319, 0.18, 0.3]],
}

export function tocar(som: Som) {
  if (!sonsLigados() || typeof window === 'undefined') return
  try {
    const AC = window.AudioContext
    if (!AC) return
    ctx = ctx ?? new AC()
    if (ctx.state === 'suspended') void ctx.resume()
    const agora = ctx.currentTime
    for (const [freq, inicio, dur] of notas[som]) {
      const osc = ctx.createOscillator()
      const ganho = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.value = freq
      // Volume baixo, com entrada e saída suaves para não estalar
      ganho.gain.setValueAtTime(0.0001, agora + inicio)
      ganho.gain.exponentialRampToValueAtTime(0.07, agora + inicio + 0.015)
      ganho.gain.exponentialRampToValueAtTime(0.0001, agora + inicio + dur)
      osc.connect(ganho).connect(ctx.destination)
      osc.start(agora + inicio)
      osc.stop(agora + inicio + dur + 0.02)
    }
  } catch {
    /* som é um enfeite: se falhar, a página segue normal */
  }
}
