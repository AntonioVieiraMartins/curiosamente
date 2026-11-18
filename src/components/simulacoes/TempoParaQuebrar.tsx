import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

const alfabetos = [
  { n: 10, rotulo: 'só números (10)' },
  { n: 26, rotulo: 'letras minúsculas (26)' },
  { n: 62, rotulo: 'letras e números (62)' },
  { n: 94, rotulo: 'com símbolos (94)' },
]
// Velocidades de brinquedo, só para comparar: hash rápido contra hash lento (de propósito).
const velocidades = [
  { v: 1e10, rotulo: 'hash rápido (10 bilhões de tentativas por segundo)' },
  { v: 1e4, rotulo: 'hash lento de propósito (10 mil por segundo)' },
]

const formatar = (s: number) => {
  if (s < 1) return 'menos de 1 segundo'
  if (s < 60) return `${Math.round(s)} segundos`
  if (s < 3600) return `${Math.round(s / 60)} minutos`
  if (s < 86400) return `${Math.round(s / 3600)} horas`
  if (s < 31557600) return `${Math.round(s / 86400)} dias`
  const a = s / 31557600
  return a > 1e9 ? 'mais de 1 bilhão de anos' : `${Math.round(a).toLocaleString('pt-BR')} anos`
}

// Tempo máximo para um ataque de força bruta testar todas as combinações (conta simplificada).
export default function TempoParaQuebrar() {
  const [tam, setTam] = useState(6)
  const [al, setAl] = useState(0)
  const [vel, setVel] = useState(0)
  const id = useId()
  const combos = alfabetos[al].n ** tam
  const seg = combos / velocidades[vel].v
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quanto tempo para testar todas as senhas?</p>
      <label htmlFor={id} className="mt-2 block font-semibold">Tamanho da senha: <span className="text-azul">{tam}</span> caracteres</label>
      <input id={id} type="range" min={4} max={16} value={tam} onChange={(e) => setTam(Number(e.target.value))} className="h-11 w-full cursor-pointer accent-[var(--color-azul)]" />
      <div className="mt-1 flex flex-wrap gap-2">
        {alfabetos.map((a, i) => (
          <button key={a.n} type="button" aria-pressed={al === i} onClick={() => setAl(i)}
            className={`min-h-11 rounded-xl border-2 px-3 text-[14px] ${al === i ? 'border-verde bg-fundo font-bold' : 'border-borda'}`}>{a.rotulo}</button>
        ))}
      </div>
      <div className="mt-2 space-y-2">
        {velocidades.map((v, i) => (
          <button key={v.v} type="button" aria-pressed={vel === i} onClick={() => setVel(i)}
            className={`min-h-11 w-full rounded-xl border-2 px-3 text-left text-[14px] ${vel === i ? 'border-coral bg-fundo font-bold' : 'border-borda'}`}>{v.rotulo}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Combinações possíveis: <strong>{combos.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</strong>. Tempo para testar todas: <strong>{formatar(seg)}</strong>.
      </p>
      <p className="mt-2 text-[14px] text-suave">Números de brinquedo para comparar tamanhos; ataques reais variam muito.</p>
    </div>
  )
}
