function Imagem({ src, alt, width, height }) {
    return (
        <img src={src} alt={alt} style={{width: width, height: height, objectFit: 'cover'}}/>
    )
}
export default Imagem