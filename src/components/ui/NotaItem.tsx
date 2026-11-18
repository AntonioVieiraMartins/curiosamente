import { useId, useState } from 'react'
import { apagarAnotacao, editarAnotacao, LIMITE_ANOTACAO, type Anotacao } from '../../lib/anotacoes'

const botaoPequeno = 'min-h-11 rounded-full border border-borda px-4 text-[15px] font-semibold text-texto hover:border-texto/30'

function data(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'America/Sao_Paulo' })
}

// Uma anotação do caderno, com editar e apagar (o apagar pede uma segunda confirmação)
export default function NotaItem({ nota }: { nota: Anotacao }) {
  const [editando, setEditando] = useState(false)
  const [rascunho, setRascunho] = useState(nota.texto)
  const [confirmando, setConfirmando] = useState(false)
  const id = useId()

  function salvar() {
    if (!rascunho.trim()) return
    editarAnotacao(nota.id, rascunho)
    setEditando(false)
  }

  if (editando) {
    return (
      <li className="rounded-2xl border border-borda bg-superficie p-4">
        <label htmlFor={id} className="text-sm font-semibold">Editar anotação</label>
        <textarea
          id={id}
          value={rascunho}
          maxLength={LIMITE_ANOTACAO}
          onChange={(e) => setRascunho(e.target.value)}
          rows={4}
          className="mt-2 w-full rounded-xl border border-borda bg-fundo p-3 text-base"
        />
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" onClick={salvar} disabled={!rascunho.trim()} className={`${botaoPequeno} bg-texto text-white disabled:opacity-40`}>Salvar</button>
          <button type="button" onClick={() => { setRascunho(nota.texto); setEditando(false) }} className={botaoPequeno}>Cancelar</button>
        </div>
      </li>
    )
  }

  return (
    <li className="rounded-2xl border border-borda bg-superficie p-4">
      <p className="whitespace-pre-wrap text-base [overflow-wrap:anywhere]">{nota.texto}</p>
      <p className="mt-2 text-sm text-suave">
        {data(nota.criadoEm)}{nota.atualizadoEm !== nota.criadoEm ? ' · editada' : ''}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" onClick={() => setEditando(true)} className={botaoPequeno}>Editar</button>
        {confirmando ? (
          <>
            <button type="button" onClick={() => apagarAnotacao(nota.id)} className={`${botaoPequeno} border-coral text-coral`}>Apagar mesmo</button>
            <button type="button" onClick={() => setConfirmando(false)} className={botaoPequeno}>Manter</button>
          </>
        ) : (
          <button type="button" onClick={() => setConfirmando(true)} className={botaoPequeno}>Apagar</button>
        )}
      </div>
    </li>
  )
}
