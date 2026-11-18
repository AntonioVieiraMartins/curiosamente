import type { MetaCapsula } from '../../../tipos'

const meta: MetaCapsula = {
  id: 'medidas',
  titulo: 'Medidas',
  area: 'matematica',
  trilha: 'basica',
  serie: '3º ao 5º ano',
  resumo: 'Por que 1 litro cabe num cubo de 10 cm?',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['numeros-decimais'],
  conexoes: ['tempo-e-horas', 'formas-geometricas', 'potencias'],
  videoUrl: null,
  fontes: [
    { titulo: 'Metric system (origem na França, metro em 1791, prefixos, base decimal, SI em 1960, quilograma), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Metric_system' },
    { titulo: 'Litre (litro como decímetro cúbico, datas de 1795, 1879, 1901, 1964 e 1979, relação com o quilograma de água), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Litre' },
  ],
}

export default meta
