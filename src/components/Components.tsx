'use client';
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

import ApiHelper from '@/common/apiHelper';
//import words from '@/common/words/words';

export default function Components() {
    const Board = dynamic(() => import('@/components/Board/Board'));
    const Selection = dynamic(() => import('@/components/Selection/Selection'));

    const [data, setData]: any = useState<any>();
    useEffect(() => {ApiHelper.fetchData('words', setData)}, ['words']);

    return (
        <Suspense fallback={<Board elements={(new Array(25).fill(""))} />}>
            {data && <>
                { data.words && <Board elements={data.words} /> } 
                <Selection data={data} />
            </>}
        </Suspense>
    );
}
