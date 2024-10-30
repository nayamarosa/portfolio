import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

const harmRegular = localFont({
  src: "./fonts/Harmattan-Regular.ttf",
  variable: "--regular",
  weight: "400",
});
const harmBold = localFont({
  src: "./fonts/Harmattan-Regular.ttf",
  variable: "--bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Nayama Rosa Portfolio",
  description: "Nayama Rosa Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={harmRegular.variable}>
        <div className={styles.layout}>
          <main className={styles.layoutMain}>
            {children}
          </main>
            <nav className={styles.layoutNav}>
              <ul className={styles.layoutNavList}>
                {/* <li className={`${styles.layoutNavListItem} ${styles.homeColor}`}><Link className={styles.layoutNavListItemLink} href="/"><span className={styles.layoutNavListText}>Nayama Rosa</span></Link></li> */}
                <li className={`${styles.layoutNavListItem} ${styles.devColor}`}><Link className={styles.layoutNavListItemLink} href="/development"><span className={styles.layoutNavListText}>Programação</span></Link></li>
                <li className={`${styles.layoutNavListItem} ${styles.designColor}`}><Link className={styles.layoutNavListItemLink} href="/design"><span className={styles.layoutNavListText}>Design</span></Link></li>
                <li className={`${styles.layoutNavListItem} ${styles.contactColor}`}><Link className={styles.layoutNavListItemLink} href="/contact"><span className={styles.layoutNavListText}>Contato</span></Link></li>
              </ul>
          </nav>
        </div>
      </body>
    </html>
  );
}
