import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import NotaItem from '../ui/NotaItem'
import { botaoSecundario, cartao } from '../ui/estilos'
import { useAnotacoes } from '../../hooks/useAnotacoes'
import { criarAnotacao, LIMITE_ANOTACAO } from '../../lib/anotacoes'

// Botão "Caderno" da cápsula: abre um painel para anotar e rever o que já foi anotado neste assunto
export default function CadernoDaCapsula({ capsulaId }: { capsulaId: string }) {
  const [aberto, setAberto] = useState(false)
  const [texto, setTexto] = useState('')
  const campo = useId()
  const painel = useId()
  const notas = useAnotacoes().filter((n) => n.capsulaId === capsulaId)

  function salvar() {
    if (criarAnotacao(capsulaId, texto)) setTexto('')
  }

  return (
    <section className="mt-5" aria-label="Caderno desta cápsula">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        aria-controls={painel}
        className={botaoSecundario}
      >
        Caderno{notas.length > 0 ? ` (${notas.length})` : ''}
      </button>

      {aberto && (
        <div id={painel} className={`${cartao} mt-3 p-4 sm:p-6`}>
          <label htmlFor={campo} className="font-semibold">Anotar sobre este assunto</label>
          <textarea
            id={campo}
            value={texto}
            maxLength={LIMITE_ANOTACAO}
            onChange={(e) => setTexto(e.target.value)}
            rows={4}
            placeholder="Escreva com as suas palavras o que você quer lembrar."
            className="mt-2 w-full rounded-xl border border-borda bg-fundo p-3 text-base"
          />
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <button type="button" onClick={salvar} disabled={!texto.trim()} className="min-h-11 rounded-full bg-texto px-5 font-semibold text-white disabled:opacity-40">
              Salvar anotação
            </button>
            <Link to="/caderno" className="min-h-11 py-2.5 text-[15px] text-suave underline hover:text-texto">Ver todo o caderno</Link>
          </div>

          {notas.length > 0 && (
            <ul className="mt-5 space-y-3">
              {notas.map((n) => <NotaItem key={n.id} nota={n} />)}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}
