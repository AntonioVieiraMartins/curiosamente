import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'html-css-javascript',
  titulo: 'HTML, CSS e JavaScript',
  area: 'computacao',
  trilha: 'sistema-web',
  resumo: 'Esqueleto, roupa e movimento de toda página.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['front-end-e-back-end', 'http-https'],
  videoUrl: null,
  fontes: [
    { titulo: 'HTML (criação, versões, elementos, tags, atributos, estrutura do documento), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/HTML' },
    { titulo: 'CSS (proposta em 1994, versões, seletores, cascata e especificidade), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/CSS' },
    { titulo: 'JavaScript (Brendan Eich, 1995, ECMAScript, DOM, Node.js), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/JavaScript' },
  ],
}

export default meta
