import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="w-full flex flex-col gap-20">
        <div className="w-full flex flex-col gap-10 mt-14">
          <h1 className="text-center text-5xl font-bold">Who are we?</h1>
          <h2 className="text-xl text-gray-500 text-center font-semibold max-w-[60%] mx-auto">
            Dashing Distribution Software are the provider of the most comprehensive, electronic component distribution software, on the market today. Combining cutting edge technology, with timeless principles.
          </h2>
          <Carousel />
  
          <div className="max-w-[60%] mx-auto">
            <div className="mx-auto mt-20 gap-10">
              <h1 className="text-4xl font-bold text-center mb-6">Our Location</h1>
              <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
                Situated in the heart of York, our office provides the team with an inspiring atmosphere that fosters creativity and collaboration, with open-plan layouts and an abundance of natural light. This strategic location not only provides easy access to transport links and local amenities but also positions us at the forefront of technological advancement, enabling us to stay ahead in today&apos;s fast-paced digital landscape.
              </p>
            </div>
  
            <div className="mx-auto mt-20 gap-10">
              <h1 className="text-4xl font-bold text-center mb-6">Our Story</h1>
              <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
                At Dashing, we started out searching for software that catered to the needs of the electronic component industry. However, we soon realized that there wasn&apos;t a single program that checked all the boxes for us. We wanted software that was efficient, visually appealing, and lightning fast. When we couldn&apos;t find it, we decided to build it ourselves. And that&apos;s how Dashing came into existence.
                <br /><br />
                After three years of relentless effort, we built a software that we are immensely proud of. We started small, with a customer-first approach, and grew organically. We took one customer at a time, ensuring that we provided the best possible service.
                <br /><br />
                We made a conscious decision to reinvent the installation and training process. We send a member of our team to each customer site to train their staff, making sure they can leverage the software&apos;s features to the fullest.
                <br /><br />
                Our customers are at the heart of everything we do. We&apos;re always available, no matter the time zone. We&apos;ve created training videos, support tools, and manuals to help users get the most out of the software.
                <br /><br />
                We&apos;re proud that our first test version of the application had its flaws. It helped us shape the software into what it is today.
                <br /><br />
                Our mission at Dashing Distribution Software is to provide the electronic components industry with a specific distribution software package that gives you flexibility, reliability, and control. And that is exactly what we are doing. We can offer you the easy-to-use software that you need to stay on top of your stock, data, and distribution.
              </p>
            </div>
  
            <div className="mx-auto mt-20 gap-10">
              <h1 className="text-4xl font-bold text-center mb-6">Our Strengths</h1>
              <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
                As some of the leading experts backed by years of experience within electronic components distribution, we were able to build a system that meets your every need, making your data accessible and private, as well as keeping track of tracked orders, processed orders, and stock. With the flexibility of non-committal licensing, we wanted to ensure we made a system that doesn&apos;t tie you down to contracts, so that you&apos;re still in control. We also wanted to offer our customers the best value we could, so all you need is one license per company and you will have all the information you need in one place.
              </p>
            </div>
  
            <div className="mx-auto mt-20 gap-10">
              <h1 className="text-4xl font-bold text-center mb-6">Customer-Focused Support</h1>
              <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
                We know how frustrating it can be to find yourself stuck without any help, so we make sure we&apos;re available to offer you support every step of the way, 24/7, regardless of your time zone. We are constantly striving to make our great software even greater, with regular software updates and new features as well as training in order to fully utilize our system.
              </p>
            </div>
  
            <div className="mx-auto mt-20 gap-10">
              <h1 className="text-4xl font-bold text-center mb-6">What drives us?</h1>
              <p className="text-xl text-gray-400 text-center font-semibold max-w-[60%] mx-auto">
                At Dashing, we&apos;re guided by a few simple principles that are reflected in everything we do...
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}