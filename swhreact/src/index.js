import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';
import App from './App';
import About from './about';
import Contact from './contact';
import RoundRobin from './roundrobin';
import Users from './users'
import NotFound from './statusCodes';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/roundrobin">Try It Out</NavLink></li>
                <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
                <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/roundrobin" component={RoundRobin} />
                <Route path="/users" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
