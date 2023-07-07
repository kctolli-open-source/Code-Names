'use client';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

import s from './Board.module.css';

export default function Board({ elements }: {elements: string[]}) {
    const Tile = dynamic(() => import('@/components/Board/Tile'));

    return (
        <section className={s.board}>
            <Grid container spacing={2}>
                {elements.map((word, index) => (
                    <Grid item spacing={2} key={index}>
                        <Tile word={word}/>
                    </Grid>
                ))}
            </Grid>
        </section>
    );
}
