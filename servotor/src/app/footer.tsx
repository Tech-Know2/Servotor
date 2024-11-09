import Link from "next/link";
import { FaInstagram, FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-slate-200 justify-center">
      <div className="flex flex-col lg:flex-row gap-5 px-8 py-10 mx-auto w-[80%]">
        <div className="w-full lg:w-[40%] pr-0 lg:pr-[5%]">
          <p className="text-3xl text-teal-700 font-bold pb-5">Servotor</p>
          <p className="text-md text-slate-800">
            Get all of your cloud compute needs in one place. Enjoy open source
            panels and instant account and product creation and provisioning.
          </p>
          <div className="pt-[5%] flex gap-3">
            <Link href="/">
              <FaInstagram className="text-3xl text-teal-700" />
            </Link>
            <Link href="/">
              <FaDiscord className="text-3xl text-teal-700" />
            </Link>
            <Link href="/">
              <FaXTwitter className="text-3xl text-teal-700" />
            </Link>
            <Link href="/">
              <FaFacebook className="text-3xl text-teal-700" />
            </Link>
            <Link href="/">
              <FaYoutube className="text-3xl text-teal-700" />
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[15%]">
          <p className="text-xl text-teal-700 font-bold">Quick Links</p>
          <p className="text-md text-teal-700 font-bold">___</p>
          <div className="pt-4 flex flex-col">
            <Link href="/" className="text-md text-slate-800 py-1 hover:underline">
              Client Panel
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[25%]">
          <p className="text-xl text-teal-700 font-bold">Products</p>
          <p className="text-md text-teal-700 font-bold">___</p>
          <div className="pt-4 flex flex-col">
            <Link href="/game-server" className="text-md text-slate-800 py-1 hover:underline">
              Game Servers
            </Link>
            <Link href="/email-server" className="text-md text-slate-800 py-1 hover:underline">
              Email Servers
            </Link>
            <Link href="/web-server" className="text-md text-slate-800 py-1 hover:underline">
              Web Servers
            </Link>
            <Link href="/vps" className="text-md text-slate-800 py-1 hover:underline">
              VPS
            </Link>
            <Link href="/storage" className="text-md text-slate-800 py-1 hover:underline">
              Storage
            </Link>
            <Link href="/ai" className="text-md text-slate-800 py-1 hover:underline">
              AI
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[25%]">
          <p className="text-xl text-teal-700 font-bold">Resources</p>
          <p className="text-md text-teal-700 font-bold">___</p>
          <div className="pt-4 flex flex-col">
            <Link
              href="https://imported-armchair-30b.notion.site/fff973c2eaf68053858afa980365e01a?v=a679e356900a47f78527608e3af2a9e0&pvs=4"
              className="text-md text-slate-800 py-1 hover:underline"
            >
              Knowledge Base
            </Link>
            <Link
              href="https://imported-armchair-30b.notion.site/87b9c54ad03a450593567d8e8e54c466?v=cd2815c463064385a964fc6ef8903198&pvs=4"
              className="text-md text-slate-800 py-1 hover:underline"
            >
              Road Map
            </Link>
            <Link href="/" className="text-md text-slate-800 py-1 hover:underline">
              Update Board
            </Link>
            <Link href="/" className="text-md text-slate-800 py-1 hover:underline">
              Server Health Boards
            </Link>
            <Link href="/icons" className="text-md text-slate-800 py-1 hover:underline">
              Icon Credits
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[25%]">
          <p className="text-xl text-teal-700 font-bold">Contact Info</p>
          <p className="text-md text-teal-700 font-bold">___</p>
          <div className="pt-4 flex flex-col">
            <p className="text-md text-slate-800 py-1">support@servotor.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-around items-center space-x-4 mt-4 pb-[1%]">
        <div className="flex flex-col items-center">
          <p className="text-sm">© Copyright 2024 Servotor Inc.</p>
          <p className="text-sm">All rights reserved</p>
        </div>
        <Link href="/" className="text-sm hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/" className="text-sm hover:underline">
          Privacy Policy
        </Link>
        <p className="text-sm text-center">Built, Designed, and Operated by Cooper Harris</p>
      </div>
    </div>
  );
}
