"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Slider component with animations
const Slider = ({ id, label, value, min, max, step, onChange }: any) => (
  <div className="text-center w-[80%] mx-auto">
    <label htmlFor={id} className="block mb-4 text-xl font-medium text-gray-700">
      {label}: {value}
    </label>
    <div className="w-[80%] mx-auto">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
      />
      <div className="relative w-full mt-4">
        <div className="absolute left-0 top-0 flex justify-between w-full">
          {[min, (max - min) / 4 + min, (max - min) / 2 + min, 3 * (max - min) / 4 + min, max].map((val, i) => (
            <span
              key={i}
              className="text-gray-700 text-sm"
              style={{ position: 'absolute', left: `${((val - min) / (max - min)) * 100}%`, transform: 'translateX(-50%)' }}
            >
              {val}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function ResourceSliders() {
  const [pricingDuration, setPricingDuration] = useState<'monthly' | 'annually'>('monthly');
  const [vcpu, setVcpu] = useState(1);
  const [memory, setMemory] = useState(1);
  const [bandwidth, setBandwidth] = useState(0.5);
  const [storage, setStorage] = useState(100);

  const handlePricingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPricingDuration(event.target.value as 'monthly' | 'annually');
  };

  const calculateCost = () => {
    const costPerUnit = {
      vcpu: pricingDuration === 'monthly' ? 10 : 8.5,
      memory: pricingDuration === 'monthly' ? 3 : 2.7,
      bandwidth: pricingDuration === 'monthly' ? 3 : 2.7,
      storage: pricingDuration === 'monthly' ? 0.06 : 0.05
    };

    // Calculate cost for vCPUs only above the first free one
    const vcpuCost = vcpu > 1 ? (vcpu - 1) * costPerUnit.vcpu : 0;

    return (vcpuCost + (memory * costPerUnit.memory) + (bandwidth * costPerUnit.bandwidth) + (storage * costPerUnit.storage)).toFixed(2);
  };

  return (
    <div className="bg-slate-200 mt-[5%] p-8">
      <div className="text-center mb-8 w-[80%] mx-auto">
        <div className="flex flex-col items-center">
          <p className="bg-white shadow-lg rounded-lg px-[1%] py-[0.5%] w-fit text-slate-800 font-bold text-center uppercase">Cloud Resources Configuration</p>
          <h1 className="text-teal-700 text-4xl font-bold py-[2%] text-center">Design your Application's Home</h1>
        </div>
        <div className="inline-flex items-center bg-white rounded-full p-2 justify-center mx-auto">
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
      </div>

      <div className="pb-[2%]">
        <Slider id="vcpu-slider" label="vCPU" value={vcpu} min={1} max={16} step={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVcpu(parseInt(e.target.value))} />
      </div>
      <div className="py-[2%]">
        <Slider id="memory-slider" label="Memory (GB)" value={memory} min={1} max={256} step={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMemory(parseInt(e.target.value))} />
      </div>
      <div className="py-[2%]">
        <Slider id="bandwidth-slider" label="Bandwidth (TB)" value={bandwidth} min={0.5} max={25} step={0.5} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBandwidth(parseFloat(e.target.value))} />
      </div>
      <div className="py-[2%]">
        <Slider id="storage-slider" label="Storage (GB)" value={storage} min={100} max={10240} step={100} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStorage(parseInt(e.target.value))} />
      </div>

      <div className="text-center mt-8">
        <p className="text-2xl font-bold text-teal-700">
          Total Cost: ${calculateCost()} {pricingDuration === 'monthly' ? "per month" : "per year"}
        </p>
        <p className="text-xl font-bold text-slate-700 pt-[1%]">
          vCPUs: {vcpu}
        </p>
        <p className="text-xl font-bold text-slate-700">
          Memory: {memory}
        </p>
        <p className="text-xl font-bold text-slate-700">
          Bandwidth: {bandwidth}
        </p>
        <p className="text-xl font-bold text-slate-700">
          Storage: {storage}
        </p>
        <Link href="">
          <button className="mt-6 bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
            Product Coming Soon
          </button>
        </Link>
      </div>
    </div>
  );
}