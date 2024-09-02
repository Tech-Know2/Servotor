import Navbar from "./navbar";
import Hero from "./hero";
import Why from "./why";
import Plans from "./plans";
import Panels from "./panels";
import Footer from "./footer";
import FAQ from "./faq";

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Why />
      <Plans />
      <Panels />
      <FAQ />
      <Footer />
    </div>
  );
}
