import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import projetos from '../data/projetos'

import decoracaoEstrela from '../assets/images/image20.png'
import styles from './Portfolio.module.css'

function ProjetoCard({ projeto }) {
    return (
        <Link to={`/portfolio/${projeto.slug}`} className={styles.card}>
            <img src={projeto.capa} className={styles.cardImagem} alt={`Foto de capa do projeto ${projeto.titulo}`} />
            <p className={styles.cardTitulo}>{projeto.titulo}</p>
        </Link>
    )
}

function Portfolio() {
    const residenciais = projetos.filter((p) => p.categoria === 'residencial')
    const comerciais = projetos.filter((p) => p.categoria === 'comercial')

    return (
        <>
            <NavBar />

            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        Arquitetura com propósito.<br />
                        A ressignificação do seu modo de viver.
                    </h1>
                    <p className={styles.heroParagrafo}>
                        Projetamos reformas residenciais e comerciais focadas na harmonia, organização e no bem-estar. Transformamos espaços para que eles contem a sua história.
                    </p>
                    <div className={styles.heroBotoes}>
                        <Link to="/sobre" className={styles.botaoServicos}>Nossos serviços</Link>
                        <Link to="/contato" className={styles.botaoContato}>Entre em contato</Link>
                    </div>
                </div>
            </div>

            <section className={styles.secaoProjetos}>
                <img src={decoracaoEstrela} className={styles.decorTopoEsquerda} alt="" aria-hidden="true" />

                <div className={styles.categoriaHeader}>
                    <span className={styles.categoriaPill}>Residenciais</span>
                    <p className={styles.categoriaSub}>Clique nos projetos e veja mais</p>
                </div>

                <div className={styles.grid}>
                    {residenciais.map((projeto) => (
                        <ProjetoCard key={projeto.slug} projeto={projeto} />
                    ))}
                </div>

                <img src={decoracaoEstrela} className={styles.decorMeioDireita} alt="" aria-hidden="true" />

                <div className={styles.categoriaHeader}>
                    <span className={styles.categoriaPill}>Comerciais</span>
                    <p className={styles.categoriaSub}>Clique nos projetos e veja mais</p>
                </div>

                <div className={styles.grid}>
                    {comerciais.map((projeto) => (
                        <ProjetoCard key={projeto.slug} projeto={projeto} />
                    ))}
                </div>

                <img src={decoracaoEstrela} className={styles.decorBaixoEsquerda} alt="" aria-hidden="true" />
            </section>

            <Footer />
        </>
    )
}

export default Portfolio
