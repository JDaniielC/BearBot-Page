import styles from 'styles/components/Plans.module.css';
import { FcCheckmark } from "react-icons/fc";

export default function Plans() {
    return (
        <section id="comprar" className={styles.container}>
            <h4>Plano Mensal e Completo</h4>
            <p className={styles.barrar}>De R$119,90</p>
            <h2>R$80,00</h2>

            <div className={styles.card}>
                <p>
                    <FcCheckmark size={30}/>
                    Instruções de instalação, todo o passo a passo de como fazer
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Suporte total e atencioso pós-venda
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Reembolso garantido em 7 dias
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Mais de 61 estratégias automatizadas!
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Retorno das operações e resultados via Telegram!
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Filtros de operações!
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Filtro Bear, Notícias e tendência
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Assertividade/payout mínimo e máximo de operações.
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Gerenciamento completo
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Mão fixa, Soros, Ciclos, Martingale e Sorosgale
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Catalogadores
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Catalogador próprio e outros tipos para manual e automático!
                </p>
                <p>
                    <FcCheckmark size={30}/>
                    Antecipação de resultados e entradas!
                </p>
                <a href="https://go.perfectpay.com.br/PPU38CKHMDQ" className="buyBtn">
                    ASSINE JÁ
                </a>
            </div>
        </section>
    )
}