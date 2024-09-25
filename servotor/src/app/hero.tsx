"use client";

import deals from "../../public/json/deals.json";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface DealData {
    label: string;
    image: string;
    link: string;
}

export default function Hero() {
    const [dealData, setDealData] = useState<DealData[]>([]);

    useEffect(() => {
        setDealData(deals);
    }, []);

    return (
        <main>
            <div className="bg-gray-100 flex items-center justify-center pt-[10%]">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center px-6">
                    {/* Centered text */}
                    <div className="w-full">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
                            Hosting Solutions
                            <br />
                            For <span className="text-teal-700">Everyone</span>
                        </h1>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-teal-700 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-teal-800 transition">
                                Get Started
                            </button>
                            <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-2.5 px-6 rounded-md text-lg font-medium hover:bg-teal-800 hover:text-white transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <h3 className="mt-[8%] mb-[1%] text-lg font-bold text-teal-700">Amazing Deals, on all Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-[10%] mb-[2%]">
                {dealData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl w-full max-w-xs mx-auto"
                    >
                        <Link href={`${card.link}`} className="flex flex-row items-start">
                            <Image
                                src={`/images/${card.image}`}
                                alt="Logo"
                                width={50}
                                height={30}
                                className="mb-4"
                            />
                            <div className="pl-[5%] flex flex-col">
                                <p className="text-xl font-semibold text-teal-700">{card.label}</p>
                                <p className="text-teal-700 hover:underline mt-2">Learn more &rsaquo;</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}