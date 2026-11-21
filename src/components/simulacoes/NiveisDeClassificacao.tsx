import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Os níveis de classificação. Quanto mais níveis dois seres dividem, mais próximos eles são.
const niveis = ['Reino', 'Filo', 'Classe', 'Ordem', 'Família', 'Gênero', 'Espécie']
const seres = [
  { nome: 'Ser humano', n: ['Animalia', 'Chordata', 'Mammalia', 'Primates', 'Hominidae', 'Homo', 'Homo sapiens'] },
  { nome: 'Chimpanzé', n: ['Animalia', 'Chordata', 'Mammalia', 'Primates', 'Hominidae', 'Pan', 'Pan troglodytes'] },
  { nome: 'Gato doméstico', n: ['Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Felidae', 'Felis', 'Felis catus'] },
  { nome: 'Leão', n: ['Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Felidae', 'Panthera', 'Panthera leo'] },
  { nome: 'Cachorro', n: ['Animalia', 'Chordata', 'Mammalia', 'Carnivora', 'Canidae', 'Canis', 'Canis familiaris'] },
  { nome: 'Carvalho', n: ['Plantae', 'Tracheophyta', 'Magnoliopsida', 'Fagales', 'Fagaceae', 'Quercus', 'Quercus robur'] },
]

export default function NiveisDeClassificacao() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(2)
  const idx = useId()
  const idy = useId()
  const A = seres[x].n
  const B = seres[y].n
  let comum = 0
  while (comum < A.length && A[comum] === B[comum]) comum++
  const sel = 'mt-1 min-h-11 w-full rounded-xl border border-borda bg-superficie px-3 text-[15px]'
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Quem divide mais níveis?</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label htmlFor={idx} className="block text-sm font-semibold">Ser vivo 1
          <select id={idx} value={x} onChange={(e) => setX(Number(e.target.value))} className={sel}>{seres.map((s, k) => <option key={s.nome} value={k}>{s.nome}</option>)}</select>
        </label>
        <label htmlFor={idy} className="block text-sm font-semibold">Ser vivo 2
          <select id={idy} value={y} onChange={(e) => setY(Number(e.target.value))} className={sel}>{seres.map((s, k) => <option key={s.nome} value={k}>{s.nome}</option>)}</select>
        </label>
      </div>
      <div className="mt-3 overflow-hidden rounded-2xl border border-borda text-[14px]" role="table" aria-label="Níveis de classificação">
        {niveis.map((n, k) => (
          <div key={n} role="row" className={`grid grid-cols-[5.5rem_1fr_1fr] gap-2 px-3 py-2 ${k < comum ? 'bg-verde/20' : ''} ${k > 0 ? 'border-t border-borda' : ''}`}>
            <span role="cell" className="font-semibold">{n}</span>
            <span role="cell" className="italic">{A[k]}</span>
            <span role="cell" className="italic">{B[k]}</span>
          </div>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {comum === 0 ? 'Nem o reino é o mesmo: um é animal e o outro é planta.' : comum === 7 ? 'É o mesmo ser vivo.' : <>Dividem tudo até <strong>{niveis[comum - 1].toLowerCase()}</strong> ({comum} {comum === 1 ? 'nível' : 'níveis'} em verde). {comum >= 5 ? 'São parentes bem próximos.' : comum >= 3 ? 'São parentes mais distantes.' : 'São parentes bem distantes.'}</>}
      </p>
    </div>
  )
}
