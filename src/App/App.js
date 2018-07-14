import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home';
import AllStuff from '../components/AllStuff/AllStuff';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/Mystuff';
import Register from '../components/Register/Register';
// import SingleStuffItem from '../components/SingleStuffItem/SingleStuffItem';
import firebase from 'firebase';
import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/allStuff', state: { from: props.location } }}
            />
          )
      }
    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      };
    });
  };

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar authed={this.state.authed}
          runAway={this.runAway}
          />
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute
                  path="/allStuff"
                  authed={this.state.authed}
                  component={AllStuff}
                />
                <PrivateRoute
                  path="/myStuff"
                  authed={this.state.authed}
                  component={MyStuff}
                />
                <PublicRoute
                  path="/register"
                  authed={this.state.authed}
                  component={Register}
                />
                <PublicRoute
                  path="/login"
                  authed={this.state.authed}
                  component={Login}
                />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
