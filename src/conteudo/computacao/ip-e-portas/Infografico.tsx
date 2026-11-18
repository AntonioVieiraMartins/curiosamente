import { Caixa, Historia, Moldura, cores, t12, t14 } from '../../../components/capsula/infografico/pecas'

// Infográfico "IP e portas em um olhar": prédio e apartamento
export default function Infografico() {
  return (
    <Moldura
      id="info-ip"
      titulo="IP e portas em um olhar"
      desc="O IP é o endereço do computador, o prédio, e a porta é o endereço do serviço, o apartamento. Juntos: IP:porta. IPv4 tem 4 partes de 0 a 255, 32 bits, cerca de 4,29 bilhões de endereços; IPv6 tem 128 bits. Portas vão de 0 a 65.535; conhecidas: 80 HTTP, 443 HTTPS, 22 SSH, 25 e-mail, 53 DNS. localhost é 127.0.0.1, o próprio computador. Endereços privados: 10.x, 172.16 a 172.31 e 192.168.x, que não vão para a internet pública. No NAT, a casa toda usa um IP público e as portas separam os aparelhos. Dois programas não dividem a mesma porta."
      altura={640}
    >
      <text x={40} y={56} style={t12}>IP = o prédio (qual computador) · porta = o apartamento (qual programa)</text>

      <Caixa x={40} y={72} w={170} h={64} cor="azul" titulo="203.0.113.10" sub="IP: o prédio" />
      <text x={228} y={112} style={t14}>:</text>
      <Caixa x={250} y={72} w={100} h={64} cor="amarelo" titulo="443" sub="porta" />
      <text x={370} y={92} style={t14}>https → o programa das páginas</text>
      <text x={370} y={112} style={t12}>porta 25 do mesmo prédio → e-mail</text>
      <text x={370} y={130} style={t12}>IPv4: 4 partes de 0 a 255 (8 bits cada, 2⁸ = 256)</text>

      <text x={40} y={168} style={t12}>As faixas de portas (0 a 65.535)</text>
      <rect x={40} y={180} width={190} height={118} rx={8} fill={cores.azul.fill} stroke={cores.azul.stroke} />
      <text x={52} y={202} style={t14}>Conhecidas</text>
      <text x={52} y={222} style={t12}>0 a 1.023</text>
      <text x={52} y={242} style={t12}>22 SSH · 25 e-mail · 53 DNS</text>
      <text x={52} y={260} style={t12}>80 HTTP · 443 HTTPS</text>
      <rect x={245} y={180} width={190} height={118} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={257} y={202} style={t14}>Registradas</text>
      <text x={257} y={222} style={t12}>1.024 a 49.151</text>
      <text x={257} y={242} style={t12}>3000, 5173, 8080...</text>
      <text x={257} y={260} style={t12}>servidores de desenvolvimento</text>
      <rect x={450} y={180} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={202} style={t14}>Dinâmicas</text>
      <text x={462} y={222} style={t12}>49.152 a 65.535</text>
      <text x={462} y={242} style={t12}>usadas por instantes quando</text>
      <text x={462} y={260} style={t12}>seu computador faz um pedido</text>

      <text x={40} y={328} style={t12}>Tipos de endereço</text>
      <rect x={40} y={340} width={190} height={118} rx={8} fill={cores.coral.fill} stroke={cores.coral.stroke} />
      <text x={52} y={362} style={t14}>Privados</text>
      <text x={52} y={382} style={t12}>10.x · 172.16 a 172.31</text>
      <text x={52} y={400} style={t12}>192.168.x (ex.: 192.168.1.50)</text>
      <text x={52} y={422} style={t12}>só na rede local, não</text>
      <text x={52} y={440} style={t12}>roteados na internet pública</text>
      <rect x={245} y={340} width={190} height={118} rx={8} fill={cores.verde.fill} stroke={cores.verde.stroke} />
      <text x={257} y={362} style={t14}>Loopback</text>
      <text x={257} y={382} style={t12}>127.0.0.1 = localhost</text>
      <text x={257} y={400} style={t12}>o próprio computador</text>
      <text x={257} y={422} style={t12}>IPv6: ::1</text>
      <rect x={450} y={340} width={190} height={118} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={462} y={362} style={t14}>Públicos</text>
      <text x={462} y={382} style={t12}>o resto: alcançáveis</text>
      <text x={462} y={400} style={t12}>pela internet</text>
      <text x={462} y={422} style={t12}>IPv4: ≈ 4,29 bilhões</text>
      <text x={462} y={440} style={t12}>IPv6: 128 bits (2⁹⁶ vezes mais)</text>

      <rect x={40} y={476} width={290} height={102} rx={8} fill={cores.amarelo.fill} stroke={cores.amarelo.stroke} />
      <text x={52} y={498} style={t14}>NAT: a casa toda, 1 IP público</text>
      <text x={52} y={520} style={t12}>celular → porta 50000, TV → 50013</text>
      <text x={52} y={540} style={t12}>a resposta para a 50013 vai à TV</text>
      <text x={52} y={560} style={t12}>(valores de exemplo)</text>
      <rect x={350} y={476} width={290} height={102} rx={8} fill="var(--color-fundo)" stroke="var(--color-borda)" />
      <text x={362} y={498} style={t14}>Na prática</text>
      <text x={362} y={520} style={t12}>no celular, localhost é o próprio celular:</text>
      <text x={362} y={538} style={t12}>use o IP do notebook (192.168.0.12:5180)</text>
      <text x={362} y={558} style={t12}>porta do banco: fechada para a internet</text>

      <Historia y={612} texto="História: 'números de soquete' (anos 70) · RFC 349 (1972) · TCP/IP (1982) · IPv4 acabando nos anos 2010, IPv6" />
    </Moldura>
  )
}
