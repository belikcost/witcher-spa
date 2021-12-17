import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ value, onChange, placeholder, isError }) => {

    return (
        <div className={`feedback_label${isError ? ' error' : ''}`}>
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows="8"
            />
            {isError && (
                <span>Поле не заполнено</span>
            )}
        </div>
    );
};

Textarea.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default React.memo(Textarea);