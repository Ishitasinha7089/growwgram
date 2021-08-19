import './App.css';

import { useState } from 'react';

// import { Switch, Route} from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './common/header';
import { ReactComponent as Chevron } from './styles/icons/chevron-up.svg';
import NewsFeed from './views/newFeed';
import Profile from './views/profile';

function App() {
  const [backtoTop, setBacktoTop] = useState(false)
  window.addEventListener('scroll', () =>{
    if(window.scrollY>100){
      setBacktoTop(true)
      return;
    }
    setBacktoTop(false)
    return;
    
  })

  const scrollToTop = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div className="App flexbox">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={NewsFeed} />
          <Route path="/:username" component={Profile} />
        </Switch>
        <div className={`ggBackToTop9305 flexbox ${backtoTop? "showBackToTop" : null}`}>
          <Chevron onClick={scrollToTop} />
        </div>
      </Router>
    </div>
  );
}

export default App;
