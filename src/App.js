import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from '../src/components/Pages/Login/Login/Login'
import Header from './components/Pages/Shared/Header/Header';
import Register from './components/Pages/Login/Register/Register';
import Inventory from './components/Pages/Inventory/Inventory';
import RequireAuth from './components/Pages/Login/RequreAuth/RequreAuth';
import AddItems from './components/Pages/AddItems/AddItems';
import Footer from '../src/components/Pages/Shared/Footer/Footer';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UpdateItem from './components/Pages/UpdateItem/UpdateItem';
import ManageItems from './components/Pages/ManageItems/ManageItems';
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import Blogs from './components/Pages/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';


function App() {
  const [user,] = useAuthState(auth);
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            {user ? <AddItems></AddItems> : ''}
          </RequireAuth>
        }></Route>
        <Route path='/updateitem/:id' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
