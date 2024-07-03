
import Link from "next/link";
import { BgVideo } from "./components/BgVideo";
import { Overlay } from "./components/Overlay";
import Services from "./components/Services";
import Contact from "./components/Contact";


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
      <div id="contact" className="relative w-full h-screen ">
        <Contact />
      </div>
    </div>
  );
}





