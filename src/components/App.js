import { Route, Switch } from "react-router-dom";

import Map from "./Map";
import Feedback from "./Feedback";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Slider } from "./Slider";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";

import '../fonts/stylesheet.css';
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