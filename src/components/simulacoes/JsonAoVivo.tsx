import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Os campos viram texto JSON na hora: é isso que viaja entre salão e cozinha.
export default function JsonAoVivo() {
  const [nome, setNome] = useState('Ana')
  const [idade, setIdade] = useState(30)
  const [ativa, setAtiva] = useState(true)
  const [notas, setNotas] = useState(2)
  const a = useId()
  const b = useId()
  const c = useId()
  const objeto = { nome, idade, ativa, notas: Array.from({ length: notas }, (_, k) => 7 + k) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Preencha e veja o JSON</p>
      <label htmlFor={a} className="mt-2 block font-semibold">Nome</label>
      <input id={a} value={nome} onChange={(e) => setNome(e.target.value)} className="min-h-11 w-full rounded-xl border-2 border-borda px-3 text-base" />
      <label htmlFor={b} className="mt-2 block font-semibold">Idade: <span className="text-azul">{idade}</span></label>
      <input id={b} type="range" min={1} max={100} value={idade} onChange={(e) => setIdade(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <label htmlFor={c} className="block font-semibold">Quantidade de notas: <span className="text-verde">{notas}</span></label>
      <input id={c} type="range" min={0} max={5} value={notas} onChange={(e) => setNotas(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-verde)]" />
      <button type="button" aria-pressed={ativa} onClick={() => setAtiva(!ativa)} className={`mt-1 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${ativa ? 'border-verde' : 'border-coral'}`}>Conta ativa: {ativa ? 'sim (true)' : 'não (false)'}</button>
      <pre aria-live="polite" className="mt-3 overflow-x-auto rounded-2xl bg-fundo p-3 text-[14px]"><code>{JSON.stringify(objeto, null, 2)}</code></pre>
    </div>
  )
}
