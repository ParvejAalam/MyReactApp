import React from 'react';
import Login from './Login';
import Amplify from 'aws-amplify';
import awsconfig from './aws-config';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './Home';
Amplify.configure(awsconfig);

function App() {
  return (<Router>
      <Switch>
          <Route exact path = '/' component={Login}/>
           <Route exact path = '/home' component={Home}/>
      </Switch>
  </Router>
  );
}

export default App;
