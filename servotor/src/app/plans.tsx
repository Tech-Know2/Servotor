import Link from "next/link";

export default function Plans() {
  return (
    <div className="bg-slate-100 min-h-screen">
        <h1 className="text-3xl text-center font-bold text-teal-800 pt-[2%]">Get More Compute For Your Money</h1>
        <h1 className="text-3xl text-center font-bold text-teal-800">___</h1>
        <div className="min-h-screen flex justify-center">
            <div className="bg-white rounded-lg shadow-lg w-[80%] p-[5%] mt-8 flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-row w-full h-full gap-10">
                    <div className="flex flex-col w-full h-full gap-10">
                        <div className="bg-slate-100 rounded-lg shadow px-[5%] py-[5%]">
                            <p className="text-xl font-bold text-teal-800">Web Hosting</p>
                            <p className="text-xl font-bold text-teal-800">___</p>
                            <p className="text-md text-slate-800 mt-[5%] mb-[5%]">Power your websites with the best in class hardware and software. Deploy with ease and comfort knowing that its safe and protected.</p>
                            <div className="flex flex-col">
                                <Link href="/web-server" className="hover:underline"> Learn More: &rsaquo;</Link>
                                <Link href="/web-server" className="hover:underline"> Plans Starting at: $6.99 &rsaquo;</Link>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-lg shadow px-[5%] py-[5%]">
                            <p className="text-xl font-bold text-teal-800">Game Hosting</p>
                            <p className="text-xl font-bold text-teal-800">___</p>
                            <p className="text-md text-slate-800 mt-[5%] mb-[5%]">Manage countless games and servers from a single control panel. Enjoy the power and freedom of affordable and flexible pricing while not sacraficing UI or UX.</p>
                            <div className="flex flex-col">
                                <Link href="/game-server" className="hover:underline"> Learn More: &rsaquo;</Link>
                                <Link href="/game-server" className="hover:underline"> Plans Starting at: $2 &rsaquo;</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-10">
                        <div className="bg-slate-100 rounded-lg shadow px-[5%] py-[5%]">
                            <p className="text-xl font-bold text-teal-800">AI</p>
                            <p className="text-xl font-bold text-teal-800">___</p>
                            <p className="text-md text-slate-800 mt-[5%] mb-[5%]">With one subscription get access to over 1000+ AI models with countless different modals, capabilites, features. Enjoy the convience of one, while still getting all.</p>
                            <div className="flex flex-col">
                                <Link href="/" className="hover:underline"> Learn More: &rsaquo;</Link>
                                <Link href="/" className="hover:underline"> Coming Soon: &rsaquo;</Link>
                            </div>
                        </div>
                        <div className="bg-slate-100 rounded-lg shadow px-[5%] py-[5%]">
                            <p className="text-xl font-bold text-teal-800">Cloud Storage</p>
                            <p className="text-xl font-bold text-teal-800">___</p>
                            <p className="text-md text-slate-800 mt-[5%] mb-[5%]">Store your data with ease. Drag and drop your files into secure storage powered by next generation technology.</p>
                            <div className="flex flex-col">
                                <Link href="/" className="hover:underline"> Learn More: &rsaquo;</Link>
                                <Link href="/" className="hover:underline"> Coming Soon: &rsaquo;</Link>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-slate-100 rounded-lg shadow px-[5%] pt-[5%] pb-[100%]">
                            <p className="text-xl font-bold text-teal-800">VPS</p>
                            <p className="text-xl font-bold text-teal-800">___</p>
                            <p className="text-md text-slate-800 mt-[5%] mb-[5%]">Instantly deploy a VM with over 500+ different OS and countless one click applications. Enjoy low pricing, security, and latest generation hardware and software.</p>
                            <div className="flex flex-col">
                                <Link href="/" className="hover:underline"> Learn More: &rsaquo;</Link>
                                <Link href="/" className="hover:underline"> Coming Soon: &rsaquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
