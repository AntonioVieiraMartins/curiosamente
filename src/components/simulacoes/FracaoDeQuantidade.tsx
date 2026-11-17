import { useState } from 'react'
import Contador from './Contador'
import { cartao } from '../ui/estilos'

const TOTAL = 12
const divisores = [1, 2, 3, 4, 6, 12]

// "2/3 de 12 balas": divide as balas em grupos iguais (o de baixo) e pega alguns grupos (o de cima)
export default function FracaoDeQuantidade() {
  const [baixo, setBaixo] = useState(3)
  const [cima, setCima] = useState(2)
  const porGrupo = TOTAL / baixo

  function mudarBaixo(b: number) {
    setBaixo(b)
    setCima((c) => Math.min(c, b))
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Repartindo 12 balas</p>

      <p className="mt-4 text-sm text-suave">Dividir em quantos grupos iguais? (o número de baixo)</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Número de grupos">
        {divisores.map((d) => (
          <button
            key={d}
            type="button"
            aria-pressed={baixo === d}
            onClick={() => mudarBaixo(d)}
            className={`size-11 rounded-full border-2 font-semibold ${baixo === d ? 'border-azul bg-azul-claro text-azul-texto' : 'border-borda'}`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-start">
        <Contador rotulo="Grupos que você pega (o de cima)" valor={cima} min={0} max={baixo} mudar={setCima} />
      </div>

      <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(baixo, 6)}, minmax(0, 1fr))` }} aria-hidden="true">
        {Array.from({ length: baixo }, (_, g) => (
          <div key={g} className={`flex flex-wrap justify-center gap-1 rounded-xl border-2 p-2 ${g < cima ? 'border-coral bg-coral/10' : 'border-borda'}`}>
            {Array.from({ length: porGrupo }, (_, i) => (
              <span key={i} className={`size-4 rounded-full ${g < cima ? 'bg-coral' : 'bg-borda'}`} />
            ))}
          </div>
        ))}
      </div>

      <p aria-live="polite" className="mt-5 rounded-2xl bg-fundo p-4">
        12 ÷ {baixo} = <strong>{porGrupo}</strong> {porGrupo === 1 ? 'bala' : 'balas'} em cada grupo. Pegando {cima}{' '}
        {cima === 1 ? 'grupo' : 'grupos'}: {cima} × {porGrupo} = <strong>{cima * porGrupo}</strong>. Então {cima}/{baixo} de 12 ={' '}
        <strong className="text-coral">{cima * porGrupo}</strong>.
      </p>
    </div>
  )
}
