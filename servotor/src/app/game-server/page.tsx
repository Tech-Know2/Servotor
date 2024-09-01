import Navbar from "../navbar";
import Plans from "./plans";
import Hero from "./hero";
import GameList from "./gameList";
import Footer from "../footer";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Plans />
      <GameList />
      <Footer />
    </div>
  );
}
