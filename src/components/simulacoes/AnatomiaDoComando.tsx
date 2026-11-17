import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Parte = { texto: string; papel: string; explica: string }

const exemplos: { nome: string; partes: Parte[] }[] = [
  { nome: 'ls -l Fotos', partes: [
    { texto: 'ls', papel: 'comando', explica: 'O que fazer: listar o que tem numa pasta.' },
    { texto: '-l', papel: 'opção', explica: 'Muda o jeito de fazer: mostra uma lista detalhada.' },
    { texto: 'Fotos', papel: 'argumento', explica: 'Sobre o quê: a pasta Fotos.' },
  ] },
  { nome: 'cd ..', partes: [
    { texto: 'cd', papel: 'comando', explica: 'O que fazer: mudar de pasta.' },
    { texto: '..', papel: 'argumento', explica: 'Para onde: a pasta de cima (a pasta-pai).' },
  ] },
  { nome: 'mkdir Projetos', partes: [
    { texto: 'mkdir', papel: 'comando', explica: 'O que fazer: criar uma pasta (make directory).' },
    { texto: 'Projetos', papel: 'argumento', explica: 'O nome da nova pasta.' },
  ] },
  { nome: 'cat notas.txt', partes: [
    { texto: 'cat', papel: 'comando', explica: 'O que fazer: mostrar o conteúdo de um arquivo de texto.' },
    { texto: 'notas.txt', papel: 'argumento', explica: 'Qual arquivo ler.' },
  ] },
]

const cor: Record<string, string> = { comando: 'bg-azul text-white', opção: 'bg-amarelo', argumento: 'bg-verde text-white' }

// Todo comando tem: o que fazer (comando), como (opção) e sobre o quê (argumento).
export default function AnatomiaDoComando() {
  const [i, setI] = useState(0)
  const [p, setP] = useState(0)
  const ex = exemplos[i]
  const parte = ex.partes[Math.min(p, ex.partes.length - 1)]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Por dentro de um comando</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exemplos.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => { setI(k); setP(0) }}
            className={`min-h-11 rounded-full border-2 px-3 font-mono text-sm ${k === i ? 'border-azul' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 font-mono text-lg">
        {ex.partes.map((x, k) => (
          <button key={x.texto} type="button" aria-pressed={k === p} onClick={() => setP(k)}
            className={`min-h-11 rounded-lg px-3 ${cor[x.papel]} ${k === p ? 'ring-2 ring-texto' : 'opacity-80'}`}>{x.texto}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{parte.texto}</strong> é {parte.papel === 'opção' ? 'uma' : 'um'} <strong>{parte.papel}</strong>. {parte.explica}
      </p>
    </div>
  )
}
