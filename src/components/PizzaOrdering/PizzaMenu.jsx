import React from 'react';

const PIZZAS = [
  {
    id: 1,
    name: "Margherita Supreme",
    description: "Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Pepperoni Feast",
    description: "Double pepperoni, premium mozzarella, and our signature spicy tomato sauce.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Truffle Mushroom",
    description: "Wild mushrooms, truffle oil, roasted garlic, and a creamy white sauce base.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    name: "Spicy BBQ Chicken",
    description: "Grilled chicken, red onions, cilantro, and smoky BBQ sauce.",
    price: 17.49,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60"
  }
];

const PizzaMenu = ({ onAddToCart }) => {
  return (
    <div className="pizza-menu">
      {PIZZAS.map((pizza) => (
        <div key={pizza.id} className="pizza-card">
          <div className="pizza-image-container">
            <img src={pizza.image} alt={pizza.name} />
          </div>
          <div className="pizza-info">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
          </div>
          <div className="pizza-price-action">
            <span className="pizza-price">${pizza.price.toFixed(2)}</span>
            <button 
              className="add-btn"
              onClick={() => onAddToCart(pizza)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PizzaMenu;
