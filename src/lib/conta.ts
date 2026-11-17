// Estado da conta (quem está logado + perfil), compartilhado por todas as telas.
import { useSyncExternalStore } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase, supabaseConfigurado } from './supabase'

export type Perfil = {
  id: string
  nome: string
  avatar: string
  xp_total: number
  nivel: number
  sequencia_atual: number
  maior_sequencia: number
  ultimo_dia_estudo: string | null
}

type EstadoConta = { carregando: boolean; usuario: User | null; perfil: Perfil | null }

let estado: EstadoConta = { carregando: supabaseConfigurado, usuario: null, perfil: null }
const ouvintes = new Set<() => void>()
const aoEntrar = new Set<() => Promise<void>>() // tarefas que rodam quando alguém faz login (ex.: sincronizar)

function mudar(novo: Partial<EstadoConta>) {
  estado = { ...estado, ...novo }
  ouvintes.forEach((f) => f())
}

export function contaAtual() {
  return estado
}

export async function recarregarPerfil() {
  if (!supabase || !estado.usuario) return
  const { data, error } = await supabase.from('perfis').select('*').eq('id', estado.usuario.id).single()
  if (error) console.warn('Não consegui ler o perfil:', error.message)
  else mudar({ perfil: data as Perfil })
}

export function quandoEntrar(tarefa: () => Promise<void>) {
  aoEntrar.add(tarefa)
}

// Liga o "ouvido" do login uma vez, quando o app abre
if (supabase) {
  let ultimoUsuario: string | null = null
  supabase.auth.onAuthStateChange((_evento, sessao) => {
    const usuario = sessao?.user ?? null
    const trocouDeUsuario = usuario?.id !== ultimoUsuario
    ultimoUsuario = usuario?.id ?? null
    mudar({ carregando: false, usuario, perfil: usuario ? estado.perfil : null })
    if (usuario && trocouDeUsuario) {
      // Fora do aviso do Supabase, para não travar o login enquanto sincroniza
      window.setTimeout(async () => {
        await recarregarPerfil()
        for (const tarefa of aoEntrar) await tarefa()
        await recarregarPerfil()
      }, 0)
    }
  })
}

export function useConta() {
  return useSyncExternalStore(
    (f) => {
      ouvintes.add(f)
      return () => ouvintes.delete(f)
    },
    contaAtual,
    contaAtual,
  )
}

// ---- Ações (devolvem uma mensagem de erro em português, ou null se deu certo) ----

function traduzirErro(mensagem: string) {
  if (/invalid login credentials/i.test(mensagem)) return 'E-mail ou senha incorretos.'
  if (/email not confirmed/i.test(mensagem)) return 'Confirme seu e-mail antes de entrar (veja sua caixa de entrada).'
  if (/already registered|already been registered/i.test(mensagem)) return 'Já existe uma conta com esse e-mail.'
  if (/password should be at least/i.test(mensagem)) return 'A senha precisa ter pelo menos 6 caracteres.'
  if (/provider is not enabled|unsupported provider/i.test(mensagem)) return 'O login com Google ainda não foi ativado no Supabase.'
  return 'Algo deu errado: ' + mensagem
}

export async function entrarComEmail(email: string, senha: string) {
  if (!supabase) return 'O login ainda não foi configurado.'
  const { error } = await supabase.auth.signInWithPassword({ email, password: senha })
  return error ? traduzirErro(error.message) : null
}

// Devolve { erro } ou { precisaConfirmar: true } quando o Supabase pede confirmação por e-mail
export async function criarConta(nome: string, email: string, senha: string) {
  if (!supabase) return { erro: 'O login ainda não foi configurado.' }
  const { data, error } = await supabase.auth.signUp({ email, password: senha, options: { data: { nome }, emailRedirectTo: `${window.location.origin}/perfil` },
  })
  if (error) return { erro: traduzirErro(error.message) }
  return { precisaConfirmar: !data.session }
}

export async function entrarComGoogle() {
  if (!supabase) return 'O login ainda não foi configurado.'
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/perfil` },
  })
  return error ? traduzirErro(error.message) : null
}

export async function sair() {
  await supabase?.auth.signOut()
}
