import { useId } from 'react'
import { nomeCurto } from '../../lib/narracao'
import { useNarracao, VELOCIDADES } from '../../hooks/useNarracao'

type Narracao = ReturnType<typeof useNarracao>

const campo = 'min-h-11 w-full rounded-xl border border-borda bg-superficie px-3 font-semibold text-texto'
const formatarVelocidade = (v: number) => v.toLocaleString('pt-BR') + '×'

// Ajustes da narração: escolher a voz (as melhores aparecem primeiro), a velocidade e ouvir um teste
export default function PainelVoz({ narracao: n }: { narracao: Narracao }) {
  const idVoz = useId()
  const idVelocidade = useId()
  const temVozNatural = n.vozes.some((v) => /natural|neural|google/i.test(v.name))

  return (
    <div className="mt-3 grid gap-4 rounded-2xl bg-fundo p-4 sm:grid-cols-[1fr_auto]">
      <div>
        <label htmlFor={idVoz} className="text-sm font-semibold">Voz</label>
        <select id={idVoz} value={n.voz?.name ?? ''} onChange={(e) => n.mudarVoz(e.target.value)} className={`${campo} mt-1`}>
          {n.vozes.map((v) => (
            <option key={v.name} value={v.name}>{nomeCurto(v)}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={idVelocidade} className="text-sm font-semibold">Velocidade</label>
        <select
          id={idVelocidade}
          value={n.velocidade}
          onChange={(e) => n.mudarVelocidade(Number(e.target.value))}
          className={`${campo} mt-1 sm:w-28`}
        >
          {VELOCIDADES.map((v) => (
            <option key={v} value={v}>{formatarVelocidade(v)}</option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={n.testarVoz}
        disabled={n.estado !== 'parado'}
        className="min-h-11 rounded-full border border-borda bg-superficie px-5 font-semibold transition hover:border-azul disabled:opacity-40 sm:col-span-2 sm:justify-self-start"
      >
        Ouvir um teste
      </button>

      {!temVozNatural && (
        <p className="text-sm text-suave sm:col-span-2">
          <strong className="text-texto">Dica:</strong> as vozes deste navegador são as mais simples. No{' '}
          <strong className="text-texto">Microsoft Edge</strong> aparecem vozes naturais (Francisca e Antonio) bem mais
          agradáveis, e no <strong className="text-texto">Chrome</strong>, a voz do Google.
        </p>
      )}
    </div>
  )
}
