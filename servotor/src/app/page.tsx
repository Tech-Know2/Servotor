import Navbar from "./navbar";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
