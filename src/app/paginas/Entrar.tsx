import { useState, type FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Rotulo from '../../components/ui/Rotulo'
import { botaoPrimario, botaoSecundario, cartao } from '../../components/ui/estilos'
import { criarConta, entrarComEmail, entrarComGoogle, useConta } from '../../lib/conta'
import { supabaseConfigurado } from '../../lib/supabase'

type Modo = 'entrar' | 'criar'

const campo = 'mt-1 min-h-12 w-full rounded-xl border border-borda bg-superficie px-4 text-[16px] outline-none focus:border-azul'

export default function Entrar() {
  const { usuario } = useConta()
  const navegar = useNavigate()
  const [modo, setModo] = useState<Modo>('entrar')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [aviso, setAviso] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  if (usuario) return <Navigate to="/perfil" replace />

  if (!supabaseConfigurado) {
    return (
      <section className="mx-auto max-w-md px-4 pt-12">
        <div className={`${cartao} p-6`}>
          <h1 className="font-serif text-3xl font-medium">Login em construção</h1>
          <p className="mt-3 text-suave">
            As contas ainda não foram ligadas neste app. Enquanto isso, seu progresso fica salvo neste navegador.
          </p>
          <Link to="/mapa" className={`${botaoPrimario} mt-6 w-full`}>Continuar como visitante</Link>
        </div>
      </section>
    )
  }

  async function enviar(e: FormEvent) {
    e.preventDefault()
    setErro(null)
    setAviso(null)
    setEnviando(true)
    if (modo === 'entrar') {
      const falha = await entrarComEmail(email, senha)
      if (falha) setErro(falha)
      else navegar('/perfil')
    } else {
      const r = await criarConta(nome.trim(), email, senha)
      if (r.erro) setErro(r.erro)
      else if (r.precisaConfirmar) setAviso('Quase lá! Enviamos um link de confirmação para o seu e-mail. Depois de confirmar, é só entrar.')
      else navegar('/perfil')
    }
    setEnviando(false)
  }

  async function google() {
    setErro(null)
    const falha = await entrarComGoogle()
    if (falha) setErro(falha)
  }

  return (
    <section className="mx-auto max-w-md px-4 pt-10 sm:pt-16">
      <Rotulo>Sua conta</Rotulo>
      <h1 className="mt-3 font-serif text-4xl font-medium">{modo === 'entrar' ? 'Que bom te ver!' : 'Crie sua conta'}</h1>
      <p className="mt-2 text-suave">O que você fez como visitante vai junto para a conta.</p>

      <div className={`${cartao} mt-6 p-5 sm:p-6`}>
        <div className="grid grid-cols-2 gap-1 rounded-full bg-fundo p-1" role="tablist">
          {(['entrar', 'criar'] as Modo[]).map((m) => (
            <button
              key={m} type="button" role="tab" aria-selected={modo === m}
              onClick={() => { setModo(m); setErro(null); setAviso(null) }}
              className={`min-h-11 rounded-full font-semibold transition ${modo === m ? 'bg-superficie shadow-cartao' : 'text-suave'}`}
            >
              {m === 'entrar' ? 'Entrar' : 'Criar conta'}
            </button>
          ))}
        </div>

        <form onSubmit={enviar} className="mt-5 space-y-4">
          {modo === 'criar' && (
            <label className="block text-sm font-semibold">
              Como quer ser chamado?
              <input value={nome} onChange={(e) => setNome(e.target.value)} required maxLength={60} autoComplete="nickname" className={campo} />
            </label>
          )}
          <label className="block text-sm font-semibold">
            E-mail
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" className={campo} />
          </label>
          <label className="block text-sm font-semibold">
            Senha {modo === 'criar' && <span className="font-normal text-suave">(mínimo 6 caracteres)</span>}
            <input
              type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required minLength={6}
              autoComplete={modo === 'entrar' ? 'current-password' : 'new-password'} className={campo}
            />
          </label>

          {erro && <p role="alert" className="rounded-xl bg-coral/10 p-3 text-[15px] text-coral">{erro}</p>}
          {aviso && <p role="status" className="rounded-xl bg-verde/10 p-3 text-[15px] text-verde">{aviso}</p>}

          <button type="submit" disabled={enviando} className={`${botaoPrimario} w-full`}>
            {enviando ? 'Aguarde…' : modo === 'entrar' ? 'Entrar' : 'Criar minha conta'}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-sm text-suave" aria-hidden="true">
          <span className="h-px flex-1 bg-borda" /> ou <span className="h-px flex-1 bg-borda" />
        </div>
        <button type="button" onClick={google} className={`${botaoSecundario} w-full`}>Continuar com o Google</button>
      </div>

      <p className="mt-6 text-center">
        <Link to="/mapa" className="font-semibold text-suave hover:text-texto">Agora não, continuar como visitante</Link>
      </p>
    </section>
  )
}
