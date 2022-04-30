import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer/Footer';
import Header from './common/Header/Header';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';

function App() {
  return ( 
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
