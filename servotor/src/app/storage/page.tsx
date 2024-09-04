import Navbar from "../navbar";
import Footer from "../footer";
import Hero from "./hero"
import Plans from "./plans";
import Apps from "./apps";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Plans />
      <Apps />
      <Footer />
    </div>
  );
}
