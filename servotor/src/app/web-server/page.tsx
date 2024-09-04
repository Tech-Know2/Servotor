import Navbar from "../navbar";
import Footer from "../footer";
import Hero from "./hero"
import Plans from "./plans";
import Apps from "./apps";
import Scroll from "../scrollAnimation";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Scroll />
      <Navbar />
      <Hero />
      <Plans />
      <Apps />
      <Footer />
    </div>
  );
}
