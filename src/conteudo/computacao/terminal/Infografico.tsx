import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Terminal em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-ter"
      titulo="Terminal em um olhar"
      desc="Terminal é a janela onde você digita, shell é o intérprete que entende o que você digitou e comando é cada pedido. Um comando tem comando, opção e argumento: o que fazer, como fazer e sobre o quê, como em mkdir Projetos. Caminho é o endereço de um arquivo. Absoluto parte da raiz e vale de qualquer lugar; relativo parte de onde você está. O ponto é a pasta atual, dois pontos é a pasta de cima e o til é a pasta pessoal. Windows usa barra invertida e letras de disco; Linux e macOS usam barra normal e uma raiz só. Comandos básicos: pwd, ls, cd, mkdir, cat."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Janela, intérprete e pedido</text>
      <Caixa x={40} y={72} w={190} h={64} cor="azul" titulo="Terminal" sub="a janela onde digita" />
      <Caixa x={245} y={72} w={190} h={64} cor="amarelo" titulo="Shell" sub="o intérprete (PowerShell, Bash)" />
      <Caixa x={450} y={72} w={190} h={64} cor="verde" titulo="Comando" sub="cada pedido" />

      <text x={40} y={170} style={t12}>Anatomia de um pedido</text>
      <rect x={40} y={182} width={600} height={70} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={56} y={210} style={{ fontSize: 17, fontWeight: 600, fill: 'var(--color-texto)' }}>mkdir Projetos</text>
      <text x={56} y={232} style={t12}>mkdir = comando (o que fazer: criar uma pasta) · Projetos = argumento (sobre o quê)</text>
      <text x={56} y={246} style={t12}>opção (flag): como fazer, costuma começar com - ou -- nos sistemas Unix</text>

      <text x={40} y={286} style={t12}>Endereços: C:\Users\voce\Fotos\praia.jpg (disco, pastas e o arquivo com extensão)</text>
      <rect x={40} y={298} width={290} height={104} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={320} style={t14}>Absoluto</text>
      <text x={52} y={342} style={t12}>parte da raiz, vale de qualquer lugar</text>
      <text x={52} y={362} style={t12}>C:\Users\voce\Fotos</text>
      <text x={52} y={384} style={t12}>endereço completo, com país e cidade</text>
      <rect x={350} y={298} width={290} height={104} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={362} y={320} style={t14}>Relativo</text>
      <text x={362} y={342} style={t12}>parte de onde você está</text>
      <text x={362} y={362} style={t12}>de Documentos para Fotos:</text>
      <text x={362} y={384} style={t12}>cd ..\Fotos (Linux: cd ../Fotos)</text>

      <text x={40} y={432} style={t12}>Atalhos e comandos básicos</text>
      <Caixa x={40} y={444} w={110} h={52} cor="cinza" titulo=".  e  .." sub="atual e de cima" />
      <Caixa x={160} y={444} w={110} h={52} cor="cinza" titulo="~" sub="pasta pessoal" />
      <Caixa x={280} y={444} w={110} h={52} cor="cinza" titulo="ls · cd" sub="listar · entrar" />
      <Caixa x={400} y={444} w={110} h={52} cor="cinza" titulo="pwd · cat" sub="onde estou · ler" />
      <Caixa x={520} y={444} w={120} h={52} cor="cinza" titulo="mkdir" sub="criar pasta" />

      <rect x={40} y={514} width={600} height={64} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={536} style={t14}>Cuidados</text>
      <text x={52} y={556} style={t12}>evite espaços e acentos em nomes (use hífen) · no Linux, Fotos e fotos são pastas diferentes</text>
      <text x={52} y={572} style={t12}>terminal ganha no repetitivo (300 fotos); o mouse ganha no visual · cuidado com comandos que apagam</text>

      <Historia y={612} texto="História: CTSS (1961) · Teletype 33 (1963) · Pouzin cria o shell (1964) · shell Unix (1971) · Windows 95 · PowerShell (2006)" />
    </Moldura>
  )
}
