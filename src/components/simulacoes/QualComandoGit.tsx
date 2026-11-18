import { useState } from 'react'
import { cartao } from '../ui/estilos'

const comandos = ['git init', 'git clone', 'git add', 'git commit', 'git push', 'git pull']
const casos = [
  { t: 'Começar a versionar uma pasta nova', c: 'git init' },
  { t: 'Baixar uma cópia de um projeto que está no GitHub', c: 'git clone' },
  { t: 'Marcar uma mudança para entrar no próximo salvamento', c: 'git add' },
  { t: 'Salvar um ponto no histórico, com uma mensagem', c: 'git commit' },
  { t: 'Enviar os meus commits para o GitHub', c: 'git push' },
  { t: 'Trazer os commits novos que a equipe enviou', c: 'git pull' },
]

// Descreva a situação, escolha o comando.
export default function QualComandoGit() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const [ac, setAc] = useState(0)
  if (i >= casos.length) {
    return (
      <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
        <p className="font-semibold">Você acertou {ac} de {casos.length}.</p>
        <button type="button" onClick={() => { setI(0); setAc(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Jogar de novo</button>
      </div>
    )
  }
  const k = casos[i]
  const escolher = (c: string) => { if (resp === null) { setResp(c); if (c === k.c) setAc((n) => n + 1) } }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Situação {i + 1} de {casos.length}</p>
      <p className="mt-2 text-lg font-semibold">{k.t}</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {comandos.map((c) => (
          <button key={c} type="button" onClick={() => escolher(c)} className="min-h-11 rounded-xl border-2 border-azul px-2 font-mono text-[15px] font-semibold">{c}</button>
        ))}
      </div>
      {resp !== null && (
        <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          <p className="font-semibold">{resp === k.c ? 'Certo!' : `Não: o certo é ${k.c}.`}</p>
          <button type="button" onClick={() => { setResp(null); setI(i + 1) }} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">{i === casos.length - 1 ? 'Ver resultado' : 'Próximo'}</button>
        </div>
      )}
    </div>
  )
}
