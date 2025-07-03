import React from 'react';
import css from './StudyCard.module.css';
import Image from 'next/image';

const StudyCard = ({card}) => {
    return (
        <div className={css.card}>
            <Image src={card.imageUrl} alt={card.title} />
            <div className={css.cardTitle}>{card.title}</div>
        </div>
    );
};

export default StudyCard;