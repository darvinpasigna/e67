import { useState } from 'react';

import Cart from './Cart.tsx';
import { useCartSelector } from '../store/hooks.ts';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  //access the use selector hook
  const cartQuantity = useCartSelector((state)=>
  //calculate using reduce()  in browser, which combines values from array into single value
  state.cart.items.reduce((val, item)=> val + item.quantity, 0) //o is the initial value, then val + item will be the subsequent value
  );
  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logosample.jpg" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {cartQuantity}</button>
        </p>
      </header>
    </>
  );
}
