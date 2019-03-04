import React from 'react';
import PropTypes from 'prop-types';

const Error = props => {
    if(props.error) {
        return (
            <div>
                {props.error}
            </div>
        );
    } else return null
};

Error.propTypes = {
    error: PropTypes.string
};

export default Error;