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
    <div className="mt-4">
      <Card hasPadding={false}>
        <div className="grid grid-cols cols-2 gap-2 text-customDarkGreen ">
          <div className="md:col-start-1 md:col-end-2">
            <div className="w-full h-full">
              {image ? (
                <Image
                  className="w-full h-full object-cover max-h-[500px]"
                  src={image}
                  alt="Business image"
                  width={600}
                  height={600}
                />
              ) : (
                <div className="w-full h-full bg-customDarkGreen max-h-[500px]"></div>
              )}
            </div>
          </div>
          <div className="md:col-start-2 md:col-end-3 p-8">
            <div className="flex flex-row justify-between items-center">
              <p className=" font-bold">{name}</p>
              <ActionButton text="View Business" href={`/business/${id}`} />
            </div>
            <div className="border-t border-customDarkGreen my-2"></div>
            {owner ? (
              <>
                {" "}
                <p>
                  <span className="font-medium">By: </span>
                  {owner}
                </p>
                <div className="border-t border-customDarkGreen my-2"></div>
              </>
            ) : null}

            {location && category ? (
              <>
                <div className="flex flex-row">
                  <p>
                    <span className="font-medium">Neighbourhood:</span>{" "}
                    {location}
                  </p>
                  <p className="pl-4">
                    <span className="font-medium">Category:</span> {category}
                  </p>
                </div>
                <div className="border-t border-customDarkGreen my-2"></div>
              </>
            ) : null}
            {short_summary ? (
              <>
                <p className="font-medium">{short_summary}</p>
                <div className=" border-t border-customDarkGreen my-2"></div>
              </>
            ) : null}
            {extended_summary ? <p>{extended_summary}</p> : null}
          </div>
        </div>
      </Card>
    </div>
  );
}
