import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Cart from './pages/Cart.jsx';
import Franchising from './pages/Franchising.jsx';
import Menu from './pages/Menu.jsx';
import Products from './pages/Products.jsx';
import Checkout from './pages/Checkout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header></Header>
  <Navbar></Navbar>
  <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/Franchise" element={<Franchising />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Checkout" element={<Checkout/>} />
      <Route path="/Cart" element={<Cart />} />

  </Routes>
  <Footer></Footer>
</BrowserRouter>,
)
