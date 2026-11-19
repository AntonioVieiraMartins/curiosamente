import { useId, useState } from 'react'
import { cartao } from '../ui/estilos'

// Três palitos formam um triângulo? Só se cada um for menor que a soma dos outros dois.
export default function TrianguloComPalitos() {
  const [lados, setLados] = useState([3, 4, 5])
  const id = useId()
  const [a, b, c] = lados
  const fecha = a + b > c && a + c > b && b + c > a
  const ord = [...lados].sort((x, y) => x - y)
  const tipoLados = a === b && b === c ? 'equilátero (3 lados iguais)' : a === b || b === c || a === c ? 'isósceles (2 lados iguais)' : 'escaleno (3 lados diferentes)'
  const q = ord[0] ** 2 + ord[1] ** 2
  const m = ord[2] ** 2
  const tipoAngulo = q === m ? 'retângulo (tem um ângulo reto)' : q > m ? 'acutângulo (todos os ângulos agudos)' : 'obtusângulo (tem um ângulo obtuso)'

  // Base de comprimento c sobre o eixo; o vértice de cima sai do encontro dos lados a e b
  const k = 20
  const x = (b * b - a * a + c * c) / (2 * c)
  const y = Math.sqrt(Math.max(0, b * b - x * x))
  const ox = 20
  const oy = 190
  const cores = ['var(--color-azul)', 'var(--color-coral)', 'var(--color-verde)']
  return (
    <div data-sem-narracao className={`${cartao} p-4 sm:p-6`}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-suave">Três palitos fecham um triângulo?</p>
      {lados.map((v, i) => (
        <div key={i}>
          <label htmlFor={`${id}-${i}`} className="mt-2 block font-semibold">Palito {i + 1}: <span style={{ color: cores[i] }}>{v}</span></label>
          <input id={`${id}-${i}`} type="range" min={1} max={10} step={1} value={v}
            onChange={(e) => setLados(lados.map((s, j) => (j === i ? Number(e.target.value) : s)))}
            className="h-11 w-full cursor-pointer" style={{ accentColor: cores[i] }} />
        </div>
      ))}
      <svg viewBox="0 0 260 200" className="mt-2 w-full max-w-sm" role="img"
        aria-label={fecha ? 'Triângulo formado pelos três palitos' : 'Os três palitos não fecham um triângulo'}>
        {fecha ? (
          <>
            <polygon points={`${ox},${oy} ${ox + c * k},${oy} ${ox + x * k},${oy - y * k}`} fill="var(--color-fundo)" stroke="var(--color-borda)" strokeWidth="2" />
            <line x1={ox} y1={oy} x2={ox + c * k} y2={oy} stroke={cores[2]} strokeWidth="5" strokeLinecap="round" />
            <line x1={ox + c * k} y1={oy} x2={ox + x * k} y2={oy - y * k} stroke={cores[0]} strokeWidth="5" strokeLinecap="round" />
            <line x1={ox + x * k} y1={oy - y * k} x2={ox} y2={oy} stroke={cores[1]} strokeWidth="5" strokeLinecap="round" />
          </>
        ) : (
          <>
            {lados.map((v, i) => (
              <line key={i} x1={20} y1={50 + i * 45} x2={20 + v * 22} y2={50 + i * 45} stroke={cores[i]} strokeWidth="6" strokeLinecap="round" />
            ))}
            <text x={20} y={20} fontSize="13" fill="var(--color-suave)">Não dá para fechar: um palito é longo demais.</text>
          </>
        )}
      </svg>
      <p aria-live="polite" className={`mt-2 rounded-2xl p-4 text-[15px] ${fecha ? 'bg-fundo' : 'bg-amarelo'}`}>
        {fecha ? (
          <>Fecha! Os dois menores somam <strong>{ord[0]} + {ord[1]} = {ord[0] + ord[1]}</strong>, que é maior que o maior ({ord[2]}). Pelos lados, é <strong>{tipoLados}</strong>; pelos ângulos, é <strong>{tipoAngulo}</strong>.</>
        ) : (
          <>Não fecha: os dois menores somam <strong>{ord[0]} + {ord[1]} = {ord[0] + ord[1]}</strong>, que não passa do maior ({ord[2]}). Faltaria material para encostar as pontas.</>
        )}
      </p>
    </div>
  )
}
