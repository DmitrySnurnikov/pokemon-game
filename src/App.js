import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom'
import Footer from './components/FooterBlock';
import MenuHeader from './components/MenuHeader';
import GamePage from './components/routes/Game';
import HomePage from './components/routes/Home';

import s from './style.module.css';
import cn from 'classnames'
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import NotFound from './components/routes/NotFound';
import firebase from 'firebase/compat';


const firebaseConfig = {

  apiKey: "AIzaSyBS4y6lftrcunbq_GUoevaFncAe1YOGmQ0",

  authDomain: "pokemon-game-40ebc.firebaseapp.com",

  databaseURL: "https://pokemon-game-40ebc-default-rtdb.firebaseio.com",

  projectId: "pokemon-game-40ebc",

  storageBucket: "pokemon-game-40ebc.appspot.com",

  messagingSenderId: "715582202920",

  appId: "1:715582202920:web:c76c8e3f928769cc78811d"

};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database.ref('pokemons').once('value', (snapshot)=>{
  console.log("snapshot", snapshot.val());
})


const App=()=> {
const match = useRouteMatch('/')


return(
  <Switch>
    <Route>
      <> 
        <MenuHeader bgActive={!match.isExact}/>
        <div className={cn(s.wrap, {
          [s.isHomePage]: match.isExact
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
 
)
}

export default App;
