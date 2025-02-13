"use client";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false
});
import Footer from "@/components/Footer";
import FeaturedivExpanded from "@/components/FeaturedivExpanded";




export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <FeaturedivExpanded />
      <Footer /> 
     
    </div>
  );
}
