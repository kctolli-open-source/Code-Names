import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const app: string = 'Code Names';

export const metadata = {
    title: app,
    description: `Next App for ${app}`,
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className={inter.className}>
            <link 
                rel="icon" 
                href="https://play-lh.googleusercontent.com/ebiEB6VxGtRBCNUKj6u7jGaABGAZjrc_72HH2y9Pp7tCuVS9mmdTQUcFTE_VBP-Weh4"
            />
            <body>
                {children}
            </body>
        </html>
    );
}
