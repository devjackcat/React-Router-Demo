import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, HashRouter,MemoryRouter,Route,Switch,Redirect} from 'react-router-dom'

import Nav from './Nav/'

import AAA from './Components/AAA'
import BBB from './Components/BBB'
import CCC from './Components/CCC'
import NotFound from './Components/NotFound'

/*
* 1. BrowserRouter
* 2. HashRouter
* 3. MemoryRouter
*/

class App extends Component {
  render() {
    return (
      <MemoryRouter basename='/temp' /*forceRefresh={true}*/ getUserConfirmation={()=>{
        
      }}>
        <div className="App">
            <Nav/>
            <Switch>
              <Route exact path='/' component={AAA} />
              <Route path='/b' component={BBB} />
              <Route path='/c/:aaaa/:bbbb' component={CCC} />
              <Redirect from='/d' to='/b'/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

export default App;
