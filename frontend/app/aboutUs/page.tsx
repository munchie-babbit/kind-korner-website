import Image from "next/image";
import market from "../images/market2.png";
import boothClose from "../images/booth-close.jpg";
import etsyMockup from "../images/etsy-mockup.png";
import welcomeGif from "../images/welcome2.gif";
export default function OurStory() {
  return (
    <div className="mb-20 relative">
      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start mb-20">
        <div className="relative md:absolute md:top-2 md:w-3/5 pt-20 w-full z-10">
          <Image
            src={welcomeGif}
            alt="Welcome to our online local market community"
            className="w-3/4 m-auto sm:pt-32 pt:40 sm:pr-8"
          />
          <p className="text-lg text-customDarkGreen text-center p-8">
            At KindKorner we strive to support local small businesses by
            bringing the experience of a local market online.
          </p>
        </div>
        <div className="sm:relative sm:w-full">
          <Image
            src={market}
            className="max-w-full p-4 z-1 md:pt-40 sm:mt-48"
            alt="Image of market in the fall"
            priority
          />
        </div>
      </div>
    </div>
  );
}
