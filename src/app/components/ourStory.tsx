import Image from "next/image";
import market from "../images/market2.png";
import boothClose from "../images/booth-close.jpg";
import etsyMockup from "../images/etsy-mockup.png";
export default function OurStory() {
  return (
    <div className=" mb-10 relative">
      <div className="flex pt-20 justify-center ">
        <div className="sm:relative md:absolute md:top-40 md:left-10 md:w-2/5 sm:w-full z-2">
          <h1 className="text-4xl font-bold text-customDarkGreen mb-4">
            Hi there!
          </h1>
          <p className="text-lg text-customDarkGreen">
            Welcome to our online local market community, where we bring back
            human-to-human connections in this digital age. We're all about
            telling the stories behind small businesses to show what makes them
            special.
          </p>
        </div>
        <Image
          src={market}
          className="max-w-full max-h-full"
          alt="Image of market in the fall"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 jflex items-center">
        <div className="md:order-1">
          <h2 className=" text-customDarkGreen text-2xl font-bold">
            We believe that every small business with a great product and a
            great story should succeed.
          </h2>
          <p className="mt-2 text-customDarkGreen">
            Our market started when one of our founders selling watercolour
            travel prints on Etsy strugged to make her 4th sale after months of
            hardwork with no reward.
          </p>
          <p className="mt-2 text-customDarkGreen">
            But by attending a local fair in Toronto, everything changed and she
            made $500 in one day!
          </p>
          <p className="mt-2 text-customDarkGreen">
            Unfortunately, this in-person success did not translate back into
            online sales. Sales continued to slump.
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
      <div className="md:order-1">
        <Image
          src={boothClose}
          alt="Image"
          className="w-full h-auto object-cover rounded-full mb-10"
        />
      </div>

      <div className="bg-customDarkGreen rounded-full p-20">
        <h1 className="text-4xl font-bold text-white mb-4">
          Our mission statement
        </h1>
        <p className="text-lg text-white">
          ​​At KindKorner, we are on a heartfelt mission to bring the charm and
          authenticity of a local flea market into the digital age. Our purpose
          is rooted in the belief that every small business has a unique story
          to tell, and it's through genuine human connections that these stories
          come alive.
        </p>
      </div>
    </div>
  );
}
