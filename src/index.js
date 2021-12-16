import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from "mobx";

import { App } from './App';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

configure({
    enforceActions: "always",
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
});