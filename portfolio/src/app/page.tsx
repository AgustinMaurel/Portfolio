import Skills from "@/Components/Skills/Skills";
import Recomendaciones from "@/Components/Recomendaciones/Recomendaciones";
import About from "@/Components/About/About";

export default function Home() {
  return (
    <div className="flex  bg-gradient-to-l from-licor to-cream/60 marker:w-full  items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div id='PageDiv' className="flex flex-col h-full w-full max-w-screen-lg">
        <About/>
        <Skills/>
        <Recomendaciones/>
      
      </div>
    </div>
  );
}
