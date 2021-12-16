import React, { useCallback, useRef, useState } from "react";
import { observer } from "mobx-react-lite";

import Contacts from "./Elements/Contacts";
import SuccessMessage from "./Elements/SuccessMessage";

import Select from "../../primitives/Select";
import Input from "../../primitives/Input";
import Textarea from "../../primitives/Textarea";
import FileInput from "../../primitives/FileInput";
import AgreePersonalDataProcessing from "../../primitives/AgreePersonalDataProcessing";

import State from "../../../domain/State";

import './index.scss';
import { identity, memoizeWith } from "ramda";

const getFileName = (path) => path.replace('C:\\fakepath\\', '');

const formData = new State({
    city: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    file: '',
    agree: false
});

const formErrors = new State({
    city: false,
    name: false,
    email: false,
    phone: false,
    message: false,
    file: false,
    agree: false
});

const callWithEventTargetValue = memoizeWith((_, key) => key, (callback) => (e) => callback(e.target.value));

const Feedback = () => {
    const fileInputRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        Object.entries(formData).forEach(([key, value]) => {
            formErrors.setField(key)(!value);
        });

        const isValid = Object.values(formErrors).every((error) => !error);
        setSuccess(isValid);
    };

    const onAgreePersonalDataProcessing = useCallback(
        () => formData.setField("agree")(!formData.agree), [formData.agree]
    );

    return (
        <div className="feedback">
            {success ? (
                <SuccessMessage homeUrl="/"/>
            ) : (
                <div className="feedback__form">
                    <h1>Оставьте заявку</h1>
                    <Select
                        value={formData.city}
                        onChange={formData.setField("city")}
                        isError={formErrors.city}
                    />
                    <Input
                        value={formData.name}
                        onChange={callWithEventTargetValue(formData.setField("name"), "name")}
                        placeholder="Имя"
                        isError={formErrors.name}
                    />
                    <div className="feedback_row">
                        <Input
                            value={formData.email}
                            onChange={callWithEventTargetValue(formData.setField("email"), "email")}
                            placeholder="Email"
                            isError={formErrors.email}
                        />
                        <Input
                            value={formData.phone}
                            onChange={callWithEventTargetValue(formData.setField("phone"), "phone")}
                            placeholder="+7 (___) __-__-___"
                            isError={formErrors.phone}
                        />
                    </div>
                    <Textarea
                        value={formData.message}
                        onChange={callWithEventTargetValue(formData.setField("message"), "message")}
                        placeholder="Оставьте пометку к заказу"
                        isError={formErrors.message}
                    />
                    <FileInput
                        inputRef={fileInputRef}
                        fileName={getFileName(formData.file)}
                        fileAttached={getFileName(formData.file)}
                        onChange={callWithEventTargetValue(formData.setField("file"), "file")}
                        isError={formErrors.file}
                    />
                    <AgreePersonalDataProcessing
                        onAgree={onAgreePersonalDataProcessing}
                        isAgree={formData.agree}
                        isError={formErrors.agree}
                    />
                    <button onClick={handleSubmit}>Оставить заявку</button>
                </div>
            )}
            <Contacts/>
        </div>
    );
};

export default observer(Feedback);