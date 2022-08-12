import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Products from './components/Products'
import Product from './components/Product'
import Profile from './components/Profile'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>  
              <Route path="/cart" element={<Cart/>}/>  
              <Route path="/products" element={<Products/>}/>  
              <Route path="/product/:id" element={<Product/>}/>  
              <Route path="/sign-in" element={<SignIn/>}/>  
              <Route path="/sign-up" element={<SignUp/>}/>   
              <Route path="/profile" element={<Profile/>}/>  
              <Route path="/contact" element={<Contact/>}/>  
              <Route path="*" element={<PageNotFound/>}/>  
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
