"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Plans() {
    const [pricingDuration, setPricingDuration] = useState<'monthly' | 'annually'>('monthly');
    const [storage, setStorage] = useState(100); // Starting at 100GB
    const [storageType, setStorageType] = useState<'SSD' | 'HDD'>('SSD');

    const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPricingDuration(event.target.value as 'monthly' | 'annually');
    };

    const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStorage(parseInt(event.target.value));
    };

    const handleStorageTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStorageType(event.target.value as 'SSD' | 'HDD');
    };

    const calculateCost = () => {
        const costPerGB = storageType === 'SSD' ? (pricingDuration === 'monthly' ? 0.06 : 0.05) : (pricingDuration === 'monthly' ? 0.05 : 0.04);
        return (storage * costPerGB).toFixed(2);
    };

    return (
        <div className="bg-slate-200 mt-[5%] p-8">
            <div className="text-center mb-8 w-[80%] mx-auto">
                <div className="flex flex-col items-center">
                    <p className="bg-white shadow-lg rounded-lg px-[1%] py-[0.5%] w-fit text-slate-800 font-bold text-center uppercase">Cloud Storage Product Coming Soon</p>
                    <h1 className="text-teal-700 text-4xl font-bold py-[2%] text-center">Select What Works for You</h1>
                </div>
                <div className="inline-flex items-center bg-white rounded-full p-2 justify-center mx-auto mb-8">
                    <motion.label
                        className={`px-4 py-2 cursor-pointer font-bold ${pricingDuration === 'monthly' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}
                        animate={{ scale: pricingDuration === 'monthly' ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <input 
                            type="radio" 
                            name="pricing-toggle" 
                            value="monthly" 
                            checked={pricingDuration === 'monthly'} 
                            onChange={handlePricingChange}
                            className="hidden"
                        />
                        Monthly
                    </motion.label>
                    <motion.label
                        className={`px-4 py-2 cursor-pointer font-bold ${pricingDuration === 'annually' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}
                        animate={{ scale: pricingDuration === 'annually' ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <input 
                            type="radio" 
                            name="pricing-toggle" 
                            value="annually" 
                            checked={pricingDuration === 'annually'} 
                            onChange={handlePricingChange}
                            className="hidden"
                        />
                        Annually
                    </motion.label>
                </div>
                <div className="inline-flex items-center bg-white rounded-full p-2 justify-center mx-auto mb-8">
                    <motion.label
                        className={`px-4 py-2 cursor-pointer font-bold ${storageType === 'SSD' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}
                        animate={{ scale: storageType === 'SSD' ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <input 
                            type="radio" 
                            name="storage-type" 
                            value="SSD" 
                            checked={storageType === 'SSD'} 
                            onChange={handleStorageTypeChange}
                            className="hidden"
                        />
                        SSD
                    </motion.label>
                    <motion.label
                        className={`px-4 py-2 cursor-pointer font-bold ${storageType === 'HDD' ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}
                        animate={{ scale: storageType === 'HDD' ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <input 
                            type="radio" 
                            name="storage-type" 
                            value="HDD" 
                            checked={storageType === 'HDD'} 
                            onChange={handleStorageTypeChange}
                            className="hidden"
                        />
                        HDD
                    </motion.label>
                </div>
            </div>

            <div className="text-center w-[80%] mx-auto"> {/* Center the content and make it 80% of the width */}
                <label htmlFor="storage-slider" className="block mb-4 text-xl font-medium text-gray-700">
                    Select Storage: {storage}GB
                </label>
                <motion.div
                    className="w-[80%] mx-auto" // Center the slider and make it 80% of the width
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        id="storage-slider"
                        type="range"
                        min={100}
                        max={5120} // 5TB in GB
                        step={100}
                        value={storage}
                        onChange={handleStorageChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="relative w-full mt-4">
                        <div className="absolute left-0 top-0 flex justify-between w-full">
                            {[1000, 2000, 3000, 4000, 5000].map((value, i) => (
                                <span
                                    key={i}
                                    className="text-gray-700 text-sm"
                                    style={{ position: 'absolute', left: `${((value - 100) / (5120 - 100)) * 100}%`, transform: 'translateX(-50%)' }}
                                >
                                    {value / 1000}TB
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
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