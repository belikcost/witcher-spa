import React from "react";

import paperClipIcon from "../../img/paperClip.svg";

const FileInput = React.memo(({ fileName, fileAttached, inputRef, onChange, isError }) => {

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
});

export default React.memo(FileInput);