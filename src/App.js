import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

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
      </Router>
    </div>
  );
}

export default App;
