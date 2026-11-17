import { useState } from 'react'
import Contador from './Contador'
import { cartao } from '../ui/estilos'
import { escrever } from '../../lib/fracoes'

type Fracao = { cima: number; baixo: number }
const MAX = 6

// "Metade de 3/4 da barra de chocolate": primeiro pinta 3/4 (colunas), depois pega metade disso (linhas).
// O pedaço que ficou com as duas cores é o resultado da multiplicação.
export default function MultiplicacaoArea() {
  const [linhas, setLinhas] = useState<Fracao>({ cima: 1, baixo: 2 }) // a fração "de"
  const [colunas, setColunas] = useState<Fracao>({ cima: 3, baixo: 4 }) // a fração da barra
  const total = linhas.baixo * colunas.baixo
  const ambas = linhas.cima * colunas.cima

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Fração de uma fração</p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="space-y-2 rounded-2xl bg-azul-claro p-3">
          <p className="text-center font-semibold text-azul-texto">Da barra: {colunas.cima}/{colunas.baixo}</p>
          <Contador grupo="Da barra" rotulo="Em cima" valor={colunas.cima} min={0} max={colunas.baixo} mudar={(v) => setColunas({ ...colunas, cima: v })} />
          <Contador grupo="Da barra" rotulo="Embaixo" valor={colunas.baixo} min={1} max={MAX} mudar={(v) => setColunas({ baixo: v, cima: Math.min(colunas.cima, v) })} />
        </div>
        <div className="space-y-2 rounded-2xl bg-coral/10 p-3">
          <p className="text-center font-semibold text-coral">Pegue: {linhas.cima}/{linhas.baixo}</p>
          <Contador grupo="Pegue" rotulo="Em cima" valor={linhas.cima} min={0} max={linhas.baixo} mudar={(v) => setLinhas({ ...linhas, cima: v })} />
          <Contador grupo="Pegue" rotulo="Embaixo" valor={linhas.baixo} min={1} max={MAX} mudar={(v) => setLinhas({ baixo: v, cima: Math.min(linhas.cima, v) })} />
        </div>
      </div>

      <div
        className="mx-auto mt-5 grid aspect-[4/3] max-w-[320px] gap-[3px] rounded-xl bg-superficie p-[3px] shadow-cartao"
        style={{ gridTemplateColumns: `repeat(${colunas.baixo}, 1fr)`, gridTemplateRows: `repeat(${linhas.baixo}, 1fr)` }}
        aria-hidden="true"
      >
        {Array.from({ length: total }, (_, i) => {
          const naColuna = i % colunas.baixo < colunas.cima
          const naLinha = Math.floor(i / colunas.baixo) < linhas.cima
          const cor = naColuna && naLinha ? 'var(--color-verde)' : naColuna ? 'color-mix(in srgb, var(--color-azul) 35%, transparent)' : 'var(--color-fundo)'
          return <span key={i} className="rounded-[4px] transition-colors" style={{ background: cor, outline: naLinha ? '2px solid color-mix(in srgb, var(--color-coral) 60%, transparent)' : 'none', outlineOffset: '-2px' }} />
        })}
      </div>

      <p aria-live="polite" className="mt-5 rounded-2xl bg-fundo p-4">
        A barra tem {linhas.baixo} × {colunas.baixo} = <strong>{total}</strong> quadradinhos. Os <strong className="text-verde">verdes</strong> são{' '}
        {linhas.cima}/{linhas.baixo} de {colunas.cima}/{colunas.baixo}: {linhas.cima} × {colunas.cima} = <strong>{ambas}</strong>. Então{' '}
        {linhas.cima}/{linhas.baixo} × {colunas.cima}/{colunas.baixo} = <strong>{ambas}/{total}</strong>
        {ambas > 0 && escrever(ambas, total) !== `${ambas}/${total}` && <> = <strong className="text-verde">{escrever(ambas, total)}</strong></>}.
      </p>
    </div>
  )
}
