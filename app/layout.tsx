import type { Metadata } from 'next';
import { Inter, Poppins, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import Container from '@/components/Container/Container';
import Navbar from '@/components/Navbar/Navbar';
import MobileNav from '@/components/MobileNav/MobileNav';
import './globals.scss';
import styles from './page.module.scss';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });
const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Isiaq Ridwan Bukola's Portfolio",
  description: 'A ReactJS frontend developer portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} ${dm_sans.className}`}
      >
        <main className={styles.main}>
          <Container>
            <Navbar />
            <MobileNav />
            {children}
          </Container>
        </main>
      </body>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-31S01YWQKM"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-31S01YWQKM');
        `}
      </Script>
    </html>
  );
}
