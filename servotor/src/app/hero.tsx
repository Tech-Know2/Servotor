export default function Hero() {
    return (
      <div className="bg-gray-100 flex items-center justify-center pt-[10%]">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6">
          {/* Left side with text and buttons */}
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Hosting Solutions
              <br />
              For <span className="text-teal-700">Everyone</span>
            </h1>
            <div className="flex space-x-4">
              <button className="bg-teal-700 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-teal-800 transition">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-md text-lg font-medium hover:bg-teal-700 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
          {/* Right side for image */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="w-full h-64 bg-gray-300 rounded-md">
              {/* Placeholder for the image */}
              {/* Replace this with your actual Image component or <img> tag */}
              <p className="text-gray-500 text-center mt-24">Image goes here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  