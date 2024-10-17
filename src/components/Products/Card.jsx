import React, { useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

function Card({ cards, handleAddToCart }) {
    const [favoriteIcons, setFavoriteIcons] = useState(
        Array(cards.length).fill(false)
    );

    const handleHeart = (index, card) => {
        const updatedIcons = [...favoriteIcons];
        updatedIcons[index] = !updatedIcons[index];
        setFavoriteIcons(updatedIcons);

        handleAddToCart(card, updatedIcons[index]);
    };

    return (
        <div className='grid grid-cols-4 gap-2 p-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xsm:grid-cols-1 '>
            {cards.map((card, index) => (
                <div key={index} className='p-4 flex flex-col justify-center items-center h-min rounded-lg gap-3 bg-[#131313]'>
                    <div className='w-full pr-3 flex justify-end items-end'>
                        {favoriteIcons[index] ? (
                            <IoHeartSharp onClick={() => handleHeart(index, card)} className='text-white text-2xl cursor-pointer' />
                        ) : (
                            <IoHeartOutline onClick={() => handleHeart(index, card)} className='text-white text-2xl cursor-pointer' />
                        )}
                    </div>
                    <div className='w-full h-80 bg-[#161616] rounded-lg'>
                        <img src={card.image} alt={card.title} className='w-full h-full object-cover overflow-hidden' />
                    </div>
                    <h1 className='text-white text-xl font-medium'>{card.title}</h1>
                    <div className="flex items-center gap-1">
                        {card.description.map((StarIcon, index) => (
                            <StarIcon key={index} className="text-lg text-[#676767]" />
                        ))}
                    </div>
                    <p className='text-white font-medium text-xl'>{card.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;
