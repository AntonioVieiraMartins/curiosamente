import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Regras: cada parte (label) tem de 1 a 63 caracteres, o nome inteiro até 253,
// e as partes só usam letras sem acento, números e hífen (sem hífen no começo ou no fim).
function checar(nome: string): string[] {
  const erros: string[] = []
  if (!nome) return ['Digite um nome.']
  if (nome.length > 253) erros.push('O nome inteiro passa de 253 caracteres.')
  const partes = nome.split('.')
  if (partes.length < 2) erros.push('Faltam as partes: precisa de pelo menos nome e terminação (exemplo.com).')
  partes.forEach((p) => {
    if (p.length === 0) erros.push('Há dois pontos seguidos ou um ponto no começo/fim.')
    else {
      if (p.length > 63) erros.push(`A parte "${p.slice(0, 10)}…" passa de 63 caracteres.`)
      if (!/^[a-z0-9-]+$/i.test(p)) erros.push(`A parte "${p}" tem caracteres não permitidos (use letras sem acento, números e hífen).`)
      if (p.startsWith('-') || p.endsWith('-')) erros.push(`A parte "${p}" não pode começar nem terminar com hífen.`)
    }
  })
  return [...new Set(erros)]
}

export default function NomeValido() {
  const [nome, setNome] = useState('meu-site.com.br')
  const id = useId()
  const erros = checar(nome.trim())

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Esse nome de domínio vale?</p>
      <label htmlFor={id} className="mt-3 block font-semibold">Digite um nome</label>
      <input id={id} value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="off" spellCheck={false} autoCapitalize="off"
        className="mt-1 h-12 w-full rounded-xl border-2 border-borda px-3 font-mono text-lg focus:border-azul focus:outline-none" />
      <div className="mt-2 flex flex-wrap gap-2">
        {['meu-site.com.br', 'café.com', '-erro.com', 'sem ponto'].map((e) => (
          <button key={e} type="button" className="min-h-11 rounded-full border border-borda px-3 font-mono text-sm" onClick={() => setNome(e)}>{e}</button>
        ))}
      </div>
      <div aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {erros.length === 0
          ? <strong className="text-verde">Nome válido ({nome.trim().length} caracteres, {nome.trim().split('.').length} partes).</strong>
          : <ul className="list-disc space-y-1 pl-5">{erros.map((e) => <li key={e}>{e}</li>)}</ul>}
      </div>
    </div>
  )
}
