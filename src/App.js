import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { createContext } from 'react';
import { useState } from 'react';

import Applications from './Components/Applications/Applications'
import Home from './Components/Home/Home';
import Donors from './Components/Donors/Donors';
import Login from './Components/Login/Login';
import Ask from './Components/Ask/Ask';
import Help from './Components/Help/Help';
import ModalDonor from './Components/Donors/ModalDonor';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const Context=createContext({})


function App() {
  const [Loggedin,setLoggedin]=useState(false)
    console.log(Loggedin)

  return (
    <Context.Provider value={[Loggedin,setLoggedin]}>
    <Router>
    <Switch>

    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/Home">
    <Home />
    </Route>
    <Route path="/Login">
    <Login />
    </Route>
    <Route path="/AskHelp">
    <Ask />
    </Route>
    <Route path="/Applications">
    <Applications /> 
    </Route>
    {/* <Route path="/HelpSomeone">
    <Help /> 
    </Route> */}
    <Route path="/Donors">
    <Donors />
    </Route>
    <PrivateRoute path="/HelpSomeone">
    <Help /> 
    </PrivateRoute>
    {/* <Route path="/Login" caseSensitive={false} element={<Login />} /> */}
    {/* <Route path="/HelpSomeone" caseSensitive={false} element={<Help />} /> */}
    {/* <Route path="/AskHelp" caseSensitive={false} element={<Ask />} /> */}
    {/* <Route path="/Applications" caseSensitive={false} element={<Applications />} /> */}
    {/* <Route path="/Donors" caseSensitive={false} element={<Donors />} /> */}
    {/* <Route path="/" caseSensitive={false} element={<Home />} /> */}
    </Switch>
  </Router>
  </Context.Provider>
 
  );
}

export default App;
