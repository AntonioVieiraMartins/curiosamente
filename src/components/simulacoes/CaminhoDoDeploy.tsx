import { useState } from 'react'
import { cartao } from '../ui/estilos'

const etapas = [
  { nome: 'Commit', texto: 'Você salva a mudança no histórico do Git.' },
  { nome: 'Push', texto: 'A mudança sobe para o GitHub.' },
  { nome: 'Build', texto: 'A plataforma monta o site (junta e otimiza os arquivos).' },
  { nome: 'Testes', texto: 'Verificações automáticas conferem se nada quebrou.' },
  { nome: 'Publicar', texto: 'A nova versão passa a ser a que os visitantes veem.' },
]

// Um deploy de brinquedo: cada etapa só roda se a anterior deu certo
export default function CaminhoDoDeploy() {
  const [passo, setPasso] = useState(0)
  const [quebrar, setQuebrar] = useState(false)
  const falhou = quebrar && passo > 3
  const noAr = !falhou && passo >= etapas.length
  const avancar = () => setPasso((p) => Math.min(p + 1, 5))
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Um deploy passo a passo</p>
      <label className="mt-3 flex min-h-11 items-center gap-3 text-[15px]">
        <input type="checkbox" checked={quebrar} onChange={(e) => { setQuebrar(e.target.checked); setPasso(0) }} className="size-5" />
        Deixar um teste quebrado
      </label>
      <ol className="mt-2 space-y-2">
        {etapas.map((e, i) => {
          const feita = i < passo && !(quebrar && i >= 3)
          const erro = quebrar && i === 3 && passo > 3
          const parada = quebrar && i > 3 && passo > 3
          return (
            <li key={e.nome} className={`rounded-2xl border-2 p-3 ${erro ? 'border-coral' : feita ? 'border-verde' : 'border-borda'} ${parada ? 'opacity-50' : ''}`}>
              <p className="font-semibold">{i + 1}. {e.nome}{feita ? ' ✓' : erro ? ' ✗ falhou' : parada ? ' (não rodou)' : ''}</p>
              <p className="text-[15px] text-suave">{e.texto}</p>
            </li>
          )
        })}
      </ol>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {falhou ? 'O teste falhou, então o deploy parou. Os visitantes continuam vendo a versão antiga, que funciona.' : noAr ? 'No ar! Os visitantes agora veem a versão nova.' : 'Aperte o botão para rodar a próxima etapa.'}
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={avancar} disabled={passo >= 5 || falhou} className="min-h-11 rounded-full border-2 border-azul px-5 font-semibold disabled:opacity-40">Próxima etapa</button>
        <button type="button" onClick={() => setPasso(0)} className="min-h-11 rounded-full border-2 border-borda px-5 font-semibold">Recomeçar</button>
      </div>
    </div>
  )
}
