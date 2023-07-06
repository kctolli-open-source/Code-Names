import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const app: string = 'Code Names';

export const metadata = {
    title: app,
    description: 'Next App for Code Names',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    const year = (new Date()).getFullYear();

    const Icon = () => (
        <link 
            rel="icon" 
            href="https://play-lh.googleusercontent.com/ebiEB6VxGtRBCNUKj6u7jGaABGAZjrc_72HH2y9Pp7tCuVS9mmdTQUcFTE_VBP-Weh4"
        />
    );
    
    return (
        <html lang="en" className={inter.className}>
            <Icon />
            <body>
                {children}
                <footer>
                    &copy; {year} Kyle Tolliver -- {app}
                </footer>
            </body>
        </html>
    );
}
