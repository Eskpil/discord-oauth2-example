import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import './components/sass/App.css';
import dashBoard from './components/pages/dashboard/index'
import home from './components/pages/landing/index'
import Footer from './components/partials/_footer'

function App() {
  const login = () => window.location.href = 'http://localhost:3001/auth'

  return (
      <div className="App">
       <Router >
        <Switch>
          <Route path ="/dashboard" component={dashBoard}/>
          <Route path ="/" exact component={home}/>
          <Route path ="/auth" component={login}/>
        </Switch>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
