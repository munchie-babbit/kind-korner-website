"use client";

import { Store } from "../../../../types";
import { usePathname } from "next/navigation";
import PromptCard from "../molecules/promptCard";
import ProductCard from "../molecules/productCard";
import { ActionButton } from "../atoms/actionButton";
import Image from "next/image";
import Card from "../atoms/card";

export default function BusinessBody({
  allBusinesses,
}: {
  allBusinesses: Store[];
}) {
  const pathname = usePathname();
  const businessId = pathname.split("/")[2];
  const business = allBusinesses.find(
    (business) => business.store_id === businessId
  );

  return business ? (
    <div className="text-customDarkGreen">
      <Image
        src={business.img_splash}
        alt="Business image"
        width={500}
        height={200}
        className="w-full object-cover h-96 border-b-[1.5px] border-customDarkGreen"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 gap-2 col-span-3">
          <div>
            <Image
              src={business.img_profile}
              alt="Business profile"
              width={200}
              height={200}
              className="w-52 h-52 rounded-full object-cover -mt-28 border-[1.5px] border-customDarkGreen z-10"
            />
          </div>
          <div>
            <Card>
              <p>Located in: {business.location}</p>
              {business.website ? (
                <p>
                  <a target="_blank" href={business.website}>
                    Website
                  </a>
                </p>
              ) : null}
              {business.phone_number ? (
                <p>
                  <a target="_blank" href={business.phone_number}>
                    Phone number
                  </a>
                </p>
              ) : null}
              {business.facebook ? (
                <p>
                  <a target="_blank" href={business.facebook}>
                    Facebook
                  </a>
                </p>
              ) : null}
              {business.instagram ? (
                <p>
                  <a target="_blank" href={business.instagram}>
                    Instagram
                  </a>
                </p>
              ) : null}
              {business.twitter ? (
                <p>
                  <a target="_blank" href={business.twitter}>
                    Twitter
                  </a>
                </p>
              ) : null}
            </Card>
          </div>
        </div>
        <div className="col-start-5 col-span-7">
          <div className="flex flex-row justify-between w-full">
            <Card>
              <h1 className="text-lg font-bold">{business.store_name}</h1>
              <h1 className="text-lg">By: {business.owner_name}</h1>
            </Card>
            <Card>
              <h1 className="text-lg">{business.short_summary}</h1>
            </Card>
          </div>
          <Card>{business.extended_summary}</Card>
        </div>
      </div>
      <Image
        src={business.img_1}
        alt="Business image"
        width={500}
        height={200}
        className="w-full object-cover h-96 border-[1.5px] border-customDarkGreen"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10">
          <div className=" flex flex-row justify-between w-full gap-4">
            <PromptCard
              question={business.prompt_1}
              answer={business.prompt_answer_1}
            />
            <PromptCard
              question={business.prompt_2}
              answer={business.prompt_answer_2}
            />
            <PromptCard
              question={business.prompt_3}
              answer={business.prompt_answer_3}
            />
          </div>
        </div>
      </div>
      <Image
        src={business.img_2}
        alt="Business image"
        width={500}
        height={200}
        className="w-full object-cover h-96 border-[1.5px] border-customDarkGreen"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10 justify-center">
          <h1>Featured Products</h1>
          <div className=" flex flex-row justify-center w-full gap-4">
            <ProductCard
              image={business.product_1_img}
              title={business.product_1_title}
              price={business.product_1_price}
            />
            <ProductCard
              image={business.product_2_img}
              title={business.product_2_title}
              price={business.product_2_price}
            />
            <ProductCard
              image={business.product_3_img}
              title={business.product_3_title}
              price={business.product_3_price}
            />
          </div>
          <ActionButton text="Visit Website" href={business.website} />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Unable to load business</h1>
    </div>
  );
}
