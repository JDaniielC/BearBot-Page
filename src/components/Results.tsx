import ImageGallery from 'react-image-gallery';
import React, { useState } from 'react';

import styles from "styles/components/Results.module.css";

export default function Results() {
    const [images, _] = useState([{
            original: "/results/1.svg",
            thumbnail: "/results/1.svg"
        },
        {
            original: "/results/2.svg",
            thumbnail: "/results/2.svg"
        },
        {
            original: "/results/3.svg",
            thumbnail: "/results/3.svg"
        },
        {
            original: "/results/4.svg",
            thumbnail: "/results/4.svg"
        },
        {
            original: "/results/5.png",
            thumbnail: "/results/5.png"
        },
        {
            original: "/results/6.png",
            thumbnail: "/results/6.png"
        }
    ]);
    
    return (
        <section className={styles.container}>
            <h1> Se liga nos resultado da ferrramenta: </h1>
            <ImageGallery items={images}/>
        </section>
    )
}