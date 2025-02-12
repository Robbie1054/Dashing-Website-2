import MacbookScroll from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <MacbookScroll src="/DashingScreenshot.png" />
      <div className="flex flex-col gap-20 w-full -mt-[400px]"> 
        <Partners/>
        <div className="flex flex-col gap-8"> 
          <h1 className="text-4xl font-bold text-center">Unlock Unparralled Efficiency</h1>
          <h2 className="text-xl text-gray-600 text-center">Streamline Processes, optimise Inventory, and Supercharge Your Sales Team with Our Cutting-Edge Solution</h2>
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
