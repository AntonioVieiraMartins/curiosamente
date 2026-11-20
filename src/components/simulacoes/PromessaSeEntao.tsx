import { useState } from 'react'
import { cartao } from '../ui/estilos'

// "Se P, então Q" é uma promessa: só é quebrada quando P acontece e Q não
export default function PromessaSeEntao() {
  const [passou, setPassou] = useState(true)
  const [ganhou, setGanhou] = useState(true)
  const [vistas, setVistas] = useState<string[]>(['VV'])
  const quebrada = passou && !ganhou

  function mudar(nP: boolean, nG: boolean) {
    setPassou(nP)
    setGanhou(nG)
    const k = `${nP ? 'V' : 'F'}${nG ? 'V' : 'F'}`
    setVistas((vs) => (vs.includes(k) ? vs : [...vs, k]))
  }

  const explicacao = passou
    ? ganhou ? 'Passou e ganhou: a promessa foi cumprida.' : 'Passou e NÃO ganhou: a promessa foi quebrada. É o único jeito de quebrar.'
    : ganhou ? 'Não passou, mas ganhou assim mesmo: nada foi quebrado. A promessa só falava do que acontece se passar.' : 'Não passou e não ganhou: nada foi quebrado. A promessa não disse nada sobre quem não passa.'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A promessa do pai</p>
      <p className="mt-2 font-serif text-xl">“Se você passar de ano, então ganha uma bicicleta.”</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" aria-pressed={passou} onClick={() => mudar(!passou, ganhou)} className={`min-h-11 rounded-2xl border-2 px-4 font-semibold ${passou ? 'border-verde bg-verde/10' : 'border-borda'}`}>Passou de ano: {passou ? 'sim' : 'não'}</button>
        <button type="button" aria-pressed={ganhou} onClick={() => mudar(passou, !ganhou)} className={`min-h-11 rounded-2xl border-2 px-4 font-semibold ${ganhou ? 'border-verde bg-verde/10' : 'border-borda'}`}>Ganhou a bicicleta: {ganhou ? 'sim' : 'não'}</button>
      </div>
      <p aria-live="polite" className={`mt-4 rounded-2xl p-4 text-[15px] ${quebrada ? 'bg-coral/10' : 'bg-verde/10'}`}>
        <strong>{quebrada ? 'Promessa quebrada (falsa).' : 'Promessa mantida (verdadeira).'}</strong> {explicacao}
      </p>
      <p className="mt-3 text-sm text-suave">Combinações vistas: {vistas.length} de 4. Só <strong>passou = sim e ganhou = não</strong> deixa a frase falsa.</p>
    </div>
  )
}
