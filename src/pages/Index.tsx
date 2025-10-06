import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Temples from "@/components/Temples";
import ForDevotees from "@/components/ForDevotees";
import ForAuthorities from "@/components/ForAuthorities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Temples />
      <ForDevotees />
      <ForAuthorities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
