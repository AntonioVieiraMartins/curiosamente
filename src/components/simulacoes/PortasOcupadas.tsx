import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const programas = ['Site de estudos', 'Outro site', 'Banco de dados']

// Duas coisas não podem usar a mesma porta ao mesmo tempo, no mesmo computador.
export default function PortasOcupadas() {
  const [ocupadas, setOcupadas] = useState<Record<number, string>>({ 5173: 'Outro programa' })
  const [prog, setProg] = useState(0)
  const [porta, setPorta] = useState(5180)
  const [aviso, setAviso] = useState('Escolha um programa e uma porta, depois inicie.')
  const idP = useId()

  function iniciar() {
    if (ocupadas[porta]) { setAviso(`Erro: a porta ${porta} já está em uso por "${ocupadas[porta]}". Escolha outra.`); return }
    setOcupadas({ ...ocupadas, [porta]: programas[prog] })
    setAviso(`"${programas[prog]}" iniciou na porta ${porta}: localhost:${porta}`)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem está em qual porta?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {programas.map((p, k) => (
          <button key={p} type="button" aria-pressed={k === prog} onClick={() => setProg(k)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${k === prog ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{p}</button>
        ))}
      </div>
      <label htmlFor={idP} className="mt-3 block font-semibold">Porta:</label>
      <div className="mt-1 flex flex-wrap gap-2">
        <input id={idP} type="number" inputMode="numeric" min={1024} max={65535} value={porta} onChange={(e) => setPorta(Number(e.target.value))}
          className="h-12 w-32 rounded-xl border-2 border-borda px-3 text-lg focus:border-azul focus:outline-none" />
        {[3000, 5173, 5180, 8080].map((n) => (
          <button key={n} type="button" className="min-h-11 rounded-full border border-borda px-3 font-mono text-sm" onClick={() => setPorta(n)}>{n}</button>
        ))}
      </div>
      <button type="button" className="mt-2 min-h-11 rounded-full bg-verde px-6 font-semibold text-white" onClick={iniciar}>Iniciar</button>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{aviso}</p>
      <ul className="mt-2 space-y-1 text-[15px]">
        {Object.entries(ocupadas).sort((a, b) => Number(a[0]) - Number(b[0])).map(([n, nome]) => (
          <li key={n}><span className="font-mono font-semibold">{n}</span>: {nome}</li>
        ))}
      </ul>
      <button type="button" className="mt-2 min-h-11 rounded-full border border-borda px-4 font-semibold" onClick={() => { setOcupadas({ 5173: 'Outro programa' }); setAviso('Tudo liberado de novo.') }}>Liberar tudo</button>
    </div>
  )
}
