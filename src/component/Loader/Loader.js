import React from 'react';

import css from './Loader.module.css';
import classNames from 'classnames';


const Loader =({className})=> {
  return(
    <div className={classNames(css.loader_overlay, className)}>
    <div className={css.loader}></div>
  </div>
  )
};



export default Loader;
