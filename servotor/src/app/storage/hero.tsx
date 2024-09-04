"use client"

import promotions from "../../../public/json/cloudPromotions.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

interface DealData {
    label: string;
    image: string;
    link: string;
}

export default function Hero() {
    const [dealData, setDealData] = useState<DealData[]>([]);

    useEffect(() => {
        setDealData(promotions);
    }, []);
    
    return (
        <div className="flex flex-col items-center justify-center mt-[10%] w-full">
            <div className="text-center mb-12">
                <p className="text-teal-700 text-6xl font-bold">Cloud Storage</p>
                <p className="text-teal-700 text-4xl mt-4">___</p>
            </div>
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[8%]">
                {dealData.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center">
                            <Image src={`/images/${card.image}`} alt="Logo" width={50} height={30} className="mr-4" />
                            <div>
                                <p className="text-xl font-semibold text-teal-700">{card.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}