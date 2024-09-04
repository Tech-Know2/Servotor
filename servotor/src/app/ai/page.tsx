import Navbar from "../navbar";
import Plans from "./plans";
import Hero from "./hero";
import Footer from "../footer";
import ModelList from "./modelList";
import Scroll from "../scrollAnimation";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Scroll />
      <Navbar />
      <Hero />
      <Plans />
      <ModelList />
      <Footer />
    </div>
  );
}
