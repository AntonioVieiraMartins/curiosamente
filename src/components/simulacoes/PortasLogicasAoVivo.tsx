import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Porta = 'E' | 'OU' | 'XOU' | 'NÃO'
const PORTAS: { id: Porta; nome: string; f: (a: boolean, b: boolean) => boolean; dica: string }[] = [
  { id: 'E', nome: 'E (e)', f: (a, b) => a && b, dica: 'Acende só quando as duas chaves estão ligadas (interruptores em série).' },
  { id: 'OU', nome: 'OU (ou)', f: (a, b) => a || b, dica: 'Acende quando pelo menos uma chave está ligada (interruptores em paralelo).' },
  { id: 'XOU', nome: 'OU exclusivo', f: (a, b) => a !== b, dica: 'Acende quando as chaves estão diferentes, como o interruptor de escada, que liga em cima e desliga embaixo.' },
  { id: 'NÃO', nome: 'NÃO (negação)', f: (a) => !a, dica: 'Inverte a chave A: acende quando A está desligada. A chave B não conta.' },
]
const v = (x: boolean) => (x ? 'V' : 'F')

// Duas chaves e uma lâmpada: cada porta lógica é uma regra para acender a luz
export default function PortasLogicasAoVivo() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  const [id, setId] = useState<Porta>('E')
  const porta = PORTAS.find((p) => p.id === id)!
  const acesa = porta.f(a, b)
  const linhas = id === 'NÃO' ? [[true], [false]] : [[true, true], [true, false], [false, true], [false, false]]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Chaves e lâmpada</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a porta lógica">
        {PORTAS.map((p) => (
          <button key={p.id} type="button" aria-pressed={p.id === id} onClick={() => setId(p.id)}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${p.id === id ? 'border-azul bg-azul text-white' : 'border-borda'}`}>{p.nome}</button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        <button type="button" aria-pressed={a} onClick={() => setA(!a)} className={`min-h-11 rounded-2xl border-2 px-5 font-semibold ${a ? 'border-verde bg-verde/10' : 'border-borda'}`}>Chave A: {a ? 'ligada' : 'desligada'}</button>
        {id !== 'NÃO' && <button type="button" aria-pressed={b} onClick={() => setB(!b)} className={`min-h-11 rounded-2xl border-2 px-5 font-semibold ${b ? 'border-verde bg-verde/10' : 'border-borda'}`}>Chave B: {b ? 'ligada' : 'desligada'}</button>}
        <svg viewBox="0 0 60 60" className="h-16 w-16" role="img" aria-label={acesa ? 'Lâmpada acesa' : 'Lâmpada apagada'}>
          {acesa && <circle cx={30} cy={26} r={26} fill="var(--color-amarelo)" fillOpacity="0.35" />}
          <circle cx={30} cy={26} r={15} fill={acesa ? 'var(--color-amarelo)' : 'var(--color-fundo)'} stroke="var(--color-texto)" strokeWidth="2" />
          <rect x={23} y={42} width={14} height={8} rx={2} fill="var(--color-texto)" fillOpacity="0.6" />
        </svg>
      </div>
      <table className="mx-auto mt-4 text-center text-[15px]">
        <thead><tr><th className="px-3">A</th>{id !== 'NÃO' && <th className="px-3">B</th>}<th className="px-3">Luz</th></tr></thead>
        <tbody>
          {linhas.map((l) => {
            const atual = l[0] === a && (id === 'NÃO' || l[1] === b)
            return (
              <tr key={l.join()} className={atual ? 'bg-amarelo/30 font-semibold' : ''}>
                <td className="px-3">{v(l[0])}</td>{id !== 'NÃO' && <td className="px-3">{v(l[1])}</td>}<td className="px-3">{v(porta.f(l[0], l[1] ?? false))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{porta.dica} Agora a lâmpada está <strong>{acesa ? 'acesa' : 'apagada'}</strong>.</p>
    </div>
  )
}
