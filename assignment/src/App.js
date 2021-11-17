import React from 'react';
import Home from './Home';
import AddTask from './AdddTask';
import MenuBar from './MenuBar';
import { Route , Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <MenuBar/>
      <Switch>
        <Route  exact path = "/" component = {Home} />
        <Route path = "/addtask" component = {AddTask} />
        <Route path = "/edittask" component = {AddTask} />
      </Switch>
    </div>
  );
};

export default App;