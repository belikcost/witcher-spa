import React, { useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { memoizeWith } from "ramda";

import Contacts from "./Elements/Contacts";
import SuccessMessage from "./Elements/SuccessMessage";

import Select from "../../primitives/Select";
import Input from "../../primitives/Input";
import Textarea from "../../primitives/Textarea";
import FileInput from "../../primitives/FileInput";
import AgreePersonalDataProcessing from "../../primitives/AgreePersonalDataProcessing";

import Model from "../../domain/Model";

import './index.scss';

const getFileName = (path) => path.replace('C:\\fakepath\\', '');

const formData = new Model({
    city: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    file: '',
    agree: false
});

const getFunctionName = (fn) => fn.name;

const callWithEventTargetValue = memoizeWith(getFunctionName, (callback) => (e) => callback(e.target.value));

const Feedback = () => {
    const fileInputRef = useRef();
    const [success, setSuccess] = useState(false);

    const handleSubmit = () => {
        setSuccess(formData.validate());
    };

    return (
        <div className="feedback">
            {success ? (
                <SuccessMessage homeUrl="/"/>
            ) : (
                <div className="feedback__form">
                    <h1>Оставьте заявку</h1>
                    <Select
                        value={formData.state.city}
                        onChange={formData.setField("city")}
                        isError={formData.errors.city}
                    />
                    <Input
                        value={formData.state.name}
                        onChange={callWithEventTargetValue(formData.setField("name"))}
                        placeholder="Имя"
                        isError={formData.errors.name}
                    />
                    <div className="feedback_row">
                        <Input
                            value={formData.state.email}
                            onChange={callWithEventTargetValue(formData.setField("email"))}
                            placeholder="Email"
                            isError={formData.errors.email}
                        />
                        <Input
                            value={formData.state.phone}
                            onChange={callWithEventTargetValue(formData.setField("phone"))}
                            placeholder="+7 (___) __-__-___"
                            isError={formData.errors.phone}
                        />
                    </div>
                    <Textarea
                        value={formData.state.message}
                        onChange={callWithEventTargetValue(formData.setField("message"))}
                        placeholder="Оставьте пометку к заказу"
                        isError={formData.errors.message}
                    />
                    <FileInput
                        inputRef={fileInputRef}
                        fileName={getFileName(formData.state.file)}
                        fileAttached={Boolean(getFileName(formData.state.file))}
                        onChange={callWithEventTargetValue(formData.setField("file"))}
                        isError={formData.errors.file}
                    />
                    <AgreePersonalDataProcessing
                        setAgree={formData.setField("agree")}
                        isAgree={formData.state.agree}
                        isError={formData.errors.agree}
                    />
                    <button onClick={handleSubmit}>Оставить заявку</button>
                </div>
            )}
            <Contacts/>
        </div>
    );
};

export default observer(Feedback);