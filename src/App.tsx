import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/Home/Home';

export default class App extends Component {
  render() {
    return (      
        <Router>
          <div className='container'>
            <div className='App'>            
              <div className='appBody'>
                <Switch>
                  <Route exact path='/' component={Home} />                  
                </Switch>
              </div>              
            </div>
          </div>
        </Router>        
    );
  }
}
