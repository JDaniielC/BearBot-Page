import React from "react";
import styles from 'styles/components/Introduction.module.css';
import Image from 'next/image';

export default function Introduction() {
  return (
    <section className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/logoDesktop.svg" alt="logo"/>
      </div>
      <h2> 
        Uma ferramenta que ajuda pessoas a ver o mercado financeiro 
        como uma opção de renda extra! Otimize seu tempo investindo 
        poucos minutos por dia, sem precisar entender sobre o mercado.
      </h2>
      <h2 className={styles.highlight}> 
        Melhor bot do mercado no seguimento, testada e aprovada por
        centenas de usuários. Diferenciais que não se encontra em
        nenhum outro bot do mercado.
      </h2>
      <iframe allowFullScreen width="100%" height="500" 
        src="https://www.youtube.com/embed/LzZfefrBk18"
        frameBorder="0" title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture"/> 
        
      <a href="#comprar" className={styles.buyBt}> 
        Comprar agora 
      </a>
    </section>
  )
}
