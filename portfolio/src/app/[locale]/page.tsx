import Skills from "@/Components/Skills/Skills";
import About from "@/Components/About/About";
import Recommendations from "@/Components/Recommendations/Recommendations";

export default function Home() {
  return (
    <div className="flex  bg-gradient-to-l from-licor to-cream/80 marker:w-full  items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div id='PageDiv' className="flex flex-col h-full w-full max-w-screen-lg">
        <About/>
        <Skills/>
        <Recommendations/>
      
      </div>
    </div>
  );
}
