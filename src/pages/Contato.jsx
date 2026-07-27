import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import logo from "../assets/images/LogoArtha2.png";
import email from "../assets/images/LogoEmail.png";
import whatsapp from "../assets/images/whatsapp.png";
import circulo from "../assets/images/circuloVariante.png";
import styles from "./Contato.module.css";

function Contato() {
  useEffect(() => {
    document.title = "Contato | Artha Arquitetura";
  }, []);
  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Erro ao enviar a mensagem. Tente novamente.");
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.info}>
          <img
            className={styles.logoImage}
            src={logo}
            alt="logo Artha Arquitetura"
          />
          <div className={styles.contactInfo}>
            <div className={styles.individualInfo}>
              <img className={styles.imageEmail} src={email} alt="email" />
              <p className={styles.infoText}>artha.arqdesign@gmail.com</p>
            </div>
            <div className={styles.individualInfo}>
              <img
                className={styles.imageWhatsapp}
                src={whatsapp}
                alt="whatsapp"
              />
              <p className={styles.infoText}>(11) 9.9695-9889</p>
            </div>
          </div>
          <img
            className={styles.circle}
            src={circulo}
            alt="decoração circular com estampa"
          />
        </div>
        <div className={styles.form}>
          <div className={styles.grid}>
            <h2>Entre em Contato</h2>
            <form ref={form} onSubmit={sendEmail} className={styles.formulario}>
              <label>Nome</label>

              <input type="text" name="user_name" required />

              <label>Telefone</label>

              <input type="text" name="user_phone" />

              <label>E-mail</label>
              <input type="email" name="user_email" required />

              <label className={styles.tag}>Mensagem</label>
              <textarea
                className={styles.message}
                name="message"
                required
                rows="4"
              />

              <div className={styles.buttonWrapper}>
                {/* Aqui o botão muda de texto e é desativado (disabled) durante o envio */}
                <input
                  className={styles.button}
                  type="submit"
                  value={isSubmitting ? "Enviando..." : "Enviar"}
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer cor="white" />
    </>
  );
}

export default Contato;
