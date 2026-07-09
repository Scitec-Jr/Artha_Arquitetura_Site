import NavBar from '../components/NavBar'
import Banner from '../components/Banner.png'
import TriImg from '../components/image20.png'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <div className={styles.button}>
                <p>Contato</p>
            </div>
            <div className={styles.navBar_Banner}>
                <img src={Banner} className={styles.banner} alt="Banner do Site" />
                <NavBar className={styles.navBarHome} variante="Transparent"/>
            </div>
            <div className={styles.projects}>
                <img src="" alt="" />
                <div className={styles.text}>

                </div>
                <img src="" alt="" />
            </div>
        </>
    )
}

export default Home