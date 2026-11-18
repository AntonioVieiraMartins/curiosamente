import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Qual sólido combina com cada objeto do dia a dia?
const formas = ['Esfera', 'Cubo', 'Cilindro', 'Cone', 'Paralelepípedo']
const objetos = [
  { o: 'uma bola de futebol', f: 'Esfera', porque: 'É redonda por todos os lados, sem faces planas.' },
  { o: 'um dado de jogo', f: 'Cubo', porque: 'Tem 6 faces quadradas iguais.' },
  { o: 'uma lata de milho', f: 'Cilindro', porque: 'Duas bases redondas e uma lateral curva.' },
  { o: 'um chapéu de festa', f: 'Cone', porque: 'Uma base redonda que termina numa ponta.' },
  { o: 'uma caixa de sapato', f: 'Paralelepípedo', porque: 'Tem 6 faces retangulares, como uma caixa.' },
  { o: 'um tijolo', f: 'Paralelepípedo', porque: 'Faces retangulares: é uma "caixa" maciça.' },
]

export default function FormaDoObjeto() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const ob = objetos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Que forma é? ({i + 1} de {objetos.length})</p>
      <p className="mt-2 text-lg font-semibold">{ob.o[0].toUpperCase() + ob.o.slice(1)} lembra qual sólido?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {formas.map((f) => (
          <button key={f} type="button" disabled={resp !== null} onClick={() => setResp(f)}
            className={`min-h-11 rounded-full border-2 px-4 font-bold ${resp === f ? (f === ob.f ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{f}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 min-h-[3rem] rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Pense nas faces: planas, curvas, quantas?' : `${resp === ob.f ? 'Certo! ' : `Quase: é ${ob.f}. `}${ob.porque}`}
      </p>
      {resp !== null && (
        <button type="button" onClick={() => { setResp(null); setI((i + 1) % objetos.length) }} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Próximo</button>
      )}
    </div>
  )
}
