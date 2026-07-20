import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Compasso from '../assets/images/Sobre/compasso.png'
import LogoArtha from '../assets/images/LogoArtha2.png'
import AnaLucia from '../assets/images/Sobre/imagemAna.png'
import PadraoFlor from '../assets/images/imagemCirculo2.png'
import ServicosBg from '../assets/images/Sobre/servicosBG.png'
import styles from './Sobre.module.css'

function Sobre() {
    return (
        <>
        <NavBar /> 
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>Quem somos</h1>
                    <p className={styles.heroParagrafo}>
                        Somos um escritório de arquitetura situado em São Paulo, especializado na elaboração de <strong>projetos de arquitetura</strong> e de <strong>interiores</strong>, acompanhamento e gerenciamento de construções e reformas com foco nos segmentos <strong>residencial</strong> e <strong>comercial</strong>.
                    </p>
                    <p className={styles.heroParagrafo}>
                        Fundado em <strong>2019</strong>, nosso foco é desenvolver um trabalho de <strong>qualidade</strong>, com <strong>comprometimento</strong> e <strong>olhar atento</strong> desde a concepção do projeto até a entrega da obra, atento aos prazos e soluções técnicas de forma a otimizar o tempo do projeto x obra x custos, proporcionando produtividade na execução e a satisfação do cliente.
                    </p>
                </div>
                <img src={Compasso} className={styles.heroCompasso} alt="ícone de compasso de desenho técnico" />
            </div>

            <div className={styles.equipe}>
                <img src={AnaLucia} className={styles.fotoEquipe} alt="Foto de Ana Lúcia Cavassani de Thomazo" />

                <div className={styles.textoEquipe}>
                    <h2 className={styles.nomeEquipe}>Ana Lúcia Cavassani de Thomazo</h2>
                    <p className={styles.paragrafoEquipe}>
                        Graduada pela Universidade Anhembi Morumbi, com mais de 22 anos de experiência em renomadas incorporadoras imobiliárias e construtoras do mercado com foco em <span className={styles.destaqueLaranja}>edifícios residenciais de alto padrão</span>, edifícios <span className={styles.destaqueLaranja}>comerciais</span> e edifícios <span className={styles.destaqueLaranja}>industriais</span>.
                    </p>
                </div>

                <div className={styles.restoTextoEquipe}>
                    <p className={styles.paragrafoEquipe}>
                        Garantimos <span className={styles.destaqueVerde}>acompanhamento completo</span> em todas as fases do projeto, provendo o respaldo técnico necessário para que cada decisão seja tomada com confiança.
                    </p>
                    <p className={styles.paragrafoEquipe}>
                        Gerenciamos todas as etapas da execução, com uma consultoria técnica contínua para garantir total clareza e segurança do início ao fim da obra.
                    </p>
                    <p className={styles.paragrafoEquipe}>
                        As execuções de obra possuem seus desafios e logísticas! Nosso compromisso é <span className={styles.destaqueVerde}>estar presente</span> e resolver o que for necessário para que seu sonho se concretize!
                    </p>
                </div>

                <img src={PadraoFlor} className={styles.padraoFlor} alt="" />
            </div>

            <div className={styles.missao}>
                <div className={styles.missaoLogo}>
                    <img src={LogoArtha} className={styles.logoMissaoValores} alt="Logo da Empresa Artha" />
                </div>
                <div className={styles.missaoTexto}>
                    <h2 className={styles.tituloMissao}>Nossa Missão</h2>
                    <p className={styles.paragrafoMissaoValores}>
                        Nossa missão é desenvolver projetos de arquitetura com propósito que traduzam a identidade, desejos e estilo de vida de nossos clientes. Aliando a técnica com estética e funcionalidade, conseguimos materializar seus sonhos, proporcionando bem-estar, conforto e qualidade de vida.
                    </p>
                    <p className={styles.paragrafoMissaoValores}>
                        Do conceito à execução de seu projeto, nosso compromisso é com a escuta atenta, a criatividade e a atenção aos detalhes, garantindo que cada projeto seja único e conte uma nova história de vida aos integrantes que ali viverão e utilizarão os espaços.
                    </p>
                </div>
            </div>

            <div className={styles.valores}>
                <div className={styles.valoresTexto}>
                    <h2 className={styles.tituloValores}>Nossos Valores</h2>
                    <p className={styles.paragrafoMissaoValores}>
                        Acreditamos que a técnica e criatividade caminham juntas. Em um projeto, nosso propósito é a união de forma eficiente dos recursos para garantir espaços funcionais, materiais adequados, prazos reais e custos alinhados com a expectativa do cliente.
                    </p>
                    <p className={styles.paragrafoMissaoValores}>
                        Nossa conduta profissional é pautada pelo comprometimento, honestidade, transparência e respeito em todas as interações, que julgamos fazer a diferença na condução da gestão de todo o processo, trazendo agilidade e flexibilidade na execução das tarefas.
                    </p>
                </div>
                <div className={styles.valoresLogo}>
                    <img src={LogoArtha} className={styles.logoMissaoValores} alt="Logo da Empresa Artha" />
                </div>
            </div>

            <div className={styles.servicos} style={{ backgroundImage: `url(${ServicosBg})` }}>
                <div className={styles.servicosOverlay}>
                    <h2 className={styles.tituloServicos}>Serviços</h2>
                    <ul className={styles.listaServicos}>
                        <li>Projetos de arquitetura e interiores com gerenciamento de obras</li>
                        <li>Projetos de arquitetura e interiores on-line</li>
                    </ul>
                    <Link to="/contato" className={styles.botaoContato}>Entrar em contato</Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Sobre
