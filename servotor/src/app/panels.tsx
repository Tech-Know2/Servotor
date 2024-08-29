"use client"

import Image from "next/image";

export default function Panels() {
  return (
    <div className="bg-slate-100 min-h-screen mt-[5%]">
      <div className="flex flex-col w-full h-full items-center">
        <h1 className="text-3xl text-center font-bold text-teal-800">
          Cutting Edge Web Panel Integrations
        </h1>
        <h1 className="text-3xl text-center font-bold text-teal-800">___</h1>

        <div className="bg-white rounded-lg shadow-lg w-[80%] p-[5%] mt-8 flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col w-full md:w-[60%]">
            <h2 className="text-3xl font-bold text-slate-800 mb-4"><span className="text-teal-700">Powerful </span> & <span className="text-teal-700">Modern </span>{" "} panels for every{" "}<span className="text-teal-700">Solution</span>
            </h2>
            <h3 className="text-xl text-slate-600 mb-4">
              Custom, Open Source, Web Panels specially crafted for each solution
            </h3>
            <ul className="list-disc list-inside text-slate-700">
              <li className="mb-2">
                Modern and sleek product management and control
              </li>
              <li>Endless functionality and applications</li>
            </ul>
            <div className="flex space-x-4 pt-[5%]">
              <button className="bg-teal-700 text-white py-2 px-4 rounded-md text-md font-medium hover:bg-teal-800 transition">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-2 px-4 rounded-md text-md font-medium hover:bg-teal-700 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Panel Cards Section */}
        <div className="w-full mt-[2%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-[10%] mb-[2%]">
            {/* Panel Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left border border-gray-200 flex items-center justify-center">
              <Image
                src="/images/pteroLogo.png"
                alt="Pterodactyl Logo"
                width={60}
                height={60}
                className="cursor-pointer mr-4"
              />
              <p className="text-center">Pterodactyl</p>
            </div>

            {/* Repeat for other cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-left border border-gray-200 flex items-center justify-center">
              <Image
                src="/images/cyberpanel.png"
                alt="Pterodactyl Logo"
                width={50}
                height={50}
                className="cursor-pointer mr-4"
              />
              <p className="text-center">CyberPanel</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-left border border-gray-200 flex items-center justify-center">
              <Image
                src="/images/virtfusion.png"
                alt="Pterodactyl Logo"
                width={50}
                height={50}
                className="cursor-pointer mr-4"
              />
              <p className="text-center">Virtfusion</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-left border border-gray-200 flex items-center justify-center">
              <Image
                src="/images/openWeb.png"
                alt="Pterodactyl Logo"
                width={70}
                height={70}
                className="cursor-pointer mr-4"
              />
              <p className="text-center">OpenWeb UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}