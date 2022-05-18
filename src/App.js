import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from '../src/components/Pages/Login/Login/Login'
import Header from './components/Pages/Shared/Header/Header';
import Register from './components/Pages/Login/Register/Register';
import Inventory from './components/Pages/Inventory/Inventory';
import CheckOut from './components/Pages/CheckOut/CheckOut';
import RequireAuth from './components/Pages/Login/RequreAuth/RequreAuth';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
