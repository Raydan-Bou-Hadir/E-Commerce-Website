import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for burger menu and search
import logo from "../../assets/images/logo.png";
import Links from "./Links";

function Header({ cartItems, toggleModal }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = ["Home", "Shop", "About Us", "Blog"];

    // Toggle the menu open/close state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full h-20 md:h-36 flex justify-between px-6 md:px-16 items-center bg-black">
            <div className="w-40 md:w-52">
                <img src={logo} alt="Logo" className="w-full h-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-14 items-center justify-center">
                <Links links={links} />

                <div onClick={toggleModal} className="text-white cursor-pointer">
                    <p className="flex items-center border rounded-lg py-2 px-4 hover:bg-white hover:text-black transition duration-300">
                        Cart ({cartItems.length})
                    </p>
                </div>

                <div>
                    <FaSearch className="text-white text-2xl cursor-pointer" />
                </div>
            </div>

            {/* Burger Button for Mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white text-2xl">
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-transform transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
                {/* Links in the mobile menu */}
                {links.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-white text-2xl"
                        onClick={() => { toggleMenu(); }} // Close the menu on link click
                    >
                        {link}
                    </a>
                ))}

                <div onClick={toggleModal} className="text-white text-2xl cursor-pointer">
                    <p className="flex items-center border rounded-lg py-2 px-4 hover:bg-white hover:text-black transition duration-300">
                        Cart ({cartItems.length})
                    </p>
                </div>

                <div>
                    <FaSearch className="text-white text-2xl cursor-pointer" />
                </div>
            </div>
        </header>
    );
}

export default Header;
