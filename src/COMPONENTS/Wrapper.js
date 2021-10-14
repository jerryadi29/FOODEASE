import React from 'react'
import { Switch, Route, useLocation,  } from 'react-router-dom'
import Main2 from '../COMPONENTS/DATA2/Main2';
import Signup from '../COMPONENTS/Signup';
import  Home from "../COMPONENTS/Home"
import Signin from '../COMPONENTS/Signin.js'


export default function Wrapper() {

    const location = useLocation()
    return (
        <div>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" >
                    <Home/>
                </Route>

                <Route path="/Signup" >
                    <Signup/>
                </Route>

                <Route path="/Signin" >
                    <Signin/>
                </Route> 


                <Route path="/Main2" >
                    <Main2/>
                </Route>

             

              </Switch>
            
        </div>
    )
}
