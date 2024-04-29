import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Project from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Blog from "@/components/blogs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Intro />
      <SectionDivider />
      <About />
      <Project />
      <Blog/>
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
