import React from "react";

const Contacts = () => {

    return (
        <div className="feedback__contacts">
            <div>
                <p>Наша горячая линия</p>
                <h2>8 800 38 23 112</h2>
            </div>
            <div>
                <p>Главный офис</p>
                <h3>г. Москва, Садовническая ул., 80</h3>
            </div>
            <div>
                <p>Часы работы</p>
                <h3>Пн-Пт с 10:00 до 22:00</h3>
            </div>
        </div>
    );
};

export default React.memo(Contacts);