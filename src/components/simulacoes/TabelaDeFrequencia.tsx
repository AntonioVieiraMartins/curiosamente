import { useState } from 'react'
import { cartao } from '../ui/estilos'

const valores = [0, 1, 2, 3, 4]
const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 })

// Quantos irmãos cada aluno tem? Apertando os botões a tabela de frequência cresce, e média, mediana e moda saem dela.
export default function TabelaDeFrequencia() {
  const [freq, setFreq] = useState([4, 8, 5, 2, 1])
  const total = freq.reduce((a, b) => a + b, 0)
  const soma = freq.reduce((s, f, k) => s + f * valores[k], 0)
  const media = total ? soma / total : 0
  const maior = Math.max(...freq)
  const moda = valores.filter((_, k) => freq[k] === maior && maior > 0)
  // mediana: expande a tabela numa lista ordenada
  const lista = valores.flatMap((v, k) => Array(freq[k]).fill(v) as number[])
  const mediana = lista.length === 0 ? 0 : lista.length % 2 ? lista[(lista.length - 1) / 2] : (lista[lista.length / 2 - 1] + lista[lista.length / 2]) / 2
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quantos irmãos cada aluno tem?</p>
      <div className="mt-3 grid grid-cols-5 gap-2 text-center">
        {valores.map((v, k) => (
          <div key={v} className="rounded-2xl border border-borda p-2">
            <div className="text-xs font-semibold text-suave">{v} {v === 1 ? 'irmão' : 'irmãos'}</div>
            <div className="mx-auto mt-1 flex h-16 items-end justify-center" aria-hidden="true">
              <div className="w-6 rounded-t bg-azul" style={{ height: `${maior ? (freq[k] / maior) * 100 : 0}%` }} />
            </div>
            <div className="text-lg font-bold">{freq[k]}</div>
            <div className="mt-1 flex justify-center gap-1">
              <button type="button" aria-label={`Menos um aluno com ${v} irmãos`} onClick={() => setFreq(freq.map((f, j) => (j === k ? Math.max(0, f - 1) : f)))} className="size-11 rounded-full border-2 border-borda font-semibold">−</button>
              <button type="button" aria-label={`Mais um aluno com ${v} irmãos`} onClick={() => setFreq(freq.map((f, j) => (j === k ? f + 1 : f)))} className="size-11 rounded-full border-2 border-borda font-semibold">+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[['Média', fmt(media)], ['Mediana', fmt(mediana)], ['Moda', moda.length ? moda.join(' e ') : '—']].map(([r, v]) => (
          <div key={r} className="rounded-2xl border border-borda p-2"><div className="text-xs font-semibold text-suave">{r}</div><div className="text-lg font-bold">{v}</div></div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {total} alunos. Média: {soma} ÷ {total} = <strong>{fmt(media)}</strong> irmãos. A moda é o valor com a barra mais alta.
      </p>
    </div>
  )
}
