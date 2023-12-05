import Footer from "../components/organisms/footer";

import Nav from "../components/organisms/nav";
import { Store } from "../../../types";
import { getBusinessCategories } from "../components/organisms/nav";
import { getNeighbourhoods } from "../components/organisms/nav";
import DirectoryBody from "../components/organisms/directoryBody";

export default async function Directory() {
  const categories: string[] = await getBusinessCategories();
  const torontoNeighbourhoods: string[] = await getNeighbourhoods();

  const businesses: Store[] = await getAllBusinesses();

  return (
    <div className="bg-background">
      <Nav />
      <DirectoryBody
        categories={categories}
        neighbourhoods={torontoNeighbourhoods}
        businesses={businesses}
      />

      <Footer />
    </div>
  );
}

export async function getAllBusinesses() {
  const credentials = "secrets.json";
  const { google } = require("googleapis");
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
    range: "business_data!A:AK",
  });
  const businesses_data: string[] = getRows.data.values
    ? getRows.data.values.flat()
    : [];
  const data = getRows.data.values;
  if (data) {
    const keys = data[0];
    const values = data.slice(1);
    const startNumber = 1;

    const businesses = values.map((array: string[]) => {
      const newBusiness: Store = {
        store_id: array[startNumber],
        store_name: array[startNumber + 1],
        store_category: array[startNumber + 2],
        store_start_year: array[startNumber + 3],
        store_message: array[startNumber + 4],
        owner_name: array[startNumber + 5],
        short_summary: array[startNumber + 6],
        extended_summary: array[startNumber + 7],
        location: array[startNumber + 8],
        website: array[startNumber + 9],
        phone_number: array[startNumber + 10],
        email: array[startNumber + 11],
        facebook: array[startNumber + 12],
        instagram: array[startNumber + 13],
        twitter: array[startNumber + 14],
        prompt_1: array[startNumber + 15],
        prompt_answer_1: array[startNumber + 16],
        prompt_2: array[startNumber + 17],
        prompt_answer_2: array[startNumber + 18],
        prompt_3: array[startNumber + 19],
        prompt_answer_3: array[startNumber + 20],
        img_main: array[startNumber + 21],
        img_splash: array[startNumber + 22],
        img_1: array[startNumber + 23],
        img_2: array[startNumber + 24],
        img_3: array[startNumber + 25],
        img_profile: array[startNumber + 26],
        product_1_img: array[startNumber + 27],
        product_1_title: array[startNumber + 28],
        product_1_price: array[startNumber + 29],
        product_2_img: array[startNumber + 30],
        product_2_title: array[startNumber + 31],
        product_2_price: array[startNumber + 32],
        product_3_img: array[startNumber + 33],
        product_3_title: array[startNumber + 34],
        product_3_price: array[startNumber + 35],
      };
      return newBusiness;
    });
    return businesses;
  }
  return [];
}
