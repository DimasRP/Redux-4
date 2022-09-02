// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
