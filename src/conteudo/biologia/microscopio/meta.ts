import type { MetaCapsula } from '../../tipos'

const meta: MetaCapsula = {
  id: 'microscopio',
  titulo: 'Microscópio e o mundo invisível',
  area: 'biologia',
  trilha: 'biologia',
  resumo: 'Numa gota de água de lagoa vive um zoológico.',
  duracaoMin: 40,
  xp: 100,
  prerequisitos: ['celula'],
  conexoes: ['notacao-cientifica', 'luz-e-optica'],
  videoUrl: null,
  fontes: [
    { titulo: 'Microscope, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Microscope' },
    { titulo: 'History of microscopy, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/History_of_microscopy' },
    { titulo: 'Electron microscope, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Electron_microscope' },
    { titulo: 'Angular resolution (Abbe diffraction limit), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Diffraction-limited_system' },
    { titulo: 'Antonie van Leeuwenhoek, Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Antonie_van_Leeuwenhoek' },
    { titulo: 'Lens (optics), Wikipedia em inglês', url: 'https://en.wikipedia.org/wiki/Lens' },
    { titulo: 'Base Nacional Comum Curricular (BNCC), Ciências da Natureza', url: 'http://basenacionalcomum.mec.gov.br/abase/#fundamental/ciencias-da-natureza' },
  ],
}

export default meta
