
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPreviews from "@/components/BlogPreviews";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <BlogPreviews />
      <Footer /> 
     
    </div>
  );
}
