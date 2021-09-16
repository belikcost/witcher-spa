import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Label } from "./Label";
import { Select } from "./Select";

import paperClipIcon from '/src/img/paperClip.svg';
import checkMarkIcon from '/src/img/checkMark.svg';

import './index.scss';


const Feedback = () => {
    const fileInputRef = useRef();
    const initialData = {
        city: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        file: '',
        agree: false
    };
    const [data, setData] = useState(initialData);

    const initialErrors = {
        city: false,
        name: false,
        email: false,
        phone: false,
        message: false,
        file: false,
        agree: false
    };
    const [errors, setErrors] = useState(initialErrors);

    const [success, setSuccess] = useState(false);

    const handleChange = (name, value) => {
        setData({...data, [name]: value});
    }

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
    }

    const getFileName = (path) => path.replace('C:\\fakepath\\', '');

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
                    <Label isError={errors.city}>
                        <Select value={data.city} onChange={(value) => handleChange('city', value)}/>
                    </Label>
                    <Label isError={errors.name}>
                        <input
                            value={data.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            type="text"
                            placeholder="Имя"
                        />
                    </Label>
                    <div className="feedback_row">
                        <Label isError={errors.email}>
                            <input
                                value={data.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                type="text"
                                placeholder="Email"
                            />
                        </Label>
                        <Label isError={errors.phone}>
                            <input
                                value={data.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                type="text"
                                placeholder="+7 (___) __-__-___"
                            />
                        </Label>
                    </div>
                    <Label isError={errors.message}>
                    <textarea
                        value={data.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows="8"
                        placeholder="Оставьте пометку к заказу"
                    />
                    </Label>
                    <Label isError={errors.file}>
                        <div className="feedback__file-input" onClick={() => fileInputRef.current.click()}>
                            <input
                                ref={fileInputRef}
                                value={data.file}
                                onChange={(e) => handleChange('file', e.target.value)}
                                type="file"
                            />
                            {data.file ? (
                                <p>{getFileName(data.file)}</p>
                            ) : (
                                <p className="feedback_default-value">Прикрепите файл</p>
                            )}
                            <img src={paperClipIcon} alt="Файл"/>
                        </div>
                    </Label>
                    <Label isError={errors.agree}>
                        <div className="feedback__checkbox-container">
                            <div className="feedback__checkbox" onClick={() => handleChange('agree', !data.agree)}>
                                {data.agree && (
                                    <img src={checkMarkIcon} alt="Да"/>
                                )}
                            </div>
                            <p>Даю согласие на обработку своих персональных данных</p>
                        </div>
                    </Label>
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
}

export default Feedback;