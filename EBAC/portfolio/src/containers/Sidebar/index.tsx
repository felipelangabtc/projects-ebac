import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Felipe Langa</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        felipelangabtc
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Billing Coordinator | Blockchain Development Specialist | Future Full
        Stack Java Developer | Web3 & NFT Community Builder | Metaverse
        Innovator
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
