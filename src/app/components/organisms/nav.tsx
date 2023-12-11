import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import SearchBar from "../molecules/searchBar";
import Link from "next/link";
import TypeformEmbed from "./typeformEmbed";

export default async function Nav() {
  const business_categories = await getBusinessCategories();

  return (
    <nav className="bg-background fixed w-full z-20 top-0 left-0 border-b-[1.5px] border-customDarkGreen ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center no-underline pb-4 md:pb-0">
          <Image src={logo} className="w-40 mx-1" alt="Kind Korner Logo" />
          <h1 className="text-customDarkGreen font-bold text-lg">Toronto</h1>
        </Link>

        <div className="flex md:order-2 my-2">
          <TypeformEmbed />
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1 order-2"
          id="navbar-sticky"
        >
          <SearchBar business_categories={business_categories} />
        </div>
      </div>
    </nav>
  );
}

export async function getBusinessCategories() {
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

  //Instance of the Sheets API
  //@ts-ignore
  const sheets = google.sheets({ version: "v4", auth: authClient });
  try {
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: "1uSHVMfRfU0dL8kdaqj4WsxSFdCAo5sTtXbHp1qeSNwA",
      range: "site_data!A2:A",
    });
    const business_categories: string[] = getRows.data.values
      ? getRows.data.values.flat()
      : [];

    return business_categories;
  } catch {
    return [];
  }
}

export async function getNeighbourhoods() {
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
  try {
    const getRows = await sheets.spreadsheets.values.get({
      spreadsheetId: "1uSHVMfRfU0dL8kdaqj4WsxSFdCAo5sTtXbHp1qeSNwA",
      range: "site_data!B2:B",
    });
    const toronto_neighbourhoods: string[] = getRows.data.values
      ? getRows.data.values.flat()
      : [];
    return toronto_neighbourhoods;
  } catch {
    return [];
  }
}
