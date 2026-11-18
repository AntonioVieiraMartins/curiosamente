import { useState } from 'react'
import { cartao } from '../ui/estilos'

const casos = [
  { eq: '3x + 5 = 20', passos: ['3x = 20 − 5', '3x = 15', 'x = 15 × 3', 'x = 45'], erro: 2, porque: 'O 3 está multiplicando x, então passa dividindo: x = 15 ÷ 3 = 5.' },
  { eq: '2x − 4 = 10', passos: ['2x = 10 − 4', '2x = 6', 'x = 6 ÷ 2', 'x = 3'], erro: 0, porque: 'O −4 passa para o outro lado como +4: 2x = 10 + 4 = 14, e então x = 7.' },
  { eq: 'x + 9 = 4', passos: ['x = 4 − 9', 'x = 5'], erro: 1, porque: '4 − 9 = −5, não 5. O resultado pode ser negativo: x = −5.' },
]

// Achar o erro de outra pessoa treina o olho para achar o seu.
export default function CacaAoErro() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const c = casos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Em que passo está o erro?</p>
      <p className="mt-3 text-lg font-semibold">Resolver {c.eq}</p>
      <div className="mt-2 flex flex-col gap-2">
        {c.passos.map((s, k) => (
          <button key={k} type="button" disabled={resp !== null} onClick={() => setResp(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-left font-mono ${resp === null ? 'border-borda' : k === c.erro ? 'border-coral bg-coral text-white' : 'border-borda opacity-60'}`}>{k + 1}. {s}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Toque no primeiro passo errado.' : resp === c.erro ? `Achou! ${c.porque}` : `Esse passo está certo. O erro é no passo ${c.erro + 1}. ${c.porque}`}
      </p>
      {resp !== null && (
        <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white" onClick={() => { setResp(null); setI((i + 1) % casos.length) }}>Próximo</button>
      )}
    </div>
  )
}
