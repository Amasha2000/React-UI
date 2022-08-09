import './App.css';
import Login from './components/login/Login.js';
import FormInput from './components/userRegistrationForm/FormInput';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Product from './components/product/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/customer' element={<FormInput/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
