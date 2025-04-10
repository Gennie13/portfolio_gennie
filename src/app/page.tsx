import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import OtherEdu from "@/components/OtherEdu";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-16">
      <main className="flex flex-col space-y-6">
        <Hero/>
        <About/>
        <Work/>
        <Education/>
        <OtherEdu/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}
