"use client"

import React from "react";

export default function Features() {
    return (
        <div className="bg-slate-100 min-h-screen flex flex-col items-center py-16">
            <h1 className="text-3xl font-bold text-teal-800 text-center mb-8">Our Web Hosting Features</h1>
            <div className="bg-white rounded-lg shadow-lg w-[80%] p-8 flex flex-col items-center">
                {/* Stats Section */}
                <div className="flex flex-col md:flex-row w-full justify-between items-start mb-8">
                    <div className="flex flex-col items-center w-full md:w-1/3 p-4 text-center">
                        <h2 className="text-4xl font-bold text-teal-700">99.99%</h2>
                        <p className="text-slate-600">Uptime Guarantee</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/3 p-4 text-center">
                        <h2 className="text-4xl font-bold text-teal-700">24/7</h2>
                        <p className="text-slate-600">Dedicated Support</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/3 p-4 text-center">
                        <h2 className="text-4xl font-bold text-teal-700">1.3 Tbps</h2>
                        <p className="text-slate-600">DDoS Protection</p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="flex flex-col md:flex-row w-full justify-between items-start mb-8">
                    <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 p-4">
                        <h2 className="text-2xl font-bold text-teal-700">Hosting Features</h2>
                        <ul className="list-disc list-inside text-slate-700">
                            <li>Unlimited Bandwidth & Storage</li>
                            <li>One-click Application Installs</li>
                            <li>Free SSL Certificates</li>
                            <li>Easy DNS Management</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold text-teal-700">Security Features</h2>
                        <ul className="list-disc list-inside text-slate-700">
                            <li>Advanced Firewalls</li>
                            <li>Automatic Malware Scans</li>
                            <li>Account Isolation for Security</li>
                            <li>Customizable Backups</li>
                        </ul>
                    </div>
                </div>

                {/* Support & Network Section */}
                <div className="flex flex-col md:flex-row w-full justify-between items-start mb-8">
                    <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0 p-4">
                        <h2 className="text-2xl font-bold text-teal-700">24/7 Customer Support</h2>
                        <p className="text-slate-600">Our expert support team is available around the clock to assist you with any issues or inquiries, ensuring that your website remains operational at all times.</p>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold text-teal-700">High-Speed Network</h2>
                        <p className="text-slate-600">Experience blazing-fast load times with our high-performance network infrastructure, designed to deliver excellent speed and reliability.</p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-4 pt-8">
                    <button className="bg-teal-700 text-white py-2 px-6 rounded-md text-md font-medium hover:bg-teal-800 transition">
                        Start Hosting
                    </button>
                    <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-2 px-6 rounded-md text-md font-medium hover:bg-teal-700 hover:text-white transition">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
