'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

import ApiHelper from '@/common/apiHelper';

export default function Components() {
    const Board = dynamic(() => import('@/components/Board/Board'));
    const Selection = dynamic(() => import('@/components/Selection/Selection'));

    const loadingData = new Array(25).fill("");
    const [data, setData]: any[] = useState<any[]>([]);

    useEffect(() => {ApiHelper.fetchData('words', setData)}, ['words']);

    return (
        <Suspense fallback={<Board elements={loadingData} />}>
            { data &&
                <>
                    { data.words && <Board elements={data.words} /> } 
                    <Selection data={data} />
                </>
            }
        </Suspense>
    );
}
