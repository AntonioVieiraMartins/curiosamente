import { useId, useRef, useState } from 'react'
import { cartao } from '../ui/estilos'
import { discoInicial, filhosDe, nomeDe, separar, type Item } from './pastasDeBrinquedo'

type Linha = { entrada?: string; saida: string }

// Terminal de mentira: só mexe num disco de brinquedo na memória, nunca no seu computador de verdade.
export default function TerminalDeBrinquedo() {
  const [disco, setDisco] = useState<Record<string, Item>>(discoInicial)
  const [cwd, setCwd] = useState('C:\\Users\\voce')
  const [linhas, setLinhas] = useState<Linha[]>([{ saida: 'Digite "ajuda" para ver os comandos. Isto é um terminal de brinquedo.' }])
  const [texto, setTexto] = useState('')
  const id = useId()
  const fim = useRef<HTMLDivElement>(null)

  // Resolve um caminho digitado (absoluto ou relativo) para um caminho completo
  function resolver(arg: string): string | null {
    const partes = arg.split(/[\\/]/).filter(Boolean)
    let atual = /^[a-z]:/i.test(arg) ? [partes.shift()!.toUpperCase()] : separar(cwd)
    for (const p of partes) {
      if (p === '.') continue
      if (p === '..') { if (atual.length > 1) atual = atual.slice(0, -1); continue }
      atual = [...atual, p]
    }
    const caminho = atual.join('\\')
    const achado = Object.keys(disco).find((k) => k.toLowerCase() === caminho.toLowerCase())
    return achado ?? caminho
  }
  const existe = (c: string) => c.length <= 2 || Object.keys(disco).some((k) => k.toLowerCase() === c.toLowerCase())

  function executar(cmd: string): string {
    const [nome, ...resto] = cmd.trim().split(/\s+/)
    const arg = resto.join(' ')
    switch (nome.toLowerCase()) {
      case '': return ''
      case 'ajuda': return 'pwd (onde estou) · ls (listar) · cd PASTA (entrar; cd .. volta) · mkdir NOME (criar pasta) · cat ARQUIVO (ler) · limpar'
      case 'pwd': return cwd
      case 'ls': case 'dir': {
        const alvo = arg ? resolver(arg) : cwd
        if (!alvo || !existe(alvo) || (alvo.length > 2 && disco[alvo]?.tipo !== 'pasta')) return `ls: não achei a pasta "${arg}"`
        const f = filhosDe(disco, alvo)
        return f.length ? f.map((k) => (disco[k].tipo === 'pasta' ? `${nomeDe(k)}\\` : nomeDe(k))).join('   ') : '(pasta vazia)'
      }
      case 'cd': {
        if (!arg) return cwd
        const alvo = resolver(arg)
        if (!alvo || !existe(alvo) || (alvo.length > 2 && disco[alvo]?.tipo !== 'pasta')) return `cd: não existe a pasta "${arg}"`
        setCwd(alvo)
        return ''
      }
      case 'mkdir': {
        if (!arg || /[\\/]/.test(arg)) return 'mkdir: use um nome simples, por exemplo: mkdir Projetos'
        const novo = `${cwd}\\${arg}`
        if (existe(novo)) return `mkdir: "${arg}" já existe`
        setDisco({ ...disco, [novo]: { tipo: 'pasta' } })
        return `Pasta criada: ${novo}`
      }
      case 'cat': case 'type': {
        const alvo = arg ? resolver(arg) : null
        const item = alvo ? disco[alvo] : undefined
        if (!item) return `cat: não achei "${arg}"`
        if (item.tipo === 'pasta') return `cat: "${arg}" é uma pasta, não um arquivo`
        return item.texto ?? ''
      }
      default: return `"${nome}" não é um comando deste terminal de brinquedo. Digite "ajuda".`
    }
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    if (texto.trim().toLowerCase() === 'limpar') { setLinhas([]); setTexto(''); return }
    const saida = executar(texto)
    setLinhas([...linhas, { entrada: `${cwd}> ${texto}`, saida }])
    setTexto('')
    setTimeout(() => fim.current?.scrollIntoView({ block: 'nearest' }), 0)
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Terminal de brinquedo</p>
      <div role="log" aria-live="polite" className="mt-3 max-h-64 overflow-y-auto rounded-2xl bg-texto p-3 font-mono text-sm text-superficie">
        {linhas.map((l, i) => (
          <div key={i} className="break-words">
            {l.entrada && <div className="text-amarelo">{l.entrada}</div>}
            {l.saida && <div className="whitespace-pre-wrap">{l.saida}</div>}
          </div>
        ))}
        <div ref={fim} />
      </div>
      <form onSubmit={enviar} className="mt-2 flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">Comando</label>
        <input id={id} value={texto} onChange={(e) => setTexto(e.target.value)} autoComplete="off" autoCapitalize="off" spellCheck={false}
          placeholder={`${cwd}> comando`} className="h-12 min-w-0 flex-1 rounded-xl border-2 border-borda px-3 font-mono focus:border-azul focus:outline-none" />
        <button type="submit" className="min-h-11 rounded-full bg-verde px-6 font-semibold text-white">Executar</button>
      </form>
      <div className="mt-2 flex flex-wrap gap-2">
        {['pwd', 'ls', 'cd Documentos', 'cd ..', 'cat notas.txt'].map((c) => (
          <button key={c} type="button" className="min-h-11 rounded-full border border-borda px-3 font-mono text-sm" onClick={() => setTexto(c)}>{c}</button>
        ))}
      </div>
    </div>
  )
}
