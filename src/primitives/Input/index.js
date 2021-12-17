import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange, placeholder, isError }) => {

    return (
        <div className={`feedback_label${isError ? ' error' : ''}`}>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {isError && (
                <span>Поле не заполнено</span>
            )}
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default React.memo(Input);