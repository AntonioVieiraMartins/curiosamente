import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// A "escada" do sistema métrico: cada degrau vale 10 vezes o vizinho, então converter é andar com a vírgula
const familias = {
  comprimento: { base: 'm', nomes: ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], titulo: 'Comprimento (metro)' },
  massa: { base: 'g', nomes: ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'], titulo: 'Massa (grama)' },
  capacidade: { base: 'L', nomes: ['kL', 'hL', 'daL', 'L', 'dL', 'cL', 'mL'], titulo: 'Capacidade (litro)' },
} as const
type Chave = keyof typeof familias

// Evita 0.30000000000000004: mostra no máximo 6 casas e usa vírgula
const fmt = (n: number) => String(Number(n.toFixed(6))).replace('.', ',')

export default function EscadaDasUnidades() {
  const [fam, setFam] = useState<Chave>('comprimento')
  const [de, setDe] = useState(3)
  const [valor, setValor] = useState('2,5')
  const idv = useId()
  const f = familias[fam]
  const n = Number(valor.replace(',', '.'))
  const ok = valor.trim() !== '' && Number.isFinite(n)
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A escada das unidades</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Escolha a grandeza">
        {(Object.keys(familias) as Chave[]).map((k) => (
          <button key={k} type="button" aria-pressed={fam === k} onClick={() => { setFam(k); setDe(3) }}
            className={`min-h-11 rounded-full border-2 px-4 text-[15px] font-semibold ${fam === k ? 'border-azul bg-azul-claro' : 'border-borda'}`}>
            {familias[k].titulo}
          </button>
        ))}
      </div>
      <label htmlFor={idv} className="mt-3 block text-[15px]">Quanto você tem?
        <input id={idv} inputMode="decimal" value={valor} onChange={(e) => setValor(e.target.value)}
          className="mt-1 block min-h-11 w-40 rounded-xl border border-borda px-3 text-base" />
      </label>
      <p className="mt-3 text-[15px]">Em qual unidade? Toque num degrau:</p>
      <div className="mt-2 grid grid-cols-7 gap-1.5" role="group" aria-label="Unidade de partida">
        {f.nomes.map((nome, i) => (
          <button key={nome} type="button" aria-pressed={de === i} onClick={() => setDe(i)}
            className={`min-h-11 rounded-xl border-2 text-[15px] font-bold ${de === i ? 'border-coral bg-fundo' : 'border-borda'}`}>{nome}</button>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto">
        <div className="grid min-w-[420px] grid-cols-7 gap-1.5 text-center">
          {f.nomes.map((nome, i) => (
            <div key={nome} className={`rounded-xl border p-2 ${i === de ? 'border-coral bg-fundo' : 'border-borda'}`}>
              <div className="text-xs font-semibold text-suave">{nome}</div>
              <div className="mt-1 text-[15px] font-bold">{ok ? fmt(n * 10 ** (i - de)) : '—'}</div>
            </div>
          ))}
        </div>
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
        {ok
          ? `${fmt(n)} ${f.nomes[de]} é o mesmo que ${fmt(n * 10 ** (3 - de))} ${f.base}. Cada degrau para a direita (unidade menor) multiplica por 10: a vírgula anda uma casa para a direita. Para a esquerda, divide por 10.`
          : 'Digite um número, como 2,5.'}
      </p>
    </div>
  )
}
