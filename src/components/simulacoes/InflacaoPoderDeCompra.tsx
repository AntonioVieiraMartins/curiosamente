import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Com inflação, o mesmo dinheiro compra menos com o passar do tempo.
export default function InflacaoPoderDeCompra() {
  const [taxa, setTaxa] = useState(5)
  const [anos, setAnos] = useState(10)
  const id = useId()
  const fator = Math.pow(1 + taxa / 100, anos)
  const precoDaCesta = 100 * fator
  const valeHoje = 100 / fator
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A cesta que custava R$ 100</p>
      <label htmlFor={`${id}-a`} className="mt-3 block font-semibold">Inflação: <span className="text-coral">{taxa}% ao ano</span></label>
      <input id={`${id}-a`} type="range" min={2} max={12} step={1} value={taxa} onChange={(e) => setTaxa(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-coral)]" />
      <label htmlFor={`${id}-b`} className="block font-semibold">Daqui a: <span className="text-azul">{anos} {anos === 1 ? 'ano' : 'anos'}</span></label>
      <input id={`${id}-b`} type="range" min={0} max={30} step={1} value={anos} onChange={(e) => setAnos(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">A mesma cesta passa a custar</div><div className="text-lg font-bold">{brl(precoDaCesta)}</div></div>
        <div className="rounded-2xl border border-borda p-3"><div className="text-xs font-semibold text-suave">Seus R$ 100 guardados valem</div><div className="text-lg font-bold">{brl(valeHoje)}</div></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Em {anos} {anos === 1 ? 'ano' : 'anos'} com {taxa}% ao ano, os preços sobem {((fator - 1) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%.
        O dinheiro parado no cofre continua R$ 100, mas compra só <strong>{(100 / fator).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%</strong> da cesta de antes.
      </p>
    </div>
  )
}
