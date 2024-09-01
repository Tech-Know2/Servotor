"use client"

import Plan from "../../../public/json/gamePlans.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

interface Plans {
    name: string;
    monthly: string;
    annually: string;
    memory: string;
    storage: string;
    link: string;
}

export default function Plans() {
    const [dealData, setDealData] = useState<Plans[]>([]);
    const [pricingDuration, setPricingDuration] = useState<'monthly' | 'annually'>('monthly');

    useEffect(() => {
        setDealData(Plan);
    }, []);

    // Handle pricing duration change
    const handlePricingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPricingDuration(event.target.value as 'monthly' | 'annually');
    };

    return (
        <div className="bg-slate-200 min-h-screen mt-[5%] p-8">
            <div className="text-center mb-8">
                <label htmlFor="pricing-toggle" className="text-xl font-semibold text-gray-700 mr-4">Select Pricing Plan:</label>
                <select 
                    id="pricing-toggle"
                    value={pricingDuration}
                    onChange={handlePricingChange}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-[2%]">
                {dealData.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold mb-2">{card.name}</p>
                            <p className="text-lg text-gray-600 mb-2">Memory: {card.memory}</p>
                            <p className="text-lg text-gray-600 mb-2">Storage: {card.storage}</p>
                            <p className="text-xl font-semibold text-teal-700">
                                {pricingDuration === 'monthly' ? (
                                    `${card.monthly}`
                                ) : (
                                    <>
                                        <span className="line-through text-gray-500">{card.monthly}</span>
                                        <span className="ml-2 text-teal-700">{card.annually}</span>
                                    </>
                                )}
                            </p>
                            <div className="mt-[2%]">
                                <Link href="" className="bg-teal-700 hover:bg-teal-800 rounded-lg shadow-lg py-[1%] w-full text-white font-bold flex justify-center items-center text-center">
                                    <p>Purchase Plan</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}