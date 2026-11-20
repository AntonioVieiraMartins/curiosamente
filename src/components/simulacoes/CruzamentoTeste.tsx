import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Planta de semente lisa de genótipo escondido (AA ou Aa) cruzada com uma rugosa (aa): os filhos revelam o segredo
export default function CruzamentoTeste() {
  const [segredo, setSegredo] = useState<'AA' | 'Aa'>('Aa')
  const [filhos, setFilhos] = useState<{ lisas: number; rugosas: number } | null>(null)
  const [revelado, setRevelado] = useState(false)
  function cruzar() {
    let r = 0
    for (let i = 0; i < 20; i++) if (segredo === 'Aa' && Math.random() < 0.5) r++
    setFilhos({ lisas: 20 - r, rugosas: r })
    setRevelado(false)
  }
  function sortear() {
    setSegredo(Math.random() < 0.5 ? 'AA' : 'Aa')
    setFilhos(null)
    setRevelado(false)
  }
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cruzamento-teste</p>
      <p className="mt-2 text-[15px]">Uma planta de semente lisa esconde o genótipo (AA ou Aa). Cruze com uma rugosa (aa) e veja os 20 filhos.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={sortear} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Sortear planta misteriosa</button>
        <button type="button" onClick={cruzar} className="min-h-11 rounded-full border border-texto bg-texto px-4 text-[14px] font-semibold text-white">Cruzar com aa</button>
        <button type="button" onClick={() => setRevelado(true)} className="min-h-11 rounded-full border border-borda bg-superficie px-4 text-[14px] font-semibold">Revelar</button>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {filhos === null
          ? 'Ainda não houve cruzamento.'
          : filhos.rugosas > 0
            ? `${filhos.lisas} lisas e ${filhos.rugosas} rugosas. Saiu semente rugosa: então a planta misteriosa carrega o alelo a. Ela só pode ser Aa.`
            : `${filhos.lisas} lisas e nenhuma rugosa. Provavelmente a planta é AA. Mas, se fosse Aa, a chance de sair 20 lisas seria de 1 em mais de 1 milhão, então a conclusão é bem segura.`}
        {revelado ? ` A planta era mesmo ${segredo}.` : ''}
      </p>
    </div>
  )
}
