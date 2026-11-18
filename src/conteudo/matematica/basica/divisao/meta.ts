import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'divisao',
  titulo: 'Divisão',
  area: 'matematica',
  trilha: 'basica',
  serie: '3º ao 5º ano',
  resumo: 'Dividir 23 balas entre 4 amigos: e o resto?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['multiplicacao'],
  conexoes: ['expressoes-numericas', 'multiplos-e-divisores', 'fracoes'],
  videoUrl: null,
  fontes: [
    { titulo: 'Division (mathematics) (termos, repartir e agrupar, resto, divisão por zero, símbolos e datas), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Division_(mathematics)' },
    { titulo: 'Long division (passos, história, notação de chave, divisão curta), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Long_division' },
  ],
}

export default meta
