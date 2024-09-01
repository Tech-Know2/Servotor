"use client";

import Plan from "../../../public/json/gameList.json";
import React, { useState, useEffect, ChangeEvent } from "react";
import Link from "next/link";

interface Game {
    name: string;
}

export default function GameList() {
    const [gameData, setGameData] = useState<Game[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [visibleCount, setVisibleCount] = useState<number>(30);

    useEffect(() => {
        setGameData(Plan);
    }, []);

    // Filter games based on the search query
    const filteredGames = gameData.filter(game =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search input changes
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setVisibleCount(30); // Reset visible count when searching
    };

    // Show more games
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 25);
    };

    return (
        <div className="bg-slate-100 min-h-screen py-[3%]">
            <h1 className="text-4xl text-teal-700 font-bold text-center mb-6">Games We Support</h1>
            
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search games..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded-lg w-[80%] md:w-[50%]"
                />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-[80%] mx-auto mb-[2%]">
                {filteredGames.slice(0, visibleCount).map((card, index) => (
                    <Link href="" className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-200">
                        <div key={index} className="">
                            <p className="text-md text-slate-800 font-semibold">{card.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            
            {filteredGames.length > visibleCount && (
                <div className="flex justify-center">
                    <button
                        onClick={handleShowMore}
                        className="bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}