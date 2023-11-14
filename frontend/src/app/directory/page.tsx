import Footer from "../components/organisms/footer";
import Dropdown from "../components/molecules/dropdown";
import BusinessCard from "../components/molecules/businessCard";
import Nav from "../components/organisms/nav";
import { google } from "googleapis";
import { Store } from "../../../types";
import { getBusinessCategories } from "../components/organisms/nav";
import { getNeighbourhoods } from "../components/organisms/nav";

export default async function Directory() {
  const categories: string[] = await getBusinessCategories();
  const torontoNeighbourhoods: string[] = await getNeighbourhoods();

  const businesses: Store[] = await getAllBusinesses();

  return (
    <div className="bg-background ">
      <Nav />
      <div className="pt-24 grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="space-x-2 flex flex-row items-center">
            <Dropdown name="Neighbourhood" options={torontoNeighbourhoods} />
            <Dropdown name="Category" options={categories} />
            <h1>Search text:</h1>
          </div>

          <div>
            {businesses.map((business) => (
              <BusinessCard
                name={business.store_name}
                image={business.img_main}
                id={business.store_id}
                owner={business.owner_name}
                location={business.location}
                category={business.store_category}
                short_summary={business.short_summary}
                extended_summary={business.extended_summary}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getAllBusinesses() {
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
    range: "business_data!A:AG",
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
        store_category: array[2],
        owner_name: array[3],
        short_summary: array[4],
        extended_summary: array[5],
        location: array[6],
        website: array[7],
        phone_number: array[8],
        facebook: array[9],
        instagram: array[10],
        twitter: array[11],
        prompt_1: array[12],
        prompt_answer_1: array[13],
        prompt_2: array[14],
        prompt_answer_2: array[15],
        prompt_3: array[16],
        prompt_answer_3: array[17],
        img_main: array[18],
        img_splash: array[19],
        img_1: array[20],
        img_2: array[21],
        img_3: array[22],
        img_profile: array[23],
        product_1_img: array[24],
        product_1_title: array[25],
        product_1_price: array[26],
        product_2_img: array[27],
        product_2_title: array[28],
        product_2_price: array[29],
        product_3_img: array[30],
        product_3_title: array[31],
        product_3_price: array[32],
      };
      return newBusiness;
    });
    return businesses;
  }
  return [];
}
