"use client";

import React, { useState, useEffect } from "react";

interface Feature {
    name: string;
    description: string;
}

const featuresData: Feature[] = [
    { name: "Flexible VPS Hosting", description: "Get full control of your virtual server with customizable CPU and RAM, powered by Virtualizor for secure, scalable solutions." },
    { name: "Web Hosting with CyberPanel", description: "Easy-to-use web and email hosting, featuring one-click app installations, free SSL, and automated backups with CyberPanel." },
    { name: "Game Server Hosting", description: "Deploy game servers instantly with Pterodactyl, offering DDoS protection, mod support, and a user-friendly control panel." },
    { name: "AI Hosting with OpenWebUI and Ollama", description: "Run powerful AI models with flexible resource management and a streamlined interface, ideal for large-scale applications." },
    { name: "Scalable Data Storage", description: "Expand or downsize your storage easily, powered by Virtualizor for secure and affordable access across multiple devices." }
];

export default function Features() {
    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center pt-16">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-teal-700 text-center mb-4">Comprehensive Hosting Solutions</h1>
                <p className="text-xl text-gray-600 text-center mb-12">
                    Discover affordable, scalable hosting powered by leading open-source technologies.
                </p>
                
                <div className="bg-white rounded-lg shadow-lg w-[80%] p-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Tailored Solutions for Every Need
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            From VPS to game servers and AI hosting, each solution is built to scale with your business, using industry-leading open-source technology.
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className="mb-2">Highly adaptable plans to match your growth</li>
                            <li>Seamless integration into any workflow or application</li>
                        </ul>

                        <div className="flex space-x-4 mt-6">
                            <button className="bg-teal-700 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-teal-800 transition">
                                Get Started
                            </button>
                            <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-2 px-6 rounded-md text-lg font-medium hover:bg-teal-700 hover:text-white transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-teal-700">{feature.name}</h3>
                                <p className="text-gray-600 mt-2">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}