import React from 'react';

const ScrollTo = (props) => {

    const { children, id_anchor, onClickAction = () => { } } = props;

    const handleClick = async () => {
        const element = document.getElementById(id_anchor);
        if (element) await element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => onClickAction(), 500);
    };


    return (
        <div onClick={handleClick}>
            {children}
        </div>
    );
};

export default ScrollTo;
