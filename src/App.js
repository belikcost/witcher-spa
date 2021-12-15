import { Route, Switch } from "react-router-dom";

import Map from "./components/Map";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

import './fonts/stylesheet.css';
import './App.scss';


export const App = () => {

    return (
        <>
            <div className="container">
                <Header/>
            </div>
            <Switch>
                <Route exact path="/">
                    <Banner/>
                    <div className="container">
                        <Slider/>
                        <Gallery/>
                    </div>
                    <Map/>
                </Route>
                <Route path="/feedback">
                    <div className="container">
                        <Feedback/>
                    </div>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}