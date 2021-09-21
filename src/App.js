import {useLocation, Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/FooterBlock';
import MenuHeader from './components/MenuHeader';
import GamePage from './components/routes/Game';
import HomePage from './components/routes/Home';

import s from './style.module.css';
import cn from 'classnames'
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import NotFound from './components/routes/NotFound';
import { FireBaseContext } from './context/firebaseContext';
import FireBase from './service/firebase';



const App=()=> {
const location = useLocation();
const isPadding = location.pathname === '/' || location.pathname === '/game/board'
return(
  <FireBaseContext.Provider value={new FireBase()}>
  <Switch>
    <Route>
      <> 
        <MenuHeader bgActive={!isPadding}/>
        <div className={cn(s.wrap, {
          [s.isHomePage]: isPadding
        })}>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/game" component={GamePage}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route  component={NotFound} />

            <Route render={()=>(
              <Redirect to="/notfound" />
            )}/>
          </Switch>
        </div>
        <Footer />
      </>
    </Route>
  </Switch>
  </FireBaseContext.Provider>
)
}

export default App;
