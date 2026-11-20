import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Passo = 'ima' | 'agua' | 'filtro' | 'evaporar'
const NOMES: Record<Passo, string> = {
  ima: 'Passar um ímã',
  agua: 'Adicionar água e mexer',
  filtro: 'Filtrar',
  evaporar: 'Aquecer até a água evaporar',
}

// Mistura de limalha de ferro, areia e sal: a ordem dos passos importa
export default function BancadaDosTresPos() {
  const [feitos, setFeitos] = useState<Passo[]>([])
  const [msg, setMsg] = useState('Misturei ferro, areia e sal. Qual é o primeiro passo?')
  const tem = (p: Passo) => feitos.includes(p)
  const completo = tem('ima') && tem('agua') && tem('filtro') && tem('evaporar')

  function fazer(p: Passo) {
    if (tem(p)) { setMsg('Esse passo já foi feito.'); return }
    if (p === 'filtro' && !tem('agua')) { setMsg('Sem água, o sal não se dissolve, e o filtro não separa nada. Primeiro dissolva o sal.'); return }
    if (p === 'evaporar' && !tem('filtro')) { setMsg('A areia ainda está na água. Filtre antes de evaporar, senão o sal sai misturado com a areia.'); return }
    if (p === 'agua' && !tem('ima')) { setMsg('Atenção: com a água, o ferro pode enferrujar e é mais difícil tirar com o ímã. Funciona melhor passar o ímã antes, com tudo seco.') }
    else {
      const frases: Record<Passo, string> = {
        ima: 'O ímã atraiu só o ferro. Sobraram areia e sal.',
        agua: 'O sal se dissolveu na água. A areia continua separada, no fundo.',
        filtro: 'O filtro reteve a areia. Passou só a água com sal (a solução).',
        evaporar: 'A água evaporou e o sal ficou no fundo do recipiente.',
      }
      setMsg(frases[p])
    }
    setFeitos([...feitos, p])
  }

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Ferro, areia e sal na bancada</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm font-semibold">
        <div className={`rounded-2xl border-2 p-2 ${tem('ima') ? 'border-verde bg-verde/10' : 'border-borda'}`}>Ferro<br />{tem('ima') ? 'separado' : 'misturado'}</div>
        <div className={`rounded-2xl border-2 p-2 ${tem('filtro') ? 'border-verde bg-verde/10' : 'border-borda'}`}>Areia<br />{tem('filtro') ? 'separada' : 'misturada'}</div>
        <div className={`rounded-2xl border-2 p-2 ${tem('evaporar') ? 'border-verde bg-verde/10' : 'border-borda'}`}>Sal<br />{tem('evaporar') ? 'separado' : 'misturado'}</div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Passos">
        {(Object.keys(NOMES) as Passo[]).map((p) => (
          <button key={p} type="button" onClick={() => fazer(p)} disabled={completo}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${tem(p) ? 'border-verde bg-verde/10' : 'border-borda'}`}>{NOMES[p]}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{completo ? 'Os três separados. A ordem que deu certo: ' + feitos.map((f) => NOMES[f].toLowerCase()).join(' → ') + '.' : msg}</p>
      <button type="button" onClick={() => { setFeitos([]); setMsg('Misturei ferro, areia e sal. Qual é o primeiro passo?') }} className="mt-3 min-h-11 rounded-full border-2 border-borda px-4 text-sm font-semibold">Recomeçar</button>
    </div>
  )
}
