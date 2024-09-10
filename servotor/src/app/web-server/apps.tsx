"use client"

import apps from "../../../public/json/apps.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

interface Apps {
    name: string,
}

export default function Apps() {
    
    const [appData, setAppData] = useState<Apps[]>([]);

    useEffect(() => {
        setAppData(apps);
    }, []);

    return (
        <div className="bg-slate-100 min-h-screen flex justify-center pt-[5%]">
            <div className="flex flex-col w-full h-full items-center">
            <h1 className="text-3xl text-center font-bold text-teal-800">Web Services</h1>
            <h1 className="text-3xl text-center font-bold text-teal-800">___</h1>
            
            <div className="bg-white rounded-lg shadow-lg w-[80%] p-[5%] mt-8 flex flex-col md:flex-row justify-between items-start">
                {/* Left side content */}
                <div className="flex flex-col w-full md:w-[60%]">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4"><span className="text-teal-700">One Click</span> Web Applications</h2>
                    <h3 className="text-xl text-slate-600 mb-4">Instantly deploy and manage web applications powered by "Auto Installers"</h3>
                    <ul className="list-disc list-inside text-slate-700">
                        <li className="mb-2">Create Websites, Gits, ecommerce shops, and so much more</li>
                        <li>Manage emails, domains, SSLs, all while being Ddos protected</li>
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
            </div>
            <div className="w-full mt-[2%]">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mx-[10%] mb-[2%]">
                    {appData.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <div className="text-center">
                                <p className="text-xl font-semibold text-teal-700 py-1">{card.name}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}