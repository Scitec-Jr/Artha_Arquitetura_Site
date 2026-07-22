import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import logoImage from '../assets/images/LogoArtha.png'
import logoImageAlt from '../assets/images/ArthaLaranja.png'
import phoneImage from '../assets/images/telefone.png'
import phoneAlt from '../assets/images/telefoneAlt.png'
import eImage from '../assets/images/email.png'
import eAlt from '../assets/images/emailAlt.png'
import instaImage from '../assets/images/instagram.png'
import instaAlt from '../assets/images/instagramAlt.png'

function Footer({ cor = 'orange' }) {
    const image1 = {
        orange: logoImage,
        white: logoImageAlt
    };

    const image2 = {
        orange: phoneImage,
        white: phoneAlt
    };

    const image3 = {
        orange: eImage,
        white: eAlt
    };

    const image4 = {
        orange: instaImage,
        white: instaAlt
    };

    const atual = image1[cor] || logoImage;
    const atual2 = image2[cor] || phoneImage;
    const atual3 = image3[cor] || eImage;
    const atual4 = image4[cor] || instaImage;

    return (
        <div  className={`${styles.footer} ${cor === 'white' ? styles.whitefooter : ''}`}>
            <div className={styles.container}>
                <div className={`${styles.contactInfo} ${cor === 'white' ? styles.contactInfoO : ''}`}>
                    <h2 className={`${styles.title} ${cor === 'white' ? styles.titleO : ''}`}>Contato</h2>
                    <p  className={`${styles.description} ${cor === 'white' ? styles.descriptionO : ''}`}>ARTHA Arquitetura e Interiores</p>
                    <div className={styles.info}>
                        <img src={atual2} className={styles.phone} alt="imagem de telefone" />
                        <p className={`${styles.infoText} ${cor === 'white' ? styles.infoTextO : ''}`}>(11) 9.9695-9889</p>
                    </div>
                    <div className={styles.info}>
                        <img src={atual3} className={styles.email} alt="imagem de e-mail" />
                        <p className={`${styles.infoText} ${cor === 'white' ? styles.infoTextO : ''}`}>artha.arqdesign@gmail.com</p>
                    </div>
                    <div className={styles.info}>
                        <img src={atual4} className={styles.insta} alt="imagem de instagram" />
                        <p className={`${styles.infoText} ${cor === 'white' ? styles.infoTextO : ''}`}>Instagram: artha.arqdesign</p>
                    </div>
                </div>
                <div className={styles.navDiv}>
                    <ul className={styles.navBar}>
                        <li className={styles.navItem}><Link className={`${styles.meuLink} ${cor === 'white' ? styles.meuLinkO : ''}`} to="/">Home</Link></li>
                        <li className={styles.navItem}><Link className={`${styles.meuLink} ${cor === 'white' ? styles.meuLinkO : ''}`} to="/sobre">Sobre</Link></li>
                        <li className={styles.navItem}><Link className={`${styles.meuLink} ${cor === 'white' ? styles.meuLinkO : ''}`} to="/portfolio">Portfólio</Link></li>
                        <li className={styles.navItem}><Link className={`${styles.meuLink} ${cor === 'white' ? styles.meuLinkO : ''}`} to="/contato">Contato</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <img src={atual} className={styles.logoArtha} alt="Logo da Empresa Artha" />
                    <p className={`${styles.sloganText} ${cor === 'white' ? styles.sloganTextO : ''}`}>|  Arquitetura com propósito</p>
                </div>
                <p className={`${styles.madeBy} ${cor === 'white' ? styles.madeByO : ''}`}>Feito por Scitec Júnior</p>
            </div>
        </div>
    )
}

export default Footer
