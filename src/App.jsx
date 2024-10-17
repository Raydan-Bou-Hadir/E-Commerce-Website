import 'primereact/resources/themes/lara-light-indigo/theme.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './components/Products/Products';
import Modal from './Components/Modal/Modal';

import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = (product, isAdded) => {
    if (isAdded) {
      setCartItems((prevCart) => {
        const existingItem = prevCart.find(item => item.title === product.title);
        if (existingItem) {
          return prevCart.map(item => item.title === product.title 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    } else {
      setCartItems((prevCart) => prevCart.filter(item => item.title !== product.title));
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const updateCartQuantity = (product, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(prevCart => prevCart.filter(item => item.title !== product.title));
    } else {
      setCartItems(prevCart => prevCart.map(item => 
        item.title === product.title ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  return (
    <>
      <Header cartItems={cartItems} toggleModal={toggleModal} />
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
      {modalVisible && <Modal cart={cartItems} toggleModal={toggleModal} updateCartQuantity={updateCartQuantity} />}
    </>
  )
}

export default App;
