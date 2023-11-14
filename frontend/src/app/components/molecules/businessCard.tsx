import Card from "../atoms/card";
import Image from "next/image";
import { ActionButton } from "../atoms/actionButton";

export default function BusinessCard({
  image,
  name,
  id,
  owner,
  location,
  category,
  short_summary,
  extended_summary,
}: {
  image: string;
  name: string;
  id: string;
  owner: string;
  location?: string;
  category?: string;
  short_summary?: string;
  extended_summary?: string;
}) {
  return (
    <Card hasPadding={false}>
      <div className="grid grid-cols cols-2 gap-2 text-customDarkGreen">
        <div className="col-start-1 col-end-2">
          <div className="w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={image}
              alt="Business image"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="col-start-2 col-end-3 p-8">
          <div className="flex flex-row justify-between items-center">
            <p className=" font-bold">{name}</p>
            <ActionButton text="View Business" href={`/business/${id}`} />
          </div>
          <div className="border-t border-customDarkGreen my-2"></div>
          <p>
            <span className="font-medium">By: </span>
            {owner}
          </p>
          <div className="border-t border-customDarkGreen my-2"></div>
          <div className="flex flex-row">
            <p>
              <span className="font-medium">Neighbourhood:</span> {location}
            </p>
            <p className="pl-4">
              <span className="font-medium">Category:</span> {category}
            </p>
          </div>
          <div className="border-t border-customDarkGreen my-2"></div>
          <p className="font-medium">{short_summary}</p>
          <div className=" border-t border-customDarkGreen my-2"></div>
          <p>{extended_summary}</p>
        </div>
      </div>
    </Card>
  );
}
