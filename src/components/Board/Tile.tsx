'use client';
import { Box, Button } from '@mui/material';

import s from './Board.module.css';

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
                <>
                    <span className={s.word}>
                        {word}
                    </span>
                </>
            </Box>
        </div>
    );
}
