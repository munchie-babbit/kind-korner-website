import Image from "next/image";
import boothWide from "./booth-wide.jpg";
import boothClose from "./booth-close.jpg";
import etsyMockup from "./etsy-mockup.png";
export default function OurStory() {
  return (
    <div className="justify-center mx-20 mb-10">
      <div className="flex pt-20">
        <div className=" h-48">
          <img
            src="https://placekitten.com/200/200"
            alt="Image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-customOrange mb-4">
            Hi there!
          </h1>
          <p className="text-lg text-customOrange">
            Welcome to our online local market community, where we bring back
            human-to-human connections in this digital age. We're all about
            telling the stories behind small businesses to show what makes them
            special.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:order-1">
          <p className="mt-2 text-customOrange">
            i’m an artist who draws prints online and i set up my online etsy
            store and after months of hard work and ad campaigns and social
            media campaigns I made a grand total of 3 sales
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
          className="w-full h-auto object-cover rounded-full"
        />
      </div>

      {/* Left Column - Text */}
      <div className="md:order-2">
        <p className="mt-2 text-customOrange">
          But then everything changed by attending a pop up local market in
          Toronto, I made $$$ that day!
        </p>
      </div>
      <div className="md:order-1">
        <p className="mt-2 text-customOrange">
          And then back to 0 sales online...
        </p>
      </div>

      <div className="md:order-2 mb-10">
        <p className="mt-2 text-customOrange">
          So I thought, what if I could work together with my techy friends to
          bring the experience and benefits of a local market online!
        </p>
      </div>

      <div className="bg-customOrange rounded-full p-20">
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
