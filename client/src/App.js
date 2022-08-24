import { Switch } from 'react-router-dom';
import './App.css';
import MyNav from './components/MyNav';
import Posts from './pages/Posts';
import { Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import MyHome from './pages/MyHome';
// import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <Switch>
        <Route path="/home"> 
          <MyHome/>
        </Route>
        <Route path="/posts"> 
          <Posts/>
        </Route>
        <Route path="/dashboard"> 
          <Dashboard/>
        </Route>
        <Route path="/profile"> 
          <Profile/>
        </Route>
      </Switch>
      {/* <Home/> */}
    </div>
  );
}

export default App;
