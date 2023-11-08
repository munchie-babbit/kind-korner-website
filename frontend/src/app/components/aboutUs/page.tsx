import Image from "next/image";
import market from "../images/market2.png";
import boothClose from "../images/booth-close.jpg";
import etsyMockup from "../images/etsy-mockup.png";
import welcomeGif from "../images/welcome2.gif";
export default function AboutUs() {
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

      <div
        id="our-story"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 jflex items-center mb-24"
      >
        <div className="md:order-1 px-8">
          <h2 className=" text-customDarkGreen text-2xl font-bold">
            We believe that every small business with a great product and a
            great story should succeed.
          </h2>
          <p className="mt-2 text-customDarkGreen">
            Our market started when one of our founders selling art prints on
            Etsy struggled with sales. But by attending a local fair in Toronto,
            she made $500 in one day!
          </p>

          <p className="mt-2 text-customDarkGreen">
            So we asked ourselves, how can we help other small businesses
            succeed online?
          </p>
        </div>

        <div className="md:order-2">
          <Image
            src={etsyMockup}
            alt="Image"
            className="w-full h-auto object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="md:order-1 px-8 md:px-0">
        <Image
          src={boothClose}
          alt="Image"
          className="w-full sm:mx-4 h-auto object-cover rounded-full mb-20"
        />
      </div>

      <div
        id="our-mission"
        className="bg-customDarkGreen rounded-full p-20 mx-8 md:mx-0"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Our mission statement
        </h1>
        <p className="text-lg text-white">
          ​​At KindKorner, we are on a heartfelt mission to bring the charm and
          authenticity of a local flea market into the digital age. Our purpose
          is rooted in the belief that every small business has a unique story
          to tell, and it&apos;s through genuine human connections that these
          stories come alive.
        </p>
      </div>
    </div>
  );
}
