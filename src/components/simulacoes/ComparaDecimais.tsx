import { useState } from 'react'
import { cartao } from '../ui/estilos'

const pares = [
  { a: '0,5', b: '0,45', exp: 'Iguale as casas: 0,50 contra 0,45. 50 centésimos é mais que 45. Mais algarismos não quer dizer maior!' },
  { a: '0,3', b: '0,30', exp: 'São iguais: o zero no fim de um decimal não muda o valor (3 décimos = 30 centésimos).' },
  { a: '1,07', b: '1,7', exp: 'A parte inteira é igual. Compare os décimos: 0 contra 7. Então 1,7 é maior.' },
  { a: '2,5', b: '2,49', exp: 'Iguale as casas: 2,50 contra 2,49. 50 centésimos é mais que 49.' },
  { a: '0,09', b: '0,1', exp: 'Iguale: 0,09 contra 0,10. 10 centésimos é mais que 9.' },
]

const resposta = (a: string, b: string) => {
  const x = Number(a.replace(',', '.')), y = Number(b.replace(',', '.'))
  return x > y ? 'a' : x < y ? 'b' : 'igual'
}

// Qual decimal é maior? Igualar o número de casas ajuda
export default function ComparaDecimais() {
  const [i, setI] = useState(0)
  const [esc, setEsc] = useState<string | null>(null)
  const p = pares[i % pares.length]
  const certa = resposta(p.a, p.b)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual é maior?</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <button type="button" onClick={() => setEsc('a')} className={`min-h-14 rounded-2xl border-2 text-2xl font-bold ${esc === 'a' ? (certa === 'a' ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-azul'}`}>{p.a}</button>
        <button type="button" onClick={() => setEsc('igual')} className={`min-h-14 rounded-2xl border-2 text-[15px] font-semibold ${esc === 'igual' ? (certa === 'igual' ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>São iguais</button>
        <button type="button" onClick={() => setEsc('b')} className={`min-h-14 rounded-2xl border-2 text-2xl font-bold ${esc === 'b' ? (certa === 'b' ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-azul'}`}>{p.b}</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {esc === null ? 'Toque no maior, ou em “São iguais”.' : `${esc === certa ? 'Certo!' : 'Ainda não.'} ${p.exp}`}
      </p>
      <button type="button" onClick={() => { setI(i + 1); setEsc(null) }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Outro par</button>
    </div>
  )
}
