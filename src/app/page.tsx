import dynamic from 'next/dynamic';

import styles from './page.module.css';

export default function Home() {
    const Components = dynamic(() => import('@/components/Components'));

    const year = (new Date()).getFullYear();

    return (
        <main className={styles.main}>
            <Components />
            <footer>
                &copy; {year} Kyle Tolliver -- Code Names
            </footer>
        </main>
    );
}
