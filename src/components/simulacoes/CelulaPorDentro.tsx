import { useState } from 'react'
import { cartao } from '../ui/estilos'

type Tipo = 'animal' | 'vegetal'
type Org = { id: string; nome: string; funcao: string; so?: Tipo }
const ORGS: Org[] = [
  { id: 'membrana', nome: 'Membrana plasmática', funcao: 'Envolve a célula e controla o que entra e o que sai, como um porteiro.' },
  { id: 'nucleo', nome: 'Núcleo', funcao: 'Guarda o DNA e comanda a célula. Fica protegido por uma membrana própria.' },
  { id: 'mito', nome: 'Mitocôndria', funcao: 'Libera a energia dos alimentos (respiração celular) e a deixa pronta para uso, em forma de ATP.' },
  { id: 'ribossomo', nome: 'Ribossomos', funcao: 'Fabricam proteínas seguindo as instruções que saem do núcleo.' },
  { id: 'reticulo', nome: 'Retículo endoplasmático', funcao: 'Rede de canais que ajuda a fabricar e transportar substâncias dentro da célula.' },
  { id: 'golgi', nome: 'Complexo de Golgi', funcao: 'Recebe, embala e despacha as proteínas, como uma central dos Correios.' },
  { id: 'lisossomo', nome: 'Lisossomo', funcao: 'Bolsinha com enzimas que digerem o que a célula não quer mais e o que ela comeu.' },
  { id: 'parede', nome: 'Parede celular', funcao: 'Capa rígida de celulose por fora da membrana. Dá forma e proteção à célula da planta.', so: 'vegetal' },
  { id: 'cloro', nome: 'Cloroplasto', funcao: 'Faz a fotossíntese: usa luz, água e gás carbônico para fabricar açúcar.', so: 'vegetal' },
  { id: 'vacuolo', nome: 'Vacúolo central', funcao: 'Grande bolsa que armazena água e substâncias e ajuda a manter a célula firme.', so: 'vegetal' },
]
const POS: Record<string, [number, number]> = { nucleo: [100, 60], mito: [60, 85], ribossomo: [130, 85], reticulo: [140, 45], golgi: [60, 40], lisossomo: [155, 75], cloro: [50, 60], vacuolo: [100, 90] }

export default function CelulaPorDentro() {
  const [tipo, setTipo] = useState<Tipo>('animal')
  const [sel, setSel] = useState('nucleo')
  const lista = ORGS.filter((o) => !o.so || o.so === tipo)
  const atual = lista.find((o) => o.id === sel) ?? lista[0]
  const cor = (id: string) => (atual.id === id ? 'var(--color-coral)' : 'var(--color-azul)')
  const forma = tipo === 'vegetal' ? 'M 25 25 H 175 V 105 H 25 Z' : 'M 30 65 Q 25 20 100 18 Q 175 20 172 65 Q 175 110 100 112 Q 25 110 30 65 Z'

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A célula por dentro</p>
      <div className="mt-3 flex gap-2" role="group" aria-label="Tipo de célula">
        {(['animal', 'vegetal'] as Tipo[]).map((t) => (
          <button key={t} type="button" aria-pressed={tipo === t} onClick={() => { setTipo(t); setSel('nucleo') }}
            className={`min-h-11 rounded-full border-2 px-4 text-sm font-semibold ${tipo === t ? 'border-verde bg-verde text-white' : 'border-borda'}`}>Célula {t}</button>
        ))}
      </div>
      <svg viewBox="0 0 200 130" className="mx-auto mt-3 w-full max-w-sm rounded-2xl bg-fundo" role="img" aria-label={`Célula ${tipo} com a organela ${atual.nome} em destaque`}>
        <path d={forma} fill="var(--color-verde)" fillOpacity="0.12" stroke={cor('membrana')} strokeWidth={tipo === 'vegetal' ? 3 : 2} />
        {tipo === 'vegetal' && <path d="M 31 31 H 169 V 99 H 31 Z" fill="none" stroke={cor('parede') === 'var(--color-coral)' ? cor('parede') : 'var(--color-verde)'} strokeWidth="1.2" />}
        {tipo === 'vegetal' && <rect x={80} y={75} width={44} height={24} rx={10} fill={cor('vacuolo')} fillOpacity="0.35" stroke={cor('vacuolo')} />}
        <circle cx={POS.nucleo[0]} cy={POS.nucleo[1] - (tipo === 'vegetal' ? 10 : 0)} r={13} fill={cor('nucleo')} fillOpacity="0.4" stroke={cor('nucleo')} strokeWidth="2" />
        <ellipse cx={POS.mito[0]} cy={POS.mito[1] - (tipo === 'vegetal' ? 20 : 0)} rx={11} ry={6} fill={cor('mito')} fillOpacity="0.4" stroke={cor('mito')} strokeWidth="2" />
        {[0, 1, 2].map((i) => <circle key={i} cx={POS.ribossomo[0] + i * 6} cy={POS.ribossomo[1] - 10 + (i % 2) * 5 - (tipo === 'vegetal' ? 14 : 0)} r={2.4} fill={cor('ribossomo')} />)}
        <path d="M 130 38 q 10 -6 20 0 q -10 6 -20 8" fill="none" stroke={cor('reticulo')} strokeWidth="2.5" />
        <path d="M 52 36 q 8 -5 16 0 M 52 41 q 8 -5 16 0 M 52 46 q 8 -5 16 0" fill="none" stroke={cor('golgi')} strokeWidth="2.5" />
        <circle cx={POS.lisossomo[0]} cy={POS.lisossomo[1] - (tipo === 'vegetal' ? 14 : 0)} r={5} fill={cor('lisossomo')} />
        {tipo === 'vegetal' && [0, 1].map((i) => <ellipse key={i} cx={46 + i * 16} cy={70 + i * 8} rx={8} ry={5} fill={cor('cloro')} fillOpacity="0.5" stroke={cor('cloro')} strokeWidth="1.5" />)}
      </svg>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Organelas">
        {lista.map((o) => (
          <button key={o.id} type="button" aria-pressed={o.id === atual.id} onClick={() => setSel(o.id)}
            className={`min-h-11 rounded-full border-2 px-3 text-sm font-semibold ${o.id === atual.id ? 'border-coral bg-coral text-white' : 'border-borda'}`}>{o.nome}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]"><strong>{atual.nome}.</strong> {atual.funcao}</p>
    </div>
  )
}
