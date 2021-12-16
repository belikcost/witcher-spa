import React from "react";

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

export default React.memo(Input);