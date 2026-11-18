import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Lugar = 'salao' | 'cozinha' | 'despensa'

const acoes: { nome: string; passa: Lugar[]; texto: string }[] = [
  { nome: 'Abrir e fechar o menu', passa: ['salao'], texto: 'Tudo acontece no navegador. O servidor nem fica sabendo.' },
  { nome: 'Trocar para o modo escuro', passa: ['salao'], texto: 'Só mudam as cores da tela. É trabalho do salão (front-end).' },
  { nome: 'Ver o meu saldo', passa: ['salao', 'cozinha', 'despensa'], texto: 'A tela pede, o servidor busca o número no banco e devolve. O salão só mostra.' },
  { nome: 'Fazer login', passa: ['salao', 'cozinha', 'despensa'], texto: 'A cozinha confere a senha com o que está guardado no banco. Quem decide é o back-end.' },
  { nome: 'Digitar no campo de busca', passa: ['salao'], texto: 'As letras aparecem na hora, direto no navegador.' },
  { nome: 'Finalizar a compra', passa: ['salao', 'cozinha', 'despensa'], texto: 'O servidor cobra, baixa o estoque e grava o pedido no banco. A tela mostra o resultado.' },
]

const lugares: { id: Lugar; nome: string; sub: string }[] = [
  { id: 'salao', nome: 'Salão', sub: 'front-end (seu navegador)' },
  { id: 'cozinha', nome: 'Cozinha', sub: 'back-end (servidor)' },
  { id: 'despensa', nome: 'Despensa', sub: 'banco de dados' },
]

// Mostra por quais partes do "restaurante" cada ação passa.
export default function SalaoECozinha() {
  const [i, setI] = useState(0)
  const a = acoes[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O que você faz num site de compras</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {acoes.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-xl border-2 px-3 py-1 text-left text-[15px] ${k === i ? 'border-azul bg-fundo font-semibold' : 'border-borda'}`}>
            {x.nome}
          </button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2" role="img" aria-label={`Passa por: ${a.passa.map((p) => lugares.find((l) => l.id === p)?.nome).join(', ')}`}>
        {lugares.map((l) => {
          const usa = a.passa.includes(l.id)
          return (
            <div key={l.id} className={`rounded-2xl border-2 p-2 text-center text-[14px] ${usa ? 'border-verde bg-fundo' : 'border-borda opacity-50'}`}>
              <strong className="block">{l.nome}</strong>
              <span className="text-suave">{l.sub}</span>
              <span className="mt-1 block font-semibold">{usa ? 'participa' : 'não participa'}</span>
            </div>
          )
        })}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{a.texto}</p>
    </div>
  )
}
