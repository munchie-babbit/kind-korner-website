import Footer from "../components/organisms/footer";
import Dropdown from "../components/molecules/dropdown";
import BusinessCard from "../components/molecules/businessCard";
import Nav from "../components/organisms/nav";
import { google } from "googleapis";
import { Store } from "../../../types";

export default async function Directory() {
  const torontoNeighbourhoods = ["old town", "new town"];
  const categories = [
    "All categories",
    "Food",
    "Clothing",
    "Art",
    "Music",
    "Books",
    "Home Goods",
    "Other",
  ];
  const businesses: Store[] = await getAllBusinesses();
  console.log(businesses);
  return (
    <div className="bg-background ">
      <Nav />
      <div className="mt-40">
        <Dropdown name="Neighbourhood" options={torontoNeighbourhoods} />
        <Dropdown name="Category" options={categories} />
        <div>
          {businesses.map((business) => (
            <BusinessCard
              name={business.store_name}
              image={business.img_main}
              id={business.store_id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

async function getAllBusinesses() {
  const credentials = "secrets.json";
  //Function for authentication object
  const auth = new google.auth.GoogleAuth({
    keyFile: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  //Create client instance for auth
  const authClient = await auth.getClient();

  //Instance of the Sheets API
  //@ts-ignore
  const sheets = google.sheets({ version: "v4", auth: authClient });
  const getRows = await sheets.spreadsheets.values.get({
    spreadsheetId: "1uSHVMfRfU0dL8kdaqj4WsxSFdCAo5sTtXbHp1qeSNwA",
    range: "business_data!A:R",
  });
  const businesses_data: string[] = getRows.data.values
    ? getRows.data.values.flat()
    : [];
  const data = getRows.data.values;
  if (data) {
    const keys = data[0];
    const values = data.slice(1);

    const businesses = values.map((array) => {
      const newBusiness: Store = {
        store_id: array[0],
        store_name: array[1],
        owner_name: array[2],
        short_summary: array[3],
        extended_summary: array[4],
        location: array[5],
        website: array[6],
        phone_number: array[7],
        facebook: array[8],
        instagram: array[9],
        twitter: array[10],
        prompt_1: array[11],
        prompt_answer_1: array[12],
        prompt_2: array[13],
        prompt_answer_2: array[14],
        prompt_3: array[15],
        prompt_answer_3: array[16],
        img_main: array[17],
      };
      return newBusiness;
    });
    return businesses;
  }
  return [];
}
