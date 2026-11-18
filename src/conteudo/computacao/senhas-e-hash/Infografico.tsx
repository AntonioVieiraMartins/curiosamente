import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Senhas e hash em um olhar"
export default function Infografico() {
  return (
    <Moldura
      id="info-hash"
      titulo="Senhas e hash em um olhar"
      desc="O site guarda o hash da senha, e não a senha. Hash é um resumo de tamanho fixo, determinístico, de mão única e com efeito avalanche: uma letra diferente muda tudo. No login, o servidor calcula o hash do que você digitou e compara com o guardado. O sal é um valor aleatório por pessoa que deixa hashes diferentes e inutiliza dicionários pré-calculados. Hash lento de propósito, como Argon2, scrypt, bcrypt e PBKDF2, encarece cada chute; MD5 e SHA-1 estão quebrados. Os fatores de autenticação são conhecimento, posse e inerência, e dois fatores exigem tipos diferentes. Limitar tentativas e usar senhas longas e únicas completam a defesa."
      altura={640}
    >
      <text x={40} y={56} style={t12}>O site guarda só o hash da senha</text>

      <Caixa x={40} y={72} w={130} h={56} cor="azul" titulo="gato123" sub="o que você digita" />
      <Seta id="info-hash" x1={172} y1={100} x2={198} y2={100} />
      <Caixa x={200} y={72} w={130} h={56} cor="amarelo" titulo="hash" sub="a máquina de moer" />
      <Seta id="info-hash" x1={332} y1={100} x2={358} y2={100} />
      <Caixa x={360} y={72} w={130} h={56} cor="verde" titulo="a1f3…9c" sub="guardado no banco" />
      <text x={506} y={92} style={t12}>entrou: hash igual</text>
      <text x={506} y={110} style={t12}>gato124: recusado</text>

      <text x={40} y={160} style={t12}>As quatro propriedades de um bom hash</text>
      <Caixa x={40} y={172} w={140} h={62} cor="cinza" titulo="Determinístico" sub="mesmo texto, mesmo resumo" />
      <Caixa x={190} y={172} w={140} h={62} cor="cinza" titulo="Mão única" sub="inviável reverter" />
      <Caixa x={340} y={172} w={140} h={62} cor="cinza" titulo="Sem colisões" sub="2 textos, 2 resumos" />
      <Caixa x={490} y={172} w={150} h={62} cor="cinza" titulo="Avalanche" sub="oi vs oj: tudo muda" />
      <text x={40} y={256} style={t12}>tamanho fixo: "oi" e um texto de 1.000 palavras dão resumos do mesmo tamanho</text>

      <text x={40} y={290} style={t12}>Sal: hashes diferentes para senhas iguais</text>
      <rect x={40} y={302} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={324} style={t14}>Sem sal</text>
      <text x={52} y={346} style={t12}>Ana, Bruno e Carla usam 123456</text>
      <text x={52} y={364} style={t12}>três hashes iguais: o ladrão</text>
      <text x={52} y={382} style={t12}>quebra as 3 contas de uma vez</text>
      <rect x={350} y={302} width={290} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={324} style={t14}>Com sal (aleatório por pessoa)</text>
      <text x={362} y={346} style={t12}>três hashes diferentes: ele refaz</text>
      <text x={362} y={364} style={t12}>o trabalho do zero em cada conta</text>
      <text x={362} y={382} style={t12}>sal não é segredo</text>

      <text x={40} y={424} style={t12}>Defesas</text>
      <rect x={40} y={436} width={290} height={82} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={52} y={458} style={t14}>Contas de combinações</text>
      <text x={52} y={480} style={t12}>PIN de 4 dígitos: 10.000 (10 s a 1.000/s)</text>
      <text x={52} y={498} style={t12}>3 tentativas: 0,03% de acerto</text>
      <rect x={350} y={436} width={290} height={82} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={458} style={t14}>Hash lento de propósito</text>
      <text x={362} y={480} style={t12}>Argon2, scrypt, bcrypt, PBKDF2</text>
      <text x={362} y={498} style={t12}>MD5 e SHA-1 estão quebrados</text>

      <text x={40} y={546} style={t12}>Fatores: conhecimento (sabe) · posse (tem) · inerência (é). Dois fatores = tipos diferentes.</text>
      <text x={40} y={566} style={t12}>Cartão + PIN = 2 fatores; duas senhas = 1 fator. Mais seguro: chave de segurança física (FIDO2).</text>

      <Historia y={612} texto="História: crypt(3) (1978) · MD5 (1991) · SHA-1 (1995) · MD5 quebrado (2004) · Argon2 (2015)" />
    </Moldura>
  )
}
