"use client"

import why from "../../public/json/why.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

interface WhyInfo {
    header: string;
    subHeader: string;
    body: string;
    image: string;
}

export default function Why() {
    
    const [whyData, setWhyData] = useState<WhyInfo[]>([]);

    useEffect(() => {
        setWhyData(why);
    }, []);

    return (
        <div className="bg-slate-200 min-h-screen flex justify-center pt-[5%]">
            <div className="flex flex-col w-full h-full items-center">
            <h1 className="text-3xl text-center font-bold text-teal-800">Why Servotor?</h1>
            <h1 className="text-3xl text-center font-bold text-teal-800">___</h1>
            
            <div className="bg-white rounded-lg shadow-lg w-[80%] p-[5%] mt-8 flex flex-col md:flex-row justify-between items-start">
                {/* Left side content */}
                <div className="flex flex-col w-full md:w-[60%]">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4"><span className="text-teal-700">Instant</span> & <span className="text-teal-700">Scalable</span> Cloud Solutions</h2>
                    <h3 className="text-xl text-gray-600 mb-4">Build and Deploy your products with ease</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2">Cutting edge UI for server and VM management</li>
                        <li>Deployed in an instant</li>
                    </ul>

                    <div className="flex space-x-4 pt-[5%]">
                        <button className="bg-teal-700 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-teal-800 transition">
                            Get Started
                        </button>
                        <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-2 px-4 rounded-md text-md font-medium hover:bg-teal-700 hover:text-white transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right side image placeholder */}
                <div className="w-full md:w-[35%] mt-6 md:mt-0 flex justify-center items-center">
                <div className="w-full h-48 bg-gray-300 rounded-lg flex justify-center items-center">
                    <p className="text-gray-500">Image goes here</p>
                </div>
                </div>
            </div>
            <div className="w-full mt-[2%]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-[10%] mb-[2%]">
                    {whyData.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200">
                            <div>
                                <p className="text-xl font-semibold text-teal-700 py-1">{card.header}</p>
                                <p className="text-md font-semibold text-black py-1">{card.subHeader}</p>
                                <p className="text-sm text-black py-1">{card.body}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}