import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="bg-background-2 mt-2 w-99/100 rounded-lg">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
