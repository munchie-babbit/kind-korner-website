"use client";

import Nav from "../components/organisms/nav";

import Footer from "../components/organisms/footer";
export default function Home() {
  return (
    <div className="bg-background ">
      <Nav />
      <div className="justify-center  xs:px-4 sm:px-12 md:w-3/4 m-auto"></div>
      <Footer />
    </div>
  );
}
