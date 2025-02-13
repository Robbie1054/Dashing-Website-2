"use client";
import dynamic from 'next/dynamic';
const MacbookScroll = dynamic(() => import('@/components/Hero'), {
  ssr: false
});
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false
});
import InfoBox from '@/components/Featurediv';
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import WobbleCard from "@/components/WobbleCard";
import Process from "@/components/Process";
import BecomePartner from "@/components/BecomePartner";
import Integrationsdiv from "@/components/Integrationsdiv";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-slate-950">
      <Navbar />
      <MacbookScroll src="/DashingScreenshot.png" />
      <div className="flex flex-col gap-20 w-full -mt-[400px]"> 
        <Partners/>
        <div className="flex flex-col gap-8"> 
          <h1 className="text-4xl font-bold text-center dark:text-white">Unlock Unparralled Efficiency</h1>
          <h2 className="text-xl text-gray-400 text-center dark:text-white">Streamline Processes, optimise Inventory, and Supercharge Your Sales Team with Our Cutting-Edge Solution</h2>
          <InfoBox/>
        </div>
        <WobbleCard />
        <Integrationsdiv/>
        <Testimonials />
        <Process />
        <BecomePartner />
        <Footer /> 
      </div>
    </div>
  );
}
