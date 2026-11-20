// Logotipo: uma lupa com o centro amarelo (a curiosidade olhando de perto)
export default function Marca({ somenteIcone = false, pequena = false }: { somenteIcone?: boolean; pequena?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="13" cy="13" r="9" fill="none" stroke="var(--color-texto)" strokeWidth="2.4" />
        <path d="M20 20l7 7" stroke="var(--color-texto)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="13" cy="13" r="3" fill="var(--color-amarelo)" />
      </svg>
      {!somenteIcone && (
        <span className={`font-serif font-medium tracking-tight ${pequena ? 'text-xl' : 'text-[22px]'}`}>Curiosamente</span>
      )}
    </span>
  )
}
