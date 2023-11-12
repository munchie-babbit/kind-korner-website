import { google } from "googleapis";

type GoogleSheetData = {
  business_categories: string[];
  toronto_neighbourhoods: string[];
};

export async function getServersideProps() {
  const data = await fetchDataFromSheet();
  return { props: { data } };
}

async function fetchDataFromSheet() {
  const google_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const google_key = process.env.GOOGLE_PRIVATE_KEY;
  const google_spreadsheet_id = process.env.GOOGLE_SPREADSHEET_ID;

  let data: GoogleSheetData = {
    business_categories: [],
    toronto_neighbourhoods: [],
  };

  if (google_email && google_key) {
    const auth = new google.auth.JWT(
      google_email,
      "",
      google_key.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    try {
      const sheets = google.sheets({ version: "v4", auth });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1", // Update this with your sheet name
      });
      const rows = response.data.values || [];
      if (rows.length) {
        console.log("Data retrieved from Google Sheets:");
        console.log(rows);
        data.business_categories = rows.map((row) => row[0]);
        data.toronto_neighbourhoods = rows.map((row) => row[1]);
      } else {
        console.log("No data found.");
      }
    } catch (err) {
      console.log("The API returned an error: " + err);
    }
  }
  return data;
}
