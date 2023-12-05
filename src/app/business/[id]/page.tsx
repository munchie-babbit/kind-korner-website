import Nav from "@/app/components/organisms/nav";
import Footer from "@/app/components/organisms/footer";
import BusinessBody from "@/app/components/organisms/businessBody";
import { getAllBusinesses } from "@/app/directory/page";

export default async function BusinessPage() {
  const allBusinesses = await getAllBusinesses();
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

export async function generateStaticParams() {
  const businesses = await getAllBusinesses();

  return businesses.map((business) => ({
    id: business.store_id.toString(),
  }));
}
