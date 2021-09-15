import { Link } from "react-router-dom";

import logo from '/src/img/logo.png';
import './Header.scss';

export const Header = () => {

    return (
        <header className="header">
            <img src={logo} alt="Ведьмак"/>
            <Link to="/feedback">
                Подключить подписку
            </Link>
        </header>
    );
}