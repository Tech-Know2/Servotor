export default function About() {
    return (
      <div className="bg-slate-100 min-h-screen py-16 text-center">
        <h1 className="text-5xl font-bold text-teal-700 mb-12">Our Story</h1>
        <div className="flex flex-col md:flex-row justify-center items-start px-8 lg:px-16">
          
          {/* Cooper's Story */}
          <div className="md:w-1/2 pr-0 md:pr-12">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">Coopers Journey</h2>
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-700 mb-2">The Start:</h3>
              <p className="text-gray-600 mb-6 leading-relaxed indent-8">
                Servotor is the latest iteration in my attempt to launch my own cloud computing company. I first realized the power of the cloud when I launched my print on demand and my dropshipping websites. I realized that I was making pennies on the dollar selling cheap garbage from China, whereas Shopify and therefore Google Cloud were making $30/mo. I came to this rather startling conclusion that you make more money selling shovels than you do gold. I know this sounds like a rather overhyped and dumb observation, but at the time my world was rocked. I started looking at each business trying to figure out who was really making money, and who was doing it the most profitable, quickest, cleanest, and most efficiently. That is when I stumbled upon the cloud in 2022. During my freshman year in high school I launched my first attempt at a web hosting and game server hosting business, Rook Servers. It ran for only a month, but to this day I still chalk it up as a success. I built something from scratch using a bunch of different separate softwares that barely worked together. Additionally, I did it cheaper and 100x more scalable than the best reseller options on the market. This knowledge served as my inspiration and source of knowledge for this current project.
              </p>
  
              <h3 className="text-xl font-bold text-gray-700 mb-2">Present:</h3>
              <p className="text-gray-600 mb-6 leading-relaxed indent-8">
                I am currently enrolled, and attending Arizona State University working towards a Masters in Software Engineering, with, if I can swing it, a minor or double major in Economics or Finance. My ultimate goal (and current side project) is to launch my own digital bank or financial institution that will provide equal economic opportunities to everyone on the planet. Including everyone, everywhere.
              </p>
  
              <h3 className="text-xl font-bold text-gray-700 mb-2">Servotor?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed indent-8">
                Servotor is my latest “innovation” in the cloud compute and web/game server hosting industry. This time, I am doing it for free (excluding the cost of servers and compute). I have used almost entirely open source projects. The payment and billing automation, web panels, game panels, cloud ai infrastructure, etc. The only thing not open source is the VPS panel, which was a choice I made so that customers can have a better UI/UX experience. Additionally, I programmed the website that you are currently viewing, as well as customizing the panels and the client area (payment integration). I also hope to eventually build an open source extension for our billing automation system, that allows people to sell VPNs and domains.
              </p>
  
              <h3 className="text-xl font-bold text-gray-700 mb-2">The Future:</h3>
              <p className="text-gray-600 mb-6 leading-relaxed indent-8">
                I want to take this to the finish. I want to market, grow, and expand this business as I feel like I can provide a way better and cheaper experience to the market while being powered by open source alternatives. For example, WHMCS to Paymenter; Plesk/cPanel to CyberPanel; TCAdmin to Pterodactyl; etc. Consumers deserve better prices and experiences. I also think it would be a lot of fun to run this business and watch it grow and age into something beautiful.
              </p>
            </div>
          </div>
  
          {/* Arya's Story (Placeholder) */}
          <div className="md:w-1/2 pl-0 md:pl-12 mt-12 md:mt-0">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">Aryas Story</h2>
            <p className="text-gray-600 leading-relaxed">[Aryas story content will go here]</p>
          </div>
        </div>
      </div>
    );
}  