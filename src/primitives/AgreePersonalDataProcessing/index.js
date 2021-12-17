import React from "react";
import PropTypes from "prop-types";

import checkMarkIcon from "../../img/checkMark.svg";

const AgreePersonalDataProcessing = ({ setAgree, isAgree, isError }) => {

    const onAgree = () => {
      setAgree(!isAgree);
    };

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

AgreePersonalDataProcessing.propTypes = {
    setAgree: PropTypes.func.isRequired,
    isAgree: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default React.memo(AgreePersonalDataProcessing);