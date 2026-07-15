import React, { useState } from 'react';
import PizzaMenu from './PizzaMenu';
import Cart from './Cart';
import './PizzaOrdering.css';

const PizzaOrdering = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (pizza) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === pizza.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...pizza, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleCheckout = () => {
    alert("Thanks for your order! This is a demo, so no real pizza is coming, but your taste in UI is excellent.");
    setCartItems([]);
  };

  return (
    <section className="section pizza-ordering-section" id="pizza-demo">
      <div className="container">
        <div className="pizza-header">
          <h2 className="text-gradient">Pizza Ordering Demo</h2>
          <p>A full-stack style mini-app built right into this portfolio.</p>
        </div>
        
        <div className="pizza-layout">
          <PizzaMenu onAddToCart={handleAddToCart} />
          <Cart 
            cartItems={cartItems} 
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </section>
  );
};

export default PizzaOrdering;
