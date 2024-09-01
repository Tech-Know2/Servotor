"use client"

import Plan from "../../../public/json/gamePlans.json";
import React, { useState, useEffect } from "react";
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
    const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPricingDuration(event.target.value as 'monthly' | 'annually');
    };

    return (
        <div className="bg-slate-200 mt-[5%] p-8">
            <div className="text-center mb-8 w-[80%] mx-auto">
                <div className="flex flex-col items-center">
                    <p className="bg-white shadow-lg rounded-lg px-[1%] py-[0.5%] w-fit text-slate-800 font-bold text-center uppercase">Plans for Everybody & Every Use</p>
                    <h1 className="text-teal-700 text-4xl font-bold py-[2%] text-center">Select What Works for You</h1>
                </div>
                <div className="inline-flex items-center bg-white rounded-full p-2 justify-center mx-auto">
                    <label className={`px-4 py-2 cursor-pointer font-bold ${pricingDuration === 'monthly' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}>
                        <input 
                            type="radio" 
                            name="pricing-toggle" 
                            value="monthly" 
                            checked={pricingDuration === 'monthly'} 
                            onChange={handlePricingChange}
                            className="hidden"
                        />
                        Monthly
                    </label>
                    <label className={`px-4 py-2 cursor-pointer font-bold ${pricingDuration === 'annually' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}>
                        <input 
                            type="radio" 
                            name="pricing-toggle" 
                            value="annually" 
                            checked={pricingDuration === 'annually'} 
                            onChange={handlePricingChange}
                            className="hidden"
                        />
                        Annually
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] mx-auto mb-[2%]">
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
