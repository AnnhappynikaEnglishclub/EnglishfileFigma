import { Hero } from "./components/Hero";
import { ForWhom } from "./components/ForWhom";
import { Program } from "./components/Program";
import { WhySpecial } from "./components/WhySpecial";
import { Requirements } from "./components/Requirements";
import { Schedule } from "./components/Schedule";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Hero />
      <ForWhom />
      <Program />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
