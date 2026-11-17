import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const entre = (n: number) => (n < 0 ? `(−${-n})` : `${n}`)
const AGORA = 50 // litros no tanque agora

// Por que menos vezes menos dá mais? Uma caixa d'água e um "filme" que pode andar para a frente ou para trás.
// vazão: + enchendo, − esvaziando (litros por minuto). tempo: + futuro, − passado (minutos).
export default function TanqueNoTempo() {
  const [vazao, setVazao] = useState(-5)
  const [tempo, setTempo] = useState(-3)
  const idV = useId()
  const idT = useId()
  const mudanca = vazao * tempo
  const nivel = AGORA + mudanca

  const descricaoVazao = vazao === 0 ? 'parado' : vazao > 0 ? `enchendo ${vazao} L por minuto` : `esvaziando ${-vazao} L por minuto`
  const descricaoTempo = tempo === 0 ? 'agora' : tempo > 0 ? `daqui a ${tempo} min` : `${-tempo} min atrás`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A caixa d'água e o filme</p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={idV} className="block font-semibold">
            Torneira: <span className={vazao < 0 ? 'text-coral' : 'text-verde'}>{descricaoVazao}</span>
          </label>
          <input id={idV} type="range" min={-6} max={6} value={vazao} onChange={(e) => setVazao(Number(e.target.value))}
            className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
          <div aria-hidden="true" className="flex justify-between text-xs text-suave"><span>esvazia (−)</span><span>enche (+)</span></div>
        </div>
        <div>
          <label htmlFor={idT} className="block font-semibold">
            Filme: <span className={tempo < 0 ? 'text-coral' : 'text-verde'}>{descricaoTempo}</span>
          </label>
          <input id={idT} type="range" min={-5} max={5} value={tempo} onChange={(e) => setTempo(Number(e.target.value))}
            className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
          <div aria-hidden="true" className="flex justify-between text-xs text-suave"><span>passado (−)</span><span>futuro (+)</span></div>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-center gap-6" aria-hidden="true">
        {[{ rotulo: 'Agora', litros: AGORA }, { rotulo: descricaoTempo, litros: nivel }].map((c) => (
          <div key={c.rotulo} className="flex flex-col items-center gap-1">
            <div className="relative h-32 w-20 overflow-hidden rounded-b-xl border-2 border-t-0 border-borda bg-fundo">
              <div className="absolute inset-x-0 bottom-0 bg-azul/60 transition-[height] duration-300" style={{ height: `${c.litros}%` }} />
            </div>
            <span className="text-sm font-semibold">{c.litros} L</span>
            <span className="text-xs text-suave">{c.rotulo}</span>
          </div>
        ))}
      </div>

      <p aria-live="polite" className="mt-4 rounded-2xl bg-fundo p-4">
        Vazão × tempo = mudança: {entre(vazao)} × {entre(tempo)} = <strong>{sinal(mudanca)} L</strong>.{' '}
        {vazao < 0 && tempo < 0 && 'Esvaziando, e voltando no tempo: antes havia MAIS água. Menos vezes menos dá mais!'}
        {vazao < 0 && tempo > 0 && 'Esvaziando, e indo para o futuro: vai haver menos água.'}
        {vazao > 0 && tempo < 0 && 'Enchendo, e voltando no tempo: antes havia menos água.'}
        {vazao > 0 && tempo > 0 && 'Enchendo, e indo para o futuro: vai haver mais água.'}
      </p>
    </div>
  )
}
