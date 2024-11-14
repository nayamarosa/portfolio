'use client'

import styles from "./carousel.module.css";
import Link from 'next/link';
import Image from 'next/image';
 
export const Carousel = ( { carouselData, path }: CarouselProps ) => {

    return (
        <section>
        <ul className={styles.carouselList}>
            {
                carouselData.map((item: CarouselItem, index: number) => (
                    <li key={index} className={styles.carouselListItem}>
                        <img className={styles.image} src={item.src} alt={item.alt} />
                        <div className={`${path === '/development' ? styles.infoDevelopment : styles.infoDesign} ${styles.info}`}>
                            <h2 className={`${path === '/development' ? styles.titleDevelopment : styles.titleDesign} ${styles.title}`}>{item.title}</h2>
                            <p className={styles.description}>{item.description}</p>
                            <p className={styles.subtitle}>Tecnologias utilizadas</p>
                            <div className={styles.tech}>
                                {
                                    item.technologies.map((i, key) => (
                                        <div className={styles.techGroup} key={`tech-${key}`}>
                                            <Image src={`/assets/images/${i.name}.png`} alt={i.name} width="30" height="30" />
                                            <p>{i.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <p className={styles.subtitle}>Acessar fonte</p>
                            <div className={styles.links}>
                                <Link href={item.github}>
                                    <Image src="/assets/images/Github.png" alt="Github" width="30" height="30" />
                                </Link>
                                <Link href={item.figma}>
                                    <Image src="/assets/images/Figma.png" alt="Figma" width="30" height="30" />
                                </Link>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
        </section>
    )
}