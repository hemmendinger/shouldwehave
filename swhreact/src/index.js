import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './App';
import Contact from './contact';
import Users from './users'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Users</Link></li>
            </ul>

            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>
);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
