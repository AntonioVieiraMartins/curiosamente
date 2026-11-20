import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Deslizante from './Deslizante'

// PCR: a cada ciclo (esquentar, esfriar, copiar) o número de cópias dobra
export default function CopiasDaPcr() {
  const [n, setN] = useState(10)
  const copias = 2 ** n
  const largura = Math.min(200, (n / 35) * 200)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">PCR: fotocopiadora de DNA</p>
      <svg viewBox="0 0 220 70" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`${copias} cópias depois de ${n} ciclos`}>
        <rect x="10" y="20" width="200" height="14" rx="7" fill="var(--color-borda)" />
        <rect x="10" y="20" width={largura} height="14" rx="7" fill="var(--color-azul)" />
        <text x="110" y="54" textAnchor="middle" fontSize="9" fill="var(--color-suave)">Cada ciclo: 95 °C separa, 55 °C encaixa, 72 °C copia</text>
      </svg>
      <div className="mt-3"><Deslizante rotulo="Ciclos" valor={n} min={0} max={35} passo={1} aoMudar={setN} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        Depois de {n} {n === 1 ? 'ciclo' : 'ciclos'}: {copias.toLocaleString('pt-BR')} {copias === 1 ? 'cópia' : 'cópias'} (2 elevado a {n}).
        {n >= 30 ? ' Com 30 ciclos já são mais de 1 bilhão de cópias, a partir de uma única molécula, em cerca de 1 ou 2 horas.' : ''}
        {n < 30 && n >= 20 ? ' Mais de 1 milhão de cópias: já dá para ver o DNA em um gel.' : ''}
      </p>
    </div>
  )
}
