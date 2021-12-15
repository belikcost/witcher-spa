import React from "react";

import checkMarkIcon from "../../img/checkMark.svg";

const AgreePersonalDataProcessing = ({ onAgree, isAgree, isError }) => {

    return (
        <div className={`feedback_label${isError ? ' error' : ''}`}>
            <div className="feedback__checkbox-container">
                <div className="feedback__checkbox" onClick={onAgree}>
                    {isAgree && (
                        <img src={checkMarkIcon} alt="Да"/>
                    )}
                </div>
                <p>Даю согласие на обработку своих персональных данных</p>
            </div>
            {isError && (
                <span>Поле не заполнено</span>
            )}
        </div>
    );
};

export default React.memo(AgreePersonalDataProcessing);