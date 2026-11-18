import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'deploy',
  titulo: 'Deploy',
  area: 'computacao',
  trilha: 'hospedagem',
  resumo: 'Do seu computador para o mundo.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: [],
  conexoes: ['git-e-github', 'http-https', 'dns'],
  videoUrl: null,
  fontes: [
    { titulo: 'Software deployment (atividades, ambientes, blue-green, história), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Software_deployment' },
    { titulo: 'Continuous delivery (entrega e implantação contínuas, pipeline, benefícios), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Continuous_delivery' },
    { titulo: 'Vercel (fundação como ZEIT em 2015, nome atual em 2020, integração com Git, subdomínio vercel.app), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Vercel' },
  ],
}

export default meta
