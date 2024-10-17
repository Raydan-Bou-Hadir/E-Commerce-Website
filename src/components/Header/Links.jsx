import React from 'react'

function Links( {links} ) {
    return (
        <ul className='flex space-x-12 '>
            {links.map( (link, index) => (
                <a href='#' key={index} className='text-white text-2xl hover:bg-white hover:text-black transition duration-300 rounded-lg py-2 px-4 '>
                    {link}                    
                </a>
            ))}
        </ul>
    )
}

export default Links