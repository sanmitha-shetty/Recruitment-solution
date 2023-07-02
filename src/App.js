import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';


function App() {
  
  return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route  path='/register' element={<Register />} />
        </Routes>

    
  );
}

export default App;
