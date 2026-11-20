import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Tendências ao longo de um período (esquerda → direita) e de uma família (de cima para baixo). Valores aproximados.
const dados = {
  periodo: {
    titulo: 'Período 2: de Li para F',
    itens: [
      { s: 'Li', raio: 145, en: 0.98 }, { s: 'Be', raio: 105, en: 1.57 }, { s: 'B', raio: 85, en: 2.04 }, { s: 'C', raio: 70, en: 2.55 },
      { s: 'N', raio: 65, en: 3.04 }, { s: 'O', raio: 60, en: 3.44 }, { s: 'F', raio: 50, en: 3.98 },
    ],
    leitura: { raio: 'Da esquerda para a direita o raio DIMINUI: mais prótons puxam as mesmas camadas com mais força.', en: 'Da esquerda para a direita a eletronegatividade AUMENTA: o átomo atrai mais os elétrons.' },
  },
  familia: {
    titulo: 'Grupo 1: de Li para Cs',
    itens: [
      { s: 'Li', raio: 145, en: 0.98 }, { s: 'Na', raio: 180, en: 0.93 }, { s: 'K', raio: 220, en: 0.82 }, { s: 'Rb', raio: 235, en: 0.82 }, { s: 'Cs', raio: 260, en: 0.79 },
    ],
    leitura: { raio: 'Descendo na família o raio AUMENTA: cada elemento tem uma camada a mais.', en: 'Descendo na família a eletronegatividade DIMINUI: o elétron de fora está mais longe e é menos atraído.' },
  },
}

export default function TendenciasPeriodicas() {
  const [onde, setOnde] = useState<'periodo' | 'familia'>('periodo')
  const [prop, setProp] = useState<'raio' | 'en'>('raio')
  const d = dados[onde]
  const max = Math.max(...d.itens.map((x) => x[prop]))
  const un = prop === 'raio' ? ' pm' : ''
  const chip = (ativo: boolean) => `min-h-11 rounded-full border px-4 text-[15px] font-semibold ${ativo ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Tendências da tabela</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" aria-pressed={onde === 'periodo'} onClick={() => setOnde('periodo')} className={chip(onde === 'periodo')}>Ao longo do período</button>
        <button type="button" aria-pressed={onde === 'familia'} onClick={() => setOnde('familia')} className={chip(onde === 'familia')}>Ao longo da família</button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button type="button" aria-pressed={prop === 'raio'} onClick={() => setProp('raio')} className={chip(prop === 'raio')}>Raio atômico</button>
        <button type="button" aria-pressed={prop === 'en'} onClick={() => setProp('en')} className={chip(prop === 'en')}>Eletronegatividade</button>
      </div>
      <p className="mt-3 text-sm font-semibold">{d.titulo}</p>
      <div className="mt-2 space-y-1" role="img" aria-label={`${prop === 'raio' ? 'Raio atômico' : 'Eletronegatividade'} em ${d.titulo}`}>
        {d.itens.map((x) => (
          <div key={x.s} className="flex items-center gap-2 text-[14px]">
            <span className="w-8 shrink-0 font-bold">{x.s}</span>
            <div className="h-4 flex-1 rounded-full bg-fundo"><div className="h-4 rounded-full" style={{ width: `${(x[prop] / max) * 100}%`, background: prop === 'raio' ? 'var(--color-azul)' : 'var(--color-coral)' }} /></div>
            <span className="w-16 shrink-0 text-right tabular-nums">{String(x[prop]).replace('.', ',')}{un}</span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{d.leitura[prop]} (Valores aproximados; 1 pm = um trilionésimo de metro. A eletronegatividade é uma escala sem unidade, a de Pauling.)</p>
    </div>
  )
}
