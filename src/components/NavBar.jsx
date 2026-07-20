import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import logoImage from '../assets/images/LogoArtha.png'

function NavBar({className, variante = 'navBarPrincipal'}) {
    const classesCombinadas = `
    ${styles.navBase} 
    ${styles[variante] || ''} 
    ${className || ''}
  `.trim();

    return (
        <div className={classesCombinadas}>
            <img src={logoImage} className={styles.logoArtha} style={{visibility : variante === 'Transparent' ? 'hidden' : 'visible'}} alt="Logo da Empresa Artha" />
            <div className={styles.elementos}>
                <ul className={styles.navList}>
                    <li><Link className={styles.meuLink} to="/">Home</Link></li>
                    <li><Link className={styles.meuLink} to="/sobre">Sobre</Link></li>
                    <li><Link className={styles.meuLink} to="/portfolio">Portfólio</Link></li>
                    <li><Link className={styles.meuLink} to="/contato">Contato</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
