import Imagem from './Imagem.jsx'
import styles from './AdvantagesText.module.css'

function advantagesText({ alinhar = 'left', title, text , img, w, h, alt}) {
    const estiloTitulo = {
  textAlign: alinhar === 'right' ? 'right' : 'left',
  width: '100%',
  display: 'block'
};

    return (
        <div className={styles.container}>
        <div className={styles.Text}>
            <h2 className={styles.title} style={estiloTitulo}>
            {title}
            </h2>
            <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.imagem}>
            <Imagem src={img} width={w} height={h} alt={alt}/>
        </div>
        </div>
    )
}

export default advantagesText