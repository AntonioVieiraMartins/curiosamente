import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Saber QUAL medida o problema pede: a volta (perímetro) ou o chão coberto (área)
const casos = [
  { texto: 'Comprar rodapé para contornar uma sala', certa: 'perímetro', porque: 'O rodapé corre pela volta da sala: é perímetro, em metros.' },
  { texto: 'Comprar piso para cobrir a sala toda', certa: 'área', porque: 'O piso cobre a superfície: é área, em metros quadrados.' },
  { texto: 'Cercar um quintal com tela', certa: 'perímetro', porque: 'A tela acompanha a borda do quintal: perímetro.' },
  { texto: 'Saber quanta tinta gasta para pintar uma parede', certa: 'área', porque: 'A tinta cobre a superfície da parede: área.' },
  { texto: 'Enfeitar a borda de uma toalha de mesa com renda', certa: 'perímetro', porque: 'A renda vai só na borda: perímetro.' },
  { texto: 'Plantar grama num jardim', certa: 'área', porque: 'A grama cobre o chão do jardim: área.' },
]

export default function CercaOuPiso() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const c = casos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cerca ou piso? ({i + 1} de {casos.length})</p>
      <p className="mt-2 text-lg font-semibold">{c.texto}.</p>
      <p className="mt-1 text-[15px]">O que preciso calcular?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {['perímetro', 'área'].map((o) => (
          <button key={o} type="button" disabled={resp !== null} onClick={() => setResp(o)}
            className={`min-h-11 rounded-full border-2 px-5 font-bold ${resp === o ? (o === c.certa ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{o}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 min-h-[3rem] rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Perímetro é a volta; área é a superfície coberta.' : `${resp === c.certa ? 'Certo! ' : 'Quase: '}${c.porque}`}
      </p>
      {resp !== null && (
        <button type="button" onClick={() => { setResp(null); setI((i + 1) % casos.length) }} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Próximo</button>
      )}
    </div>
  )
}
