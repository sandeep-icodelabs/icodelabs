'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import css from './GoBack.module.css';
import IconCollection from '../IconCollection/IconCollection';

const GoBack = () => {
    
    const router = useRouter();

    const goBack = () => {
      router.back();
    };

    return (
        <div onClick={goBack} className={css.backContent}>
            <IconCollection name="back_icon" />
            <h4 className={css.backText}>Back</h4>
        </div>
    );
};

export default GoBack;