'use client';
import { Box } from '@mui/material';

import s from './Tile.module.css';

export default function Tile ({word}: {word: string}) {
    const size = 150;

    return (
        <div className={s.box}>
            {/* @ts-ignore*/}
            <Box
                width={`${size}px`}
                height={`${size}px`}
                backgroundColor="black"
                color="white"
            >
                <span className={s.word}>
                    {word}
                </span>
            </Box>
        </div>
    );
}
