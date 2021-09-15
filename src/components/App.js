import { Route, Switch } from "react-router-dom";

import Map from "./Map";

import { Header } from "./Header";
import { Slider } from "./Slider";
import { Feedback } from "./Feedback/Feedback";

import '../fonts/stylesheet.css';
import './App.scss';


export const App = () => {

    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Slider/>
                    <Map/>
                </Route>
                <Route path="/feedback" component={Feedback}/>
            </Switch>
        </div>
    );
}