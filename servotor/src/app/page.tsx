"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Why from "./why";
import Plans from "./plans";
import Panels from "./panels";
import Footer from "./footer";
import FAQ from "./faq";
import Scroll from "./scrollAnimation";
import Features from "./features";

const fadeIn = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: "easeInOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Section = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Scroll />
      <Navbar />

      <Section>
        <Hero />
      </Section>

      <Section>
        <Why />
      </Section>

      <Section>
        <Plans />
      </Section>

      <Section>
        <Features />
      </Section>

      <Section>
        <Panels />
      </Section>

      <Section>
        <FAQ />
      </Section>

      <Footer />
    </div>
  );
}