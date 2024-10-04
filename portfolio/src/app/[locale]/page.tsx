import Skills from "@/Components/Skills/Skills";
import About from "@/Components/About/About";
import Recommendations from "@/Components/Recommendations/Recommendations";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({params:{locale}}:Readonly<{params: {locale:string}}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex  bg-gradient-to-l from-licor to-black/80 marker:w-full  items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div id='PageDiv' className="flex flex-col h-full w-full max-w-screen-lg">
        <About/>
        <Skills/>
        <Recommendations/>
      
      </div>
    </div>
  );
}
