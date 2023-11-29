import TypeformEmbed from "./typeformEmbed";
import { ActionButton } from "../atoms/actionButton";
import Image from "next/image";
import WelcomeGif from "../../images/welcome2.gif";
import Tag from "../atoms/tag";
import { google } from "googleapis";
import { IllustrationDataType } from "../../../../types";
export default async function HomepageBody() {
  const illustration_data = await getHomepageIllustration();
  return (
    <div className="pt-20 grid md:grid-cols-2 gap-4 justify-center m-auto">
      <div className="p-4 w-full h-[70vh] md:h-[90vh] relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={illustration_data?.img_url}
          alt="Toronto"
        />
        <div className="absolute bottom-4 left-4">
          <Tag>
            {illustration_data.timeframe + " illustration by "}
            <a href={illustration_data.artist_url}>
              {illustration_data.artist_name}
            </a>
          </Tag>
        </div>
      </div>
      <div className="px-24 py-16">
        <Image src={WelcomeGif} alt="Welcome" />
        <div className="px-4">
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
    </div>
  );
}

export async function getHomepageIllustration() {
  const credentials = "secrets.json";
  //Function for authentication object
  const auth = new google.auth.GoogleAuth({
    keyFile: credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  //Create client instance for auth
  const authClient = await auth.getClient();

  // Instance of the Sheets API
  // @ts-ignore
  const sheets = google.sheets({ version: "v4", auth: authClient });
  const getRows = await sheets.spreadsheets.values.get({
    spreadsheetId: "1uSHVMfRfU0dL8kdaqj4WsxSFdCAo5sTtXbHp1qeSNwA",
    range: "site_data!D2:D",
  });
  const illustration_data: IllustrationDataType = getRows.data.values
    ? {
        img_url: getRows.data.values[0][0],
        timeframe: getRows.data.values[1][0],
        artist_name: getRows.data.values[2][0],
        artist_url: getRows.data.values[3][0],
      }
    : { img_url: null, timeframe: null, artist_name: null, artist_url: null };

  return illustration_data;
}
