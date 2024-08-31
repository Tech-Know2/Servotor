"use client"

import Plan from "../../../public/json/gamePlans.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

interface Plans {
    name: string;
    monthly: string;
    quarterly: string;
    semiAnnually: string;
    annually: string;
    memory: string;
    storage: string;
}

export default function Plans() {

    const [dealData, setDealData] = useState<Plans[]>([]);

    useEffect(() => {
        setDealData(Plan);
    }, []);

    return (
        <div className="bg-slate-200 min-h-screen mt-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-[10%] mb-[2%]">
                    {dealData.map((card, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left border border-gray-200 mt-[30%]">
                            <div className="flex flex-col">
                                <p>{card.name}</p>
                                <p>{card.memory}</p>
                                <p>{card.storage}</p>
                                <p>{card.monthly}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}
