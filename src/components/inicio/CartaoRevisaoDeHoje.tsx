import { Link } from 'react-router-dom'

// Cartão azul com quantos cartões esperam revisão hoje
export default function CartaoRevisaoDeHoje({ n }: { n: number }) {
  const minutos = Math.max(1, Math.round(n / 2)) // uns 30 s por cartão
  const rotulo = n === 1 ? 'cartão' : 'cartões'
  return (
    <Link to="/revisar" className="flex items-center gap-3 rounded-[18px] bg-azul-claro px-4 py-3.5 sm:flex-col sm:items-stretch sm:gap-2.5 sm:rounded-3xl sm:p-6">
      <span className="hidden text-xs font-semibold uppercase tracking-[0.08em] text-azul-texto sm:block">Revisão de hoje</span>
      <span className="font-serif text-[30px] font-medium leading-none text-azul-texto sm:text-[44px] sm:text-texto">{n}</span>
      <span className="flex-1 text-[15px] leading-snug">
        {rotulo} <span className="sm:hidden">para revisar hoje</span><span className="hidden sm:inline">esperando · </span>
        <span className="block text-[13px] text-suave sm:inline sm:text-[15px] sm:text-texto">uns {minutos} min</span>
      </span>
      <span className="text-sm font-semibold text-azul-texto sm:mt-auto sm:flex sm:min-h-11 sm:items-center sm:justify-center sm:rounded-full sm:bg-superficie sm:text-base">
        Revisar<span className="hidden sm:inline"> agora</span>
      </span>
    </Link>
  )
}
