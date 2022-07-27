import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [subtotal, setsubtotal] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    try {
      if (cart) {
        setcart(JSON.parse(cart));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));

    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]['price'] * myCart[keys[i]]['qty'];
    }
    setsubtotal(subt);
  };

  const addtocart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {
        qty: 1,
        price: price,
        name: name,
        size: size,
        variant: variant,
      };
    }
    setcart(newCart);
    console.log(newCart);
    saveCart(newCart);
  };

  const removecart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setcart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setcart({});
    saveCart({});
  };

  return (
    <>
      <Navbar
        cart={cart}
        addtocart={addtocart}
        removecart={removecart}
        clearCart={clearCart}
        savetocart={saveCart}
        subtotal={subtotal}
      />
      <Component
        cart={cart}
        addtocart={addtocart}
        removecart={removecart}
        clearCart={clearCart}
        savetocart={saveCart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
