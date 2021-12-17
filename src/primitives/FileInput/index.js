import React from "react";
import PropTypes from "prop-types";

import paperClipIcon from "../../img/paperClip.svg";

const FileInput = ({ fileName, fileAttached, inputRef, onChange, isError }) => {

    return (
        <div className={`feedback_label${isError ? ' error' : ''}`}>
            <div className="feedback__file-input" onClick={() => inputRef.current.click()}>
                <input
                    ref={inputRef}
                    onChange={onChange}
                    type="file"
                />
                {fileAttached ? (
                    <p>{fileName}</p>
                ) : (
                    <p className="feedback_default-value">Прикрепите файл</p>
                )}
                <img src={paperClipIcon} alt="Файл"/>
            </div>
            {isError && (
                <span>Поле не заполнено</span>
            )}
        </div>
    );
};

FileInput.propTypes = {
    fileName: PropTypes.string.isRequired,
    fileAttached: PropTypes.bool.isRequired,
    inputRef: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default React.memo(FileInput);