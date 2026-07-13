import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import logoImage from '../assets/images/LogoArtha.png'
import phoneImage from '../assets/images/telefone.png'
import eImage from '../assets/images/email.png'
import instaImage from '../assets/images/instagram.png'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contatoInfo}>
                    <h2 className={styles.title}>Contato</h2>
                    <p className={styles.description}>ARTHA Arquitetura e Interiores</p>
                    <div className={styles.info}>
                        <img src={phoneImage} className={styles.phone} alt="imagem de telefone" />
                        <p className={styles.infoText}>(11) 9.9695-9889</p>
                    </div>
                    <div className={styles.info}>
                        <img src={eImage} className={styles.email} alt="imagem de e-mail" />
                        <p className={styles.infoText}>artha.arqdesign@gmail.com</p>
                    </div>
                    <div className={styles.info}>
                        <img src={instaImage} className={styles.insta} alt="imagem de instagram" />
                        <p className={styles.infoText}>Instagram: artha.arqdesign</p>
                    </div>
                </div>
                <div className={styles.navDiv}>
                    <ul className={styles.navBar}>
                        <li><Link className={styles.meuLink} to="/">Home</Link></li>
                        <li><Link className={styles.meuLink} to="/sobre">Sobre</Link></li>
                        <li><Link className={styles.meuLink} to="/portfolio">Portifólio</Link></li>
                        <li><Link className={styles.meuLink} to="contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <img src={logoImage} className={styles.logoArtha} alt="Logo da Empresa Artha" />
                    <p className={styles.sloganText}>|  Arquitetura com propósito</p>
                </div>
                <p className={styles.madeBy}>Feito por Scitec Júnior</p>
            </div>
        </div>
    )
}

export default Footer