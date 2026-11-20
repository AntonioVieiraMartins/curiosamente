import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Jogo: a partir do número atômico e da posição, qual é a classe do elemento?
const classes = ['Metal alcalino', 'Halogênio', 'Gás nobre', 'Metal de transição', 'Semimetal', 'Não metal']
const casos = [
  { dica: 'Z = 11. Período 3, grupo 1. Mole, brilhante, reage com a água.', nome: 'Sódio (Na)', certo: 0 },
  { dica: 'Z = 17. Período 3, grupo 17. Desinfeta a água da piscina.', nome: 'Cloro (Cl)', certo: 1 },
  { dica: 'Z = 10. Período 2, grupo 18. Não reage com quase nada e brilha em letreiros.', nome: 'Neônio (Ne)', certo: 2 },
  { dica: 'Z = 26. Período 4, grupo 8 (bloco do meio). Metal duro, aço é feito dele.', nome: 'Ferro (Fe)', certo: 3 },
  { dica: 'Z = 14. Período 3, grupo 14. Brilho de metal, mas quebradiço. Chips de computador.', nome: 'Silício (Si)', certo: 4 },
  { dica: 'Z = 6. Período 2, grupo 14. Base da vida, forma diamante e grafite.', nome: 'Carbono (C)', certo: 5 },
]

export default function ClassificaElemento() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const [acertos, setAcertos] = useState(0)
  const c = casos[i]
  const fim = i === casos.length - 1 && resp !== null

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Desafio {i + 1} de {casos.length}: que elemento é este?</p>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{c.dica}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Classes">
        {classes.map((x, k) => (
          <button key={x} type="button" disabled={resp !== null} onClick={() => { setResp(k); if (k === c.certo) setAcertos((a) => a + 1) }} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${resp === k ? (k === c.certo ? 'border-verde bg-verde/20' : 'border-coral bg-coral/20') : 'border-borda bg-superficie'}`}>{x}</button>
        ))}
      </div>
      {resp !== null && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          {resp === c.certo ? 'Certo! ' : `Quase: o certo é "${classes[c.certo]}". `}É o <strong>{c.nome}</strong>.{fim ? ` Você acertou ${acertos} de ${casos.length}.` : ''}
        </p>
      )}
      {resp !== null && !fim && <button type="button" onClick={() => { setI(i + 1); setResp(null) }} className="mt-3 min-h-11 rounded-full bg-texto px-5 text-[15px] font-semibold text-white">Próximo</button>}
      {fim && <button type="button" onClick={() => { setI(0); setResp(null); setAcertos(0) }} className="mt-3 min-h-11 rounded-full border border-borda bg-superficie px-5 text-[15px] font-semibold">Jogar de novo</button>}
    </div>
  )
}
