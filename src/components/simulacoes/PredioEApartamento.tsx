import { useState } from 'react'
import { cartao } from '../ui/estilos'

const servicos = [
  { porta: 22, nome: 'SSH', texto: 'Entrar num computador remoto com segurança, pelo terminal.' },
  { porta: 25, nome: 'SMTP', texto: 'Entregar e-mail.' },
  { porta: 53, nome: 'DNS', texto: 'Traduzir nomes de sites em endereços IP.' },
  { porta: 80, nome: 'HTTP', texto: 'Páginas da Web, sem cadeado.' },
  { porta: 443, nome: 'HTTPS', texto: 'Páginas da Web com cadeado (criptografadas).' },
]

// O IP é o prédio; a porta é o apartamento. Cada serviço mora no seu.
export default function PredioEApartamento() {
  const [i, setI] = useState(3)
  const s = servicos[i]

  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Prédio (IP) e apartamento (porta)</p>
      <p className="mt-2 text-[15px] text-suave">O servidor está no prédio 203.0.113.10. Qual apartamento você bate?</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {servicos.map((x, k) => (
          <button key={x.porta} type="button" aria-pressed={k === i} onClick={() => setI(k)}
            className={`min-h-11 rounded-full border-2 px-4 font-semibold ${k === i ? 'border-azul bg-azul text-white' : 'border-borda'}`}>Porta {x.porta}</button>
        ))}
      </div>
      <p aria-live="polite" className="mt-3 rounded-2xl bg-amarelo p-4">
        Endereço completo: <strong className="font-mono">203.0.113.10:{s.porta}</strong>
        <span className="mt-1 block text-[15px]"><strong>{s.nome}</strong>: {s.texto}</span>
      </p>
    </div>
  )
}
