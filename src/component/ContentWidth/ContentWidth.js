import React from 'react';
import css from './ContentWidth.module.css'
import classNames from 'classnames';

const ContentWidth = props => {
    const {children, className} = props
    return (
        <div className={classNames(css.contentWidth, className)}>
            {children}
        </div>
    );
};

export default ContentWidth;