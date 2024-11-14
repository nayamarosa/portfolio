'use client'

import styles from "./nav-links.module.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navigationLinks } from "../utils/nav-data";
 
export const NavLinks = () => {
  const pathname = usePathname();
 
  return (
    <nav className={styles.layoutNav}>
        <ul className={styles.layoutNavList}>
          {
            navigationLinks.map((item, key) => (
              <li key={key} className={`${pathname === item.path ? styles.hide : ''} ${styles.layoutNavListItem} ${styles[item.id]}`}>
                <Link className={styles.layoutNavListItemLink} id={item.id} href={item.path}>
                  <span className={styles.layoutNavListText}>{item.label}</span>
                </Link>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}