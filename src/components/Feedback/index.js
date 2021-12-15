import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Select from "../../primitives/Select";
import Input from "../../primitives/Input";
import Textarea from "../../primitives/Textarea";
import FileInput from "../../primitives/FileInput";

import checkMarkIcon from '/src/img/checkMark.svg';

import './index.scss';

const initialErrors = {
    city: false,
    name: false,
    email: false,
    phone: false,
    message: false,
    file: false,
    agree: false
};

const initialData = {
    city: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    file: '',
    agree: false
};

const getFileName = (path) => path.replace('C:\\fakepath\\', '');

const Feedback = () => {
    const fileInputRef = useRef();

    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState(initialErrors);
    const [success, setSuccess] = useState(false);

    const handleChange = useCallback((name, value) => {
        setData((prevData) => ({...prevData, [name]: value}));
    }, []);

    const handleCheckData = () => {
        const fields = Object.keys(data);
        let localErrors = {};

        fields.forEach(field => {
            if (!data[field]) {
                localErrors = {...localErrors, [field]: true};
            }
        });

        if (Object.keys(localErrors).length !== 0) {
            setErrors({...initialErrors, ...localErrors});
        } else {
            setSuccess(true);
        }
    };

    const handleChangeCity = useCallback((value) => handleChange('city', value), []);
    const handleChangeName = useCallback((e) => handleChange('name', e.target.value), []);
    const handleChangeEmail = useCallback((e) => handleChange('email', e.target.value), []);
    const handleChangeFile = useCallback((e) => handleChange('file', e.target.value), []);
    const handleChangePhone = useCallback((e) => handleChange('phone', e.target.value), []);
    const handleChangeMessage = useCallback((e) => handleChange('message', e.target.value), []);

    return (
        <div className="feedback">
            {success ? (
                <div className="feedback__success">
                    <h1>Заявка отправлена!</h1>
                    <h5>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h5>
                    <Link to="/">Вернуться на главную</Link>
                </div>
            ) : (
                <div className="feedback__form">
                    <h1>Оставьте заявку</h1>
                    <Select value={data.city} onChange={handleChangeCity} isError={errors.city}/>
                    <Input
                        value={data.name}
                        onChange={handleChangeName}
                        placeholder="Имя"
                        isError={errors.name}
                    />
                    <div className="feedback_row">
                        <Input
                            value={data.email}
                            onChange={handleChangeEmail}
                            placeholder="Email"
                            isError={errors.email}
                        />
                        <Input
                            value={data.phone}
                            onChange={handleChangePhone}
                            placeholder="+7 (___) __-__-___"
                            isError={errors.phone}
                        />
                    </div>
                    <Textarea
                        value={data.message}
                        onChange={handleChangeMessage}
                        placeholder="Оставьте пометку к заказу"
                        isError={errors.message}
                    />
                    <FileInput
                        inputRef={fileInputRef}
                        fileName={getFileName(data.file)}
                        fileAttached={getFileName(data.file)}
                        onChange={handleChangeFile}
                        isError={errors.file}
                    />
                    <div className="feedback__checkbox-container">
                        <div className="feedback__checkbox" onClick={() => handleChange('agree', !data.agree)}>
                            {data.agree && (
                                <img src={checkMarkIcon} alt="Да"/>
                            )}
                        </div>
                        <p>Даю согласие на обработку своих персональных данных</p>
                    </div>
                    <div className={`feedback_label${errors.agree ? ' error' : ''}`}>
                        {errors.agree && (
                            <span>Поле не заполнено</span>
                        )}
                    </div>
                    <button onClick={handleCheckData}>Оставить заявку</button>
                </div>
            )}
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
        </div>
    );
};

export default Feedback;