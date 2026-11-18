import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'funcao-quadratica',
  titulo: 'Função quadrática',
  area: 'matematica',
  trilha: 'medio',
  serie: '1º ano EM',
  resumo: 'O caminho de uma bola arremessada.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['funcao-afim'],
  conexoes: ['exponencial', 'polinomios', 'geometria-analitica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Quadratic function (forma ax² + bx + c, vértice, eixo, raízes, formas padrão, fatorada e canônica), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Quadratic_function' },
    { titulo: 'Parabola (definição, foco e diretriz, propriedade refletora, história de Menecmo a Galileu), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Parabola' },
    { titulo: 'Projectile motion (trajetória parabólica, altura em função do tempo, alcance), Wikipedia em inglês (página com aviso de revisão pendente)', url: 'https://en.wikipedia.org/wiki/Projectile_motion' },
  ],
}

export default meta
