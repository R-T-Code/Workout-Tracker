import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';

const WarningModal = props => {
    if(!props.show) return null;
    return (
        <React.Fragment>
            <div 
                onClick={props.hideModal}
                className={style.backdrop}></div>
            <div className={style.modal}>
                <h2>{props.children}</h2>
                <div 
                    onClick={props.hideModal}
                    className={style.button}>Ok</div>
            </div>
        </React.Fragment>
    );
};

WarningModal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    hideModal: PropTypes.func.isRequired
};

export default WarningModal;