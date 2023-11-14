import Nav from "./components/organisms/nav";
import Image from "next/image";
import Link from "next/link";
import torontoImage from "./images/Toronto.jpg";
import WelcomeGif from "./images/welcome2.gif";
import { ActionButton } from "./components/atoms/actionButton";
import TypeformEmbed from "./components/organisms/typeformEmbed";

import Footer from "./components/organisms/footer";

export default async function Home() {
  return (
    <div className="bg-background ">
      <Nav />
      <div className="pt-24 grid md:grid-cols-2 gap-4 justify-center xs:px-4 sm:px-12 md:w-9/12 m-auto">
        <div className="  p-4">
          <Image className="rounded-2xl" src={torontoImage} alt="Toronto" />
        </div>
        <div className=" p-4">
          <Image src={WelcomeGif} alt="Welcome" />
          <p className="text-customDarkGreen">
            Toronto offers a rich tapestry of local shops. From the trendy
            boutiques of Queen Street West to the multicultural markets of
            Kensington Market, Toronto's neighborhoods embody a fusion of
            cultures, cuisines, and artistic expressions.
          </p>
          <div className="pt-4 gap-2 flex">
            <ActionButton text="Explore All Shops" href="/directory" />
            <TypeformEmbed />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
