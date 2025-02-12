
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      {/* Removed negative margin and added proper spacing */}
      <div className="w-full flex flex-col gap-20">
        <Carousel />
        
        <div className="max-w-[60%] mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Our Location</h1>
          <p className="text-xl text-gray-500 text-center font-semibold max-w-[60%] mx-auto">
            Situated in the heart of York, our office provides the team with an inspiring atmosphere that fosters creativity and collaboration, with open-plan layouts and an abundance of natural light. This strategic location not only provides easy access to transport links and local amenities but also positions us at the forefront of technological advancement, enabling us to stay ahead in today's fast-paced digital landscape.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
