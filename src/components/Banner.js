import { Link } from "react-router-dom";

import banner from '/src/img/banner.jpg';

import './Banner.scss';


export const Banner = () => {

    return (
        <div className="banner">
            <img src={banner} alt="Сериал Ведьмак"/>
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