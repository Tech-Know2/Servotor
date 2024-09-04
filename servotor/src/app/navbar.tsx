"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/Servotor Full.png';

const Navbar = () => {
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
                        
                        {/* Navigation links */}
                        <div className="hidden sm:flex sm:ml-6 flex-grow justify-center items-center gap-3">
                            <Link href="/game-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Game Servers
                            </Link>
                            <Link href="/web-server" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Web Servers
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
                            {/* Resources Dropdown */}
                            <div className="relative">
                                <div className="group inline-block">
                                    <button
                                        className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium focus:outline-none"
                                    >
                                        Resources
                                    </button>
                                    <div className="absolute left-0 hidden group-hover:block bg-white rounded-md shadow-lg py-2 z-10">
                                        <Link
                                            href="https://imported-armchair-30b.notion.site/fff973c2eaf68053858afa980365e01a?v=a679e356900a47f78527608e3af2a9e0&pvs=4"
                                            className="block px-4 py-2 text-black hover:bg-neutral-800 hover:text-white"
                                        >
                                            Knowledge Base
                                        </Link>
                                        <Link
                                            href="https://imported-armchair-30b.notion.site/87b9c54ad03a450593567d8e8e54c466?v=cd2815c463064385a964fc6ef8903198&pvs=4"
                                            className="block px-4 py-2 text-black hover:bg-neutral-800 hover:text-white"
                                        >
                                            Road Map
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right-side panel link */}
                        <div className="flex items-center sm:ml-6 bg-teal-700 px-4 py-1 rounded-md hover:bg-teal-700 hover:text-white font-semibold text-white">
                            <Link href="/">Your Panel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;