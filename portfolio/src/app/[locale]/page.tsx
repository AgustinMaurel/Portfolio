import Skills from "@/Components/Skills/Skills";
import About from "@/Components/About/About";
import Recommendations from "@/Components/Recommendations/Recommendations";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({params:{locale}}:Readonly<{params: {locale:string}}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex w-full  items-center justify-center min-h-screen bg-gradient-to-l from-licor to-black/80 font-[family-name:var(--font-geist-sans)]">
      <div id='PageDiv' className="flex flex-col justify-center items-end  h-full w-full max-w-screen-2xl ">
        <About/>
        <Skills/>
        <Recommendations/>
      
      </div>
    </div>
  );
}
