
import { unbounded } from "@/lib/fonts/index";
import { inter_tight } from "@/lib/fonts/index";

import {Hero} from '@/app/components/Layout/Hero';

export default function HomePage() {
  return (
 
  
  <main className={` ${unbounded.variable}  ${inter_tight.variable} px-4 py-4 lg:px-12 lg:py-6 overflow-hidden`}>
    <Hero/>
  </main>


)

};


