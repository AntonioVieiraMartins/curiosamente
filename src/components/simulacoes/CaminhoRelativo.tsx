import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { discoInicial, separar } from './pastasDeBrinquedo'

const pastas = Object.keys(discoInicial).filter((k) => discoInicial[k].tipo === 'pasta')

// Sobe até a pasta em comum (cada subida é ".."), depois desce até o destino.
function relativo(de: string, para: string) {
  const a = separar(de)
  const b = separar(para)
  let i = 0
  while (i < a.length && i < b.length && a[i].toLowerCase() === b[i].toLowerCase()) i++
  const subir = Array(a.length - i).fill('..')
  const descer = b.slice(i)
  const p = [...subir, ...descer]
  return p.length ? p.join('\\') : '.'
}

export default function CaminhoRelativo() {
  const [de, setDe] = useState('C:\\Users\\voce\\Documentos')
  const [para, setPara] = useState('C:\\Users\\voce\\Fotos')
  const id1 = useId()
  const id2 = useId()
  const sel = 'mt-1 h-12 w-full rounded-xl border-2 border-borda bg-superficie px-3 font-mono text-sm focus:border-azul focus:outline-none'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Como chegar de uma pasta a outra</p>
      <label htmlFor={id1} className="mt-3 block font-semibold">Estou em:</label>
      <select id={id1} value={de} onChange={(e) => setDe(e.target.value)} className={sel}>{pastas.map((p) => <option key={p}>{p}</option>)}</select>
      <label htmlFor={id2} className="mt-3 block font-semibold">Quero ir para:</label>
      <select id={id2} value={para} onChange={(e) => setPara(e.target.value)} className={sel}>{pastas.map((p) => <option key={p}>{p}</option>)}</select>
      <p aria-live="polite" className="mt-3 break-all rounded-2xl bg-fundo p-4 text-[15px]">
        Caminho <strong>relativo</strong>: <code className="font-mono text-coral">cd {relativo(de, para)}</code>
        <span className="mt-1 block text-suave">Caminho <strong>absoluto</strong> (funciona de qualquer lugar): <code className="font-mono">cd {para}</code></span>
      </p>
    </div>
  )
}
