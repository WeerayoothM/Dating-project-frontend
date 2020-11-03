import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import admin from './components/Admin';
<<<<<<< HEAD
import './css/Login.css';
=======
>>>>>>> 35f5c9663033cfa9b79235c03c41582f87068807
import './css/home.css';
import './components/Register/register.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={admin} />

        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
