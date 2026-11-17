import { useState } from 'react'
import { cartao } from '../ui/estilos'
import Contador from './Contador'
import { mdc } from '../../lib/fracoes'

// O maior ladrilho quadrado que cobre um retângulo sem cortar é o MDC dos dois lados.
export default function LadrilhoMDC() {
  const [largura, setLargura] = useState(12)
  const [altura, setAltura] = useState(8)
  const lado = mdc(largura, altura)
  const colunas = largura / lado
  const linhas = altura / lado

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">O maior ladrilho</p>
      <div className="mt-3 grid grid-cols-2 gap-4">
        <Contador grupo="Chão" rotulo="Largura" valor={largura} min={1} max={16} mudar={setLargura} />
        <Contador grupo="Chão" rotulo="Altura" valor={altura} min={1} max={16} mudar={setAltura} />
      </div>

      <svg viewBox={`0 0 ${largura} ${altura}`} className="mx-auto mt-4 w-full max-w-sm" aria-hidden="true">
        {Array.from({ length: linhas * colunas }, (_, i) => (
          <rect key={i} x={(i % colunas) * lado + 0.05} y={Math.floor(i / colunas) * lado + 0.05} width={lado - 0.1} height={lado - 0.1} rx="0.15"
            fill={(i + Math.floor(i / colunas)) % 2 ? 'var(--color-azul)' : 'var(--color-amarelo)'} fillOpacity="0.55" />
        ))}
      </svg>

      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4">
        Chão de {largura} × {altura}: o maior ladrilho quadrado sem cortar tem lado <strong className="text-coral">{lado}</strong>.
        Cabem {colunas} × {linhas} = {colunas * linhas} ladrilhos. Esse lado é o <strong>MDC</strong> de {largura} e {altura}.
      </p>
    </div>
  )
}
