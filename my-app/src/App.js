import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage/Homepage'; 
import SubPage from './pages/SubPage/SubPage';
import NewsPage from './pages/NewsPage/NewsPage'
import Newyear from './components/New year/New_year'
import Drawernav from './components/Drawer/Drawer_nav';
import Spider from './pages/NewsPage/Spider'

import MainNavigation from './Header/MainNavigation';
function App() {
  return (
    <div>
      <MainNavigation/>
      <Newyear/>
      <Drawernav/>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage/>
        </Route>
        <Route path='/news'>
          <NewsPage/>
        </Route>
        <Route path='/spider'>
            <Spider/>
        </Route>
        <Route path='/sub'>
          <SubPage/>
        </Route>
      </Switch>    
    </div>
  );
}

export default App;
