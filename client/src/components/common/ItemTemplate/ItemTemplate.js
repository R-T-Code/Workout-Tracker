import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

const ItemTemplate = (props) => (
    <div className={[style.template, props.className].join(' ')}>
        {props.children}
    </div>
);

ItemTemplate.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.object
}

export default ItemTemplate;