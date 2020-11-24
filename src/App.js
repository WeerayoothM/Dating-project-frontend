import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import admin from './components/Admin/index2';
import './css/home.css';
import './components/Register/register.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/admin" component={admin} />
        <Route exact path="*" component={NotFound} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
