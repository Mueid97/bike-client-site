import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import About from './pages/About/About';
import AddItem from './pages/AddItem/AddItem';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import ManageItem from './pages/ManageItem/ManageItem';
import MyItem from './pages/MyItem/MyItem';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';


function App() {
  return ( 
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/product/:productId' element={
        <RequireAuth>
          <ProductDetails></ProductDetails>
        </RequireAuth>
      }></Route>
      <Route path='/additem' element={
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
      }></Route>
      <Route path='/manageitem' element={
        <RequireAuth>
          <ManageItem></ManageItem>
        </RequireAuth>
      }></Route>
      <Route path='/myitem' element={
        <RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>
      }></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
