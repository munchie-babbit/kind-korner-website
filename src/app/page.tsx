import Nav from "./components/organisms/nav";
import HomepageBody from "./components/organisms/homepageBody";
import Footer from "./components/organisms/footer";

export default async function Home() {
  return (
    <div className="bg-background ">
      <Nav />
      <HomepageBody />
    </div>
  );
}
