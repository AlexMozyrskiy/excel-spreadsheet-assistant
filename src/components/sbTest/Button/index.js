import React from 'react';

import st from './index.module.scss';

const Button = ( { title, className, onClickHandler, isDisabled } ) => {

    return (
        <button className={`${st.button} ${className}`} onClick={onClickHandler} disabled={isDisabled}>
            {title}
        </button>
    );
}


export default Button;