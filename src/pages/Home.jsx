import NavBar from '../components/NavBar'
import AdvantagesText from '../components/AdvantagesText'
import Banner from '../assets/images/Banner.png'
import TriImg from '../assets/images/image20.png'
import LogoLaranja from '../assets/images/LogoArthaL.png'
import PResidencial from '../assets/images/OurProjects/Residencial.png'
import PComercial from '../assets/images/OurProjects/Comercial.png'
import PPortfolio from  '../assets/images/OurProjects/Portfolio.png'
import Circulo from '../assets/images/imagemCirculo.png'
import Img1 from '../assets/images/advantages/img1.png'
import Img2 from '../assets/images/advantages/img2.png'
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
                        <p className={styles.slogan}>Arquiterura com propósito</p>
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
                <AdvantagesText p = 'left' title = "COMO VOCÊ SONHOU" text="Projetos de arquitetura com propósito e soluções sob medida, que geram valor real para nossos clientes." img={Img1} w="162px" h="162px" alt="mão segurando diamante"/>
                <AdvantagesText p= 'right' title= "FLEXIBILIDADE E ESCUTA ATIVA" text="Unimos nossa expertise técnica e processos consolidados para juntos construirmos um projeto assertivo e entregar resultados surpreendentes." img={Img2} w="80.14px" h="98.48px" alt="caneta"/>
            </div>
        </>
    )
}

export default Home