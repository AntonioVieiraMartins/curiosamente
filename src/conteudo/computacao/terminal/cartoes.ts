import type { CartaoPronto } from '../../tipos'

// Baralho de revisão da cápsula Terminal (só conteúdo estudado na cápsula)
const cartoes: CartaoPronto[] = [
  { tipo: 'definição', frente: 'Qual é a diferença entre terminal, shell e comando?', verso: 'Terminal: a janela onde você digita. Shell: o intérprete que entende o que você digitou (PowerShell, Bash). Comando: cada pedido que você escreve.' },
  { tipo: 'definição', frente: 'O que são comando, opção e argumento?', verso: 'Comando: o que fazer (ls, cd, mkdir). Opção (flag): como fazer, costuma começar com - ou --. Argumento: sobre o quê (um nome de pasta ou arquivo).' },
  { tipo: 'conta', frente: 'Desmonte "mkdir Projetos".', verso: 'mkdir (make directory) é o comando: criar uma pasta. Projetos é o argumento: o nome. Não há opções. Uma pasta Projetos aparece onde você está.' },
  { tipo: 'definição', frente: 'O que é um caminho? Leia C:\\Users\\voce\\Fotos\\praia.jpg.', verso: 'O endereço de um arquivo: pastas dentro de pastas. C: é o disco; entra em Users, voce, Fotos; praia.jpg é o arquivo (.jpg é a extensão: uma foto).' },
  { tipo: 'regra', frente: 'Qual é a diferença entre caminho absoluto e relativo?', verso: 'Absoluto começa na raiz e vale de qualquer lugar (endereço completo). Relativo parte da pasta onde você está ("a segunda porta à direita").' },
  { tipo: 'conta', frente: 'Você está em Documentos e quer ir para Fotos (ambas dentro de voce). Qual o comando?', verso: 'cd ..\\Fotos (no Linux, cd ../Fotos). Sobe um nível com .. e desce para Fotos.' },
  { tipo: 'regra', frente: 'O que significam . , .. e ~ ?', verso: '. é a pasta atual, .. é a pasta de cima, ~ é a pasta pessoal (Unix e PowerShell).' },
  { tipo: 'regra', frente: 'Quais são os comandos básicos e o que fazem?', verso: 'pwd (onde estou), ls (listar), cd (entrar numa pasta), mkdir (criar pasta), cat (ler um arquivo). Cuidado com os que apagam.' },
  { tipo: 'regra', frente: 'Quais as diferenças entre Windows e Linux/macOS nos caminhos?', verso: 'Windows usa \\ e letras de disco (C:). Linux e macOS usam / e uma raiz só. No Linux, maiúsculas importam (Fotos e fotos são pastas diferentes).' },
  { tipo: 'regra', frente: 'Como nomear arquivos para o terminal?', verso: 'Evite espaços (use hífen ou sublinhado), acentos e símbolos estranhos. Seja descritivo: relatorio-janeiro.txt, não novo1.txt.' },
  { tipo: 'problema', frente: 'Quando o terminal vale mais que o mouse?', verso: 'No repetitivo: renomear 300 fotos com um pequeno script. No visual (olhar fotos), o mouse ganha.' },
  { tipo: 'regra', frente: 'O que a extensão do arquivo indica?', verso: 'Como o programa deve interpretar os bits: .txt é texto puro, .jpg é foto, .mp3 é som. Por dentro são só bits.' },
  { tipo: 'problema', frente: 'Onde abrir o terminal em cada sistema?', verso: 'Windows: procure "PowerShell" no menu Iniciar. macOS: app "Terminal". Linux: costuma ser Ctrl + Alt + T.' },
  { tipo: 'história', frente: 'Quem criou a ideia de shell e quem escreveu o primeiro shell do Unix?', verso: 'Louis Pouzin apresentou a ideia de shell para o Multics (1964). Ken Thompson escreveu o primeiro shell do Unix, no Bell Labs (1971).' },
  { tipo: 'história', frente: 'Cite marcos do terminal.', verso: 'CTSS (1961), o primeiro interpretador de linha de comando de verdade; Teletype Model 33 (1963); shell Bourne (1977); Windows 95 (1995) empurra os usuários para as janelas; PowerShell 1.0 (2006).' },
]

export default cartoes
