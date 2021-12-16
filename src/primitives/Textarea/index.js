import React from "react";

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

export default React.memo(Textarea);