
import Link from "next/link";
import { BgVideo } from "./components/BgVideo";
import { Overlay } from "./components/Overlay";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Blogs } from "./components/Blogs";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Testimonials } from "./components/Testimonials";
import Forms from "./components/forms";


export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        <Overlay />
        <BgVideo />
      </div>
      <div id="services" className="relative w-full h-full bg-black">
        <Services />
      </div>
      <div id="contact" className="relative w-full h-full ">
        <Contact />
      </div>
      <div id="" className="relative w-full h-screen ">
        <About />
      </div>
      <div id="" className="relative w-full h-screen ">
        <WhyUs />
      </div>
      <div id="" className="relative w-full h-screen ">
        <Blogs />
      </div>
      <div id="" className="relative w-full h-screen ">
        <Testimonials />
      </div>
      <div id="" className="relative w-full h-screen ">
        <Forms />
      </div>
    </div>
  );
}





