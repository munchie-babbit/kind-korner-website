import TypeformEmbed from "./typeformEmbed";
import { ActionButton } from "../atoms/actionButton";
import Image from "next/image";
import WelcomeGif from "../../images/welcome2.gif";
import Tag from "../atoms/tag";
import { IllustrationDataType } from "../../../../types";
export default async function HomepageBody() {
  const illustration_data = await getHomepageIllustration();
  return (
    <div className=" grid md:grid-cols-2 gap-4 justify-center m-auto">
      <div className="w-full h-[70vh] md:h-[100vh] relative">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
            backgroundColor: "#1A4841",
          }}
          src={illustration_data?.img_url}
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-4 left-28">
          <Tag>
            {illustration_data.timeframe + " illustration by "}
            <a href={illustration_data.artist_url}>
              {illustration_data.artist_name}
            </a>
          </Tag>
        </div>
      </div>
      <div className="px-24 py-16 mt-20">
        <Image src={WelcomeGif} alt="Welcome" />
        <div className="px-4">
          <p className="text-customDarkGreen">
            Toronto offers a rich tapestry of local shops. From the trendy
            boutiques of Queen Street West to the multicultural markets of
            Kensington Market, Toronto's neighborhoods embody a fusion of
            cultures, cuisines, and artistic expressions.
          </p>
          <div className="pt-4 gap-2 flex">
            <ActionButton
              backgroundColour="customBlue"
              textColour="customDarkGreen"
              text="Explore All Shops"
              href="/directory"
            />
            <TypeformEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getHomepageIllustration() {
  const credentials = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
    universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
  };
  const { google } = require("googleapis");
  //Function for authentication object
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
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
