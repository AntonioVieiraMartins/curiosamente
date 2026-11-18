import { useState } from 'react'
import { cartao } from '../ui/estilos'

// A mesma página com HTML, depois com CSS, depois com JavaScript: esqueleto, roupa e movimento.
export default function CamadasDoSite() {
  const [css, setCss] = useState(false)
  const [js, setJs] = useState(false)
  const [curtidas, setCurtidas] = useState(0)

  const tog = (rotulo: string, on: boolean, set: (v: boolean) => void) => (
    <button type="button" aria-pressed={on} onClick={() => set(!on)}
      className={`min-h-11 flex-1 rounded-xl border-2 px-3 text-[15px] font-semibold ${on ? 'border-verde bg-fundo' : 'border-borda'}`}>
      {rotulo}: {on ? 'ligado' : 'desligado'}
    </button>
  )

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A mesma página, camada por camada</p>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <div className="min-h-11 flex-1 rounded-xl border-2 border-azul bg-fundo px-3 py-2 text-[15px] font-semibold">HTML: sempre ligado</div>
        {tog('CSS', css, setCss)}
        {tog('JavaScript', js, setJs)}
      </div>
      <div className={css ? 'mt-3 rounded-2xl border-2 border-azul bg-fundo p-4 text-center' : 'mt-3 border border-borda p-2'}>
        <h3 className={css ? 'font-serif text-2xl font-semibold text-azul' : 'text-base font-bold'}>Minha loja</h3>
        <p className={css ? 'mt-1 text-suave' : 'text-[15px]'}>Tênis em promoção.</p>
        <button type="button" onClick={() => { if (js) setCurtidas((n) => n + 1) }}
          className={css ? 'mt-2 min-h-11 rounded-full bg-coral px-5 font-semibold text-white' : 'mt-2 min-h-11 border border-borda px-3'}>
          Curtir {js ? `(${curtidas})` : ''}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 text-[15px] text-suave">
        {!css && !js && 'Só HTML: tem o conteúdo e a estrutura, mas está sem "roupa" e o botão não faz nada.'}
        {css && !js && 'HTML + CSS: a aparência mudou, mas o botão continua parado.'}
        {!css && js && 'HTML + JavaScript: o botão conta curtidas, mesmo feio.'}
        {css && js && 'Os três juntos: estrutura, aparência e comportamento. Toque no botão!'}
      </p>
    </div>
  )
}
