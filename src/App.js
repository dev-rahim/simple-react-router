import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/friends' >
            <Friends />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='' >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
