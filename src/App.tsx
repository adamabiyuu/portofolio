import FloatingNav from "@/components/layout/Navbar/FloatingNav";

import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Portofolio from "@/sections/Portofolio/Portofolio";
import Experience from "@/sections/Experience/Experience";
import Contact from "@/sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-slate-950
        text-white
      "
    >
      {/* Floating Navbar */}
      <FloatingNav />

      {/* Main Content */}
      <main
        className="
          flex
          flex-col
        "
      >
        <Hero />

        <About />

        <Portofolio />

        <Experience />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
