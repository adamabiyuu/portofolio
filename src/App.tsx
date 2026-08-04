import Navbar from "@/components/layout/Navbar/Navbar";

import Hero from "@/sections/Hero/Hero";
import About from "./sections/About/About";
import Portofolio from "./sections/Portofolio/Portofolio";
// import About from "@/sections/About/About";
// import Experience from "@/sections/Experience/Experience";
// import Skills from "@/sections/Skills/Skills";
// import Footer from "@/sections/Footer/Footer";
// import Portofolio from "./sections/Portofolio/Portofolio";
// import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div
      className="
        min-h-screen
        bg-white
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-white
      "
    >
      <Navbar />

      <Hero />
      <About />
      <Portofolio />
    </div>
  );
}

export default App;
