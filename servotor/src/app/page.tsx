import Navbar from "./navbar";
import Hero from "./hero";
import Why from "./why";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Why />
    </div>
  );
}
