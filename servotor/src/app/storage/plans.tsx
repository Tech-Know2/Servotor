"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Plans() {
    const [pricingDuration, setPricingDuration] = useState<'monthly' | 'annually'>('monthly');
    const [storage, setStorage] = useState(100); // Starting at 100GB

    const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPricingDuration(event.target.value as 'monthly' | 'annually');
    };

    const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStorage(parseInt(event.target.value));
    };

    const calculateCost = () => {
        const costPerGB = pricingDuration === 'monthly' ? 0.15 : 0.1;
        return (storage * costPerGB).toFixed(2);
    };

    return (
        <div className="bg-slate-200 mt-[5%] p-8">
            <div className="text-center mb-8 w-[80%] mx-auto">
                <div className="flex flex-col items-center">
                    <p className="bg-white shadow-lg rounded-lg px-[1%] py-[0.5%] w-fit text-slate-800 font-bold text-center uppercase">Cloud Storage Product Coming Soon</p>
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

            <div className="text-center w-[80%] mx-auto"> {/* Center the content and make it 80% of the width */}
                <label htmlFor="storage-slider" className="block mb-4 text-xl font-medium text-gray-700">
                    Select Storage: {storage}GB
                </label>
                <div className="w-[80%] mx-auto"> {/* Center the slider and make it 80% of the width */}
                    <input
                        id="storage-slider"
                        type="range"
                        min={100}
                        max={10240} // 10TB in GB
                        step={100}
                        value={storage}
                        onChange={handleStorageChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="relative w-full mt-4">
                        <div className="absolute left-0 top-0 flex justify-between w-full">
                            {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map((value, i) => (
                                <span
                                    key={i}
                                    className="text-gray-700 text-sm"
                                    style={{ position: 'absolute', left: `${((value - 100) / (10240 - 100)) * 100}%`, transform: 'translateX(-50%)' }}
                                >
                                    {value / 1000}TB
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-2xl font-bold text-teal-700 pt-[5%]">
                    Cost: ${calculateCost()} {pricingDuration === 'monthly' ? "per month" : "per year"}
                </p>
                <Link href="">
                    <button className="mt-6 bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
                        Product Launching Soon
                    </button>
                </Link>
            </div>
        </div>
    );
}