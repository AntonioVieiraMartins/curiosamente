import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Treino: calcule o troco de cabeça e confira. Trabalha em centavos
const sorteia = () => {
  const preco = 500 + Math.round(Math.random() * 4400) // R$ 5,00 a R$ 49,00 (em centavos, múltiplos de 5)
  const p = Math.round(preco / 5) * 5
  const pago = [5000, 5000, 10000][Math.floor(Math.random() * 3)]
  return { preco: p, pago }
}
const reais = (c: number) => (c / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ConfereOTroco() {
  const [s, setS] = useState(sorteia)
  const [txt, setTxt] = useState('')
  const [feito, setFeito] = useState(false)
  const [pontos, setPontos] = useState(0)
  const id = useId()
  const certo = s.pago - s.preco
  const dado = Math.round(Number(txt.replace(',', '.')) * 100)
  const acertou = Number.isFinite(dado) && dado === certo
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Confira o troco ({pontos} acertos)</p>
      <p className="mt-2 text-lg font-semibold">A compra deu {reais(s.preco)} e você pagou com {reais(s.pago)}. Qual é o troco?</p>
      <label htmlFor={id} className="mt-3 block text-[15px]">Seu troco, em reais (ex.: 12,60):
        <input id={id} inputMode="decimal" value={txt} disabled={feito} onChange={(e) => setTxt(e.target.value)}
          className="mt-1 block min-h-11 w-40 rounded-xl border border-borda px-3 text-base" /></label>
      <div className="mt-3 flex flex-wrap gap-2">
        {!feito ? (
          <button type="button" disabled={txt.trim() === ''} onClick={() => { setFeito(true); if (acertou) setPontos(pontos + 1) }}
            className="min-h-11 rounded-full bg-verde px-5 font-semibold text-white disabled:opacity-50">Conferir</button>
        ) : (
          <button type="button" onClick={() => { setS(sorteia()); setTxt(''); setFeito(false) }} className="min-h-11 rounded-full border border-borda px-5 font-semibold">Outra compra</button>
        )}
      </div>
      <p aria-live="polite" className="mt-3 min-h-[3rem] rounded-2xl bg-fundo p-4 text-[15px]">
        {!feito ? 'Dica: conte para a frente, do preço até o valor pago.' : acertou ? `Certo! ${reais(certo)}.` : `O troco é ${reais(certo)}. Conferindo: ${reais(s.preco)} + ${reais(certo)} = ${reais(s.pago)}.`}
      </p>
    </div>
  )
}
