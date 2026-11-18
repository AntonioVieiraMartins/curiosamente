import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

function tipo(p: number[]): { nome: string; texto: string } {
  const [a, b] = p
  if (a === 127) return { nome: 'Loopback', texto: 'Aponta para o próprio computador: o tráfego nunca sai dele (é o localhost).' }
  if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return { nome: 'Privado', texto: 'Endereço de rede local, reservado: não é roteado na internet pública.' }
  return { nome: 'Público (em princípio)', texto: 'Pode ser alcançado pela internet. Faixas especiais não listadas aqui podem fugir à regra.' }
}

export default function ClassificaIp() {
  const [p, setP] = useState([192, 168, 0, 12])
  const base = useId()
  const t = tipo(p)

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Público, privado ou loopback?</p>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {p.map((v, i) => (
          <div key={i}>
            <label htmlFor={`${base}${i}`} className="sr-only">Parte {i + 1} do endereço</label>
            <input id={`${base}${i}`} type="number" inputMode="numeric" min={0} max={255} value={v}
              onChange={(e) => setP(p.map((q, j) => (j === i ? Math.max(0, Math.min(255, Number(e.target.value) || 0)) : q)))}
              className="h-12 w-full rounded-xl border-2 border-borda px-1 text-center text-lg focus:border-azul focus:outline-none" />
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {[[127, 0, 0, 1], [10, 0, 0, 5], [172, 20, 1, 1], [8, 8, 8, 8]].map((e) => (
          <button key={e.join('.')} type="button" className="min-h-11 rounded-full border border-borda px-3 font-mono text-sm" onClick={() => setP(e)}>{e.join('.')}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        <strong>{p.join('.')}</strong> é <strong className="text-coral">{t.nome}</strong>. {t.texto}
      </p>
    </div>
  )
}
