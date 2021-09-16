import { Route, Switch } from "react-router-dom";

import Map from "./Map";
import Feedback from "./Feedback";

import { Header } from "./Header";
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
                    <Slider/>
                    <div className="container">
                        <Gallery/>
                        <Map/>
                    </div>
                </Route>
                <Route path="/feedback">
                    <div className="container">
                        <Feedback/>
                    </div>
                </Route>
            </Switch>
        </>
    );
}