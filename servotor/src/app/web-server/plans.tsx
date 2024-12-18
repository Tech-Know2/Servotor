"use client";

import Plan from "../../../public/json/webPlans.json";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Plans {
    name: string;
    websites: string;
    domains: string;
    monthly: string;
    annually: string;
    memory: string;
    storage: string;
    bandwidth: string;
    domain: string;
    email: string;
    DDOS: string;
    BackUps: string;
    link: string;
}

export default function Plans() {
    const [dealData, setDealData] = useState<Plans[]>([]);
    const [pricingDuration, setPricingDuration] = useState<'monthly' | 'annually'>('monthly');
    const [softwareOption, setSoftwareOption] = useState<string>("None");

    useEffect(() => {
        setDealData(Plan);
    }, []);

    // Handle pricing duration change
    const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPricingDuration(event.target.value as 'monthly' | 'annually');
    };

    // Handle software selection change
    const handleSoftwareChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSoftwareOption(event.target.value);
    };

    return (
        <div className="bg-slate-200 mt-[5%] p-8">
            <div className="text-center mb-8 w-[80%] mx-auto">
                <div className="flex flex-col items-center">
                    <p className="bg-white shadow-lg rounded-lg px-[1%] py-[0.5%] w-fit text-slate-800 font-bold text-center uppercase">Plans for Everybody & Every Use</p>
                    <h1 className="text-teal-700 text-4xl font-bold py-[2%] text-center">Select What Works for You</h1>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                    {/* Pricing Toggle */}
                    <div className="inline-flex items-center bg-white rounded-full p-2 justify-center mb-4 sm:mb-0">
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

                    {/* Software Selection */}
                    <div className="flex flex-wrap justify-center gap-4 bg-white rounded-full p-2">
                        {["None", "Wordpress", "Prestashop", "Woocommerce", "Joomla", "Mautic"].map((option) => (
                            <motion.label
                                key={option}
                                className={`px-4 py-2 cursor-pointer font-bold text-center ${softwareOption === option ? 'bg-teal-700 text-white rounded-full' : 'text-teal-700'}`}
                                animate={{ scale: softwareOption === option ? 1.1 : 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <input 
                                    type="radio" 
                                    name="software" 
                                    value={option} 
                                    checked={softwareOption === option} 
                                    onChange={handleSoftwareChange} 
                                    className="hidden"
                                />
                                {option}
                            </motion.label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Plan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80%] mx-auto mb-[2%]">
                {dealData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold mb-2">{softwareOption !== 'None' ? `${card.name} - ${softwareOption}` : card.name}</p>
                            <p className="text-2xl font-bold mb-2 pb-[3%]">_</p>
                            <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Websites: </span>{card.websites}</p>
                            <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Domains: </span>{card.domains}</p>
                            <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Memory: </span>{card.memory}</p>
                            <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Storage: </span>{card.storage}</p>
                            {card.bandwidth && <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Bandwidth: </span>{card.bandwidth}</p>}
                            {card.email && <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Email: </span>{card.email}</p>}
                            {card.DDOS && <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">DDOS Protection: </span>{card.DDOS}</p>}
                            {card.BackUps && <p className="text-lg text-gray-600 mb-2"><span className="font-bold text-teal-800">Backups: </span>{card.BackUps}</p>}
                            <p className="text-xl font-semibold text-teal-700 py-[3%]">
                                {pricingDuration === 'monthly' ? (
                                    `${card.monthly}`
                                ) : (
                                    <>
                                        <span className="line-through text-gray-500">{card.monthly}</span>
                                        <span className="ml-2 text-teal-700">{card.annually}</span>
                                    </>
                                )}
                            </p>
                        </div>
                        <div className="mt-[2%]">
                            <Link href={card.link || "#"} className="bg-teal-700 hover:bg-teal-800 rounded-lg shadow-lg py-[1%] w-full text-white font-bold flex justify-center items-center text-center">
                                <p>Purchase Plan</p>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}