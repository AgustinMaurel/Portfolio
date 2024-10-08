import Skills from "@/Components/Skills/Skills";
import About from "@/Components/About/About";
import Experience from "@/Components/Experience/Experience";
import { unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/Components/Navbar/Navbar";
import Projects from "@/Components/Projects/Projects";
import Recommendations from "@/Components/Recommendations/Recommendations";
import Footer from "@/Components/Footer/Footer";

export default function Home({params:{locale}}:Readonly<{params: {locale:string}}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex w-full  items-center justify-center min-h-screen bg-gradient-to-l from-licor to-black/80 font-[family-name:var(--font-geist-sans)]">

      <div id='PageDiv' className="grid xl:grid-cols-2 justify-start items-start  h-full w-screen max-w-screen-2xl ">
          
          <div id="container about" className="flex flex-col  w-screen">
            <About/>
            <Navbar/>
            <Footer/>
          </div>

        <div className="flex flex-col start justify-center gap-10 h-full w-screen max-w-screen-2xl">
          <Experience/>
          <Recommendations/>
          <Skills/>
          <Projects/>

        </div>
      
      </div>
    </div>
  );
}
