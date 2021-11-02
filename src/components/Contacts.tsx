import styles from 'styles/components/Contacts.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs"

export default function Contacts() {
    return (
        <section className={styles.container}>
            <a href="https://api.whatsapp.com/send?phone=553498419706&text=Ol%C3%A1,%20quero%20tirar%20mais%20d%C3%BAvidas%20sobre%20o%20Rob%C3%B4%20BullGain%20Pro!" 
            rel="noreferrer" target="_blank">
                <IoLogoWhatsapp size={50}/>
            </a>
            <a rel="noreferrer" href="https://t.me/estrategiabearteste" target="_blank">
                <BsTelegram size={50}/>
            </a>
            <h4>
                Entre em contato conosco ou participe do grupo no Telegram!
            </h4>
            <p>Atendimento via Whatsapp de segunda a sábado de 8:00h às 18:00h. </p>
        </section>
    )
}