import NavBar from '../components/NavBar'
import AdvantagesText from '../components/AdvantagesText'
import Footer from '../components/Footer'
import Banner from '../assets/images/Banner.png'
import TriImg from '../assets/images/image20.png'
import LogoLaranja from '../assets/images/LogoArthaL.png'
import PResidencial from '../assets/images/OurProjects/Residencial.png'
import PComercial from '../assets/images/OurProjects/Comercial.png'
import PPortfolio from  '../assets/images/OurProjects/Portfolio.png'
import Circulo from '../assets/images/imagemCirculo.png'
import Img1 from '../assets/images/advantages/img1.png'
import Img2 from '../assets/images/advantages/img2.png'
import Img3 from '../assets/images/advantages/img3.png'
import Img4 from '../assets/images/advantages/img4.png'
import Img5 from '../assets/images/advantages/img5.png'
import Img6 from '../assets/images/advantages/img6.png'
import GetinTouch from '../assets/images/getintouch.png'
import Contact from '../assets/images/contact.png'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <div className={styles.navBar_Banner}>
                <img src={Banner} className={styles.banner} alt="Banner do Site" />
                <NavBar className={styles.navBarHome} variante="Transparent"/>
            </div>
            <div className={styles.projects}>
                <div className={styles.logoSlogan}>
                    <img src={TriImg} className={styles.imageTriangular} alt="decoração de tela triangular laranja" />
                    <div className={styles.titleSlogan}>
                        <h2 className={styles.Title}>Nossos Projetos</h2>
                        <p className={styles.slogan}>Arquitetura com propósito</p>
                    </div>
                    <img src={LogoLaranja} className={styles.logoOrange} alt="Logo da empresa Artha Arquitetura em cor laranja" />
                </div>
                <div className={styles.images}>
                    <div className={styles.image}>
                        <img src={PResidencial} alt="imagem de projeto de ambiente residencial" />
                    </div>
                    <div className={styles.image}>
                        <img src={PComercial} className={styles.image} alt="imagem de projeto de ambiente comercial" />
                    </div>
                    <div className={styles.image}>
                        <img src={PPortfolio} className={styles.image} alt="imagem de projeto de nosso portfolio" />
                        <p className={styles.portfolioText}>Saiba mais sobre o nosso portfolio</p>
                    </div>
                </div>
            </div>
            <div className={styles.ourAdvantages}>
                <div className={styles.logoSlogan}>
                    <h2 className={styles.Title} id={styles.advantages}>Nossos diferenciais</h2>
                    <img src={Circulo} className={styles.cImg} alt="decoração circular com estampa" />
                </div>
                <AdvantagesText title = "COMO VOCÊ SONHOU" text="Projetos de arquitetura com propósito e soluções sob medida, que geram valor real para nossos clientes." img={Img1} w="162px" h="162px" alt="mão segurando diamante"/>
                <AdvantagesText alinhar='right' title= "FLEXIBILIDADE E ESCUTA ATIVA" text="Unimos nossa expertise técnica e processos consolidados para juntos construirmos um projeto assertivo e entregar resultados surpreendentes." img={Img2} w="80.14px" h="98.48px" alt="caneta"/>
                <AdvantagesText title= "MUITO DIÁLOGO" text="Priorizamos a escuta ativa, sempre abertos para conversas resolutivas e transparentes. Estamos aqui para criar soluções." img={Img3} w="139.93px" h="124.72px" alt="pessoas conversando"/>
                <AdvantagesText alinhar='right' title="DENTRO DO SEU ORÇAMENTO" text={<>compatibilizamos suas expectativas de investimento com a realidade do mercado, oferecendo uma consultoria estratégica para que você decida com segurança.<br />
                <br />
                <span>Arquitetura de Valor:</span> Desenhamos seu projeto escolhendo materiais que se alinham ao seu teto de investimento, garantindo uma obra previsível.<br />
                <br />
                <span>Substituição Técnica:</span> "Trocamos um material caro por um que entrega o mesmo visual e durabilidade, mas com melhor viabilidade financeira."<br />
                <br />
                <span>Foco no Essencial:</span> "Direcionamos o investimento para o que realmente valoriza o imóvel, otimizando itens de infraestrutura que não compromentem o resultado final"</>} img={Img4} w="131.14px" h="120.69px" alt="sacos de dinheiro"/>
                <AdvantagesText title="SERIEDADE" text={<>Todas as nossas obras são regularizadas junto ao CAU (Conselho Regional de Arquitetura);<br />
                <br />
                Executamos seu projeto com qualidade, atento aos prazos e buscando sempre superar as exoectativas de entrega.</>} img={Img5} w="114.99px" h="115.12px" alt="selo de positivo"/>
                <AdvantagesText alinhar='right' title="SUPORTE NA JORNADA DE PROJETO E OBRA"  text={<>Garantimos acompanhamento completo em todas as fases do projeto, provendo o respaldo técnico necessário para que cada decisão seja tomada com confiança<br />
                <br />
                Gerenciamos todas as etapas da execução, com uma consultoria técnica contínua para garantir total clareza e segurança até o fim até da obra.</>} img={Img6} w="187px" h="187px" alt="estrelas"/>
            </div>
            <div className={styles.images2}>
                <div className={styles.image2}>
                    <img className={styles.image2} src={GetinTouch} alt="mão segurando a logo Artha" />
                    <p className={styles.aboutUs}>Saiba mais sobre quem somos</p>
                </div>
                <div className={styles.image2}>
                    <img className={styles.image2} src={Contact} alt="cartão de visitas Artha" />
                    <p className={styles.contact}>Entre em contato</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home