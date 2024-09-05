"use client"

import promotions from "../../../public/json/aiPromotions.json";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";

export default function Hero() {    
    return (
        <div className="flex flex-col items-center justify-center mt-[10%] w-full">
            <div className="text-center mb-12">
                <p className="text-teal-700 text-6xl font-bold">Who are We</p>
                <p className="text-teal-700 text-4xl mt-4">___</p>
            </div>
        </div>
    );
}