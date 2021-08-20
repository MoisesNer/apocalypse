import TopBar from "./components/topbar/TopBar"
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from "./pages/write/Write";
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Error from "./pages/Error/Error";
import './globalStyles.css'
import DropdownMenu from "./components/topbar/DropdownMenu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  const user = true;

  return (
    <Router>
      <TopBar />
      <DropdownMenu/>
      <Switch>

        <Route exact path='/'><Home /></Route>

        <Route path='/contact'> <Contact /> </Route>
        <Route path='/about'> <About /> </Route>

        <Route path='/register' exact> {user ? <Home /> : <Register />} </Route>
        <Route path='/login' exact> {user ? <Home /> : <Login />} </Route>
        <Route path='/gallery' exact> {user ? <Write /> : <Login />} </Route>
        <Route path='/settings' exact> {user ? <Settings /> : <Login />} </Route>
        <Route  path='/:slug' component={Single} exact/>
        {/* <Route exact path='/:slug'><Single/></Route> */}

        <Route component={Error}/>
      </Switch>

    </Router>
  );
}

export default App;
