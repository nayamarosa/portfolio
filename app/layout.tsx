import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import { NavLinks } from "./ui/nav-links";


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
      <body>
        <div className={styles.layout}>
          <main className={styles.layoutMain}>
            {children}
          </main>
          <NavLinks />
        </div>
      </body>
    </html>
  );
}
