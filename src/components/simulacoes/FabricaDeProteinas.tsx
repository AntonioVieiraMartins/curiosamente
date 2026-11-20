import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

const ETAPAS = [
  { lugar: 'Núcleo', texto: 'A célula precisa de uma proteína (por exemplo, a insulina). O núcleo copia o gene correspondente numa molécula mensageira, o RNA.' },
  { lugar: 'Saída do núcleo', texto: 'O RNA mensageiro sai do núcleo pelos poros da membrana nuclear e vai para o citoplasma.' },
  { lugar: 'Ribossomo', texto: 'O ribossomo lê o RNA e junta os aminoácidos na ordem certa. Nasce a cadeia da proteína.' },
  { lugar: 'Retículo e Golgi', texto: 'A proteína é dobrada e ajustada no retículo, e depois é embalada e etiquetada no complexo de Golgi.' },
  { lugar: 'Membrana', texto: 'Uma bolsinha (vesícula) leva a proteína até a membrana, que a libera para fora da célula. Missão cumprida.' },
]
const X = [20, 55, 90, 125, 165]

// Caminho de uma proteína: do gene no núcleo até a saída da célula
export default function FabricaDeProteinas() {
  const [e, setE] = useState(1)
  const at = ETAPAS[e - 1]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A linha de montagem da proteína</p>
      <svg viewBox="0 0 200 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Etapa ${e}: ${at.lugar}`}>
        {X.map((x, i) => (
          <g key={x}>
            {i > 0 && <line x1={X[i - 1] + 8} y1={30} x2={x - 8} y2={30} stroke="var(--color-borda)" strokeWidth="2" />}
            <circle cx={x} cy={30} r={i + 1 === e ? 11 : 8} fill={i + 1 === e ? 'var(--color-coral)' : i + 1 < e ? 'var(--color-verde)' : 'var(--color-borda)'} />
            <text x={x} y={33} textAnchor="middle" fontSize="9" fontWeight="700" fill="white">{i + 1}</text>
            <text x={x} y={58} textAnchor="middle" fontSize="6.5" fill="var(--color-texto)">{ETAPAS[i].lugar}</text>
          </g>
        ))}
      </svg>
      <div className="mt-3"><Deslizante rotulo="Etapa" valor={e} min={1} max={5} aoMudar={setE} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{e}. {at.lugar}.</strong> {at.texto}</p>
    </div>
  )
}
