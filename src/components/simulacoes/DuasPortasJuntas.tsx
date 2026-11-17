import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Intuição em 3 passos: trocar de porta é o mesmo que ficar com as DUAS outras portas juntas
const passos = [
  'Você escolheu a porta 1. Ela tem ⅓ de chance. As outras duas, juntas, têm ⅔.',
  'Imagine que o apresentador oferecesse: "troque a sua porta pelas duas outras juntas". Você aceitaria? Claro: ⅔ é o dobro de ⅓.',
  'Agora ele abre uma das duas e mostra uma cabra. Isso não muda o grupo: ele só disse qual das duas NÃO tem o carro. Os ⅔ do grupo ficam todos na porta que sobrou.',
]

const arco = (x: number) => `M${x} 128 V58 A33 30 0 0 1 ${x + 66} 58 V128 Z`

export default function DuasPortasJuntas() {
  const [passo, setPasso] = useState(0)
  const aberta = passo === 2

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">
        Outro jeito de ver · passo {passo + 1} de {passos.length}
      </p>

      <svg viewBox="0 0 320 190" className="mt-3 w-full" role="img" aria-label={passos[passo]}>
        {/* grupo da sua porta */}
        <rect x="8" y="20" width="86" height="120" rx="16" fill="none" stroke="var(--color-azul)" strokeWidth="2.5" />
        <text x="51" y="166" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--color-azul-texto)">sua: ⅓</text>

        {/* grupo das outras duas */}
        <rect
          x="106" y="20" width="206" height="120" rx="16" fill="var(--color-amarelo)" fillOpacity={passo >= 1 ? 0.18 : 0}
          stroke="var(--color-amarelo-escuro)" strokeWidth="2.5" strokeDasharray={passo >= 1 ? '0' : '6 5'}
          className="transition-all duration-500"
        />
        <text x="209" y="166" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--color-amarelo-escuro)">
          {aberta ? 'tudo aqui: ⅔' : 'juntas: ⅔'}
        </text>

        <path d={arco(18)} fill="var(--color-azul)" />
        <text x="51" y="74" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">1</text>

        <path d={arco(124)} fill="var(--color-amarelo)" stroke={aberta ? 'var(--color-texto)' : 'none'} strokeWidth="3" />
        <text x="157" y="74" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--color-texto)">2</text>

        <path d={arco(228)} fill={aberta ? 'var(--color-texto)' : 'var(--color-amarelo)'} className="transition-colors duration-500" />
        <text x="261" y={aberta ? 100 : 74} textAnchor="middle" fontSize={aberta ? 13 : 18} fontWeight="700"
          fill={aberta ? 'var(--color-fundo)' : 'var(--color-texto)'}>
          {aberta ? 'cabra' : '3'}
        </text>
      </svg>

      <p aria-live="polite" className="mt-3 min-h-[6rem] text-[16px]">{passos[passo]}</p>

      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={() => setPasso((p) => p - 1)}
          disabled={passo === 0}
          aria-label="Passo anterior"
          className="min-h-11 rounded-full border border-borda px-5 font-semibold disabled:invisible"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => setPasso((p) => (p + 1) % passos.length)}
          className="min-h-11 flex-1 rounded-full bg-texto px-5 font-semibold text-white"
        >
          {passo === passos.length - 1 ? 'Ver de novo' : 'Próximo passo →'}
        </button>
      </div>
    </div>
  )
}
