import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './LogIn/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route  path="/" element={<Home></Home>} />
           <Route  path="/home" element={<Home></Home>} />
           <Route  path="/login" element={<Login></Login>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
