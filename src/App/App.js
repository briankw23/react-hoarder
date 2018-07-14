import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
// import AllStuff from '../components/AllStuff/AllStuff';
import Login from '../components/Login/Login';
// import MyStuff from '../components/MyStuff/Mystuff';
import Register from '../components/Register/Register';
// import SingleStuffItem from '../components/SingleStuffItem/SingleStuffItem';
import fbConnection from '../firebaseRequests/connection';
fbConnection();


class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <div>
        {/* <Navbar/> */}
      <div className="container">
             <div className="row">
                             <Switch>
                 <Route  path="/" exact component={Home} />
              </Switch>
           </div>
         </div>
         </div>
       </BrowserRouter>
     </div>
      // <div>
      //   // {/* <AllStuff/>
      //   // <Login/>
      //   // <MyStuff/>
      //   // <Register/>
      //   // <SingleStuffItem/> */}
      // </div>
    );
  }
}

export default App;
