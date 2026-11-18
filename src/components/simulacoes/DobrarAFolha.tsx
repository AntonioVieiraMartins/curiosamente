import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Espessura de uma folha: 0,1 mm (valor de exemplo). Cada dobra dobra a espessura.
const ESPESSURA_M = 0.0001
const comparacoes: { ate: number; texto: string }[] = [
  { ate: 0.01, texto: 'menos que a unha do dedo' },
  { ate: 0.2, texto: 'a espessura de um livro de bolso' },
  { ate: 2, texto: 'a altura de uma pessoa' },
  { ate: 100, texto: 'um prédio de 30 andares' },
  { ate: 8848, texto: 'quase o Monte Everest (8.848 m)' },
  { ate: 384400000, texto: 'mais alto que o Everest, a caminho do espaço' },
  { ate: Infinity, texto: 'passou da distância até a Lua (cerca de 384.400 km, valor médio conhecido)' },
]

// Teoria: dobrar n vezes dá 2ⁿ camadas. Na prática, uma folha de papel comum não aguenta tantas dobras.
export default function DobrarAFolha() {
  const [n, setN] = useState(10)
  const id = useId()
  const camadas = 2 ** n
  const altura = camadas * ESPESSURA_M
  const txt = altura >= 1000 ? `${(altura / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} km` : altura >= 1 ? `${altura.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} m` : `${(altura * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} cm`
  const comp = comparacoes.find((c) => altura <= c.ate)!.texto
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Dobrando uma folha (de brinquedo)</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Número de dobras: <b>{n}</b>
        <input id={id} type="range" min={0} max={42} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} className="h-11 w-full" /></label>
      <div className="mt-2 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Camadas (2ⁿ)</p><p className="text-xl font-bold">{camadas.toLocaleString('pt-BR')}</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Altura</p><p className="text-xl font-bold">{txt}</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Com {n} dobras: {camadas.toLocaleString('pt-BR')} camadas de 0,1 mm, ou seja, {comp}. Em contas ideais; na vida real é impossível dobrar tantas vezes.
      </p>
    </div>
  )
}
