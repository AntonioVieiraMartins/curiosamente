import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Sólidos geométricos: faces, arestas e vértices. Nos poliedros vale V − A + F = 2 (Euler)
const solidos = [
  { nome: 'Cubo', f: 6, a: 12, v: 8, poli: true, dica: 'como um dado: 6 faces quadradas' },
  { nome: 'Paralelepípedo', f: 6, a: 12, v: 8, poli: true, dica: 'como uma caixa de sapato' },
  { nome: 'Pirâmide de base quadrada', f: 5, a: 8, v: 5, poli: true, dica: '1 base e 4 triângulos' },
  { nome: 'Prisma de base triangular', f: 5, a: 9, v: 6, poli: true, dica: 'como uma barra de chocolate triangular' },
  { nome: 'Cilindro', f: 3, a: 2, v: 0, poli: false, dica: 'uma lata: 2 bases redondas e 1 lateral curva' },
  { nome: 'Cone', f: 2, a: 1, v: 1, poli: false, dica: 'um chapéu de festa: 1 base redonda e 1 lateral curva' },
  { nome: 'Esfera', f: 1, a: 0, v: 0, poli: false, dica: 'uma bola: só uma superfície curva' },
]

export default function SolidosFacesArestas() {
  const [i, setI] = useState(0)
  const s = solidos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Faces, arestas e vértices</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha o sólido">
        {solidos.map((x, k) => (
          <button key={x.nome} type="button" aria-pressed={i === k} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 text-[15px] font-semibold ${i === k ? 'border-azul bg-azul-claro' : 'border-borda'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        {[['Faces', s.f], ['Arestas', s.a], ['Vértices', s.v]].map(([r, v]) => (
          <div key={r as string} className="rounded-2xl border border-borda p-3">
            <div className="text-xs font-semibold text-suave">{r}</div>
            <div className="text-2xl font-bold">{v}</div>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {s.nome}: {s.dica}.{' '}
        {s.poli
          ? <>É um <b>poliedro</b> (só faces planas). Confira: V − A + F = {s.v} − {s.a} + {s.f} = <b>{s.v - s.a + s.f}</b>. Nos poliedros isso dá sempre 2.</>
          : <>Tem superfície <b>curva</b>, então <b>não é poliedro</b>. Faces curvas e bordas curvas são contadas de modo diferente.</>}
      </p>
    </div>
  )
}
