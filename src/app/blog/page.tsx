"use client";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false
});
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div className="flex flex-col items-stretch justify-between min-h-screen">
      <Navbar />

      <Footer /> 
     
    </div>
  );
}
