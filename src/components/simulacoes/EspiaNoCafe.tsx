import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Embaralhamento de BRINQUEDO (xor com uma chave), só para mostrar a ideia. Criptografia de verdade é muito mais forte.
function embaralhar(t: string, chave: number) {
  return [...t].map((c) => ((c.codePointAt(0) ?? 0) ^ chave).toString(16).padStart(2, '0')).join(' ')
}

export default function EspiaNoCafe() {
  const [texto, setTexto] = useState('senha: 1234')
  const [seguro, setSeguro] = useState(false)
  const id = useId()
  const visto = seguro ? embaralhar(texto, 173) : texto

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Alguém espiando o Wi-Fi do café</p>
      <label htmlFor={id} className="mt-3 block font-semibold">O que você envia</label>
      <input id={id} value={texto} maxLength={30} onChange={(e) => setTexto(e.target.value)} className="mt-1 h-12 w-full rounded-xl border-2 border-borda px-3 focus:border-azul focus:outline-none" />
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button type="button" aria-pressed={!seguro} onClick={() => setSeguro(false)} className={`min-h-11 rounded-full border-2 font-semibold ${!seguro ? 'border-coral bg-coral text-white' : 'border-borda'}`}>HTTP (sem cadeado)</button>
        <button type="button" aria-pressed={seguro} onClick={() => setSeguro(true)} className={`min-h-11 rounded-full border-2 font-semibold ${seguro ? 'border-verde bg-verde text-white' : 'border-borda'}`}>HTTPS (cadeado)</button>
      </div>
      <p aria-live="polite" className="mt-3 break-all rounded-2xl bg-texto p-4 font-mono text-sm text-superficie">
        <span className="font-sans text-xs uppercase text-amarelo">O espião vê:</span><br />{visto || '…'}
      </p>
      <p className="mt-2 text-[15px] text-suave">Embaralhamento de brinquedo, só para mostrar a ideia. No HTTPS de verdade, usa-se criptografia moderna, muito mais forte.</p>
    </div>
  )
}
