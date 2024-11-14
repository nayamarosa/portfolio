'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Masonry } from "./components/masonry";
import { masonryHomeService } from "./utils/masonry-home-data";

const Home = () => {

  const [masonryImagesData, setMasonryImagesData] = useState<MasonryImage[] | []>([]);

  useEffect(() => {
    setMasonryImagesData(masonryHomeService);
    return () => {
      masonryImagesData;
    }
  }, [])

  return (
    <>
      <h1 className={styles.title}>Nayama Rosa</h1>
      <div className={styles.homeAlign}>
        <section className={styles.about}>
          <p>Sou desenvolvedora front-end com experiência em várias áreas, como bancária, turismo e saúde. Tenho conhecimentos em HTML, CSS, JavaScript e TypeScript e trabalho com frameworks como React, Angular.</p>
          <p>Além do código, gosto de me envolver nas etapas de design com UX/UI, participando desde a criação do produto até a prototipagem e desenvolvimento.</p>
          <img src="https://www.masma.com.br/wp-content/uploads/2024/05/scorpion-scaled.jpg" alt="Nayama Rosa" />
          <div>
            
          </div>
        </section>
        <div className={styles.galery}>
          <h2>Últimos projetos</h2>
          <Masonry masonryImages={masonryImagesData}/>
        </div>
      </div>
    </>
  );
}

export default Home;