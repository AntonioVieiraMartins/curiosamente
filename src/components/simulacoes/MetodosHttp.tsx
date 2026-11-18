import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Uma lista de tarefas "no servidor": os quatro métodos principais, em ação.
export default function MetodosHttp() {
  const [itens, setItens] = useState(['Estudar binário', 'Ler sobre DNS'])
  const [texto, setTexto] = useState('Treinar HTTP')
  const [log, setLog] = useState('Escolha um método.')
  const id = useId()

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Os métodos do HTTP</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Texto da tarefa</label>
      <input id={id} value={texto} maxLength={30} onChange={(e) => setTexto(e.target.value)} className="mt-1 h-12 w-full rounded-xl border-2 border-borda px-3 focus:border-azul focus:outline-none" />
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <button type="button" className="min-h-11 rounded-full border-2 border-borda font-semibold" onClick={() => setLog(`GET /tarefas → 200 OK (${itens.length} itens)`)}>GET</button>
        <button type="button" className="min-h-11 rounded-full border-2 border-borda font-semibold" onClick={() => { if (!texto.trim()) { setLog('POST /tarefas → 400 Bad Request (texto vazio)'); return } setItens([...itens, texto.trim()]); setLog('POST /tarefas → 201 Created') }}>POST</button>
        <button type="button" className="min-h-11 rounded-full border-2 border-borda font-semibold" onClick={() => { if (!itens.length || !texto.trim()) { setLog('PUT /tarefas/1 → 404 Not Found'); return } setItens([texto.trim(), ...itens.slice(1)]); setLog('PUT /tarefas/1 → 200 OK (trocou o primeiro item)') }}>PUT</button>
        <button type="button" className="min-h-11 rounded-full border-2 border-borda font-semibold" onClick={() => { if (!itens.length) { setLog('DELETE /tarefas/1 → 404 Not Found'); return } setItens(itens.slice(1)); setLog('DELETE /tarefas/1 → 200 OK (apagou o primeiro)') }}>DELETE</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-amarelo p-3 font-mono text-sm">{log}</p>
      <ul className="mt-2 space-y-1.5">
        {itens.length === 0 && <li className="rounded-lg bg-fundo px-3 py-1.5 text-[15px] text-suave">(lista vazia)</li>}
        {itens.map((t, k) => <li key={`${t}${k}`} className="rounded-lg bg-fundo px-3 py-1.5 text-[15px]">{k + 1}. {t}</li>)}
      </ul>
      <p className="mt-2 text-sm text-suave">GET lê, POST cria, PUT troca e DELETE apaga. O servidor é de brinquedo e vive só na página.</p>
    </div>
  )
}
