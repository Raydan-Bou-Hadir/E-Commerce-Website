import React from 'react';
import { RiCloseCircleLine } from "react-icons/ri";
import './Modal.css';

function Modal({ cart = [], toggleModal, updateCartQuantity }) {

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace('$', ''));
        return total + itemPrice * item.quantity;
    }, 0);

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-60">
            <div className="relative bg-gray-900 rounded-lg shadow-lg max-w-xl w-full overflow-hidden">
                
                {/* Modal Header */}
                <div className='flex justify-between items-center bg-gray-800 px-6 py-4'>
                    <h2 className="text-white text-2xl font-semibold">CART</h2>
                    <RiCloseCircleLine 
                        onClick={toggleModal}
                        className="text-white text-3xl cursor-pointer hover:text-gray-400 transition-colors" 
                    />
                </div>

                {/* Modal Body */}
                <div className="px-6 py-4">
                    {cart.length > 0 ? (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className="text-white py-2 flex justify-between items-center">
                                    <span>{item.title}</span>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => updateCartQuantity(item, item.quantity - 1)}
                                            className="text-white bg-gray-600 px-2 py-1 rounded-lg mr-2"
                                            disabled={item.quantity <= 1}
                                        >-</button>
                                        <span className="text-white mx-2">{item.quantity}</span>
                                        <button
                                            onClick={() => updateCartQuantity(item, item.quantity + 1)}
                                            className="text-white bg-gray-600 px-2 py-1 rounded-lg ml-2"
                                        >+</button>
                                    </div>
                                    <span>{item.price}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white">Your cart is empty.</p>
                    )}
                </div>

                {/* Modal Footer */}
                {cart.length > 0 && (
                    <div className="flex justify-between items-center bg-gray-800 px-6 py-4">
                        <h3 className="text-white text-xl font-semibold">Total:</h3>
                        <span className="text-white text-xl font-semibold">${totalPrice.toFixed(2)}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
