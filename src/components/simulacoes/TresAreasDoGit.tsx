import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Mesa de trabalho -> bandeja de saída (index) -> histórico. O add escolhe o que entra no próximo commit.
export default function TresAreasDoGit() {
  const [mesa, setMesa] = useState(0)
  const [bandeja, setBandeja] = useState(0)
  const [hist, setHist] = useState(1)
  const [msg, setMsg] = useState('Projeto começa com 1 commit.')

  const editar = () => { setMesa(mesa + 1); setMsg('Você editou um arquivo. A mudança está só na mesa de trabalho.') }
  const add = () => {
    if (mesa === 0) { setMsg('git add sem nada mudado: não há o que preparar.'); return }
    setBandeja(bandeja + mesa); setMesa(0); setMsg('git add: as mudanças foram para a bandeja, prontas para o próximo commit.')
  }
  const commit = () => {
    if (bandeja === 0) { setMsg('git commit com a bandeja vazia: não há o que salvar.'); return }
    setHist(hist + 1); setBandeja(0); setMsg('git commit: a bandeja virou um novo ponto no histórico.')
  }
  const caixa = (titulo: string, n: number, cor: string) => (
    <div className={`rounded-2xl border-2 p-3 text-center ${cor}`}>
      <p className="text-[14px] font-semibold">{titulo}</p>
      <p className="text-2xl font-bold">{n}</p>
    </div>
  )
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">As três áreas do Git</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {caixa('Mesa (mudanças)', mesa, 'border-coral')}
        {caixa('Bandeja (preparado)', bandeja, 'border-amarelo')}
        {caixa('Histórico (commits)', hist, 'border-verde')}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={editar} className="min-h-11 rounded-full border-2 border-borda px-4 font-semibold">Editar arquivo</button>
        <button type="button" onClick={add} className="min-h-11 rounded-full border-2 border-azul px-4 font-mono font-semibold">git add</button>
        <button type="button" onClick={commit} className="min-h-11 rounded-full border-2 border-verde px-4 font-mono font-semibold">git commit</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{msg}</p>
    </div>
  )
}
