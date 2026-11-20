import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Os cinco modelos do átomo, um de cada vez
const modelos = [
  { nome: 'Dalton (1808)', ideia: 'Bolinha maciça e indivisível, uma por elemento. Explica as proporções fixas das reações, mas não sabe nada de eletricidade.' },
  { nome: 'Thomson (1904)', ideia: 'Esfera positiva com elétrons espetados dentro, o "pudim de passas". Explica os elétrons e a neutralidade.' },
  { nome: 'Rutherford (1911)', ideia: 'Núcleo minúsculo e positivo no centro, com os elétrons girando longe, em volta. Explica os desvios das partículas alfa.' },
  { nome: 'Bohr (1913)', ideia: 'Elétrons em órbitas (camadas) de energias fixas. Ao pular de uma para outra, emitem ou absorvem luz de cor específica.' },
  { nome: 'Orbitais (1926)', ideia: 'O elétron não tem trajetória: há regiões (orbitais) onde é provável encontrá-lo. É o modelo da mecânica quântica, usado hoje.' },
]

function Desenho({ k }: { k: number }) {
  return (
    <svg viewBox="0 0 160 110" className="mx-auto w-full max-w-[220px] rounded-2xl bg-fundo" role="img" aria-label={`Desenho do modelo ${modelos[k].nome}`}>
      {k === 0 && <circle cx={80} cy={55} r={34} fill="var(--color-azul)" fillOpacity="0.5" stroke="var(--color-azul)" />}
      {k === 1 && (
        <>
          <circle cx={80} cy={55} r={40} fill="var(--color-coral)" fillOpacity="0.25" stroke="var(--color-coral)" />
          {[[62, 42], [96, 48], [70, 72], [98, 74], [80, 56], [58, 62]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill="var(--color-azul)" />)}
        </>
      )}
      {k === 2 && (
        <>
          <circle cx={80} cy={55} r={5} fill="var(--color-coral)" />
          <circle cx={80} cy={55} r={42} fill="none" stroke="var(--color-borda)" strokeDasharray="3 3" />
          <circle cx={122} cy={55} r={4} fill="var(--color-azul)" /><circle cx={50} cy={83} r={4} fill="var(--color-azul)" /><circle cx={60} cy={22} r={4} fill="var(--color-azul)" />
        </>
      )}
      {k === 3 && (
        <>
          <circle cx={80} cy={55} r={5} fill="var(--color-coral)" />
          {[16, 30, 44].map((r) => <circle key={r} cx={80} cy={55} r={r} fill="none" stroke="var(--color-borda)" />)}
          <circle cx={96} cy={55} r={3.5} fill="var(--color-azul)" /><circle cx={80} cy={25} r={3.5} fill="var(--color-azul)" /><circle cx={52} cy={72} r={3.5} fill="var(--color-azul)" />
        </>
      )}
      {k === 4 && (
        <>
          <circle cx={80} cy={55} r={4} fill="var(--color-coral)" />
          <ellipse cx={80} cy={55} rx={44} ry={26} fill="var(--color-azul)" fillOpacity="0.18" />
          <ellipse cx={80} cy={55} rx={26} ry={16} fill="var(--color-azul)" fillOpacity="0.25" />
          <ellipse cx={80} cy={55} rx={12} ry={34} fill="var(--color-verde)" fillOpacity="0.2" />
        </>
      )}
    </svg>
  )
}

export default function CincoModelos() {
  const [k, setK] = useState(0)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Cinco modelos em ordem</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Modelo atômico">
        {modelos.map((m, i) => (
          <button key={m.nome} type="button" aria-pressed={k === i} onClick={() => setK(i)} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${k === i ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{m.nome}</button>
        ))}
      </div>
      <div className="mt-3"><Desenho k={k} /></div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{modelos[k].nome}.</strong> {modelos[k].ideia}</p>
    </div>
  )
}
