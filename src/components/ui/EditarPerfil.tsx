import { useState } from 'react'
import Avatar, { avatares } from './Avatar'
import { botaoPrimario, botaoSecundario } from './estilos'
import { salvarPerfil } from '../../lib/conta'

type Props = { nomeAtual: string; avatarAtual: string; aoFechar: () => void }

// Formulário para trocar nome e avatar (só para quem tem conta)
export default function EditarPerfil({ nomeAtual, avatarAtual, aoFechar }: Props) {
  const [nome, setNome] = useState(nomeAtual)
  const [avatar, setAvatar] = useState(avatarAtual)
  const [erro, setErro] = useState<string | null>(null)
  const [salvando, setSalvando] = useState(false)

  async function salvar(e: React.FormEvent) {
    e.preventDefault()
    setSalvando(true)
    const problema = await salvarPerfil(nome, avatar)
    setSalvando(false)
    if (problema) setErro(problema)
    else aoFechar()
  }

  return (
    <form onSubmit={salvar} className="mt-5 w-full border-t border-borda pt-5">
      <label className="block text-sm font-semibold" htmlFor="nome-perfil">Nome</label>
      <input
        id="nome-perfil"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        maxLength={60}
        className="mt-2 h-12 w-full max-w-sm rounded-xl border border-borda bg-superficie px-4 text-base outline-none focus:border-azul"
      />

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">Avatar</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {avatares.map((a) => (
            <label
              key={a.id}
              className={`cursor-pointer rounded-full p-1 ring-2 transition ${avatar === a.id ? 'ring-azul' : 'ring-transparent hover:ring-borda'}`}
            >
              <input
                type="radio"
                name="avatar"
                value={a.id}
                checked={avatar === a.id}
                onChange={() => setAvatar(a.id)}
                className="sr-only"
              />
              <Avatar id={a.id} tamanho={48} />
            </label>
          ))}
        </div>
      </fieldset>

      {erro && <p role="alert" className="mt-4 text-coral">{erro}</p>}

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="submit" disabled={salvando} className={`${botaoPrimario} disabled:opacity-60`}>
          {salvando ? 'Salvando…' : 'Salvar'}
        </button>
        <button type="button" onClick={aoFechar} className={botaoSecundario}>Cancelar</button>
      </div>
    </form>
  )
}
