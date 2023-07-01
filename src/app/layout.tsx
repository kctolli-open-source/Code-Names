import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const app: string = 'Code Names';

export const metadata = {
  title: app,
  description: 'Next App for Code Names',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const year = (new Date()).getFullYear();
  const icon = "https://play-lh.googleusercontent.com/ebiEB6VxGtRBCNUKj6u7jGaABGAZjrc_72HH2y9Pp7tCuVS9mmdTQUcFTE_VBP-Weh4";

  return (
    <html lang="en" className={inter.className}>
      <link rel="icon" href={icon} />
      <body>{children}</body>
      <><br /><hr /><span className="clr" /></>
      <footer>&copy; {year} Kyle Tolliver -- {app}</footer>
    </html>
  );
}

export default RootLayout;
