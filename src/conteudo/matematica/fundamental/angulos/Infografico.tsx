import { Historia, Moldura, cores, t12, t14 } from '../../../../components/capsula/infografico/pecas'

// Infográfico "Ângulos em um olhar": os quatro tipos, desenhados com arcos
export default function Infografico() {
  // Cada tipo: vértice (x, y) e o ângulo em graus, lado direito horizontal
  const tipos = [
    { x: 70, nome: 'Agudo', g: 50, sub: 'menos de 90°' },
    { x: 230, nome: 'Reto', g: 90, sub: '90° (quadradinho)' },
    { x: 390, nome: 'Obtuso', g: 130, sub: 'entre 90° e 180°' },
    { x: 550, nome: 'Raso', g: 180, sub: '180°: uma reta' },
  ]
  const L = 60
  return (
    <Moldura
      id="info-ang"
      titulo="Ângulos em um olhar"
      desc="Ângulo é a abertura entre dois lados que saem do mesmo vértice, medida em graus. Uma volta tem 360 graus, meia volta 180 e um quarto 90. Tipos: agudo, menor que 90; reto, 90; obtuso, entre 90 e 180; raso, 180. Complementares somam 90 e suplementares somam 180. Opostos pelo vértice são iguais. Retas paralelas cortadas por uma transversal têm ângulos correspondentes e alternos iguais, e colaterais que somam 180. O triângulo soma 180 graus e o quadrilátero 360. No relógio, 30 graus por hora e 6 por minuto."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Abertura entre dois lados que saem do mesmo vértice, em graus</text>

      {tipos.map((t) => {
        const r = (t.g * Math.PI) / 180
        const x2 = t.x + L * Math.cos(r)
        const y2 = 150 - L * Math.sin(r)
        return (
          <g key={t.nome}>
            <rect x={t.x - 30} y={72} width={150} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
            <line x1={t.x} y1={150} x2={t.x + L} y2={150} stroke={cores.azul.stroke} strokeWidth={2.5} strokeLinecap="round" />
            <line x1={t.x} y1={150} x2={x2} y2={y2} stroke={cores.azul.stroke} strokeWidth={2.5} strokeLinecap="round" />
            <path d={`M${t.x + 24} 150 A24 24 0 ${t.g > 180 ? 1 : 0} 0 ${t.x + 24 * Math.cos(r)} ${150 - 24 * Math.sin(r)}`} fill="none" stroke={cores.coral.stroke} strokeWidth={2} />
            <text x={t.x - 20} y={92} style={t14}>{t.nome}</text>
            <text x={t.x - 20} y={178} style={t12}>{t.sub}</text>
          </g>
        )
      })}

      <text x={40} y={222} style={t12}>Volta inteira 360° · meia volta 180° · um quarto 90° · três quartos 270°</text>

      <text x={40} y={254} style={t12}>Pares de ângulos</text>
      <rect x={40} y={266} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={288} style={t14}>Complementares</text>
      <text x={52} y={310} style={t12}>somam 90°</text>
      <text x={52} y={332} style={t12}>complemento de 35°: 55°</text>
      <rect x={245} y={266} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={257} y={288} style={t14}>Suplementares</text>
      <text x={257} y={310} style={t12}>somam 180°</text>
      <text x={257} y={332} style={t12}>suplemento de 110°: 70°</text>
      <rect x={450} y={266} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={462} y={288} style={t14}>Opostos pelo vértice</text>
      <text x={462} y={310} style={t12}>duas retas se cruzam:</text>
      <text x={462} y={328} style={t12}>os "de costas" são iguais</text>

      <text x={40} y={414} style={t12}>Paralelas cortadas por uma transversal</text>
      <rect x={40} y={426} width={290} height={84} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={448} style={t12}>correspondentes: mesma posição, iguais</text>
      <text x={52} y={468} style={t12}>alternos: lados opostos, iguais</text>
      <text x={52} y={488} style={t12}>colaterais: mesmo lado, somam 180°</text>

      <rect x={350} y={426} width={290} height={84} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={362} y={448} style={t14}>Somas de ângulos</text>
      <text x={362} y={470} style={t12}>triângulo 180° · quadrilátero 360°</text>
      <text x={362} y={490} style={t12}>50° e 60° no triângulo: o terceiro é 70°</text>

      <rect x={40} y={528} width={600} height={50} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={548} style={t14}>Relógio: 30° por hora e 6° por minuto</text>
      <text x={52} y={566} style={t12}>às 3h30: minutos 180°, horas 90° + 15° = 105°, diferença 75°. O ponteiro das horas também anda.</text>

      <Historia y={612} texto="História: ninguém sabe por que a volta tem 360° · base 60 da Mesopotâmia · 1° = 60 minutos de arco" />
    </Moldura>
  )
}
