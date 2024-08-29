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
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Game Servers
                            </Link>
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Web Servers
                            </Link>
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                VPS
                            </Link>
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Storage
                            </Link>
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                AI
                            </Link>
                            <Link href="/" className="text-black hover:bg-neutral-800 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                                Resources
                            </Link>
                        </div>

                        {/* Right-side panel link */}
                        <div className="flex items-center sm:ml-6 bg-teal-700 px-4 py-1 rounded-md hover:bg-teal-800 hover:text-white font-semibold text-white">
                            <Link href="/">Your Panel</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;