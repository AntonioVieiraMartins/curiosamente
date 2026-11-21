import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Antibiótico só age em bactérias. Para vírus, não adianta.
const casos = [
  { doenca: 'Resfriado comum', causa: 'vírus', serve: false },
  { doenca: 'Faringite por estreptococos', causa: 'bactéria', serve: true },
  { doenca: 'Gripe (influenza)', causa: 'vírus', serve: false },
  { doenca: 'Tuberculose', causa: 'bactéria', serve: true },
  { doenca: 'Dengue', causa: 'vírus', serve: false },
  { doenca: 'Infecção urinária por E. coli', causa: 'bactéria', serve: true },
  { doenca: 'Covid-19', causa: 'vírus', serve: false },
  { doenca: 'Tétano', causa: 'bactéria', serve: true },
]

export default function AntibioticoOuNao() {
  const [i, setI] = useState(0)
  const [r, setR] = useState<boolean | null>(null)
  const c = casos[i]
  const proximo = () => { setI((i + 1) % casos.length); setR(null) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Antibiótico ou não?</p>
      <p className="mt-3 text-lg font-semibold">{c.doenca}: o antibiótico adianta?</p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={r !== null} onClick={() => setR(true)} className="min-h-11 rounded-full border border-borda bg-superficie px-5 text-[14px] font-semibold">Adianta</button>
        <button type="button" disabled={r !== null} onClick={() => setR(false)} className="min-h-11 rounded-full border border-borda bg-superficie px-5 text-[14px] font-semibold">Não adianta</button>
      </div>
      {r !== null && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          {r === c.serve ? 'Certo! ' : 'Quase. '}
          {c.doenca} é causada por <strong>{c.causa}</strong>, então o antibiótico {c.serve ? 'pode ajudar (mas só com receita médica e até o fim)' : 'não ajuda, porque antibióticos só atacam bactérias. Tomar assim só estimula a resistência'}.
          <button type="button" onClick={proximo} className="ml-2 mt-2 min-h-11 rounded-full bg-texto px-4 text-[14px] font-semibold text-white">Próximo ({i + 1}/{casos.length})</button>
        </p>
      )}
    </div>
  )
}
