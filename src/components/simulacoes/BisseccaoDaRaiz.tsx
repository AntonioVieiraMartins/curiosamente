import { useState } from 'react'
import { cartao } from '../ui/estilos'

const f = (x: number) => x ** 3 - x - 1
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 5 })

// Teorema do valor intermediário em ação: f(x) = x³ − x − 1 é contínua, f(1) < 0 e f(2) > 0,
// então existe uma raiz entre 1 e 2. Cortar o intervalo ao meio encurrala essa raiz.
export default function BisseccaoDaRaiz() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(2)
  const [passos, setPassos] = useState(0)
  const meio = (a + b) / 2
  function cortar() {
    if (f(meio) < 0) setA(meio)
    else setB(meio)
    setPassos(passos + 1)
  }
  function recomecar() { setA(1); setB(2); setPassos(0) }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Onde f(x) = x³ − x − 1 vale zero?</p>
      <div className="mt-3 grid grid-cols-2 gap-2 text-center">
        <div className="rounded-2xl border-2 border-azul p-3"><p className="text-[14px] font-semibold">Esquerda: x = {fmt(a)}</p><p className="text-xl font-bold">f = {fmt(f(a))} (negativo)</p></div>
        <div className="rounded-2xl border-2 border-coral p-3"><p className="text-[14px] font-semibold">Direita: x = {fmt(b)}</p><p className="text-xl font-bold">f = {fmt(f(b))} (positivo)</p></div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {passos === 0
          ? 'f é contínua, f(1) = −1 e f(2) = 5. Sem nenhum salto no caminho, o gráfico precisa cruzar o zero entre 1 e 2.'
          : `Depois de ${passos} corte${passos > 1 ? 's' : ''}, a raiz está num intervalo de largura ${fmt(b - a)}. O meio testado foi ${fmt(meio)}.`}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" disabled={b - a < 0.0005} onClick={cortar} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Cortar ao meio</button>
        <button type="button" onClick={recomecar} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
