import React from 'react';

import { BsCheck } from "react-icons/bs";
import styles from 'styles/components/Features.module.css';


export default function Features() {
  return (
    <section className={styles.container}>
      <h1> Quais os benefícios de usar o <b>BearBot?</b> </h1>
      <hr />
      
      <div className={styles.features}>
        <span> 
          <BsCheck size={100}/>
          <p>
            Catalogador e automatizador de estratégias em m1, m5 e m15. 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Mais de 61 estratégias, <b>**incluindo as sinais duplos**</b> 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Operar após o HIT <br/> (filtro de mínimo de hits) 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Filtro Bear 1 e 2, assertividade de mão fixa acima de 70% 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Catalogação manual e automática <br/> (catalogador próprio) 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Opção de Escolher 3 Catalogadores! <br/> (Velho, Novo e Local) 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Filtro de Assertividade mínima, estratégias e outros 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Gerenciamento com mão fixa, Soros, Sorosgale, Martingale e Ciclos. 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Stop Loss Fixo e Móvel e Pré-Stop Loss/Win em Porcentagem.
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Filtro de tendência, notícias e máximo de operações
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Antecipar Entrada/Resultados (leitura de taxa) 
          </p> 
        </span>
        <span> 
          <BsCheck size={100}/>
          <p>
            Retorno das operações e Resultados no Telegram. 
          </p> 
        </span>
      </div>
      <br />
      <h2>
        Todas as estratégias e investimentos envolvem risco de perda. 
        Nenhuma informação contida neste produto deve ser interpretada 
        como uma garantia de resultados ou aconselhamento de investimento.
      </h2>
    </section>
  )
}
