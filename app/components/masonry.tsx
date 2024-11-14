'use client'

import { usePathname } from "next/navigation";
import styles from "./masonry.module.css";
 
export const Masonry = ( { masonryImages }: MasonryProps ) => {

  const pathname = usePathname();

  const imagePairs = [];
  for (let i = 0; i < masonryImages.length; i += 2) {
    imagePairs.push(masonryImages.slice(i, i + 2));
  }

  return (
    <div className={`${pathname === '/' ? styles.masonryGaleryHome : styles.masonryGalery} `}>
      {imagePairs.map((pair, index) => (
        <ul key={index} className={styles.masonryGaleryList}>
          {pair.map((img, key) => (
            <li key={key} className={styles.masonryGaleryListItem}>
              <img src={img.src} alt={img.alt} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}