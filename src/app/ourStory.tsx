export default function OurStory() {
  return (
    <>
      <div className="flex p-8 mt-20">
        <div className="w-48 h-48 mr-8">
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
            We’re building the online local marketplace of the digital age to
            help small businesses grow and thrive
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column - Text */}
        <div className="md:order-1">
          <p className="mt-2 text-customOrange">
            i’m an artist who draws prints online and i set up my online etsy
            store and after months of hard work and ad campaigns and social
            media campaigns I made a grand total of 3 sales
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="md:order-2">
          <img src="your-image.jpg" alt="Image" className="w-full h-auto" />
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="md:order-1">
        <img src="your-image.jpg" alt="Image" className="w-full h-auto" />
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

      <div className="md:order-2">
        <p className="mt-2 text-customOrange">
          So I thought, what if I could work together with my techy friends to
          bring the experience and benefits of a local market online!
        </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-customOrange mb-4">
          our mission statement
        </h1>
        <p className="text-lg text-customOrange">
          ​​At KindKorner, we are on a heartfelt mission to bring the charm and
          authenticity of a local flea market into the digital age. Our purpose
          is rooted in the belief that every small business has a unique story
          to tell, and it's through genuine human connections that these stories
          come alive.
        </p>
      </div>
    </>
  );
}
