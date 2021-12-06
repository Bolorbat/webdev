import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/Allmeetups';
import NewMeetup from './pages/NewMeetups';
import Favourite from './pages/Favourite';


import MainNavigation from './layout/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>

          <button>
              <NewMeetup/>
          </button>
        </Route>
        <Route path='/favourite'>
          <Favourite/>
        </Route>
      </Switch>    
    </div>
  );
}

export default App;
