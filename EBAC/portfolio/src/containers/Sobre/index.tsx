import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      With nearly a decade of experience in finance and billing, I have built a
      strong foundation in financial operations, invoicing, and process
      optimization. My career began in administration, where I developed
      expertise in billing, financial analysis, and operational
      efficiency—ensuring seamless transactions and compliance with corporate
      financial policies. Driven by my passion for technology, blockchain, and
      digital transformation, I am currently expanding my skill set by pursuing
      a professional course in Full Stack Java Development and specializing in
      Blockchain Development through a postgraduate program. My goal is to
      bridge finance, technology, and Web3 innovations to create impactful
      solutions in the evolving digital economy. Beyond my corporate career, I
      am deeply involved in the Web3 ecosystem. I am the founder of Mooby, a
      Web3 community, where I lead NFT development, metaverse asset creation,
      and community building. Additionally, I am passionate about
      cryptocurrencies, artificial intelligence, and decentralized finance
      (DeFi)—areas that I believe are shaping the future of business. I thrive
      on continuous learning and innovation, always seeking to integrate
      cutting-edge technologies into my work. Whether optimizing billing
      processes, developing blockchain solutions, or contributing to Web3
      projects, I am committed to delivering value, efficiency, and staying
      ahead of the evolution of finance and technology.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=felipelangabtc&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=felipelangabtc&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
