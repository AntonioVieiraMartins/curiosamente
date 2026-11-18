import { Caixa, Historia, Moldura, Seta, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "Deploy em um olhar": do seu computador ao público
export default function Infografico() {
  return (
    <Moldura
      id="info-dep"
      titulo="Deploy em um olhar"
      desc="Deploy é tudo o que torna um sistema disponível para uso: liberar, instalar, ativar e atualizar. Há três ambientes: desenvolvimento, o seu computador; teste, também chamado staging, uma cópia parecida com a real; e produção, a versão que o público vê. Um deploy automático faz commit, push, build, testes e publicação sem copiar arquivos à mão. Se os testes falham, a publicação não roda e o site continua na versão anterior. Azul e verde permitem trocar de versão e voltar, o rollback. O lançamento gradual e o teste A/B mostram a versão nova a poucos. Entrega contínua mantém tudo pronto para liberar; implantação contínua também publica sozinha."
      altura={640}
    >
      <text x={40} y={56} style={t12}>Três ambientes: errar à vontade, conferir, e o que todo mundo vê</text>

      <Caixa x={40} y={72} w={170} h={70} cor="cinza" titulo="Desenvolvimento" sub="o seu computador" />
      <Seta id="info-dep" x1={212} y1={107} x2={238} y2={107} />
      <Caixa x={240} y={72} w={170} h={70} cor="amarelo" titulo="Teste (staging)" sub="cópia parecida com a real" />
      <Seta id="info-dep" x1={412} y1={107} x2={438} y2={107} />
      <Caixa x={440} y={72} w={200} h={70} cor="verde" titulo="Produção" sub="o público; erro aparece a todos" />

      <text x={40} y={174} style={t12}>O pipeline: commit → push → build → testes → publicar</text>
      <Caixa x={40} y={186} w={100} h={46} cor="azul" titulo="commit ✓" />
      <Caixa x={150} y={186} w={100} h={46} cor="azul" titulo="push ✓" />
      <Caixa x={260} y={186} w={100} h={46} cor="azul" titulo="build ✓" />
      <Caixa x={370} y={186} w={100} h={46} cor="coral" titulo="testes ✗" />
      <Caixa x={480} y={186} w={160} h={46} cor="cinza" titulo="publicar (não roda)" />
      <text x={40} y={254} style={t12}>testes falharam: o site continua na versão anterior, que funciona; leia a mensagem, corrija e envie de novo</text>

      <text x={40} y={288} style={t12}>Manual contra automático (valores de exemplo)</text>
      <rect x={40} y={300} width={290} height={92} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={322} style={t14}>Manual: 25 min cada</text>
      <text x={52} y={344} style={t12}>6 deploys por semana: 150 min</text>
      <text x={52} y={364} style={t12}>e pode esquecer um passo</text>
      <rect x={350} y={300} width={290} height={92} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={362} y={322} style={t14}>Automático: 1 min cada</text>
      <text x={362} y={344} style={t12}>6 deploys: 6 min (144 min a menos,</text>
      <text x={362} y={364} style={t12}>quase 2 h 30) e nunca esquece</text>

      <text x={40} y={422} style={t12}>Trocar sem derrubar</text>
      <rect x={40} y={434} width={290} height={92} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={456} style={t14}>Azul e verde</text>
      <text x={52} y={478} style={t12}>v1 (azul) atende; testa a v2 (verde)</text>
      <text x={52} y={496} style={t12}>troca o tráfego; defeito? rollback:</text>
      <text x={52} y={514} style={t12}>volta ao azul, que continua intacto</text>
      <rect x={350} y={434} width={290} height={92} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={456} style={t14}>Lançamento gradual e A/B</text>
      <text x={362} y={478} style={t12}>a versão nova aparece a poucos</text>
      <text x={362} y={496} style={t12}>antes de todos; ou compara duas</text>
      <text x={362} y={514} style={t12}>versões lado a lado</text>

      <text x={40} y={556} style={t12}>Entrega contínua: pronto para liberar, com clique humano. Implantação contínua: publica sozinha.</text>
      <text x={40} y={576} style={t12}>Do código ao endereço: plataforma dá meu-site.vercel.app; domínio próprio aponta por um registro DNS.</text>

      <Historia y={612} texto="História: instaladores (anos 90) · nuvem (anos 2000) · entrega contínua (2010) · ZEIT/Vercel (2015)" />
    </Moldura>
  )
}
