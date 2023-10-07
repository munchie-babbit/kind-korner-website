"use client";

import Nav from "./components/nav";
import OurStory from "./components/ourStory";
import JoinUs from "./components/joinUs";

import Events from "./components/events";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="bg-background ">
      <Nav />
      <div className="justify-center  md:w-3/4 m-auto">
        <OurStory />
        <Events />
        <JoinUs />
      </div>
      <Footer />
    </div>
  );
}
