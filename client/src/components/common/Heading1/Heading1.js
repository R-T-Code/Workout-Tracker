import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

const Heading1 = (props) => (
    <h1 className={[style.heading, props.className].join(' ')}>
        {props.children}
    </h1>
);

Heading1.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.object
}

export default Heading1;