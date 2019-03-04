import React from 'react';
import style from './index.module.scss';
import PropTypes from 'prop-types';

const ContentWrapper = (props) => (
    <div className={[style.content, props.className].join(' ')}>
        {props.children}
    </div>
);

ContentWrapper.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.object
}

export default ContentWrapper;