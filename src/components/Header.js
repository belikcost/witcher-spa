import { Link, Route } from "react-router-dom";

import logo from '/src/img/logo.png';
import './Header.scss';

export const Header = () => {

    return (
        <header className="header">
            <Link to="/"><img src={logo} alt="Ведьмак"/></Link>
            <Route exact path="/">
                <Link to="/feedback" className="header__feedback">
                    Подключить подписку
                </Link>
            </Route>
        </header>
    );
}