import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Ordem de força (do mais fraco ao mais forte): elemento, classe, id, estilo na própria etiqueta.
const regras = [
  { id: 'el', codigo: 'p { color: blue; }', nome: 'por elemento', cor: 'var(--color-azul)', cn: 'azul' },
  { id: 'cl', codigo: '.aviso { color: green; }', nome: 'por classe', cor: 'var(--color-verde)', cn: 'verde' },
  { id: 'id', codigo: '#topo { color: red; }', nome: 'por id', cor: 'var(--color-coral)', cn: 'vermelho' },
  { id: 'in', codigo: 'style="color: orange"', nome: 'na própria etiqueta', cor: 'var(--color-amarelo)', cn: 'laranja' },
]

// Regras em conflito: ganha a mais específica, e não a que vem escrita por último.
export default function CascataCss() {
  const [on, setOn] = useState<Record<string, boolean>>({ el: true, cl: true, id: false, in: false })
  const ativas = regras.filter((r) => on[r.id])
  const vence = ativas.length ? ativas[ativas.length - 1] : null
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O texto é {'<p id="topo" class="aviso">'}. Quais regras existem?</p>
      <div className="mt-2 space-y-2">
        {regras.map((r) => (
          <button key={r.id} type="button" aria-pressed={on[r.id]} onClick={() => setOn({ ...on, [r.id]: !on[r.id] })}
            className={`flex min-h-11 w-full items-center justify-between rounded-xl border-2 px-3 text-left text-[15px] ${on[r.id] ? 'border-azul bg-fundo' : 'border-borda opacity-60'}`}>
            <code>{r.codigo}</code><span className="text-suave">{r.nome}</span>
          </button>
        ))}
      </div>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-lg font-semibold" style={{ color: vence ? vence.cor : 'var(--color-texto)' }}>Olá, mundo!</p>
      <p aria-live="polite" className="mt-2 text-[15px]">{vence ? `Vence a regra ${vence.nome}: o texto fica ${vence.cn}.` : 'Nenhuma regra: o texto fica com a cor padrão do navegador.'}</p>
    </div>
  )
}
