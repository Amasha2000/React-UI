import './App.css';
import Login from './components/login/Login.js';
import FormInput from './components/customerForm/FormInput';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/customer' element={
           <form>
           <FormInput placeholder='Username'/>
           <FormInput placeholder='Email'/>
           <FormInput placeholder='Password'/>
         </form>
        } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
