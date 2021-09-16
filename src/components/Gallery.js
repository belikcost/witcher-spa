import { useState } from "react";

import photoOne from '/src/img/Photo 1.jpg';
import photoTwo from '/src/img/Photo 2.jpg';
import photoThree from '/src/img/Photo 3.jpg';
import photoFour from '/src/img/Photo 4.jpg';
import photoFive from '/src/img/Photo 5.jpg';

import './Gallery.scss';


export const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="gallery">
            <h2>Кадры со съемок</h2>
            <div className="gallery_images">
                <img src={photoOne} alt="Фото 1"/>
                <div className="gallery_group">
                    <img src={photoTwo} alt="Фото 2"/>
                    <img src={photoThree} alt="Фото 3"/>
                    <img src={photoFour} alt="Фото 4"/>
                    <img src={photoFive} alt="Фото 5"/>
                </div>
            </div>
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Скрыть' : 'Показать ещё'}
            </button>
        </div>
    );
}