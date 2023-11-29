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
  const hasProducts =
    business?.product_1_img ||
    business?.product_2_img ||
    business?.product_3_img;

  return business ? (
    <div className="text-customDarkGreen">
      <Image
        src={business.img_splash}
        alt="Business image"
        width={500}
        height={200}
        className="bg-customBlue w-full object-cover h-96 border-b-[1.5px] border-customDarkGreen"
      />
      <div className="grid md:grid-cols-12 gap-4 mx-8 md:mx-0">
        <div className="md:col-start-2 md:col-span-3">
          <Image
            src={business.img_profile}
            alt="Business profile"
            width={200}
            height={200}
            className=" w-52 h-52 bg-customDarkGreen rounded-full object-cover -mt-28 border-[1.5px] border-customDarkGreen z-10"
          />
          <div className="mt-4">
            <Card>
              <div className="grid grid-cols-1">
                <h1 className="text-lg font-bold">{business.store_name}</h1>
                <h1 className="font-medium">{"By: " + business.owner_name}</h1>
              </div>
              <div className="border-t border-customDarkGreen my-2"></div>
              <div className="flex flex-row gap-2">
                <p>
                  Located in {business.location} in the area of{" "}
                  {business.store_category}. Started in 2021.
                </p>
              </div>

              <div className="border-t border-customDarkGreen my-2"></div>
              {business.website ? (
                <p>
                  <a target="_blank" href={business.website}>
                    Website
                  </a>
                </p>
              ) : null}
              {business.email ? (
                <p>
                  <a target="_blank" href={"mailto:" + business.email}>
                    Email
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

        {business.short_summary && business.extended_summary ? (
          <div className="md:col-start-5 md:col-span-7 sm:col-span-full md:-mt-28">
            <Card>
              <div className="font-bold pb-2 text-2xl">
                {business.short_summary}
              </div>
              <div>{business.extended_summary}</div>
              {business.store_message ? (
                <div className="bg-customDarkGreen flex-grow mt-8 rounded-2xl">
                  <p className="text-customWhite p-4 font-medium">
                    Message from {business.owner_name}:
                  </p>
                  <div className="border-t border-customWhite"></div>
                  <h1 className="text-customWhite p-8 font-bold text-2xl ">
                    {business.store_message}
                  </h1>
                </div>
              ) : null}
            </Card>
          </div>
        ) : (
          <div className="md:col-start-5 md:col-span-7 sm:col-span-full md:mt-28">
            <Card>
              <p>
                Unable to load business details. Please return back to all
                businesses.
              </p>
            </Card>
          </div>
        )}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-start-2 col-span-10">
          {business.img_1 ? (
            <Image
              src={business.img_1}
              alt="Business image"
              width={500}
              height={200}
              className="mt-4 w-full object-cover h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
            />
          ) : null}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:my-4 mt-4">
            {business.prompt_1 && business.prompt_answer_1 ? (
              <PromptCard
                question={business.prompt_1}
                answer={business.prompt_answer_1}
              />
            ) : null}
            {business.prompt_2 && business.prompt_answer_2 ? (
              <PromptCard
                question={business.prompt_2}
                answer={business.prompt_answer_2}
              />
            ) : null}
            {business.prompt_3 && business.prompt_answer_3 ? (
              <PromptCard
                question={business.prompt_3}
                answer={business.prompt_answer_3}
              />
            ) : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {business.img_2 ? (
              <Image
                src={business.img_2}
                alt="Business image"
                width={200}
                height={200}
                className="object-cover w-full h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
              />
            ) : null}
            {business.img_3 ? (
              <Image
                src={business.img_3}
                alt="Business image"
                width={200}
                height={200}
                className="object-cover w-full h-96 border-[1.5px] border-customDarkGreen rounded-2xl"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 pt-20">
        <div className="col-start-2 col-span-10 text-center">
          {hasProducts ? (
            <div>
              <h1 className="text-lg font-bold">Featured Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:my-4 my-4">
                {business?.product_1_img ? (
                  <ProductCard
                    image={business.product_1_img}
                    title={business.product_1_title}
                    price={business.product_1_price}
                  />
                ) : null}
                {business?.product_2_img ? (
                  <ProductCard
                    image={business.product_2_img}
                    title={business.product_2_title}
                    price={business.product_2_price}
                  />
                ) : null}
                {business?.product_3_img ? (
                  <ProductCard
                    image={business.product_3_img}
                    title={business.product_3_title}
                    price={business.product_3_price}
                  />
                ) : null}
              </div>
              <ActionButton text="Visit Website" href={business.website} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Unable to load business</h1>
    </div>
  );
}
