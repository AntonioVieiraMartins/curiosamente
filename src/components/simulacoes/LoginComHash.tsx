import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'
import { hashDeBrinquedo } from './hashDeBrinquedo'

const SENHA = 'gato123'

// O que o ladrão vê se o banco de dados vazar, e como o login funciona só com o hash.
export default function LoginComHash() {
  const [guardaHash, setGuardaHash] = useState(false)
  const [tentativa, setTentativa] = useState('')
  const [enviou, setEnviou] = useState(false)
  const id = useId()
  const guardado = guardaHash ? hashDeBrinquedo(SENHA) : SENHA
  const confere = guardaHash ? hashDeBrinquedo(tentativa) === guardado : tentativa === guardado
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">A senha da Ana é "{SENHA}"</p>
      <button type="button" aria-pressed={guardaHash} onClick={() => { setGuardaHash(!guardaHash); setEnviou(false) }}
        className={`mt-2 min-h-11 w-full rounded-xl border-2 px-3 text-left text-[15px] ${guardaHash ? 'border-verde' : 'border-coral'}`}>
        {guardaHash ? 'O banco guarda o HASH da senha' : 'O banco guarda a SENHA PURA'}
      </button>
      <p className="mt-2 rounded-2xl bg-amarelo p-3 font-mono text-[15px]">Se o banco vazar, o ladrão lê: ana → <strong>{guardado}</strong></p>
      <label htmlFor={id} className="mt-3 block font-semibold">Tentar entrar como Ana</label>
      <input id={id} value={tentativa} onChange={(e) => { setTentativa(e.target.value); setEnviou(false) }} className="min-h-11 w-full rounded-xl border-2 border-borda px-3 text-base" />
      <button type="button" onClick={() => setEnviou(true)} className="mt-2 min-h-11 rounded-full border-2 border-azul px-4 font-semibold">Entrar</button>
      {enviou && (
        <p aria-live="polite" className="mt-3 rounded-2xl bg-fundo p-4 text-[15px]">
          {confere ? 'Entrou!' : 'Senha errada.'} {guardaHash ? 'O servidor calcula o hash do que você digitou e compara com o guardado. A senha nunca precisa ser guardada.' : 'O servidor comparou texto com texto, e esse texto está exposto.'}
        </p>
      )}
    </div>
  )
}
