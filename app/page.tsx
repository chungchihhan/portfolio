import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
