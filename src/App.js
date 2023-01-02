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
import { useEffect } from 'react';

export const Context=createContext({})


function App() {
  const [Loggedin,setLoggedin]=useState(false)
    console.log(Loggedin)

    const [Donor,setDonor]=useState(false)
    const [Reciever,setReciever]=useState(false)
    const [concat,setConcat]=useState(false)
    useEffect(()=>{
      fetch('https://laalsalaam2021.onrender.com/Help/getHelpOffers')
      .then((res)=>res.json())
      .then((result)=>{setDonor(result)})
  
      fetch('https://laalsalaam2021.onrender.com/Application/getRequestApplications')
      .then((res)=>res.json())
      .then((result)=>{setReciever(result)})  
      
    },[])
    
    var children = false
    Donor && Reciever ? children = Donor.concat(Reciever)  : children=false
    // let shuffled = children.map(value => ({ value, sort: Math.random() }))
    // .sort((a, b) => a.sort - b.sort)
    // .map(({ value }) => console.log(value))


    // console.log(Donor.length,Reciever.length,children)
    
  return (
    <Context.Provider value={[Loggedin,setLoggedin]}>
    <Router>
    <Switch>

    <Route exact path="/">
    <Home concat={children}/>
    </Route>
    <Route path="/Home">
    <Home  />
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
