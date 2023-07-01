'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Grid } from '@mui/material';

export default function Board({words}: {words: string[]}) {
    const Tile = dynamic(() => import('@/components/Tile/Tile'));

    return (
        <section>
            <Grid container spacing={3}>
                {words.map((word, index) => (
                    <Grid item spacing={2} key={index}>
                        <Tile word={word}/>
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}
