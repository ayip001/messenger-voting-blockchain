import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { Grid } from 'react-bootstrap';

class App extends React.Component {
  constructor () {
    super();
    this.state = {"loggedIn":"0"};
    this.toggleLogin = this.toggleLogin.bind(this);
  };

  toggleLogin (loggedIn) {
    this.setState({loggedIn});
  };

  render () {
    const { loggedIn } = this.state;

    let home;
    if (loggedIn) {
      home = <Route component={Landing} exact path="/" />;
    } else {
      home = <Route component={Dashboard} exact path="/" />;
    };

    return (
      <div>
        <Header toggleLogin={this.toggleLogin} loggedIn={true}/>
        <Grid>
          <Switch>
            {home}
            <Route
              exact
              path="/login"
              render={(props) => <Login toggleLogin={this.toggleLogin} loggedIn={loggedIn}/>}
            />
            <Route
              exact
              path="/signup"
              render={(props) => <Signup toggleLogin={this.toggleLogin} />}
            />
          </Switch>
        </Grid>
      </div>
    );
  }
};

export default App;
