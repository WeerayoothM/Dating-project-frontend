import './App.css';
import './css/home.css';
import './components/Register/register.css';
import { useEffect, useState } from 'react';
import LocalStorageService from './services/localStorage';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';


function App() {
  const [role, setRole] = useState(LocalStorageService.getRole())

  useEffect(() => {

  })

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
