
"use client";

import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/Navbar'), {
  ssr: false
});
import Footer from "@/components/Footer";
const Carousel = dynamic(() => import('@/components/Carousel'), {
  ssr: false
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col gap-10 mt-14">
        <h1 className="text-center text-5xl font-bold">Who are we?</h1>
        <h2 className="text-xl text-gray-500 text-center font-semibold max-w-[60%] mx-auto">
          Dashing Distribution Software are the provider of the most comprehensive, electronic component distribution software, on the market today. Combining cutting edge technology, with timeless principles.
        </h2>
        <Carousel />
        
        <div className="mx-auto mt-20 gap-10">
          <h1 className="text-4xl font-bold text-center mb-6">Our Story</h1>
          <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
            At Dashing, we started out searching for software that catered to the needs of the electronic component industry. However, we soon realized that there wasn&apos;t a single program that checked all the boxes for us. We wanted software that was efficient, visually appealing, and lightning fast. When we couldn&apos;t find it, we decided to build it ourselves. And that&apos;s how Dashing came into existence.
            After three years of relentless effort, we built a software that we are immensely proud of. We started small, with a customer-first approach, and grew organically. We took one customer at a time, ensuring that we provided the best possible service.
            We made a conscious decision to reinvent the installation and training process. We send a member of our team to each customer site to train their staff, making sure they can leverage the software&apos;s features to the fullest.
            Our customers are at the heart of everything we do. We&apos;re always available, no matter the time zone. We&apos;ve created training videos, support tools, and manuals to help users get the most out of the software.
            We&apos;re proud that our first test version of the application had its flaws. It helped us shape the software into what it is today.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
