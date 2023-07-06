'use client';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

export default function Board({elements}: {elements: string[]}) {
    const Tile = dynamic(() => import('@/components/Tile/Tile'));

    return (
        <section>
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
