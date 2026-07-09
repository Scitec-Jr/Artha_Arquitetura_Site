import styles from './NavBar.module.css'
import {Link} from 'react-router-dom'
import logoImage from './LogoArtha.png'

function NavBar({className, variante = 'navBarPrincipal'}) {
    const classesCombinadas = `
    ${styles.navBase} 
    ${styles[variante] || ''} 
    ${className || ''}
  `.trim();

    return (
        <div className={classesCombinadas}>
            {variante !== 'Transparent' && (<img src={logoImage} className={styles.logoArtha} alt="Logo da Empresa Artha" />)}
            <div className={styles.elementos}>
                <ul>
                    <li><Link className={styles.meuLink} to="/">Home</Link></li>
                    <li><Link className={styles.meuLink} to="/sobre">Sobre</Link></li>
                    <li><Link className={styles.meuLink} to="/portfolio">Portifólio</Link></li>
                    <li><Link className={styles.meuLink} to="contato">Contato</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar