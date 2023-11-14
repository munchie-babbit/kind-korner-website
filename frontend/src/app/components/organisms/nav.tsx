import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import SearchBar from "../molecules/searchBar";
import Link from "next/link";
import { google } from "googleapis";
import { ActionButton } from "../atoms/actionButton";
import TypeformEmbed from "./typeformEmbed";

export default async function Nav() {
  console.log("hello");
  const name = "Kind Korner";
  const menuOptions = [{ name: "Our Story", link: "#our-story" }];
  const scrollToSection = (anchor: string) => {
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const business_categories = await getBusinessCategories();

  return (
    <nav className="bg-background dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-customDarkGreen ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="w-40 mr-3" alt="Kind Korner Logo" />
          <h1 className="text-customDarkGreen font-bold text-lg">Toronto</h1>
        </Link>

        <div className="flex md:order-2">
          <TypeformEmbed />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-customDarkGreen-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <SearchBar business_categories={business_categories} />
        </div>
      </div>
    </nav>
  );
}

export async function getBusinessCategories() {
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
    range: "site_data!A2:A",
  });
  const business_categories: string[] = getRows.data.values
    ? getRows.data.values.flat()
    : [];

  return business_categories;
}

export async function getNeighbourhoods() {
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
    range: "site_data!B2:B",
  });
  const toronto_neighbourhoods: string[] = getRows.data.values
    ? getRows.data.values.flat()
    : [];

  return toronto_neighbourhoods;
}
