import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "HTML, CSS e JavaScript em um olhar": esqueleto, roupa e movimento
const mono = { fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 12, fill: 'var(--color-texto)' } as const

export default function Infografico() {
  return (
    <Moldura
      id="info-hcj"
      titulo="HTML, CSS e JavaScript em um olhar"
      desc="HTML é o esqueleto: elementos com etiquetas de abertura e fechamento, atributos e conteúdo. CSS é a roupa: regras com seletor e declarações, com seletores por elemento, por classe com ponto e por id com cerquilha. Na cascata, quando regras brigam ganha a mais específica: elemento, depois classe, depois id, depois o estilo na etiqueta. JavaScript é o movimento: ouve eventos como cliques e toques e muda a página pelo DOM. JavaScript não é Java, e também roda no servidor, com o Node.js."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Esqueleto, roupa e movimento</text>

      <Caixa x={40} y={72} w={190} h={78} cor="amarelo" titulo="HTML" sub="conteúdo e estrutura" grande />
      <Caixa x={245} y={72} w={190} h={78} cor="azul" titulo="CSS" sub="aparência" grande />
      <Caixa x={450} y={72} w={190} h={78} cor="coral" titulo="JavaScript" sub="comportamento" grande />
      <text x={40} y={170} style={t12}>"aqui há um título"</text>
      <text x={245} y={170} style={t12}>"o título é grande e azul"</text>
      <text x={450} y={170} style={t12}>"ao tocar, conte uma curtida"</text>

      <text x={40} y={206} style={t12}>HTML: leia uma etiqueta</text>
      <rect x={40} y={218} width={290} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={242} style={mono}>{'<a href="https://exemplo.com">Visite</a>'}</text>
      <text x={52} y={266} style={t12}>abertura {'<a>'} e fechamento {'</a>'}</text>
      <text x={52} y={284} style={t12}>atributo: href="..." (1 atributo)</text>
      <text x={52} y={302} style={t12}>conteúdo: "Visite", o texto visível</text>

      <rect x={350} y={218} width={290} height={104} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={240} style={t14}>CSS: os seletores</text>
      <text x={362} y={262} style={mono}>p  →  por elemento</text>
      <text x={362} y={282} style={mono}>.aviso  →  por classe (ponto)</text>
      <text x={362} y={302} style={mono}>#topo  →  por id (único)</text>

      <text x={40} y={352} style={t12}>Quando as regras brigam, vence a mais específica</text>
      <Caixa x={40} y={364} w={140} h={50} cor="cinza" titulo="elemento" sub="p: azul" />
      <Caixa x={190} y={364} w={140} h={50} cor="cinza" titulo="classe" sub=".aviso: verde" />
      <Caixa x={340} y={364} w={140} h={50} cor="coral" titulo="id" sub="#topo: vermelho" />
      <text x={500} y={394} style={t14}>vence o id</text>
      <text x={40} y={438} style={t12}>página com 2 parágrafos (um .aviso): p pega 2 · p.aviso pega 1 · .aviso pega tudo com a classe</text>

      <rect x={40} y={456} width={600} height={80} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={478} style={t14}>JavaScript: o contador de curtidas</text>
      <text x={52} y={500} style={t12}>o HTML tem um botão e um número; o JS registra um ouvinte ("ao clicar, some 1")</text>
      <text x={52} y={518} style={t12}>3 toques = o ouvinte roda 3 vezes e o DOM mostra 3. Sem o ouvinte, o botão ficaria parado.</text>

      <text x={40} y={566} style={t12}>Qual camada resolve? Título azul: CSS · frase por hora: JS · novo parágrafo: HTML · menu que abre: JS (+ CSS)</text>
      <text x={40} y={584} style={t12}>JavaScript não é Java. Também roda no servidor (Node.js).</text>

      <Historia y={620} texto="História: HTML (1990) · CSS proposto em 1994 · JavaScript (1995) · ECMAScript (1997) · Node.js (2009) · HTML5 (2014)" />
    </Moldura>
  )
}
