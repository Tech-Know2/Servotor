"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-slate-100 min-h-screen py-16 px-6 lg:px-16">
            <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-12">
                
                {/* Cooper's Story */}
                <motion.div
                    className="md:w-1/2 text-left p-6 bg-white shadow-lg rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold text-teal-700 mb-6">Cooper&apos;s Journey</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">The Start:</h3>
                            <p className="text-gray-600 leading-relaxed indent-8">
                                Servotor is the latest iteration of my effort to build a cloud computing company. I first saw the potential of the cloud while running print-on-demand and dropshipping sites. While I made only small profits, companies like Shopify and Google Cloud were earning from my monthly subscriptions. I soon realized: “selling shovels during the gold rush is more profitable.” From there, I started analyzing businesses to see who made the real profits and why. I launched my first hosting business, Rook Servers, during high school. Though it ran only briefly, it proved I could create something scalable and cost-effective, laying the foundation for Servotor.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">Present:</h3>
                            <p className="text-gray-600 leading-relaxed indent-8">
                                Currently, I&apos;m pursuing a Master&apos;s in Software Engineering at Arizona State University, with a possible double major in Economics or Finance. My goal is to build a financial institution that promotes equal economic opportunities globally. Servotor represents my next step in cloud computing and web/game hosting, built mainly with open-source tools to minimize costs and maximize accessibility.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">The Vision:</h3>
                            <p className="text-gray-600 leading-relaxed indent-8">
                                Servotor is about creating scalable, affordable hosting through open-source tools, such as Paymenter and CyberPanel. I&apos;m constantly refining my setup and plan to develop an open-source billing extension for VPNs and domains. My aim is to offer better value and experiences while staying grounded in the ethos of open source.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-700">Future Goals:</h3>
                            <p className="text-gray-600 leading-relaxed indent-8">
                                My vision is to scale Servotor as a viable alternative in the cloud market, one that offers transparent, cost-effective services. Consumers deserve choices that are both affordable and backed by community-driven technology. Watching this project grow into something impactful excites me, and I’m eager to continue refining and expanding the business.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Placeholder for Arya's Story */}
                <motion.div
                    className="md:w-1/2 text-left p-6 bg-white shadow-lg rounded-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-semibold text-teal-700 mb-6">Arya&apos;s Story</h2>
                    <p className="text-gray-600 leading-relaxed">
                        [Arya&apos;s story content will go here]
                    </p>
                </motion.div>
            </div>
        </section>
    );
}