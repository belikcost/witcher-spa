import { useState } from "react";



export const Select = ({value, onChange}) => {
    const options = ['Москва', 'Санкт-Петербург', 'Казань', 'Краснодар', 'Ростов-на-Дону'];
    const [showAllOptions, setShowAllOptions] = useState(false)

    const selectOption = (option) => {
        onChange(option);
        setShowAllOptions(false);
    }

    return (
        <div className={`feedback__select${showAllOptions ? ' opening' : ''}`}>
            <div className="feedback__select-option" onClick={() => setShowAllOptions(!showAllOptions)}>
                {value ? value : (
                    <p className="feedback_default-value">Выберите город</p>
                )}
                <div className="feedback_arrow"/>
            </div>
            {showAllOptions && (
                <div className="feedback__select-options">
                    {options.map((option, i) => (
                        <div className="feedback__select-option" key={i} onClick={() => selectOption(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}