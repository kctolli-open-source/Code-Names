"use client";
import dynamic from 'next/dynamic';

import styles from './page.module.css';

import { elements } from '@/common/wordPicker';

const Home = () => {
  const Board = dynamic(() => import('@/components/Board/Board'));
  const Selection = dynamic(() => import('@/components/Selection/Selection'));

  return (
    <main className={styles.main}>
      <Board words={elements} />
      <Selection />
    </main>
  )
}

export default Home;
