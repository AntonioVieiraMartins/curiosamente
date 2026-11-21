import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Os grandes grupos da vida: 3 domínios, e os 4 grupos de eucariontes usados no ensino básico
const grupos = [
  { nome: 'Bactérias', dominio: 'Bacteria', celula: 'Procarionte (sem núcleo)', parede: 'Sim, de peptideoglicano', comida: 'Muito variada: decompõem, fazem fotossíntese ou parasitam', ex: 'E. coli, lactobacilos do iogurte' },
  { nome: 'Arqueias', dominio: 'Archaea', celula: 'Procarionte (sem núcleo)', parede: 'Sim, mas de composição diferente das bactérias', comida: 'Variada. Muitas vivem em fontes quentes ou lagos salgados, mas também no solo e no mar', ex: 'Halobacterium, arqueias que produzem metano' },
  { nome: 'Protistas', dominio: 'Eukarya', celula: 'Eucarionte, em geral unicelular', parede: 'Varia (algas têm; amebas não)', comida: 'Varia: algas fazem fotossíntese, amebas engolem alimento', ex: 'ameba, paramécio, alga verde, o causador da malária' },
  { nome: 'Fungos', dominio: 'Eukarya', celula: 'Eucarionte, uni ou pluricelular', parede: 'Sim, de quitina', comida: 'Absorvem alimento que digerem fora do corpo', ex: 'cogumelo, levedura, bolor' },
  { nome: 'Plantas', dominio: 'Eukarya', celula: 'Eucarionte, pluricelular', parede: 'Sim, de celulose', comida: 'Fazem fotossíntese', ex: 'samambaia, pinheiro, ipê' },
  { nome: 'Animais', dominio: 'Eukarya', celula: 'Eucarionte, pluricelular', parede: 'Não', comida: 'Ingerem alimento pronto', ex: 'esponja, minhoca, peixe, gente' },
]

export default function DominiosEReinos() {
  const [i, setI] = useState(0)
  const g = grupos[i]
  const linha = (rot: string, v: string) => <div className="flex flex-col gap-0.5 border-t border-borda py-2 sm:flex-row sm:gap-3"><span className="w-32 shrink-0 font-semibold">{rot}</span><span>{v}</span></div>
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Domínios e grupos da vida</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha um grupo">
        {grupos.map((x, k) => (
          <button key={x.nome} type="button" onClick={() => setI(k)} aria-pressed={i === k} className={`min-h-11 rounded-full border px-3 text-[14px] font-semibold ${i === k ? 'border-texto bg-texto text-white' : 'border-borda bg-superficie'}`}>{x.nome}</button>
        ))}
      </div>
      <div className="mt-3 text-[15px]" aria-live="polite">
        {linha('Domínio', g.dominio)}
        {linha('Tipo de célula', g.celula)}
        {linha('Parede celular', g.parede)}
        {linha('Como se alimenta', g.comida)}
        {linha('Exemplos', g.ex)}
      </div>
      {g.nome === 'Protistas' && <p className="mt-2 rounded-2xl bg-fundo p-3 text-sm">Aviso: "protistas" é um grupo de conveniência. Eles não têm um único ancestral exclusivo, e os cientistas hoje dividem esses seres em vários grupos.</p>}
    </div>
  )
}
