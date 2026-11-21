import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// Um teste que acerta 90% pode ser quase inútil quando a doença é rara
export default function MatrizDeConfusao() {
  const [prev, setPrev] = useState(2)
  const [sens, setSens] = useState(90)
  const [espec, setEspec] = useState(90)
  const total = 1000
  const doentes = (total * prev) / 100
  const sadios = total - doentes
  const vp = (doentes * sens) / 100
  const fn = doentes - vp
  const vn = (sadios * espec) / 100
  const fp = sadios - vn
  const acuracia = ((vp + vn) / total) * 100
  const positivos = vp + fp
  const precisao = positivos > 0 ? (vp / positivos) * 100 : 0
  const f = (n: number) => (Math.round(n * 10) / 10).toLocaleString('pt-BR')
  const celula = 'rounded-xl p-3 text-center'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Matriz de confusão (1.000 pessoas)</p>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[14px]" role="group" aria-label="Quatro tipos de resultado">
        <div className={`${celula} bg-verde/20`}><strong className="text-lg">{f(vp)}</strong><br />doentes que o teste achou</div>
        <div className={`${celula} bg-coral/20`}><strong className="text-lg">{f(fn)}</strong><br />doentes que passaram batido</div>
        <div className={`${celula} bg-amarelo/30`}><strong className="text-lg">{f(fp)}</strong><br />alarmes falsos (sadios)</div>
        <div className={`${celula} bg-verde/20`}><strong className="text-lg">{f(vn)}</strong><br />sadios liberados</div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <Deslizante rotulo="Doentes na população (%)" valor={prev} min={1} max={50} passo={1} aoMudar={setPrev} />
        <Deslizante rotulo="Acerta os doentes (%)" valor={sens} min={50} max={100} passo={1} aoMudar={setSens} />
        <Deslizante rotulo="Acerta os sadios (%)" valor={espec} min={50} max={100} passo={1} aoMudar={setEspec} />
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Acurácia (acertos em geral): <strong>{f(acuracia)}%</strong>. Um "modelo preguiçoso" que diz sempre "sadio" acertaria {f(100 - prev)}%.
        Entre os que o teste marcou como doentes, só <strong>{f(precisao)}%</strong> estão mesmo doentes.
        {acuracia > 85 && precisao < 50 ? ' Repare: a acurácia parece ótima, mas a maioria dos alarmes é falsa.' : ''}
      </p>
    </div>
  )
}
