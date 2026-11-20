import { useState } from 'react'
import { cartao } from '../ui/estilos'
import { traduzCodon } from '../../lib/codigoGenetico'

const original = 'AUGAAGGCUUCCAGUAAAUAA'

// A célula lê o RNA de três em três letras. Inserir ou apagar letras muda os trios daí para a frente.
export default function QuadroDeLeitura() {
  const [rna, setRna] = useState(original)
  const trios: string[] = []
  for (let i = 0; i < rna.length; i += 3) trios.push(rna.slice(i, i + 3))
  const aa: string[] = []
  let parou = false
  for (const t of trios) {
    if (t.length < 3) break
    const a = traduzCodon(t)
    if (a === '*') { parou = true; break }
    aa.push(a)
  }
  const mudou = rna !== original
  const resto = (rna.length - original.length) % 3
  const botoes: { rot: string; faz: () => void }[] = [
    { rot: 'Inserir G depois do AUG', faz: () => setRna('AUG' + 'G' + original.slice(3)) },
    { rot: 'Apagar o 4º A', faz: () => setRna(original.slice(0, 3) + original.slice(4)) },
    { rot: 'Inserir GGG (3 letras)', faz: () => setRna('AUG' + 'GGG' + original.slice(3)) },
    { rot: 'Apagar AAG (3 letras)', faz: () => setRna(original.slice(0, 3) + original.slice(6)) },
    { rot: 'Original', faz: () => setRna(original) },
  ]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quadro de leitura</p>
      <div className="mt-3 flex flex-wrap gap-2" aria-label="Trios lidos">
        {trios.map((t, k) => <span key={k} className="rounded-xl bg-fundo px-3 py-2 text-[15px] font-bold">{t}</span>)}
      </div>
      <p className="mt-3 text-[15px]"><strong>Proteína:</strong> {aa.join(' - ')}{parou ? ' - PARE' : ''}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {botoes.map((b) => <button key={b.rot} type="button" onClick={b.faz} className="min-h-11 rounded-full border border-borda bg-superficie px-3 text-[14px] font-semibold">{b.rot}</button>)}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {!mudou
          ? 'Fita original: M - K - A - S - S - K, seguida do sinal de PARE.'
          : resto === 0
            ? 'Foram inseridas ou apagadas 3 letras: só um aminoácido a mais ou a menos, e o resto da proteína continua igual. A leitura não se desloca.'
            : 'Uma letra a mais ou a menos desloca TODOS os trios depois dela. É a mutação de quadro de leitura (frameshift): a proteína sai quase toda diferente e o PARE pode mudar de lugar.'}
      </p>
    </div>
  )
}
