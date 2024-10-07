import Skills from "@/Components/Skills/Skills";
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import { unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";

export default function Home({params:{locale}}:Readonly<{params: {locale:string}}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex w-full  items-center justify-center min-h-screen bg-gradient-to-l from-licor to-black/80 font-[family-name:var(--font-geist-sans)]">
      <div id='PageDiv' className="grid grid-cols-2 justify-start items-start  h-full w-full max-w-screen-2xl ">
          
          <div id="container about" className="flex flex-col w-full min-w-screen-md">
            <About/>
            <Navbar/>
            </div>

        <div className="flex flex-col items-end justify-center w-full max-w-screen-2xl">
          <Experience/>
          <Skills/>
          <Projects/>

        </div>
      
      </div>
    </div>
  );
}
