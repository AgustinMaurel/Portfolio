import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import { unstable_setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Recommendations from "@/components/Recommendations/Recommendations";
import Footer from "@/components/Footer/Footer";
import Rights from "@/components/Rights/Rights";

export default function Home({params:{locale}}:Readonly<{params: {locale:string}}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex w-full  items-center justify-center min-h-screen bg-gradient-to-l from-licor to-black/80 font-[family-name:var(--font-geist-sans)]">

      <div id='PageDiv' className="grid xl:grid-cols-2 justify-start items-start  h-full w-screen max-w-screen-2xl ">
          
          <div id="container about" className="flex flex-col justify-start items-start  w-screen">
            <About/>
            <Navbar/>
            <Footer/>
          </div>

        <div className="flex flex-col items-start justify-center gap-32 h-full w-screen max-w-screen-2xl 2xl:pt-10 xl:max-w-screen-sm 2xl:max-w-screen-md">
          <Experience/>
          <Recommendations/>
          <Skills/>
          <Projects/>
          <Rights/>

        </div>
      
      </div>
    </div>
  );
}
