import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

const Button1 = (props) => (
    <button className={[style.button, props.className].join(' ')}>
        {props.children}
    </button>
);

Button1.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.object
}

export default Button1;