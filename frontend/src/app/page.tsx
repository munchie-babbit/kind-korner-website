"use client";

import Nav from "./components/organisms/nav";
import Image from "next/image";
import torontoImage from "./images/Toronto.png";
import StoreCard from "./components/molecules/storeCard";

const featuredBusinesses = [
  { name: "Test", image: "https://via.placeholder.com/500x300", url: "" },
  { name: "Test 2", image: "https://via.placeholder.com/500x300", url: "" },
  { name: "Test 3", image: "https://via.placeholder.com/500x300", url: "" },
];
import Footer from "./components/organisms/footer";
export default function Home() {
  return (
    <div className="bg-background ">
      <Nav />
      <div className="pt-24 grid md:grid-cols-2 gap-4 justify-center xs:px-4 sm:px-12 md:w-10/12 m-auto">
        <div className="  p-4">
          <Image className="rounded-2xl" src={torontoImage} alt="Toronto" />
        </div>
        <div className=" p-4">
          <h1 className="text-customDarkGreen text-2xl">
            Featured Local Businesses
          </h1>
          <div>
            <StoreCard
              size="small"
              name={featuredBusinesses[0].name}
              image={featuredBusinesses[0].image}
              url={featuredBusinesses[0].url}
            />
            <StoreCard
              size="small"
              name={featuredBusinesses[0].name}
              image={featuredBusinesses[0].image}
              url={featuredBusinesses[0].url}
            />
            <StoreCard
              size="large"
              name={featuredBusinesses[0].name}
              image={featuredBusinesses[0].image}
              url={featuredBusinesses[0].url}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
