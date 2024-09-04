import Navbar from "../navbar";
import Plans from "./plans";
import Hero from "./hero";
import GameList from "./gameList";
import Footer from "../footer";
import Scroll from "../scrollAnimation";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Scroll />
      <Navbar />
      <Hero />
      <Plans />
      <GameList />
      <Footer />
    </div>
  );
}
