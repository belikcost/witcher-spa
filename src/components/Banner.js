import { Link } from "react-router-dom";

import bannerLarge from '/src/img/bannerLarge.jpg';
import bannerNormal from '/src/img/bannerNormal.jpg';
import bannerSmall from '/src/img/bannerSmall.jpg';

import './Banner.scss';


export const Banner = () => {
    const windowWidth = document.documentElement.clientWidth;


    return (
        <div className="banner">
            {windowWidth >= 1000 ? (
                <img src={bannerLarge} alt="Сериал Ведьмак"/>
            ) : (windowWidth <= 500 ? (
                <img src={bannerSmall} alt="Сериал Ведьмак"/>
            ) : (
                <img src={bannerNormal} alt="Сериал Ведьмак"/>
            ))}

            <div className="banner__content">
                <h1>Сериал Ведьмак</h1>
                <p>
                    Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в
                    неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
                </p>
                <Link to="/">Смотреть сериал</Link>
            </div>
        </div>
    );
}