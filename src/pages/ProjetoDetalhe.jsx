import { useParams, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import projetos from '../data/projetos'
import decoracaoEstrela from '../assets/images/image20.png'
import styles from './ProjetoDetalhe.module.css'

function ProjetoDetalhe() {
    const { slug } = useParams()
    const projeto = projetos.find((p) => p.slug === slug)

    if (!projeto) {
        return (
            <>
                <NavBar />
                <div className={styles.conteudo}>
                    <p className={styles.naoEncontrado}>Projeto não encontrado.</p>
                    <Link to="/portfolio" className={styles.voltar}>&lt; Voltar</Link>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <NavBar />

            <div className={styles.conteudo}>
                <img src={decoracaoEstrela} className={styles.decorTopoDireita} alt="" aria-hidden="true" />

                <Link to="/portfolio" className={styles.voltar}>&lt; Voltar</Link>

                <h1 className={styles.titulo}>{projeto.titulo}</h1>

                <div className={styles.galeria}>
                    {projeto.galeria.map((imagem, indice) => (
                        <img
                            key={indice}
                            src={imagem}
                            className={styles.imagem}
                            alt={`Foto ${indice + 1} do projeto ${projeto.titulo}`}
                        />
                    ))}
                </div>

                <Link to="/portfolio" className={styles.voltar}>&lt; Voltar</Link>
            </div>

            <Footer />
        </>
    )
}

export default ProjetoDetalhe
