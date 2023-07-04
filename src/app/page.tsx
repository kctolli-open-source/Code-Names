//'use client';
import dynamic from 'next/dynamic';

import React, { Suspense } from 'react';
import { elements, assassin, teams } from '@/common/wordPicker';
import styles from './page.module.css';

const Home = () => {
  const Board = dynamic(() => import('@/components/Board/Board'));
  const Selection = dynamic(() => import('@/components/Selection/Selection'));

  return (
    <main className={styles.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <Board elements={elements} />
        <Selection assassin={assassin} teams={teams} />
      </Suspense>
    </main>
  )
}

export default Home;
