import Nav from "@/app/components/organisms/nav";
import { google } from "googleapis";
import Footer from "@/app/components/organisms/footer";
import { Store } from "../../../../types";
import BusinessBody from "@/app/components/organisms/businessBody";
import { getAllBusinesses } from "@/app/directory/page";

export default async function BusinessPage() {
  const allBusinesses: Store[] = await getAllBusinesses();
  return (
    <div className="bg-background ">
      <Nav />
      <div className="py-16 ">
        <BusinessBody allBusinesses={allBusinesses} />
      </div>
      <Footer />
    </div>
  );
}
