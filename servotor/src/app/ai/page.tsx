import Navbar from "../navbar";
import Plans from "./plans";
import Hero from "./hero";
import Footer from "../footer";
import ModelList from "./modelList";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Plans />
      <ModelList />
      <Footer />
    </div>
  );
}
