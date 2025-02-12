import Image from "next/image";
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
      <div className="flex flex-col gap-20 w-full -mt-[400px]"> {/* Added -mt-40 to pull content up */}
        <Partners/>
        <InfoBox/>
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
