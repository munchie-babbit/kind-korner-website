import { NextResponse } from "next/server";
import { getAllBusinesses } from "../directory/page";

export async function GET() {
  const businesses = await getAllBusinesses();
  const data = businesses.length;
  return NextResponse.json({ number_of_stores: data });
}
