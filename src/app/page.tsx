import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import OtherEdu from "@/components/OtherEdu";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Work/>
      <Education/>
      <OtherEdu/>
      <Skills/>
      <Contact />
    </main>
  );
}

