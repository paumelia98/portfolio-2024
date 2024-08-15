import { unbounded } from "@/lib/fonts/index";
import { inter_tight } from "@/lib/fonts/index";
import { mr_dafoe } from "@/lib/fonts/index";
import { Hero } from '@/app/components/Layout/Hero';

import { Projects } from '@/app/components/Layout/Projects';

import { About } from '@/app/components/Layout/About';
export default function HomePage() {
  return (
    <>

      <main className={` ${unbounded.variable} ${inter_tight.variable} ${mr_dafoe.variable}  overflow-hidden font-inter_tight`}>
        <Hero />
        <Projects/>
        <About/>
      </main>
    </>
  );
}
