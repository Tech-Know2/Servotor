"use client";

import React, { useState, useEffect } from "react";

interface Feature {
    name: string;
    description: string;
}

const featuresData: Feature[] = [
    { name: "Natural Language Understanding", description: "Leverage state-of-the-art language processing to understand context, nuance, and intent in real-time." },
    { name: "Image and Data Analysis", description: "Process and analyze images, documents, and structured data seamlessly with powerful AI models." },
    { name: "Customizable AI Models", description: "Train, fine-tune, and deploy AI models tailored to your unique needs using OpenWebUI's adaptable architecture." },
    { name: "Efficient Resource Management", description: "Optimize AI workloads with Ollama’s streamlined management for faster, more efficient processing." },
    { name: "Enterprise-Grade Security", description: "Keep data secure with multi-layered encryption, secure model deployment, and reliable compliance support." }
];

export default function Features() {
    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center pt-16">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-teal-700 text-center mb-4">AI-Powered Solutions</h1>
                <p className="text-xl text-gray-600 text-center mb-12">
                    Harness advanced AI capabilities with the combined power of OpenWebUI and Ollama.
                </p>
                
                <div className="bg-white rounded-lg shadow-lg w-[80%] p-8 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Intelligent, Scalable AI Solutions
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Integrate powerful AI into your business processes, powered by intuitive management through OpenWebUI and the robust capabilities of Ollama. 
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className="mb-2">Quick, adaptable deployment of models for various needs</li>
                            <li>Seamless integration into existing applications and workflows</li>
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
