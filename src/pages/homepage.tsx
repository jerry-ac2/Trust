import Navbar from "../components/navbar";
import Hero from "../components/sections/hero";
import Contribution from "../components/sections/contribution";
import Works from "../components/sections/works";
import Trusted from "../components/sections/trusted";
import CTA from "../components/sections/cta";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Contribution />
      <Works />
      <Trusted />
      <CTA />
      <Footer />
    </div>
  );
}
