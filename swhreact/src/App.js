import React from 'react';

import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {blue, cyan, indigo, red} from '@material-ui/core/colors'

import Container from '@material-ui/core/Container';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import About from './about';
import Contact from './contact';
import Home from './home';
import RoundRobin from './roundrobin';
import Users from './users'
import NotFound from './statusCodes';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan,
    error: red,
    background: {
      paper: red,
      default: red,
    }
  },
  shape: {
    borderRadius: 1, // Round borders
  },
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm">
            <header className="App-header">
              <h1 className="App-title">shouldwehave</h1>
            </header>
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
                  <Route exact path="/" component={Home}/>
                  <Route path="/roundrobin" component={RoundRobin}/>
                  <Route path="/users" component={Users}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/about" component={About}/>
                  <Route component={NotFound}/>
                </Switch>
              </div>
            </Router>
          </Container>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
