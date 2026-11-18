import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import PlanoFuncao from './PlanoFuncao'

const f2 = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })
const H0 = 2 // altura da mão, em metros (exemplo)

// h(t) = 2 + v·t - 5t². Usamos g = 10 m/s² (arredondado) para as contas ficarem limpas.
export default function BolaArremessada() {
  const [v, setV] = useState(15)
  const [t, setT] = useState(1)
  const idv = useId(), idt = useId()
  const h = (x: number) => H0 + v * x - 5 * x * x
  const tTopo = v / 10
  const hMax = h(tTopo)
  const tChao = (v + Math.sqrt(v * v + 20 * H0)) / 10
  const tt = Math.min(t, tChao)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Uma bola jogada para cima</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <label htmlFor={idv} className="text-[15px]">Velocidade inicial: <b>{v} m/s</b>
          <input id={idv} type="range" min={5} max={25} step={1} value={v} onChange={(e) => setV(Number(e.target.value))} className="h-11 w-full" /></label>
        <label htmlFor={idt} className="text-[15px]">Tempo: <b>{f2(tt)} s</b>
          <input id={idt} type="range" min={0} max={6} step={0.1} value={tt} onChange={(e) => setT(Number(e.target.value))} className="h-11 w-full" /></label>
      </div>
      <PlanoFuncao
        curvas={[{ f: h, cor: 'var(--color-azul)' }]}
        xmin={0} xmax={6} ymin={-2} ymax={34}
        pontos={[{ x: tTopo, y: hMax, cor: 'var(--color-coral)', rotulo: 'topo' }, { x: tt, y: h(tt), cor: 'var(--color-texto)' }]}
        rotuloAlt="Altura da bola em função do tempo, em forma de parábola"
      />
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        h(t) = {H0} + {v}t - 5t². Em t = {f2(tt)} s a bola está a <b>{f2(Math.max(h(tt), 0))} m</b>. Ela sobe até <b>{f2(hMax)} m</b>, em t = {f2(tTopo)} s, e volta ao chão em t ≈ <b>{f2(tChao)} s</b>. (Exemplo simplificado, sem ar e com g = 10 m/s².)
      </p>
    </div>
  )
}
