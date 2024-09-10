"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import artistDataJson from "../../../public/json/credit.json"; // Ensure this path is correct

interface Artist {
    name: string;
    link: string;
    iconUsed: string;
}

export default function Credits() {
    const [artistData, setArtistData] = useState<Artist[]>([]);

    // Load the artist data from the JSON file
    useEffect(() => {
        setArtistData(artistDataJson);
    }, []);

    return (
        <main>
            <div className="bg-gray-100 flex items-center justify-center py-12">
                <div className="w-full max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-8 text-center">
                        Icon Credits
                    </h1>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        We would like to extend our appreciation to the talented artists whose icons make our site look amazing. Check out their portfolios below!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {artistData.map((artist, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
                            >
                                <Image
                                    src={`/images/${artist.iconUsed}`}
                                    alt={`${artist.name}'s icon`}
                                    width={64}
                                    height={64}
                                    className="mb-4"
                                />
                                <h2 className="text-2xl font-semibold text-teal-700 mb-2">{artist.name}</h2>
                                <a
                                    href={artist.link}
                                    target="_blank"
                                    className="text-teal-700 hover:underline text-lg"
                                    rel="noopener noreferrer"
                                >
                                    View Portfolio
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}