"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/Servotor Full.png';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='pb-[1%]'>
            {/* Top-right login/signup links */}
            <div className="flex flex-row gap-6 justify-end px-[5%] py-[0.5%]">
                <Link href="/">Log In</Link>
                <p>|</p>
                <Link href="/">Sign Up</Link>
            </div>

            {/* Main navigation bar */}
            <div className="w-[90%] mx-auto bg-white rounded-lg shadow-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/">
                                {/* <Image src={logo} alt="Servotor Logo" width={150} height={50} className="cursor-pointer" /> */}
                                <p className='text-3xl text-teal-700 font-bold'>Servotor</p>
                            </Link>
                        </div>

                        {/* Mobile menu toggle button */}
                        <div className="sm:hidden flex items-center">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-gray-700 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Navigation links (Desktop) */}
                        <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
                            <Link href="/game-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Game Servers
                            </Link>
                            <Link href="/web-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Web Servers
                            </Link>
                            <Link href="/email-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Email Servers
                            </Link>
                            <Link href="/vps" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                VPS
                            </Link>
                            <Link href="/storage" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Storage
                            </Link>
                            <Link href="/ai" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                AI
                            </Link>
                            <div className="relative group">
                                <button className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none">
                                    Resources
                                </button>
                                <div className="absolute left-0 hidden group-hover:block bg-white rounded-md shadow-lg py-2 z-10">
                                    <Link href="/about-us" className="block px-4 py-2 text-black hover:bg-neutral-800 hover:text-white">
                                        About Us
                                    </Link>
                                    <Link href="https://example.com" className="block px-4 py-2 text-black hover:bg-neutral-800 hover:text-white">
                                        Knowledge Base
                                    </Link>
                                    <Link href="https://example.com" className="block px-4 py-2 text-black hover:bg-neutral-800 hover:text-white">
                                        Road Map
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right-side panel link (Desktop) */}
                        <div className="hidden sm:flex items-center sm:ml-6 bg-teal-700 px-4 py-1 rounded-md hover:bg-teal-700 hover:text-white font-semibold text-white">
                            <Link href="/">Your Panel</Link>
                        </div>
                    </div>

                    {/* Mobile Menu (Slide-down) */}
                    <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col items-center gap-3 pb-4">
                            <Link href="/game-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Game Servers
                            </Link>
                            <Link href="/web-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Web Servers
                            </Link>
                            <Link href="/email-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Email Servers
                            </Link>
                            <Link href="/vps" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                VPS
                            </Link>
                            <Link href="/storage" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Storage
                            </Link>
                            <Link href="/ai" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                AI
                            </Link>
                            <Link href="/about-us" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                About Us
                            </Link>
                            <Link href="https://example.com" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Knowledge Base
                            </Link>
                            <Link href="https://example.com" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Road Map
                            </Link>
                            <div className="bg-teal-700 px-4 py-1 rounded-md hover:bg-teal-700 hover:text-white font-semibold text-white w-full text-center">
                                <Link href="/">Your Panel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;