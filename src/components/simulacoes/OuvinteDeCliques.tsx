import { useState } from 'react'
import { cartao } from '../ui/estilos'

// O JavaScript "escuta" eventos (cliques) e muda a página. Sem ouvinte, o clique não acontece nada.
export default function OuvinteDeCliques() {
  const [ouvindo, setOuvindo] = useState(false)
  const [n, setN] = useState(0)
  const [log, setLog] = useState<string[]>([])

  const clicou = () => {
    setLog((l) => [ouvindo ? `Clique! Ouvinte rodou: contador foi para ${n + 1}.` : 'Clique! Ninguém estava escutando.', ...l].slice(0, 4))
    if (ouvindo) setN(n + 1)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um ouvinte de clique</p>
      <pre className="mt-2 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{ouvindo
        ? "botao.addEventListener('click', () => {\n  contador = contador + 1\n})"
        : '// nenhum ouvinte foi registrado'}</code></pre>
      <button type="button" aria-pressed={ouvindo} onClick={() => setOuvindo(!ouvindo)}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${ouvindo ? 'border-verde' : 'border-coral'}`}>
        {ouvindo ? 'Ouvinte registrado (ligado)' : 'Ouvinte não registrado (desligado)'}
      </button>
      <button type="button" onClick={clicou} className="mt-2 min-h-11 rounded-full bg-azul px-5 font-semibold text-white">Clique aqui: {n}</button>
      <ul aria-live="polite" className="mt-2 space-y-1 text-[15px]">
        {log.map((l, i) => <li key={`${i}-${l}`}>{l}</li>)}
      </ul>
    </div>
  )
}
