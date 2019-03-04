import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.scss';

const ConfirmationModal = props => {
    if(!props.show) return null;
    return (
        <React.Fragment>
            <div 
                onClick={props.cancel}
                className={style.backdrop}></div>
            <div className={style.modal}>
                <h2>{props.children}</h2>
                <div 
                    onClick={props.confirm}
                    className={style.yes}>Yes</div>
                <div 
                    onClick={props.cancel}
                    className={style.no}>No</div>
            </div>
        </React.Fragment>
    );
};

ConfirmationModal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.string,
    confirm: PropTypes.func,
    cancel: PropTypes.func
};

export default ConfirmationModal;