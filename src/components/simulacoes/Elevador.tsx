import { useState } from 'react'
import { cartao } from '../ui/estilos'

const andares = Array.from({ length: 11 }, (_, i) => 6 - i) // de 6 até −4
const nome = (n: number) => (n === 0 ? 'Térreo' : n < 0 ? `Subsolo ${-n} (${'−'}${-n})` : `${n}º andar`)
const sinal = (n: number) => (n < 0 ? `−${-n}` : `${n}`)
const entre = (n: number) => (n < 0 ? `(−${-n})` : `${n}`)

// O elevador mostra os negativos como posições: a distância percorrida é sempre "chegada − saída"
export default function Elevador() {
  const [origem, setOrigem] = useState(-2)
  const [destino, setDestino] = useState(5)
  const [escolhendo, setEscolhendo] = useState<'origem' | 'destino'>('destino')
  const variacao = destino - origem

  function tocar(n: number) {
    if (escolhendo === 'origem') setOrigem(n)
    else setDestino(n)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O elevador</p>

      <div className="mt-3 flex gap-2" role="group" aria-label="O que escolher">
        {(['origem', 'destino'] as const).map((e) => (
          <button key={e} type="button" aria-pressed={escolhendo === e} onClick={() => setEscolhendo(e)}
            className={`min-h-11 flex-1 rounded-full border-2 px-3 font-semibold ${escolhendo === e ? (e === 'origem' ? 'border-coral bg-coral/10 text-coral' : 'border-verde bg-verde/10 text-verde') : 'border-borda'}`}>
            {e === 'origem' ? 'Escolher saída' : 'Escolher chegada'}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-[auto_1fr] gap-4">
        <div className="flex flex-col gap-1" role="group" aria-label="Andares">
          {andares.map((n) => {
            const eOrigem = n === origem
            const eDestino = n === destino
            const noCaminho = n > Math.min(origem, destino) && n < Math.max(origem, destino)
            return (
              <button key={n} type="button" onClick={() => tocar(n)} aria-label={nome(n)}
                className={`h-11 w-16 rounded-md text-sm font-semibold transition-colors ${
                  eOrigem ? 'bg-coral text-white' : eDestino ? 'bg-verde text-white' : noCaminho ? 'bg-azul-claro text-azul-texto' : n < 0 ? 'bg-fundo text-suave' : 'bg-superficie ring-1 ring-borda'
                } ${n === 0 ? 'mt-0.5 border-t-2 border-texto/40' : ''}`}>
                {n === 0 ? 'T' : sinal(n)}
              </button>
            )
          })}
        </div>
        <div aria-live="polite" className="space-y-3 self-center">
          <p><span className="text-sm text-suave">Saída</span><br /><strong className="text-coral">{nome(origem)}</strong></p>
          <p><span className="text-sm text-suave">Chegada</span><br /><strong className="text-verde">{nome(destino)}</strong></p>
          <p className="rounded-2xl bg-fundo p-3">
            Chegada − saída = {sinal(destino)} − {entre(origem)} = <strong>{sinal(variacao)}</strong>
            <br />
            <span className="text-[15px]">
              {variacao === 0 ? 'Ficou parado.' : `${variacao > 0 ? 'Subiu' : 'Desceu'} ${Math.abs(variacao)} ${Math.abs(variacao) === 1 ? 'andar' : 'andares'}.`}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
