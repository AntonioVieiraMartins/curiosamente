// Logotipo: dois círculos que se encontram, uma ideia puxando a outra
export default function Marca() {
  return (
    <span className="flex items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="13" cy="17" r="11" fill="var(--color-amarelo)" />
        <circle cx="21" cy="11" r="7" fill="var(--color-azul)" />
      </svg>
      <span className="text-[19px] font-bold tracking-tight">Curiosamente</span>
    </span>
  )
}
