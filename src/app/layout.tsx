import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const app: string = 'Code Names';

export const metadata = {
  title: app,
  description: 'Next App for Code Names',
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
  const icon = "https://play-lh.googleusercontent.com/ebiEB6VxGtRBCNUKj6u7jGaABGAZjrc_72HH2y9Pp7tCuVS9mmdTQUcFTE_VBP-Weh4";

  const Foot = dynamic(() => import('@/components/Foot/Foot'));
  
  return (
    <html lang="en" className={inter.className}>
      <link rel="icon" href={icon} />
      <body>{children}</body>
      <Foot app={app} />
    </html>
  );
}

export default RootLayout;
