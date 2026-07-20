import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import logo from "../assets/images/LogoArtha2.png"
import email from "../assets/images/LogoEmail.png"
import whatsapp from "../assets/images/whatsapp.png"
import circulo from "../assets/images/circuloVariante.png"
import styles from "./Contato.module.css"


function Contato () {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.info}>
                    <img className={styles.logoImage} src={logo} alt="logo Artha Arquitetura" />
                    <div className={styles.contactInfo}>
                        <div className={styles.individualInfo}>
                            <img className={styles.imageEmail} src={email} alt="email" />
                            <p className={styles.infoText}>artha.arqdesign@gmail.com</p>
                        </div>
                        <div className={styles.individualInfo}>
                            <img className={styles.imageWhatsapp} src={whatsapp} alt="whatsapp" />
                            <p className={styles.infoText}>(11) 9.9695-9889</p>
                        </div>
                    </div>
                    <img className={styles.circle} src={circulo} alt="decoração circular com estampa" />
                </div>
                <div className={styles.form}>
                    <div className={styles.grid}>
                        <h2>Entre em Contato</h2>
                        <form className={styles.formulario}>
                            <label>Nome</label>
                            <input type="text" />

                            <label>Telefone</label>
                            <input type="text" />


                            <label>E-mail</label>
                            <input type="text" />


                            <label className={styles.tag}>Mensagem</label>
                            <input className={styles.message} type="text" />

                            <input className={styles.button} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer cor="white" />
        </>
    )
}

export default Contato
