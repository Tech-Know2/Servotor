import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-200">
      <div className="flex flex-row gap-5 px-40 py-10">
        <div className="w-[40%] pr-[5%]">
            <p className='text-3xl text-teal-700 font-bold pb-5'>Servotor</p>
            <p className="text-md text-slate-800"> Get all of your cloud compute needs in one place. Enjoy open source panels and instant account and product creation and provisioning.</p>
        </div>
        <div className="w-[15%]">
            <p className='text-1xl text-teal-700 font-bold'>Quick Links</p>
            <p className="text-md text-teal-700 font-bold">___</p>
            <div className="pt-4 flex flex-col">
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Client Panel</Link>
            </div>
        </div>
        <div className="w-[25%]">
            <p className='text-1xl text-teal-700 font-bold'>Products</p>
            <p className="text-md text-teal-700 font-bold">___</p>
            <div className="pt-4 flex flex-col">
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Game Servers</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Web Servers</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">VPS</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Storage</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">AI</Link>
            </div>
        </div>
        <div className="w-[25%]">
            <p className='text-1xl text-teal-700 font-bold'>Resources</p>
            <p className="text-md text-teal-700 font-bold">___</p>
            <div className="pt-4 flex flex-col">
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Knowledge Base</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Road Map</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Update Board</Link>
                <Link href="/" className="text-md text-slate-800 py-1 hover:underline">Server Health Boards</Link>
            </div>
        </div>
        <div className="w-[25%]">
            <p className='text-1xl text-teal-700 font-bold'>Contact Info</p>
            <p className="text-md text-teal-700 font-bold">___</p>
            <div className="pt-4 flex flex-col">
                <p className="text-md text-slate-800 py-1">support@servotor.com</p>
            </div>
        </div>
      </div>
      <div className="flex flex-row justify-around items-center space-x-4 mt-4 pb-[1%]">
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
        <p className="text-sm text-center">Built, Designed, and operated by Cooper Harris</p>
        </div>
    </div>
  );
}
