import { useState } from 'react'
import { cartao } from '../ui/estilos'

// Para cada fato, qual é o primeiro modelo que consegue explicar?
const modelos = ['Dalton', 'Thomson', 'Rutherford', 'Bohr', 'Orbitais']
const fatos = [
  { texto: 'Os elementos se combinam em proporções fixas de massa (ex.: 8 g de oxigênio para 1 g de hidrogênio na água).', certo: 0, porque: 'A ideia de átomos de massa fixa, uma por elemento, já explica as proporções.' },
  { texto: 'Dentro do átomo existem partículas negativas muito leves, os elétrons, e o átomo todo é neutro.', certo: 1, porque: 'Thomson juntou elétrons negativos numa esfera positiva que deixa o conjunto neutro.' },
  { texto: 'Algumas partículas alfa disparadas contra uma folha de ouro voltam para trás.', certo: 2, porque: 'Só um núcleo pequeno, pesado e positivo faz uma partícula quicar de volta.' },
  { texto: 'O hidrogênio aquecido emite luz só em algumas cores bem definidas, e não um arco-íris contínuo.', certo: 3, porque: 'Bohr propôs níveis de energia fixos: só saltos específicos, só cores específicas.' },
  { texto: 'Não dá para saber ao mesmo tempo a posição exata e a velocidade exata de um elétron.', certo: 4, porque: 'Só o modelo quântico (orbitais, probabilidades) incorpora esse limite natural, o princípio da incerteza de Heisenberg.' },
]

export default function QualModeloExplica() {
  const [i, setI] = useState(0)
  const [resp, setResp] = useState<number | null>(null)
  const f = fatos[i]
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Fato {i + 1} de {fatos.length}: qual modelo explica?</p>
      <p className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">{f.texto}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Modelos">
        {modelos.map((m, k) => (
          <button key={m} type="button" disabled={resp !== null} onClick={() => setResp(k)} className={`min-h-11 rounded-full border px-4 text-[15px] font-semibold ${resp === k ? (k === f.certo ? 'border-verde bg-verde/20' : 'border-coral bg-coral/20') : 'border-borda bg-superficie'}`}>{m}</button>
        ))}
      </div>
      {resp !== null && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          {resp === f.certo ? 'Isso! ' : `O certo é ${modelos[f.certo]}. `}{f.porque}
        </p>
      )}
      {resp !== null && i < fatos.length - 1 && (
        <button type="button" onClick={() => { setI(i + 1); setResp(null) }} className="mt-3 min-h-11 rounded-full bg-texto px-5 text-[15px] font-semibold text-white">Próximo fato</button>
      )}
      {resp !== null && i === fatos.length - 1 && (
        <button type="button" onClick={() => { setI(0); setResp(null) }} className="mt-3 min-h-11 rounded-full border border-borda bg-superficie px-5 text-[15px] font-semibold">Recomeçar</button>
      )}
    </div>
  )
}
