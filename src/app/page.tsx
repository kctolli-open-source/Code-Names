'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

import ApiHelper from '@/common/apiHelper';
import styles from './page.module.css';

export default function Home() {
    const Board = dynamic(() => import('@/components/Board/Board'));
    const Selection = dynamic(() => import('@/components/Selection/Selection'));

    const loadingData = new Array(25).fill("word");
    const [data, setData]: any[] = useState<any[]>();
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ApiHelper.router('words'));
                setData(await response.json());
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <main className={styles.main}>
        <Suspense fallback={<Board elements={loadingData} />}>
            { data &&
            <>
                <> { data.words && 
                    <Board elements={data.words} /> 
                } </>
                <> {
                    data.assassin && data.red && data.blue &&
                    <Selection assassin={data.assassin} red={data.red} blue={data.blue} />
                } </>
            </>
            }
        </Suspense>
        </main>
    );
}
