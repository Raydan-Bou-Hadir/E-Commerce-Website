import React from 'react';
import Card from './Card';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import hat1 from '../../assets/images/Hat-1.png';
import hat2 from '../../assets/images/Hat-2.png';
import backpack1 from '../../assets/images/Backpack-1.png';
import backpack2 from '../../assets/images/Backpack-2.png';
import watch1 from '../../assets/images/Watch-1.png';
import watch2 from '../../assets/images/Watch-2.png';
import bracelet from '../../assets/images/bracelet.png';
import shawl1 from '../../assets/images/shawl1.png';

function Products({ handleAddToCart }) {
    const cards = [
        {
            title: 'Stylish Leather Hat',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStarOutline],
            price: '$120.00',
            image: hat1,
        },
        {
            title: 'Casual Cotton Hat',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStarHalf, IoMdStarOutline],
            price: '$90.00',
            image: hat2,
        },
        {
            title: 'Elegant Leather Backpack',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStar],
            price: '$250.00',
            image: backpack1,
        },
        {
            title: 'Printed Canvas Backpack',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStarHalf],
            price: '$160.00',
            image: backpack2,
        },
        {
            title: 'Classic Analog Watch',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStarHalf, IoMdStarOutline],
            price: '$320.00',
            image: watch1,
        },
        {
            title: 'Modern Digital Watch',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStar],
            price: '$280.00',
            image: watch2,
        },
        {
            title: 'Genuine Leather Bracelet',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStar],
            price: '$150.00',
            image: bracelet,
        },
        {
            title: 'Authentic Cotton Shawl',
            description: [IoMdStar, IoMdStar, IoMdStar, IoMdStar, IoMdStarOutline],
            price: '$100.00',
            image: shawl1,
        }
    ];

    return (
        <main className='w-full justify-center h-min bg-black py-10'>
            <div className='w-full flex justify-center items-center pb-5 '>
                <h1 className='sm:font-medium text-5xl text-white  xsm:text-4xl'>Featured Products</h1>
            </div>
            <Card cards={cards} handleAddToCart={handleAddToCart} />
        </main>
    );
}

export default Products;
