import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = ({ homeUrl }) => {

    return (
        <div className="feedback__success">
            <h1>Заявка отправлена!</h1>
            <h5>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h5>
            <Link to={homeUrl}>Вернуться на главную</Link>
        </div>
    );
};

export default React.memo(SuccessMessage);