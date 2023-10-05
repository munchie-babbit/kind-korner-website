import Nav from "./nav";
import OurStory from "./ourStory";
import JoinUs from "./joinUs";
import Events from "./events";
import Footer from "./footer";
export default function Home() {
  return (
    <div className="bg-background">
      <Nav />
      <OurStory />
      <Events />
      <JoinUs />
      <Footer />
    </div>
  );
}
