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
import { useState } from 'react';
import LocalStorageService from './services/localStorage';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';


function App() {
  const [role, setRole] = useState(LocalStorageService.getRole())
  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
