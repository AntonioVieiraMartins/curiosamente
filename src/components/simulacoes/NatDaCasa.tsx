import { useState } from 'react'
import { cartao } from '../ui/estilos'

const aparelhos = [
  { nome: 'Celular', ip: '192.168.0.10' },
  { nome: 'Notebook', ip: '192.168.0.11' },
  { nome: 'TV', ip: '192.168.0.12' },
]
const PUBLICO = '200.100.50.25' // endereço de exemplo, só para a brincadeira

// O roteador de casa troca o IP privado pelo público e anota qual porta pertence a cada aparelho.
export default function NatDaCasa() {
  const [tabela, setTabela] = useState<{ nome: string; ip: string; porta: number }[]>([])

  function pedir(k: number) {
    const a = aparelhos[k]
    setTabela([...tabela.filter((t) => t.nome !== a.nome), { ...a, porta: 50000 + k * 13 + tabela.length }])
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma casa, um IP público</p>
      <p className="mt-2 text-[15px] text-suave">IP público da casa (exemplo): <strong className="font-mono">{PUBLICO}</strong>. Toque num aparelho para ele acessar um site.</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {aparelhos.map((a, k) => (
          <button key={a.nome} type="button" onClick={() => pedir(k)} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold">{a.nome} <span className="font-mono text-sm text-suave">{a.ip}</span></button>
        ))}
      </div>
      <ul aria-live="polite" className="mt-3 space-y-1.5">
        {tabela.length === 0 && <li className="rounded-xl bg-fundo p-3 text-[15px] text-suave">A tabela do roteador está vazia.</li>}
        {tabela.map((t) => (
          <li key={t.nome} className="rounded-xl bg-fundo p-3 text-[15px]">
            <span className="font-mono">{t.ip}</span> ({t.nome}) → sai como <strong className="font-mono text-coral">{PUBLICO}:{t.porta}</strong>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[15px] text-suave">Os sites só veem o IP público. Quando a resposta volta, o roteador olha a porta e entrega ao aparelho certo.</p>
    </div>
  )
}
