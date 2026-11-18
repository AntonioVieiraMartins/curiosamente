import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Treino de bom senso: qual unidade combina com cada coisa?
const itens = [
  { coisa: 'a distância entre duas cidades', certa: 'km', opcoes: ['mm', 'm', 'km'], porque: 'Distâncias longas ficam em quilômetros: 80 km é fácil de ler, 80.000.000 mm não.' },
  { coisa: 'a espessura de uma folha de papel', certa: 'mm', opcoes: ['mm', 'cm', 'm'], porque: 'Uma folha é finíssima: menos de 1 mm. Em metros daria um número minúsculo.' },
  { coisa: 'o pacote de açúcar do mercado', certa: 'kg', opcoes: ['mg', 'kg', 't'], porque: 'O pacote de açúcar costuma ser de 1 kg ou 5 kg.' },
  { coisa: 'a dose de um remédio em gotas', certa: 'mL', opcoes: ['mL', 'L', 'kg'], porque: 'Doses pequenas de líquido são medidas em mililitros.' },
  { coisa: 'a água de uma caixa-d\'água de casa', certa: 'L', opcoes: ['mL', 'L', 'mm'], porque: 'Uma caixa-d\'água guarda centenas ou milhares de litros.' },
  { coisa: 'a carga de um caminhão', certa: 't', opcoes: ['g', 'kg', 't'], porque: 'Cargas enormes ficam em toneladas: 1 t = 1.000 kg.' },
]

export default function EscolhaAUnidade() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<string | null>(null)
  const it = itens[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Qual unidade combina? ({i + 1} de {itens.length})</p>
      <p className="mt-2 text-lg font-semibold">Para medir {it.coisa}, a melhor unidade é:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {it.opcoes.map((o) => (
          <button key={o} type="button" disabled={resp !== null} onClick={() => setResp(o)}
            className={`min-h-11 min-w-16 rounded-full border-2 px-5 font-bold ${resp === o ? (o === it.certa ? 'border-verde bg-fundo' : 'border-coral bg-fundo') : 'border-borda'}`}>{o}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 min-h-[3rem] rounded-2xl bg-fundo p-4 text-[15px]">
        {resp === null ? 'Escolha uma unidade.' : `${resp === it.certa ? 'Isso mesmo! ' : `Ainda não: a melhor é ${it.certa}. `}${it.porque}`}
      </p>
      {resp !== null && (
        <button type="button" onClick={() => { setResp(null); setI((i + 1) % itens.length) }} className="mt-3 min-h-11 rounded-full border border-borda px-5 font-semibold">Próxima</button>
      )}
    </div>
  )
}
